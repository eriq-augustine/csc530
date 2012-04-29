package edu.calpoly.crawl;

import java.io.File;
import java.nio.charset.Charset;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import java.util.List; 
import java.util.ArrayList; 

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;

import java.net.URL;
import java.net.URLConnection;

import org.htmlparser.Parser;
import org.htmlparser.filters.TagNameFilter;
import org.htmlparser.util.NodeList;
import org.htmlparser.Node;
import org.htmlparser.tags.ScriptTag;

/**
 * Crawl a live website for js.
 */
public class LiveCrawler
{
   public static final String DB_USER = "crawler";
   public static final String DB_PASS = "ILoveData530";
   public static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/js?autoReconnect=true";
   public static final String DB_DRIVER = "com.mysql.jdbc.Driver";
   
   public static final String TOP_SITES_TABLE = "top_sites";
   public static final String TOP_CODE_TABLE = "top_code";

   private Connection conn;

   public static void main(String[] args)
   {
      List<String> urls = new ArrayList<String>();
      List<Integer> ids = new ArrayList<Integer>();

      LiveCrawler crawler = new LiveCrawler();
      crawler.fetchTargets(1000, ids, urls);

      for (int i = 0; i < urls.size(); i++)
      {
         try
         {
            crawler.crawlUrl(ids.get(i), urls.get(i));
         }
         catch (Exception ex)
         {
            System.err.println("Error crawling: " + urls.get(i));
            ex.printStackTrace(System.err);
         }
      }
   }

   public LiveCrawler()
   {
      try
      {
         Class.forName(DB_DRIVER);
         conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
      }
      catch (Exception ex)
      {
         System.err.println("Error establishing DB connection.");
         ex.printStackTrace(System.err);
         System.exit(1);
      }
   }

   public void fetchTargets(int number, List<Integer> ids, List<String> urls)
   {
      String query = String.format(
       "SELECT id, url FROM %s WHERE rank <= %d ORDER BY rank",
       TOP_SITES_TABLE, number);
      Statement stmt = null;

      try
      {
         stmt = conn.createStatement();
         ResultSet res = stmt.executeQuery(query);

         while (res.next())
         {
            ids.add(res.getInt(1));
            urls.add(res.getString(2));
         }

         res.close();
         stmt.close();
      }
      catch (Exception ex)
      {
         System.err.println("Error fetching targets.");
         ex.printStackTrace(System.err);
         System.exit(1);
      }
   }

   private boolean crawlUrl(int urlId, String stringUrl) throws
    java.net.UnknownHostException, java.io.IOException, java.net.MalformedURLException
   {
      URL url = new URL(stringUrl);
      URLConnection httpConn = url.openConnection();

      String page = getPage(httpConn);
      String mime = httpConn.getContentType();

      List<String> inlineJS = new ArrayList<String>();
      List<String> srcUrlStrings = new ArrayList<String>();
      
      if (!extractJS(mime, page, inlineJS, srcUrlStrings))
      {
         return false;
      }

      List<URL> srcUrls = new ArrayList<URL>();
      for (String srcUrl : srcUrlStrings)
      {
         srcUrls.add(buildRealUrl(srcUrl, stringUrl));
      }

      List<String> externalJS = new ArrayList<String>();
      for (URL srcUrl : srcUrls)
      {
         URLConnection srcConn = srcUrl.openConnection();
         String srcPage = getPage(srcConn);
         if (srcPage == null)
         {
            System.err.println("Error retrieving external JS: " + srcUrl);
         }
         else
         {
            externalJS.add(srcPage);
         }
      }

      //TEST
      /*
      System.out.println(page);
      System.out.println("\n\n------------------------------\n\n");
      System.out.println(mime);
      System.out.println("\n\n------------------------------\n\n");
      System.out.println("\nINLINE\n");
      for (String js : inlineJS)
      {
         System.out.println("\n\n" + js + "\n\n");
      }
      System.out.println("\n\n------------------------------\n\n");
      System.out.println("\nSRC URL\n");
      for (int i = 0; i < srcUrls.size(); i++)
      {
         System.out.println("\n\n" + srcUrlStrings.get(i) + "\n" + srcUrls.get(i) + 
          "\n" + externalJS.get(i) + "\n\n");
      }
      */

      return insertJS(urlId, stringUrl, inlineJS, externalJS, srcUrls);
   }

   private String getPage(URLConnection httpConn) throws java.io.IOException
   {
      String page = null;

      InputStream is = httpConn.getInputStream();
      BufferedReader reader = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));

      String line;
      while ((line = reader.readLine()) != null)
      {
         if (page == null)
         {
            page = "";
         }
         page += (line + "\n");
      }

      is.close();
      reader.close();

      if (page == null)
      {
         return null;
      }
      
      page = page.trim();

      return page;
   }

   private boolean insertJS(int id, String url, List<String> inlineJS, List<String> externalJS, List<URL> externalUrls)
   {
      boolean rtn = true;
      long timeCrawled = System.currentTimeMillis();
      String insert = String.format("INSERT IGNORE INTO %s (origin, url, time_crawled, inline, code, position)" +
       " VALUES (%d, ?, %d, ?, ?, ?)",
       TOP_CODE_TABLE, id, timeCrawled);

      PreparedStatement pStmt = null;

      try
      {
         pStmt = conn.prepareStatement(insert);

         for (int i = 0; i < inlineJS.size(); i++)
         {
            pStmt.setString(1, url);
            pStmt.setBoolean(2, true);
            pStmt.setString(3, inlineJS.get(i));
            pStmt.setInt(4, i);
            pStmt.addBatch();
         }

         for (int i = 0; i < externalJS.size(); i++)
         {
            pStmt.setString(1, externalUrls.get(i).toURI().normalize().toString());
            pStmt.setBoolean(2, false);
            pStmt.setString(3, externalJS.get(i));
            pStmt.setInt(4, 0);
            pStmt.addBatch();
         }

         pStmt.executeBatch();
      }
      catch (Exception ex)
      {
         System.err.println("Error making insert for: " + url);
         System.err.println(pStmt);
         ex.printStackTrace(System.err);
         rtn = false;
      }
      finally
      {
         if (pStmt != null)
         {
            try
            {
               pStmt.close();
            }
            catch (Exception ex)
            {
            }
         }
      }

      return rtn;
   }

   private URL buildRealUrl(String jsUrl, String originUrl)
   {
      String tempUrl = "";
      URL realUrl;

      jsUrl = jsUrl.trim();
      originUrl = originUrl.trim();

      //JS is absolute pathed from host
      if (jsUrl.startsWith("/"))
      {
         try
         {
            URL url = new URL(originUrl);
            tempUrl = url.getProtocol() + "://" + url.getHost() + jsUrl;
         }
         catch (java.net.MalformedURLException ex)
         {
            System.err.println("Bad URL: " + originUrl);
            return null;
         }
      }
      //JS is full url
      else if (jsUrl.startsWith("http://"))
      {
         tempUrl = jsUrl;
      }
      //realitive path from page
      else
      {
         tempUrl = originUrl.replaceFirst("/[^/]*$", "") + "/" + jsUrl;
      }

      try
      {
         realUrl = new URL(tempUrl);
      }
      catch (java.net.MalformedURLException ex)
      {
         System.err.println("Bad Generated URL: " + tempUrl);
         return null;
      }

      return realUrl;
   }

   /**
     * Extract JS segments from the page.
     */
   private boolean extractJS(String mimeType, String page, List<String> inlineJS, List<String> srcUrls)
   {
      try
      {
         if (mimeType.contains("javascript") ||
            mimeType.contains("js"))
         {
            inlineJS.add(page);
            return true;
         }

         Parser parser = Parser.createParser(page, "UTF-8");
         NodeList scripts = parser.extractAllNodesThatMatch(new TagNameFilter("script"));

         for (int i = 0; i < scripts.size(); i++)
         {
            String src;
            ScriptTag scriptNode = (ScriptTag)scripts.elementAt(i);

            if ((src = scriptNode.getAttribute("src")) != null)
            {
               //System.out.println("Position [" + i + "]: SRC: " + src);
               //SRC's are allowed to be comma delimited.
               String[] srcs = src.split(",");

               for (String splitSrc : srcs)
               {
                  srcUrls.add(splitSrc);
               }
            }
            else
            {
               //System.out.println("Position [" + i + "]: " + ((ScriptTag)(scripts.elementAt(i))).getScriptCode());
               inlineJS.add(scriptNode.getScriptCode());
            }
         }
      }
      catch (Exception ex)
      {
         System.err.println("Error extracting JS.");
         ex.printStackTrace(System.err);
         return false;
      }

      return true;
   }
}
