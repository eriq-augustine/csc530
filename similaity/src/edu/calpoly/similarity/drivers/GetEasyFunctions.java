package edu.calpoly.similarity.drivers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
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
   public static final int MAX_PARAMS = 3;

   public static final String TOP_SITES_TABLE = "top_sites";
   public static final String TOP_CODE_TABLE = "top_code";
   public static final String EASY_FUNCTIONS_TABLE = "easy_functions";
   
   public static final String CODE_TABLE = "code";

   public static final int NUM_FUNCTIONS = 10000;

   private ExecutorService executor;
   private Pattern pattern;
   private Connection conn;
   private int numEasyFunctions;

   public static void main(String[] args)
   {
      GetEasyFunctions easy = new GetEasyFunctions();
      easy.run();
      System.exit(0);
   }

   public void run()
   {
      int page = 0;
      boolean done = false;
               
      CompilerEnvirons comEnvs = new CompilerEnvirons();
      ErrorReporter errReporter = comEnvs.getErrorReporter();
      Parser parse;

      AstRoot root;
      List<FunctionNode> funNodes = new ArrayList<FunctionNode>();

      String code = null;
      int id;

      List<Integer> ids = new ArrayList<Integer>();
      List<String> codes = new ArrayList<String>();

      while (numEasyFunctions < NUM_FUNCTIONS)
      {
         ids.clear();
         codes.clear();
         getCode(page, ids, codes);

         if (codes.size() == 0)
         {
            System.err.println("Breaking early, done with db.");
            return;
         }

         page++;

         for (int i = 0; i < codes.size(); i++)
         {
            code = codes.get(i);
            id = ids.get(i).intValue();
            funNodes.clear();

            try
            {
               parse = new Parser(comEnvs, errReporter);
               root = parse.parse(code, "", 0);
               Fuzzer.collectFunctions(root, funNodes);
               String funCode = null;

               for (FunctionNode funNode : funNodes)
               {
                  if (funNode.getParams().size() > MAX_PARAMS)
                  {
                     continue;
                  }

                  funCode = funNode.toSource();
                  
                  if (isValid(funCode) &&
                      hasSuccessfulRun(funCode, funNode.getParams().size()))
                  {
                     numEasyFunctions++;
                     insertFunction(id, funCode);

                     System.out.println(funCode + "\n\n");
                     System.err.println("A - " + id);

                     if (numEasyFunctions == NUM_FUNCTIONS)
                     {
                        done = true;
                        break;
                     }
                  }
                  else
                  {
                     System.err.println("R - " + id);
                  }
                  
                  funCode = null;
               }

               root = null;
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
   }

   public GetEasyFunctions()
   {
      numEasyFunctions = 0;
      pattern = 
         Pattern.compile("(jquery)|(document)|(window)|(\\$)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);
      executor = Executors.newSingleThreadExecutor();
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

   private boolean hasSuccessfulRun(String code, int numParams)
   {
      final String finalCode = code;
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
  
      boolean rtn = false;
      try
      {
         rtn = future.get(TIMEOUT_MS, TimeUnit.MILLISECONDS);
         future = null;
      }
      catch (Exception ex)
      {
      }

      return rtn;
   }

   private boolean recursiveRunCheck(Context context, Function fun, Scriptable scope, Scriptable thisObj,
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
         choosers[currentParam] = null;
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

   private boolean isValid(String code)
   {
      Matcher m = pattern.matcher(code);
      boolean rtn = !m.find();
      m = null;
      return rtn;
   }

   private void insertFunction(int id, String code)
   {
      String insert = String.format(
       "INSERT IGNORE INTO %s (code_id, code) VALUES (%d, ?)",
       EASY_FUNCTIONS_TABLE, id);
      PreparedStatement pStmt = null;

      try
      {
         pStmt = conn.prepareStatement(insert);
         pStmt.setString(1, code);
         pStmt.execute();
      }
      catch (Exception ex)
      {
         System.err.println("Error inserting (" + id + ", " + code + ") into db.");
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
         pStmt = null;
      }
   }

   private void getCode(int page, List<Integer> ids, List<String> codes)
   {
      String query = String.format("SELECT id, code" + 
       " FROM %s" +
       " ORDER BY id" +
       " LIMIT %d, %d",
       CODE_TABLE,
       (PAGE_SIZE * page), PAGE_SIZE);
      Statement stmt = null;
      ResultSet res = null;

      try
      {
         stmt = conn.createStatement();
         res = stmt.executeQuery(query);

         while (res.next())
         {
            ids.add(res.getInt(1));
            codes.add(res.getString(2));
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
         res = null;
         stmt = null;
      }
   }
}
