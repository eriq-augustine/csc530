package edu.calpoly.similarity.drivers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;

import java.util.List;
import java.util.ArrayList;

public class BuildAsts
{
   public static final String DB_USER = "crawler";
   public static final String DB_PASS = "ILoveData530";
   public static final String DB_URL = "jdbc:mysql://127.0.0.1:3306/js?autoReconnect=true";
   public static final String DB_DRIVER = "com.mysql.jdbc.Driver";
   public static final int PAGE_SIZE = 1000;

   public static final String MIN_CODE_TABLE = "min_top_code";

   public static final String TOP_SITES_TABLE = "top_sites";
   public static final String TOP_CODE_TABLE = "top_code";

   public static final String CODE_TABLE = "code"; 

   public static void main(String[] args) throws Exception
   {
      List<String> codes = new ArrayList<String>();
      List<Integer> ids = new ArrayList<Integer>();
      List<String> asts = new ArrayList<String>();
      int page = 0;
     
      getCode(page, codes, ids);
      page++;
      asts.clear();

      while (codes.size() > 0)
      {

         for (int i = 0; i < ids.size(); i++)
         {
            String ast = buildAST(codes.get(i));

            asts.add(ast);

            /*
            System.err.println("----------------------------");
            System.err.println("ID:\n" + ids.get(i) + "\n");
            System.err.println("Min:\n" + codes.get(i) + "\n");
            System.err.println("AST: " + ast + "\n");
            System.err.println("----------------------------");
            */
         }

         putCode(ids, asts);
         
         getCode(page, codes, ids);
         page++;
         asts.clear();
      }
   }

   public static String buildAST(String source) throws Exception
   {
      String rtn = "";

      try
      {
         //Context ctx = ContextFactory.getGlobal().makeContext();
         //Context ctx = Context.enter();
         CompilerEnvirons comEnvs = new CompilerEnvirons();
         //comEnvs.initFromContext(ctx);
         ErrorReporter errReporter = comEnvs.getErrorReporter();
         Parser parse = new Parser(comEnvs, errReporter);

         AstRoot root = parse.parse(source, "", 0);

         //Context.exit();

         rtn = root.debugPrint();
      }
      catch (Exception ex)
      {
      }

      return rtn;
   }

   private static void getCode(int page, List<String> code, List<Integer> ids)
   {
      String query = String.format("SELECT id, minified" + 
       " FROM %s" +
       " ORDER BY id" +
       " LIMIT %d, %d",
       MIN_CODE_TABLE,
       (PAGE_SIZE * page), PAGE_SIZE);
      Connection conn = null;
      Statement stmt = null;
      ResultSet res = null;

      code.clear();
      ids.clear();

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
            ids.add(res.getInt(1));
            code.add(res.getString(2));
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
  
   private static void putCode(List<Integer> ids, List<String> asts)
   {
      String insert = String.format("UPDATE IGNORE %s SET ast = ? WHERE id = ?",
       MIN_CODE_TABLE);
      Connection conn = null;
      PreparedStatement pStmt = null;

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
         pStmt = conn.prepareStatement(insert);

         for (int i = 0; i < ids.size(); i++)
         {
            pStmt.setString(1, asts.get(i));
            pStmt.setInt(2, ids.get(i));

            pStmt.addBatch();
         }

         pStmt.executeBatch();
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
            if (pStmt != null)
            {
               pStmt.close();
            }

            if (conn != null)
            {
               conn.close();
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
