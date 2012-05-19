package edu.calpoly.similarity.drivers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import java.util.List;
import java.util.ArrayList;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import edu.calpoly.similarity.fuzz.Fuzzer;
import edu.calpoly.similarity.fuzz.ValueIterator;
import edu.calpoly.similarity.fuzz.SimpleValueIterator;

import org.mozilla.javascript.Node;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;

import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;

import org.mozilla.javascript.tools.shell.Global;
import org.mozilla.javascript.ContextFactory;

public class GetEasyFunctions
{
   public static final String DB_USER = "crawler";
   public static final String DB_PASS = "ILoveData530";
   public static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/js?autoReconnect=true";
   public static final String DB_DRIVER = "com.mysql.jdbc.Driver";
   public static final int PAGE_SIZE = 100;
   public static final int TIMEOUT_MS = 500;

   public static final String TOP_SITES_TABLE = "top_sites";
   public static final String TOP_CODE_TABLE = "top_code";
   
   public static final String CODE_TABLE = "code";

   public static final int NUM_FUNCTIONS = 100;

   private static ExecutorService executor = Executors.newSingleThreadExecutor();

   private static Pattern pattern = 
    Pattern.compile("(jquery)|(document)|(window)|(\\$)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);

   public static void main(String[] args)
   {
      List<String> easyFunctions = new ArrayList<String>();
      int page = 0;
      boolean done = false;

      while (easyFunctions.size() < NUM_FUNCTIONS)
      {
         List<String> codes = getCode(page);

         if (codes.size() == 0)
         {
            System.out.println("Breaking early, done with db.");
            System.exit(0);
         }

         page++;

         for (String code : codes)
         {
            try
            {
               CompilerEnvirons comEnvs = new CompilerEnvirons();
               ErrorReporter errReporter = comEnvs.getErrorReporter();

               Parser parse = new Parser(comEnvs, errReporter);
               AstRoot root = parse.parse(code, "", 0);
               List<FunctionNode> funNodes = new ArrayList<FunctionNode>();
               Fuzzer.collectFunctions(root, funNodes);

               for (FunctionNode funNode : funNodes)
               {
                  String funCode = funNode.toSource();
                  
                  if (isValid(funCode) &&
                      hasSuccessfulRun(funCode, funNode.getParams().size()))
                  {
                     easyFunctions.add(funCode);

                     System.err.println(funCode + "\n\n");

                     if (easyFunctions.size() == NUM_FUNCTIONS)
                     {
                        done = true;
                        break;
                     }
                  }
                  else
                  {
                     System.out.println("Rejected");
                  }
               }
            }
            catch (Exception ex)
            {
            }
            
            if (done)
            {
               break;
            }
         }
      }

      /*
      for (String easyFunction : easyFunctions)
      {
         System.out.println(easyFunction + "\n\n");
      }
      */
   }

   private static boolean hasSuccessfulRun(String code, int numParams)
   {
      final String finalCode = new String(code);
      final int finalNumParams = numParams;

      Future<Boolean> future = executor.submit(new Callable<Boolean>() {
         public Boolean call() throws Exception
         {
            Global global = new Global();
            Context context = ContextFactory.getGlobal().enterContext();
            global.init(context);
            context.setOptimizationLevel(-1);
            context.setLanguageVersion(Context.VERSION_1_5);

            Scriptable scope = context.initStandardObjects(global);
            Function fun = context.compileFunction(scope, finalCode, "", 0, null);
            Scriptable thisObj = context.newObject(scope);
            Object[] args = new Object[finalNumParams];
            ValueIterator[] choosers = new ValueIterator[finalNumParams];

            return recursiveRunCheck(context, fun, scope, thisObj, args, choosers, 0);
         }
      });
   
      try
      {
         return future.get(TIMEOUT_MS, TimeUnit.MILLISECONDS);
      }
      catch (Exception ex)
      {
         return false;
      }
   }

   private static boolean recursiveRunCheck(Context context, Function fun, Scriptable scope, Scriptable thisObj,
    Object[] args, ValueIterator[] choosers, int currentParam)
   {
      if (currentParam == args.length)
      {
         try
         {
            fun.call(context, scope, thisObj, args);
            return true;
         }
         catch (Exception ex)
         {
         }
      }
      else
      {
         choosers[currentParam] = new SimpleValueIterator();
         for (Object value : choosers[currentParam])
         {
            args[currentParam] = value;
            if (recursiveRunCheck(context, fun, scope, thisObj, args, choosers, currentParam + 1))
            {
               return true;
            }
         }
      }

      return false;
   }

   private static boolean isValid(String code)
   {
      Matcher m = pattern.matcher(code);
      return !m.find();
   }

   private static List<String> getCode(int page)
   {
      List<String> rtn = new ArrayList<String>();
      /*
      String query = String.format("SELECT code" + 
       " FROM %s c JOIN %s s ON (c.origin = s.id)" +
       " ORDER BY s.rank, c.url, c.position" +
       " LIMIT %d, %d",
       TOP_CODE_TABLE, TOP_SITES_TABLE,
       (PAGE_SIZE * page), PAGE_SIZE);
       */
      String query = String.format("SELECT code" + 
       " FROM %s" +
       " ORDER BY time_crawled" +
       " LIMIT %d, %d",
       CODE_TABLE,
       (PAGE_SIZE * page), PAGE_SIZE);
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
