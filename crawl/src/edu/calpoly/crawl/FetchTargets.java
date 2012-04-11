package edu.calpoly.crawl;

import java.util.Queue;
import java.util.LinkedList;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

/**
 * Fetch all the .arc targets from AWS and put them in the db.
 */
public class FetchTargets
{
   public static final String S3_CONFIG = "scripts/s3cfg";
   public static final String S3_CMD = "scripts/s3cmd";
   public static final String BUCKET_URL = "s3://aws-publicdatasets/common-crawl/crawl-002/";
   public static final String ARC_TABLE = "arc_files";

   public static void main(String[] args)
   {
      Connection conn;
      try
      {
         Class.forName(CrawlerWorker.DB_DRIVER);
         conn = DriverManager.getConnection(CrawlerWorker.DB_URL, CrawlerWorker.DB_USER, CrawlerWorker.DB_PASS);
      }
      catch (Exception ex)
      {
         System.err.println("Error establishing DB connection.");
         ex.printStackTrace(System.err);
         return;
      }

      Queue<String> arcs = getArcUrls(conn);

      try
      {
         conn.close();
      }
      catch (Exception ex)
      {
         System.err.println("Error closing connection");
         ex.printStackTrace(System.err);
      }
   }

   private static void insertArcs(Queue<String> arcs, Connection conn)
   {
      PreparedStatement pstmt = null;
      String insert = String.format(
       "INSERT IGNORE INTO %s (url) VALUES (?)",
       ARC_TABLE);

      try
      {
         pstmt = conn.prepareStatement(insert);
      }
      catch (Exception ex)
      {
         System.err.println("Error getting prepared statement.");
         ex.printStackTrace(System.err);
         return;
      }

      for (String arc : arcs)
      {
         try
         {
            pstmt.setString(1, arc);
            pstmt.executeUpdate();
         }
         catch (Exception ex)
         {
            System.err.println("Unable to insert arc: " + arc);
            System.err.println("Prepared Statement: " + pstmt);
            ex.printStackTrace(System.err);
         }
      }
         
      try
      {
         pstmt.close();
      }
      catch (Exception ex)
      {
         System.err.println("Unable to close connection/statement.");
         ex.printStackTrace(System.err);
      }
   }

   /**
    * Get all the urls for the arc files.
    * The structure is <bucket>/Year/Month/Day/Number/*.arc
    * I don't know what the number represents,
    *  but there doesn't seem to be any special pattern.
    */
   private static Queue<String> getArcUrls(Connection conn)
   {
      Queue<String> seed = new LinkedList<String>();
      seed.add(BUCKET_URL);
      // Arc(Number(Days(Months(Years))))
      //return s3Ls(s3Ls(s3Ls(s3Ls(s3Ls(seed, null), null), null), null), conn);
      Queue<String> temp = s3Ls(seed, null);
      System.out.println("Years Complete");

      temp = s3Ls(temp, null);
      System.out.println("Months Complete");

      temp = s3Ls(temp, null);
      System.out.println("Days Complete");

      temp = s3Ls(temp, null);
      System.out.println("Numbers Complete");

      temp = s3Ls(temp, conn);
      System.out.println("Arcs Complete");

      return temp;
   }

   private static Queue<String> s3Ls(Queue<String> startingPoints, Connection conn)
   {
      Queue<String> rtn = new LinkedList<String>();
      
      for (String point : startingPoints)
      {
         try
         {
            String command = String.format("%s --config=%s ls %s",
             S3_CMD, S3_CONFIG, point);

            Process proc = Runtime.getRuntime().exec(command);
            if (proc.waitFor() == 0)
            {
               String line;
               BufferedReader stdout = new BufferedReader(new InputStreamReader(proc.getInputStream()));
               while ((line = stdout.readLine()) != null)
               {
                  //System.err.println(line.replaceFirst("^.+s3:", "s3:"));
                  rtn.add(line.replaceFirst("^.+s3:", "s3:"));
               }

               if (conn != null)
               {
                  insertArcs(rtn, conn);
               }
            }
            else
            {
               printProcessError(proc);
            }
         }
         catch (Exception ex)
         {
            ex.printStackTrace(System.err);
         }
      }

      return rtn;
   }

   public static void printProcessError(Process proc)
   {
      String line;
      BufferedReader stderr = new BufferedReader(new
         InputStreamReader(proc.getErrorStream()));
      BufferedReader stdout = new BufferedReader(new
         InputStreamReader(proc.getInputStream()));

      try
      {
         System.err.println("Out:");
         while ((line = stdout.readLine()) != null)
         {
            System.err.println(line);
         }

         System.err.println("Error:");
         while ((line = stderr.readLine()) != null)
         {
            System.err.println(line);
         }
      }
      catch (Exception ex)
      {
         System.err.println("Error printing an exec error.");
         ex.printStackTrace(System.err);
      }
   }
}
