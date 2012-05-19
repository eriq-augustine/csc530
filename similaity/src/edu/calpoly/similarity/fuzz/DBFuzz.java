package edu.calpoly.similarity.fuzz;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

import org.mozilla.javascript.Node;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;

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

   public static final int NUM_CODE = 5;

   public static void main(String[] args)
   {
      List<String> codes = getCode(NUM_CODE);

      Map<Integer, List<FunctionInfo>> fuzzResults = new HashMap<Integer, List<FunctionInfo>>();

      for (String code : codes)
      {
         try
         {
            CompilerEnvirons comEnvs = new CompilerEnvirons();
            ErrorReporter errReporter = comEnvs.getErrorReporter();
            Parser parser = new Parser(comEnvs, errReporter);

            AstRoot root = parser.parse(code, "", 0);
            List<FunctionNode> funNodes = new ArrayList<FunctionNode>();
            Fuzzer.collectFunctions(root, funNodes);

            //TEST
            System.out.println(root.debugPrint());
            System.out.println("\n\n-----------------\n");
            System.err.println(code);

            for (FunctionNode funNode : funNodes)
            {
               Map<Fuzzer.ArgList, Object> results = Fuzzer.fuzz(funNode);
               FunctionInfo info = new FunctionInfo(results, code);

               int numParams = funNode.getParams().size();
               if (!fuzzResults.containsKey(numParams))
               {
                  fuzzResults.put(numParams, new ArrayList<FunctionInfo>());
               }

               fuzzResults.get(numParams).add(info);

               //TEST
               System.out.println(funNode.debugPrint());
            }
            
            //TEST
            System.exit(0);
         }
         catch (Exception ex)
         {
            //Error
         }
      }

      for (Map.Entry<Integer, List<FunctionInfo>> entry : fuzzResults.entrySet())
      {
         System.err.println("---- " + entry.getKey() + " Params ----");
         for (FunctionInfo info : entry.getValue())
         {
            System.err.println(info.id + ":\n" + info.source + "\n--------------\n");

            for (Map.Entry<Fuzzer.ArgList, Object> fuzzRes : info.fuzzRes.entrySet())
            {
               System.out.println(fuzzRes.getKey() + " -- " + fuzzRes.getValue());
            }
         }
      }

      //TEST
   }

   private static class FunctionInfo
   {
      public static int idCount = 0;

      public Map<Fuzzer.ArgList, Object> fuzzRes;
      public String source;
      public int id;

      public FunctionInfo(Map<Fuzzer.ArgList, Object> fuzzRes, String source)
      {
         this.fuzzRes = fuzzRes;
         this.source = source;
         id = idCount++;
      }
   }

   private static List<String> getCode(int num)
   {
      List<String> rtn = new ArrayList<String>();
      String query = String.format("SELECT code" + 
       " FROM %s c JOIN %s s ON (c.origin = s.id)" +
       //" WHERE s.rank <= %d" + 
       //" ORDER BY s.rank, c.url, c.position",
       " ORDER BY RAND() LIMIT %d",
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
