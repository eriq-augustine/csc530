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

import java.io.FileReader;
import java.io.BufferedReader;

import org.mozilla.javascript.Node;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.NativeArray;

import edu.calpoly.similarity.fuzz.Fuzzer;
import edu.calpoly.similarity.EditDistanceComparison;

public class DBFuzz
{
   public static final String DB_USER = "crawler";
   public static final String DB_PASS = "ILoveData530";
   public static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/js?autoReconnect=true";
   public static final String DB_DRIVER = "com.mysql.jdbc.Driver";

   public static final String TOP_SITES_TABLE = "top_sites";
   public static final String TOP_CODE_TABLE = "top_code";
   public static final String EASY_FUNCTIONS_TABLE = "easy_functions";
   public static final String FUZZ_RUN_TABLE = "fuzz_run";

   public static final int MAX_PARAMS = 3;

   private Connection conn;

   public static void main(String[] args)
   {
      DBFuzz fuzz = new DBFuzz();
      fuzz.run();
      System.exit(0);
   }

   public DBFuzz()
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
      List<String> codes = new ArrayList<String>();
      List<Integer> ids = new ArrayList<Integer>();

      CompilerEnvirons comEnvs = new CompilerEnvirons();
      ErrorReporter errReporter = comEnvs.getErrorReporter();

      //List<FunctionInfo> fuzzResults = new ArrayList<FunctionInfo>();

      List<FunctionNode> funNodes = new ArrayList<FunctionNode>();

      //for (int numParams = 0; numParams <= 0; numParams++)
      //for (int numParams = 0; numParams <= MAX_PARAMS; numParams++)
      for (int numParams = 0; numParams <= MAX_PARAMS; numParams++)
      {
         //fuzzResults.clear();
         codes.clear();
         ids.clear();
         getDBCode(numParams, codes, ids);

         //TEST
         System.err.println(codes.size() + " codes for " + numParams);

         for (int i = 0; i < codes.size(); i++)
         {
            try
            {
               Parser parser = new Parser(comEnvs, errReporter);

               AstRoot root = parser.parse(codes.get(i), "", 0);
               funNodes.clear();
               Fuzzer.collectFunctions(root, funNodes);

               for (FunctionNode funNode : funNodes)
               {
                  Fuzzer.dbFuzz(funNode, this, ids.get(i).intValue());
                  //FunctionInfo info = new FunctionInfo(ids.get(i).intValue(), results, funNode.toSource());
                  //FunctionInfo info = new FunctionInfo(ids.get(i).intValue(), results, "");
                  //insertResults(ids.get(i), results);
               }
            }
            catch (Exception ex)
            {
               ex.printStackTrace(System.err);
            }
         }

         //TEST
         /*
         System.err.println("Fuzzing complete, building sim matrix");

         //Build sim matrix
         int size = fuzzResults.size();
         Map<Integer, Integer> idMapping = new HashMap<Integer, Integer>();
         double[][] simMatrix = new double[size][size];
         buildSimMatrix(fuzzResults, idMapping, simMatrix);

         System.out.println("NumeParams: " + numParams);
         printSimMatrix(idMapping, simMatrix);
         */
      }

      /*
      for (Map.Entry<Integer, List<FunctionInfo>> entry : fuzzResults.entrySet())
      {
         System.err.println("---- " + entry.getKey() + " Params ----");
         for (FunctionInfo info : entry.getValue())
         {
            System.err.println(info.id + ":\n" + info.source + "\n--------------\n");

            for (Map.Entry<Fuzzer.ArgList, Object> fuzzRes : info.fuzzRes.entrySet())
            {
               System.err.println(fuzzRes.getKey() + " -- " + fuzzRes.getValue());
            }
         }
      }
      */
   }

   public static void printSimMatrix(Map<Integer, Integer> idMap, double[][] simMatrix)
   {
      int size = idMap.size();

      System.out.print("      ");
      for (int j = 0; j < size; j++)
      {
         System.out.print(String.format("| %05d ", idMap.get(j)));
      }
      System.out.println();

      for (int i = 0; i < size; i++)
      {
         System.out.print(String.format("%05d ", idMap.get(i)));
         for (int j = 0; j < size; j++)
         {
            System.out.print(String.format("| %5.3f ", simMatrix[i][j]));
         }
         System.out.println();
      }
   }

   public static void buildSimMatrix(List<FunctionInfo> res, Map<Integer, Integer> idMap, double[][] simMatrix)
   {
      idMap.clear();

      for (int i = 0; i < res.size(); i++)
      {
         idMap.put(i, res.get(i).id);

         for (int j = 0; j <= i; j++)
         {
            simMatrix[i][j] = similarity(res.get(i).fuzzRes, res.get(j).fuzzRes);
         }
      }
   }

   private static class FunctionInfo
   {
      public Map<Fuzzer.ArgList, Object> fuzzRes;
      public String source;
      public int id;

      public FunctionInfo(int id, Map<Fuzzer.ArgList, Object> fuzzRes, String source)
      {
         this.fuzzRes = fuzzRes;
         this.source = source;
         this.id = id;
      }
   }

   // 1 point for same type
   // 1 point for equal values
   public static double similarity(Map<Fuzzer.ArgList, Object> a, Map<Fuzzer.ArgList, Object> b)
   {
      if (a.size() != b.size())
      {
         return -1;
      }

      int score = 0;
      int possibleScore = a.size() * 2;

      Object aVal;
      Object bVal;

      for (Fuzzer.ArgList key : a.keySet())
      {
         aVal = a.get(key);
         bVal = b.get(key);
         
         if (aVal == null || bVal == null)
         {
            if (aVal == null && bVal == null)
            {
               score += 2;
            }
         }
         else if (aVal.getClass() == bVal.getClass())
         {
            score++;
            if (aVal.equals(bVal))
            {
               score++;
            }
         }
      }

      return (double)score / possibleScore;
   }

   private List<String> getFileCode()
   {
      List<String> rtn = new ArrayList<String>();
      
      try
      {
         BufferedReader reader =
          new BufferedReader(new FileReader("examples/easyTopFunctions.js"));

         String res = "";
         String line;
         while ((line = reader.readLine()) != null)
         {
            res += line;
         }
         rtn.add(res);
      }
      catch (Exception ex)
      {
         System.err.println("Error reading file.");
         ex.printStackTrace(System.err);
      }

      return rtn;
   }

   public static String stringify(NativeObject obj)
   {
      String rtn = "";

      TreeSet<Object> keys = new TreeSet<Object>(new Comparator() {
         public int compare(Object a, Object b)
         {
            return a.toString().compareTo(b.toString());
         }
      });

      for (Object key : keys)
      {
         rtn += key.toString() + "-";
      }

      return rtn.replaceFirst("-$", "");
   }

   public static String stringify(NativeArray arr)
   {
      String rtn = "";

      for (Object obj : arr)
      {
         rtn += obj + "-";
      }

      return rtn.replaceFirst("-$", "");
   }

   public void insertResults(int id, Map<Fuzzer.ArgList, Object> results)
   {
      String insert = String.format("REPLACE INTO %s" +
       " (code_id, arg_sig, result_type, result)" + 
       " VALUES (%d, ?, ?, ?)",
       FUZZ_RUN_TABLE, id);
      PreparedStatement pStmt = null;

      try
      {
         pStmt = conn.prepareStatement(insert);

         for (Map.Entry<Fuzzer.ArgList, Object> entry : results.entrySet())
         {
            pStmt.setString(1, entry.getKey().toString());

            if (entry.getValue() == null)
            {
               pStmt.setString(2, "null");
               pStmt.setString(3, "null");
            }
            else if (entry.getValue().getClass().getSimpleName().equals("NativeObject"))
            {
               pStmt.setString(2, "NativeObject");
               pStmt.setString(3, stringify((NativeObject)(entry.getValue())));
            }
            else if (entry.getValue().getClass().getSimpleName().equals("NativeArray"))
            {
               pStmt.setString(2, "NativeArray");
               pStmt.setString(3, stringify((NativeArray)(entry.getValue())));
            }
            else if (entry.getValue().getClass().getSimpleName().equals("Undefined"))
            {
               pStmt.setString(2, "Undefined");
               pStmt.setString(3, "Undefined");
            }
            else if (entry.getValue().getClass().getSimpleName().equals("TimeoutException"))
            {
               pStmt.setString(2, "TimeoutException");
               pStmt.setString(3, "TimeoutException");
            }
            else if (entry.getValue().getClass().getSimpleName().equals("FuzzRuntimeError"))
            {
               pStmt.setString(2, "FuzzRuntimeError");
               pStmt.setString(3, "FuzzRuntimeError");
            }
            else
            {
               pStmt.setString(2, entry.getValue().getClass().getSimpleName());
               pStmt.setString(3, entry.getValue().toString());
            }

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

   private void getDBCode(int numParams,
    List<String> codes, List<Integer> ids)
   {
      String query = String.format("SELECT code, id" + 
       " FROM %s" +
       " WHERE num_params = %d" + 
       " ORDER BY id",
       EASY_FUNCTIONS_TABLE, numParams);
      Statement stmt = null;
      ResultSet res = null;

      try
      {
         stmt = conn.createStatement();
         res = stmt.executeQuery(query);

         while (res.next())
         {
            codes.add(res.getString(1));
            ids.add(res.getInt(2));
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
   }
}
