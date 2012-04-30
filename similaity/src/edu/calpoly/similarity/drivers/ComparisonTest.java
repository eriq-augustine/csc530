package edu.calpoly.similarity.drivers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import java.util.List;
import java.util.ArrayList;

import edu.calpoly.similarity.ComparisonMetric;
import edu.calpoly.similarity.StupidComparisonMetric;
import edu.calpoly.similarity.EditDistanceComparison;

public class ComparisonTest
{
   public static final String DB_USER = "crawler";
   public static final String DB_PASS = "ILoveData530";
   public static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/js?autoReconnect=true";
   public static final String DB_DRIVER = "com.mysql.jdbc.Driver";

   public static final String TOP_SITES_TABLE = "top_sites";
   public static final String TOP_CODE_TABLE = "top_code";

   public static final int NUM_CODE = 10;

   public static void main(String[] args)
   {
      List<String> code = getCode(NUM_CODE);
      double[][] sims = new double[code.size()][code.size()];

      //ComparisonMetric metric = new StupidComparisonMetric();
      ComparisonMetric metric = new EditDistanceComparison();

      for (int i = 0; i < code.size(); i++)
      {
         for (int j = 0; j < code.size(); j++)
         {
            sims[i][j] = metric.compare(code.get(i), code.get(j));
         }
      }

      //System.out.print("\t");
      for (int i = 0; i < code.size(); i++)
      {
         System.out.print(i + ",");
      }
      System.out.println();

      for (int i = 0; i < code.size(); i++)
      {
         System.out.print(i + ",");
         for (int j = 0; j < code.size(); j++)
         {
            System.out.print(String.format("%f,", sims[i][j]));
         }
         System.out.println();
      }
   }

   private static List<String> getCode(int num)
   {
      List<String> rtn = new ArrayList<String>();
      String query = String.format("SELECT code" + 
       " FROM %s c JOIN %s s ON (c.origin = s.id)" +
       " WHERE s.rank <= %d" + 
       " ORDER BY s.rank, c.url, c.position",
       TOP_CODE_TABLE, TOP_SITES_TABLE, num);
      Connection conn = null;
      Statement stmt = null;
      ResultSet res = null;

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

      try
      {
         stmt = conn.createStatement();
         res = stmt.executeQuery(query);

         while (res.next())
         {
            rtn.add(res.getString(1));
         }
      }
      catch (Exception ex)
      {
         System.err.println("Error getting code.");
         ex.printStackTrace(System.err);
      }
      finally
      {
         try
         {
            if (res != null)
            {
               res.close();
            }

            if (stmt != null)
            {
               stmt.close();
            }
         }
         catch (Exception ex)
         {
            System.err.println("Error Closing DB.");
            ex.printStackTrace(System.err);
         }
      }

      return rtn;
   }
}
