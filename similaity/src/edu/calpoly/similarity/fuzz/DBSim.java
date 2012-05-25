package edu.calpoly.similarity.fuzz;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.TreeSet;
import java.util.Comparator;

public class DBSim
{
   public static final String DB_USER = "crawler";
   public static final String DB_PASS = "ILoveData530";
   public static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/js?autoReconnect=true";
   public static final String DB_DRIVER = "com.mysql.jdbc.Driver";

   public static final String SIM_TABLE = "function_sim";
   public static final String EASY_FUNCTIONS_TABLE = "easy_functions";
   public static final String FUZZ_RUN_TABLE = "fuzz_run";

   public static final int MAX_PARAMS = 3;
   public static final int PAGE_SIZE = 10000;

   private Connection conn;

   public static void main(String[] args)
   {
      DBSim sim = new DBSim();
      sim.run();
      System.exit(0);
   }

   public DBSim()
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

   public void run()
   {
      // { code_id -> { arg_sig -> result(type, value) } }
      Map<String, Map<String, Result>> fuzzRes;

      int id1;
      int id2;
      double sim;

      int count = 0;
      List<SimResult> sims = new ArrayList<SimResult>();

      //for (int numParams = 0; numParams <= MAX_PARAMS, numParams++)
      //TEST
      for (int numParams = 0; numParams <= 1; numParams++)
      {
         fuzzRes = getFuzzRes(numParams);

         String[] ids = fuzzRes.keySet().toArray(new String[0]);

         for (int i = 0; i < ids.length; i++)
         {
            for (int j = 0; j < i; j++)
            {
               sim = similarity(fuzzRes.get(ids[i]), fuzzRes.get(ids[j]));
               id1 = Integer.parseInt(ids[i]);
               id2 = Integer.parseInt(ids[j]);

               if (id1 < id2)
               {
                  sims.add(new SimResult(id1, id2, sim));
               }
               else
               {
                  sims.add(new SimResult(id2, id1, sim));
               }

               count++;
               if (count >= PAGE_SIZE)
               {
                  insertSims(sims);
                  sims.clear();
                  count = 0;
               }
            }
         }

         if (count != 0)
         {
            insertSims(sims);
            sims.clear();
            count = 0;
         }

         fuzzRes.clear();
      }
   }

   // Please make id1 < id2
   private class SimResult
   {
      public int id1;
      public int id2;
      public double sim;

      public SimResult(int id1, int id2, double sim)
      {
         this.id1 = id1;
         this.id2 = id2;
         this.sim = sim;
      }
   }

   // 1 point for same type
   // 1 point for equal values
   // sim = score / possible score
   // { arg_sig -> Result(type, val) }
   public static double similarity(Map<String, Result> a, Map<String, Result> b)
   {
      if (a.size() != b.size())
      {
         return -1;
      }

      int score = 0;
      int possibleScore = a.size() * 2;

      Result aRes;
      Result bRes;

      for (String key : a.keySet())
      {
         aRes = a.get(key);
         bRes = b.get(key);

         if (aRes.type.equals(bRes.type))
         {
            score++;

            if (aRes.value.equals(bRes.value))
            {
               score++;
            }
         }
      }

      return (double)score / possibleScore;
   }

   private void insertSims(List<SimResult> sims)
   {
      String insert = String.format(
       "REPLACE INTO %s (a_id, b_id, score) VALUES (?, ?, ?)",
       SIM_TABLE);
      PreparedStatement pStmt = null;

      try
      {
         pStmt = conn.prepareStatement(insert);

         for (SimResult res : sims)
         {
            pStmt.setInt(1, res.id1);
            pStmt.setInt(2, res.id2);
            pStmt.setDouble(3, res.sim);
            pStmt.addBatch();
         }

         pStmt.executeBatch();
      }
      catch (Exception ex)
      {
         System.err.println("Error inserting fuzz results.");
         ex.printStackTrace(System.err);
      }
      finally
      {
         try
         {
            if (pStmt != null)
            {
               pStmt.close();
            }
         }
         catch (Exception ex)
         {
            System.err.println("Error Closing DB.");
            ex.printStackTrace(System.err);
         }
      }
   }

   private static class Result
   {
      public String type;
      public String value;

      public Result(String type, String value)
      {
         this.type = type;
         this.value = value;
      }
   }

   private Map<String, Map<String, Result>> getFuzzRes(int numParams)
   {
      // { code_id -> { arg_sig -> result(type, value) } }
      Map<String, Map<String, Result>> rtn = new HashMap<String, Map<String, Result>>();

      String query = String.format(
       "SELECT f.code_id, f.arg_sig, f.result_type, f.result" + 
       " FROM %s f JOIN %s e ON e.id = f.code_id" + 
       " WHERE num_params = %d", 
       FUZZ_RUN_TABLE, EASY_FUNCTIONS_TABLE, numParams);
      Statement stmt = null;
      ResultSet res = null;

      try
      {
         stmt = conn.createStatement();
         res = stmt.executeQuery(query);

         while (res.next())
         {
            String id = res.getString(1);
            String argSig = res.getString(2);
            String resType = res.getString(3);
            String resVal = res.getString(4);

            if (!rtn.containsKey(id))
            {
               rtn.put(id, new HashMap<String, Result>());
            }

            rtn.get(id).put(argSig, new Result(resType, resVal));
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
