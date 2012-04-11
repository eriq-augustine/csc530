package edu.calpoly.crawl;

import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.Semaphore;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import java.net.URL;
import java.net.URLConnection;

/**
 * This is a singleton whose job is to asyncroniously retrieve js files and
 * put them in the DB.
 */
public class RetrieveJSWorker
{
   public static final String FAILED_JS_TABLE = "failed_js";

   private RetrieveThread thread;
   
   private Queue<JSInfo> queue;
   private Semaphore queueMutex;
   
   private boolean die;

   //No dups
   // This is shared between all workers.
   private static Set<String> urlSet = new HashSet<String>();
   private static Semaphore uniqueMutex = new Semaphore(1);

   private boolean sleeping;
   private Semaphore sleepMutex;

   private Connection conn;

   public RetrieveJSWorker()
   {
      die = false;
      sleeping = false;
      sleepMutex = new Semaphore(1);

      thread = new RetrieveThread();

      queueMutex = new Semaphore(1);
      queue = new LinkedList<JSInfo>();

      try
      {
         Class.forName(CrawlerWorker.DB_DRIVER);
         conn = DriverManager.getConnection(CrawlerWorker.DB_URL, CrawlerWorker.DB_USER, CrawlerWorker.DB_PASS);
      }
      catch (Exception ex)
      {
         System.err.println("Error establishing DB connection.");
         ex.printStackTrace(System.err);
         System.exit(1);
      }

      thread.start();
   }

   // Queue methods
   private void addToQueue(JSInfo info)
   {
      try
      {
         queueMutex.acquire();
         queue.add(info);
      }
      catch (Exception ex)
      {
         System.err.println("Error Adding to Queue.");
         ex.printStackTrace(System.err);
      }
      finally
      {
         //TEST
         //System.err.println("[" + this + "] -- Added to queue: " + queue.size());

         queueMutex.release();
      }
   }

   private boolean isQueueEmpty()
   {
      boolean rtn = true;

      try
      {
         queueMutex.acquire();
         rtn = queue.isEmpty();
      }
      catch (Exception ex)
      {
         System.err.println("Error checking  if Queue is empty.");
         ex.printStackTrace(System.err);
      }
      finally
      {
         queueMutex.release();
      }

      return rtn;
   }

   private JSInfo removeFromQueue()
   {
      JSInfo rtn = null;

      try
      {
         queueMutex.acquire();
         rtn = queue.remove();
      }
      catch (Exception ex)
      {
         System.err.println("Error Adding to Queue.");
         ex.printStackTrace(System.err);
      }
      finally
      {
         //TEST
         //System.err.println("[" + this + "] -- Removed to queue: " + queue.size());

         queueMutex.release();
      }

      return rtn;
   }

   // [start, end)
   public synchronized void addAllJS(List<JSInfo> infos, int start, int end)
   {
      for (int i = start; i < end; i++)
      {
         JSInfo info = infos.get(i);

         // Don't bothering trying to retrieve duplicates.
         String normalURL = "";
         try
         {
            normalURL = info.realUrl.toURI().normalize().toString();
         }
         catch (java.net.URISyntaxException ex)
         {
            // Bad link
            System.err.println("Bad external JS url: " + info.realUrl);
            continue;
         }

         try
         {
            uniqueMutex.acquire();
            if (urlSet.contains(normalURL))
            {
               //TEST
               //System.err.println("Nonunique JS.");

               uniqueMutex.release();
               continue;
            }

            urlSet.add(normalURL);
         }
         catch (Exception ex)
         {
            System.err.println("Error acquiring unique mutex.");
            ex.printStackTrace(System.err);
         }
         finally
         {
            uniqueMutex.release();
         }

         addToQueue(info);
      }

      if (isSleeping())
      {
         setSleep(false);
         thread.interrupt();
      }
   }

   private void setSleep(boolean sleep)
   {
      try
      {
         sleepMutex.acquire();
         sleeping = sleep;
      }
      catch (Exception ex)
      {
         System.err.println("Error setting sleep (sleep = " + sleep + ").");
         ex.printStackTrace(System.err);
      }
      finally
      {
         sleepMutex.release();
      }
   }

   private boolean isSleeping()
   {
      boolean rtn = false;

      try
      {
         sleepMutex.acquire();
         rtn = sleeping;
      }
      catch (Exception ex)
      {
         System.err.println("Error checking sleeping.");
         ex.printStackTrace(System.err);
      }
      finally
      {
         sleepMutex.release();
      }

      return rtn;
   }

   public void close()
   {
      die = true;

      if (isSleeping())
      {
         setSleep(false);
         thread.interrupt();
      }

      try
      {
         thread.join();
      }
      catch (Exception ex)
      {
         System.err.println("Error joining.");
         ex.printStackTrace(System.err);
      }
   }

   private class RetrieveThread extends Thread
   {
      public void run()
      {
         while (!die)
         {
            try
            {
               setSleep(true);
               sleep(10);
               setSleep(false);
            }
            catch (InterruptedException ex)
            {
               setSleep(false);
               //Begin interrupted means that there is something in the queue.
               emptyQueue();
            }
         }
               
         emptyQueue();
      }

      private void emptyQueue()
      {
         while (!isQueueEmpty())
         {
            JSInfo info = removeFromQueue();

            String code = null;
            boolean fail = false;

            //Errors fron unavailable js don't need to be reported,
            // they would just clog up the logs.
            try
            {
               code = retrieveJS(info);
            }
            catch (java.io.FileNotFoundException ex)
            {
               fail = true;
            }
            catch (java.net.UnknownHostException ex)
            {
               fail = true;
            }
            catch (java.io.IOException ex)
            {
               fail = true;
            }
            catch (Exception ex)
            {
               fail = true;
               System.err.println("Error retrieving js.");
               ex.printStackTrace(System.err);
            }

            if (fail || code == null)
            {
               System.err.println("Error retieving: " + info.realUrl);
               insertFailJS(info);
            }
            else
            {
               insertJS(info, code);
            }
         }
      }

      private void insertFailJS(JSInfo info)
      {
         PreparedStatement pstmt = null;
         String insert = String.format(
          "INSERT IGNORE INTO %s (host_ip, orgin_url, js_url, timestamp, built_url) " + 
          " VALUES ('%s', ?, ?, %d, ?)",
          FAILED_JS_TABLE, info.hostIp, info.timestamp);

         try
         {
            pstmt = conn.prepareStatement(insert);
            pstmt.setString(1, info.orginUrl);
            pstmt.setString(2, info.jsUrl);
            pstmt.setString(3, info.realUrl.toString());
            pstmt.executeUpdate();
         }
         catch (Exception ex)
         {
            System.err.println("Error inserting a failed js into the db.");
            System.err.println(pstmt);
            ex.printStackTrace(System.err);
         }
         finally
         {
            if (pstmt == null)
            {
               try
               {
                  pstmt.close();
               }
               catch (Exception ex)
               {
                  System.err.println("Error closing prepared statement.");
                  ex.printStackTrace(System.err);
               }
            }
         }
      }

      //This will throw errors indicating that the js is not longer available.
      public String retrieveJS(JSInfo info) throws
       java.io.FileNotFoundException, java.net.UnknownHostException, java.io.IOException
      {
         String rtn = null;

         URLConnection jsConn = info.realUrl.openConnection();

         InputStream is = jsConn.getInputStream();
         BufferedReader reader = new BufferedReader(new InputStreamReader(is, CrawlerMain.CHARSET));

         String line;
         while ((line = reader.readLine()) != null)
         {
            if (rtn == null)
            {
               rtn = "";
            }

            rtn += (line + "\n");
         }

         is.close();
         reader.close();
         
         return rtn;
      }

      public boolean insertJS(JSInfo info, String code)
      {
         boolean rtn = true;
         PreparedStatement pStmt = null;
         String insert = String.format(
          "INSERT IGNORE INTO %s (url, domain, time_crawled, inline, position, code)" +
          " VALUES (?, '%s', %d, %s, %d, ?)",
          CrawlerWorker.CODE_TABLE, info.hostIp, info.timestamp, "FALSE", 0);

         try
         {
            pStmt = conn.prepareStatement(insert);
            pStmt.setString(1, info.realUrl.toURI().normalize().toString());
            pStmt.setString(2, code);
            //System.err.println(pStmt);
            pStmt.executeUpdate();
         }
         catch (Exception ex)
         {
            System.err.println("Error inserting retrieved JS.");
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
                  System.err.println("Unable to close statement.");
                  ex.printStackTrace(System.err);
               }
            }
         }

         return rtn;
      }
   }

   public static class JSInfo
   {
      public String hostIp;
      public String orginUrl;
      public String jsUrl;
      public URL realUrl;
      public long timestamp;

      public JSInfo(String hostIp, String orginUrl, String jsUrl, long timestamp)
      {
         this.hostIp = hostIp;
         this.orginUrl = orginUrl;
         this.jsUrl = jsUrl;
         this.timestamp = timestamp;
         buildRealUrl();
      }

      public String toString()
      {
         return "IP: " + hostIp + ", timestamp: " + timestamp + 
            ", orgin url: [" + orginUrl + "], js url: [" + jsUrl + "]" + 
            ", real url: [" + realUrl + "]";
      }

      private void buildRealUrl()
      {
         String tempUrl = "";

         //JS is absolute pathed from host
         if (jsUrl.startsWith("/"))
         {
            try
            {
               URL url = new URL(orginUrl);
               tempUrl = url.getProtocol() + "://" + url.getHost() + jsUrl;
            }
            catch (java.net.MalformedURLException ex)
            {
               System.err.println("Bad URL: " + orginUrl);
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
            tempUrl = orginUrl.replaceFirst("/[^/]*$", "") + "/" + jsUrl;
         }

         try
         {
            realUrl = new URL(tempUrl);
         }
         catch (java.net.MalformedURLException ex)
         {
         }
      }
   }
}
