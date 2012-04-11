package edu.calpoly.crawl;

//s3://aws-publicdatasets/common-crawl/crawl-002/2010/09/25/9/1285409485343_9.arc.gz

import java.io.File;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.ByteBuffer;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.util.List; 
import java.util.ArrayList; 

import org.commoncrawl.util.shared.ArcFileReader;
import org.commoncrawl.protocol.shared.ArcFileItem;
import org.commoncrawl.util.shared.ImmutableBuffer;

import org.htmlparser.Parser;
import org.htmlparser.filters.TagNameFilter;
import org.htmlparser.util.NodeList;
import org.htmlparser.Node;
import org.htmlparser.tags.ScriptTag;

/**
 * Downloads ARC files, reads them, and puts the results in the DB.
 * Once there is no more work, a worker kills itself.
 */
public class CrawlerWorker
{
   private static final String TEMP_DIR = "temp";
   private static final int NUM_RETRIEVERS = 10;
   
   public static final String DB_USER = "crawler";
   public static final String DB_PASS = "ILoveData530";
   public static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/js?autoReconnect=true";
   public static final String DB_DRIVER = "com.mysql.jdbc.Driver";
   public static final String DOMAIN_TABLE = "domains";
   public static final String CODE_TABLE = "code";

   private static int idCounter = 0;

   private final int id;
   private WorkerThread thread;
   private List<RetrieveJSWorker> retrievers;
   private Connection conn;

   //TESTing main
   public static void main(String[] args)
   {
      CrawlerWorker worker = new CrawlerWorker();
      worker.test();
   }

   //TEST
   public void test()
   {
      System.out.println("Begin parsing file: " + System.currentTimeMillis());
      thread.parseFile("small.arc.gz");
      //thread.parseFile("large.arc.gz");
      System.out.println("Done parsing file: " + System.currentTimeMillis());
      close();
      System.out.println("Closed: " + System.currentTimeMillis());
   }

   public CrawlerWorker()
   {
      id = idCounter++;
      thread = new WorkerThread();
      
      retrievers = new ArrayList<RetrieveJSWorker>();
      for (int i = 0; i < NUM_RETRIEVERS; i++)
      {
         retrievers.add(new RetrieveJSWorker());
      }

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

   public void close()
   {
      boolean done = false;

      while (!done)
      {
         try
         {
            thread.join();
            done = true;
         }
         catch (InterruptedException ex)
         {
         }
      }

      for (RetrieveJSWorker worker : retrievers)
      {
         worker.close();
      }
   }

   public void start()
   {
      thread.start();
   }

   private class WorkerThread extends Thread
   {
      public WorkerThread()
      {
         super();
      }

      public void run()
      {
         String arcUrl;

         // While there is still work
         while ((arcUrl = CrawlerMain.getCrawler().getArcUrl()) != null)
         {
            String filename = downloadArc(arcUrl);

            if (filename == null)
            {
               CrawlerMain.getCrawler().failedWork(arcUrl);
            }
            else
            {
               if (!parseFile(filename))
               {
                  CrawlerMain.getCrawler().failedWork(arcUrl);
               }
               else
               {
                  CrawlerMain.getCrawler().completedWork(arcUrl);
               }

               try
               {
                  new File(filename).delete();
               }
               catch (Exception ex)
               {
                  System.err.println("Error removing file: " + filename);
                  ex.printStackTrace(System.err);
               }
            }
         }

         try
         {
            conn.close();
         }
         catch (Exception ex)
         {
         }
      }

      //TEST
      public boolean parseFile(String filename)
      {
         try
         {
            byte[] data = Files.readAllBytes(new File(filename).toPath());
            ByteBuffer buff = ByteBuffer.wrap(data);

            ArcFileReader reader = new ArcFileReader();
            reader.resetState();
            reader.setIOTimeoutValue(30000);
            reader.available(buff);
            reader.finished();

            List<InsertInfo> inserts = new ArrayList<InsertInfo>();
            List<RetrieveJSWorker.JSInfo> infos = new ArrayList<RetrieveJSWorker.JSInfo>();

            while (reader.hasMoreItems())
            {
               ArcFileItem item = new ArcFileItem();
               reader.getNextItem(item);

               //System.out.println("[" + filename + "]" + ", url: " + item.getUri());
               /*
               System.out.println("GOT Item URL:" + item.getUri() + " StreamPos:"
               + item.getArcFilePos() + " Content Length:"
               + item.getContent().getCount());
               */

               List<String> srcs = new ArrayList<String>();
               List<String> inlineCodes = new ArrayList<String>();
               if (!extractJS(item.getMimeType(), item.getContent(), inlineCodes, srcs))
               {
                  return false;
               }

               for (String src : srcs)
               {
                  infos.add(new RetrieveJSWorker.JSInfo(item.getHostIP(), item.getUri(), src, item.getTimestamp()));
               }

               boolean inline = true;
               if (inlineCodes.size() == 1 &&
                (item.getMimeType().contains("javascript") ||
                item.getMimeType().contains("js")))
               {
                  inline = false;
               }

               for (int i = 0; i < inlineCodes.size(); i++)
               {
                  inserts.add(new InsertInfo(item.getUri(), item.getHostIP(), i, inline, item.getTimestamp(), inlineCodes.get(i)));
               }
            }

            //System.out.println("Before add all JS: " + System.currentTimeMillis());
            int jsPerWorker = (infos.size() / NUM_RETRIEVERS) + 1;
            //TEST
            //System.err.println("Total external js: " + infos.size() + ", js per worker: " + jsPerWorker);

            for (int i = 0; i < NUM_RETRIEVERS; i++)
            {
               //TEST
               //System.err.println("For [" + retrievers.get(i) + "] -- [" + i * jsPerWorker + ", " + Math.min(i * jsPerWorker + jsPerWorker, infos.size()) + ").");

               retrievers.get(i).addAllJS(infos, i * jsPerWorker, Math.min(i * jsPerWorker + jsPerWorker, infos.size()));
            }
            //System.out.println("After add all JS: " + System.currentTimeMillis());

            //System.out.println("Before insert: " + System.currentTimeMillis());
            if (!insertItems(inserts))
            {
               //System.out.println("After insert fail: " + System.currentTimeMillis());
               return false;
            }
            //System.out.println("After insert pass: " + System.currentTimeMillis());
         }
         catch (Exception ex)
         {
            System.err.println("Error parsing the arc file.");
            ex.printStackTrace(System.err);
            return false;
         }

         return true;
      }

      /**
       * Extract JS segments from the js buffer.
       */
      private boolean extractJS(String mimeType, ImmutableBuffer buff, List<String> inlineJS, List<String> srcUrls)
      {
         try
         {
            String code = buff.toString("UTF-8");

            if (mimeType.contains("javascript") ||
               mimeType.contains("js"))
            {
               inlineJS.add(code);
               return true;
            }

            Parser parser = Parser.createParser(code, "UTF-8");
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

      /**
       * Insert the code from |item| into the db.
       * This will not parse code from |item|, but rely on |code| begin the already parsed
       *  code from item.
       * If |codes| has only one entry, and |item|'s mime has 'javascript' or 'js' in it, then the 
       *  code is assumed to not be inline.
       */
      private boolean insertItems(List<InsertInfo> insertInfos)
      {
         boolean rtn = true;
         String domainInsert = String.format("INSERT IGNORE INTO %s VALUES (?)",
          DOMAIN_TABLE);
         String codeInsert = String.format(
          "INSERT IGNORE INTO %s (url, domain, time_crawled, inline, position, code)" +
          " VALUES (?, ?, ?, ?, ?, ?)",
          CODE_TABLE);
         
         PreparedStatement domainPstmt = null;
         PreparedStatement codePstmt = null;

         try
         {
            domainPstmt = conn.prepareStatement(domainInsert);
            codePstmt = conn.prepareStatement(codeInsert);
         }
         catch (Exception ex)
         {
            System.err.println("Error getting pstmts.");
            return false;
         }

         for (InsertInfo insertInfo : insertInfos)
         {
            try
            {
               domainPstmt.setString(1, insertInfo.hostIp);
               //TEST
               domainPstmt.addBatch();

               codePstmt.setString(1, insertInfo.url);
               codePstmt.setString(2, insertInfo.hostIp);
               codePstmt.setLong(3, insertInfo.timestamp);
               codePstmt.setBoolean(4, insertInfo.inline);
               codePstmt.setInt(5, insertInfo.position);
               codePstmt.setString(6, insertInfo.code);
               //TEST
               codePstmt.addBatch();
            }
            catch (Exception ex)
            {
               System.err.println("Error inserting code.");
               ex.printStackTrace(System.err);
            }
         }

         try
         {
            domainPstmt.executeBatch();
            codePstmt.executeBatch();
         }
         catch (Exception ex)
         {
            System.err.println("Error executing batch.");
            ex.printStackTrace(System.err);
            rtn = false;
         }

         try
         {
            codePstmt.close();
            domainPstmt.close();
         }
         catch (Exception ex)
         {
            System.err.println("Unable to close prepared statements.");
            ex.printStackTrace(System.err);
         }

         return rtn;
      }
 
      /**
       * Get the arc file and return its path.
       */
      private String downloadArc(String arcUrl)
      {
         String filename = TEMP_DIR + "/" + arcUrl.trim().replaceFirst("^.+/(\\d+_\\d+\\.arc\\.gz)$", "$1");
         String command = String.format("%s --config=%s get %s %s",
          FetchTargets.S3_CMD, FetchTargets.S3_CONFIG, arcUrl, filename);
      
         try
         {
            Process proc = Runtime.getRuntime().exec(command);
            if (proc.waitFor() != 0)
            {
               FetchTargets.printProcessError(proc);
               return null;
            }
         }
         catch (Exception ex)
         {
            System.err.println("Error downloading arc.");
            ex.printStackTrace(System.err);
            return null;
         }

         return filename;
      }
   }

   private static class InsertInfo
   {
      public String url;
      public String hostIp;
      public int position;
      public boolean inline;
      public long timestamp;
      public String code;

      public InsertInfo(String url, String hostIp, int position, boolean inline, long timestamp, String code)
      {
         this.url = url;
         this.hostIp = hostIp;
         this.position = position;
         this.inline = inline;
         this.timestamp = timestamp;
         this.code = code;
      }
   }
}
