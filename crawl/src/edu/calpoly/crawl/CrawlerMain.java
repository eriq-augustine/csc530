package edu.calpoly.crawl;

import java.util.Queue;
import java.util.LinkedList;
import java.util.Set;
import java.util.HashSet;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.nio.charset.Charset;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.ResultSet;

/**
 * Controls all the crawlers.
 */
public class CrawlerMain
{
   public static final int NUM_WORKERS = 4;

   public static final Charset CHARSET;
   static 
   {
      try
      {
        Charset.forName("UTF-8");
      }
      catch (Exception ex)
      {
         System.err.println("Unable to get UTF-8 charset.");
         ex.printStackTrace(System.err);
         System.exit(1);
      }
      CHARSET = Charset.forName("UTF-8");
   }

   private static CrawlerMain crawler;

   private Set<CrawlerWorker> workers;
   private Queue<String> pendingArcs;
   private Connection conn;

   public static void main(String[] args)
   {
      CrawlerMain mainCrawler = getCrawler();
      mainCrawler.start();
      mainCrawler.reap();
   }

   private CrawlerMain()
   {
      try
      {
         Class.forName(CrawlerWorker.DB_DRIVER);
         conn = DriverManager.getConnection(CrawlerWorker.DB_URL, CrawlerWorker.DB_USER, CrawlerWorker.DB_PASS);
      }
      catch (Exception ex)
      {
         System.err.println("Error establishing DB connection.");
         ex.printStackTrace(System.err);
      }

      pendingArcs = fetchAvailableArcsFromDB();

      workers = new HashSet<CrawlerWorker>();
      for (int i = 0; i < NUM_WORKERS; i++)
      {
         workers.add(new CrawlerWorker());
      }
   }

   public static synchronized CrawlerMain getCrawler()
   {
      if (crawler == null)
      {
         crawler = new CrawlerMain();
      }

      return crawler;
   }

   public void reap()
   {
      //TEST
      System.out.println("Begining Reap.");

      for (CrawlerWorker worker : workers)
      {
         worker.close();
      }

      //TEST
      System.out.println("Finished Reaping Children.");

      try
      {
         conn.close();
      }
      catch (Exception ex)
      {
         System.err.println("Error closing connection.");
         ex.printStackTrace(System.err);
      }
   }

   public void start()
   {
      for (CrawlerWorker worker : workers)
      {
         worker.start();
      }
   }

   private Queue<String> fetchAvailableArcsFromDB()
   {
      Queue<String> rtn = new LinkedList<String>();
      Statement stmt = null;
      String query = String.format(
       "SELECT url FROM %s WHERE parsed = FALSE",
       FetchTargets.ARC_TABLE);

      try
      {
         stmt = conn.createStatement();
         ResultSet results = stmt.executeQuery(query);

         while (results.next())
         {
            rtn.add(results.getString(1));
         }

         results.close();
         stmt.close();
      }
      catch (Exception ex)
      {
         System.err.println("Error getting arcs.");
         ex.printStackTrace(System.err);
         System.exit(1);
      }

      return rtn;
   }

   /**
    * Get the next arc url for work.
    * null if there is no more work.
    */
   public synchronized String getArcUrl()
   {
      if (pendingArcs.isEmpty())
      {
         return null;
      }

      return pendingArcs.remove();
   }

   //Something happnened and the work on the given arc file failed,
   //Put it back in the work queue
   public synchronized void failedWork(String arcFile)
   {
      System.err.println("Failed work on: " + arcFile);
   }

   public synchronized void completedWork(String arc)
   {
      updateArcStatus(arc, true);
   }

   private void updateArcStatus(String arc, boolean status)
   {
      PreparedStatement pstmt = null;
      String update = String.format(
       "UPDATE %s SET parsed = ? WHERE url = ?",
       FetchTargets.ARC_TABLE);

      try
      {
         pstmt = conn.prepareStatement(update);
         pstmt.setBoolean(1, status);
         pstmt.setString(2, arc);
         pstmt.executeUpdate();
      }
      catch (Exception ex)
      {
         System.err.println("Error updating arc's (" + arc + ") ststus to " + 
          status + ".");
         ex.printStackTrace(System.err);
      }
      finally
      {
         if (pstmt != null)
         {
            try
            {
               pstmt.close();
            }
            catch (Exception ex)
            {
               System.err.println("Error closing prepared stmt.");
               ex.printStackTrace(System.err);
            }
         }
      }
   }
}
