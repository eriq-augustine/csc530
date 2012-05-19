package edu.calpoly.compressor;

import com.yahoo.platform.yui.compressor.JavaScriptCompressor;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.EvaluatorException;

import java.security.MessageDigest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import java.io.Reader;
import java.io.StringReader;
import java.io.Writer;
import java.io.StringWriter;

import org.mozilla.javascript.Token;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ScriptOrFnNode;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;

import java.util.List;
import java.util.ArrayList;

public class CompressDB
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

   private static MessageDigest md = null;

   public static void main(String[] args) throws Exception
   {
      List<String> codes = new ArrayList<String>();
      List<Integer> ids = new ArrayList<Integer>();
      List<String> minCodes = new ArrayList<String>();
      List<String> hashes = new ArrayList<String>();
      int page = 0;
     
      getCode(page, codes, ids);
      page++;
      minCodes.clear();
      hashes.clear();

      int count = 0;

      while (codes.size() > 0)
      {

         for (int i = 0; i < ids.size(); i++)
         {
            String min = compress(codes.get(i));
            String sha1 = hash(min);

            minCodes.add(min);
            hashes.add(sha1);

            /*
            System.err.println("----------------------------");
            System.err.println("ID:\n" + ids.get(i) + "\n");
            System.err.println("Code:\n" + codes.get(i) + "\n");
            System.err.println("Min:\n" + min + "\n");
            System.err.println("Hash: " + sha1 + "\n");
            System.err.println("----------------------------");
            */
         }

         count += ids.size();
         System.out.println("Total: " + count);

         putCode(ids, minCodes, hashes);
         
         getCode(page, codes, ids);
         page++;
         minCodes.clear();
         hashes.clear();
      }
   }

   public static String compress(String source) throws Exception
   {
      String minified = null;

      try
      {
         Reader reader = new StringReader(source);
         JavaScriptCompressor compressor = new JavaScriptCompressor(reader, new YuiCompressorErrorReporter());
         
         Writer writer = new StringWriter();
         compressor.compress(writer, -1, false, false, false, false);
         minified = writer.toString();
      }
      catch (Exception ex)
      {
      }

      if (minified == null || minified.length() == 0)
      {
         return source;
      }
      
      return minified;
   }

   /*
   public static String buildAST(String source) throws Exception
   {
      //Context ctx = ContextFactory.getGlobal().makeContext();
      //Context ctx = Context.enter();
      CompilerEnvirons comEnvs = new CompilerEnvirons();
      //comEnvs.initFromContext(ctx);
      ErrorReporter errReporter = comEnvs.getErrorReporter();
      Parser parse = new Parser(comEnvs, errReporter);

      ScriptOrFnNode root = parse.parse(source, "", 1);

      //TEST
      System.out.println(Token.printTrees + "\n" + root);

      String rtn = root.toStringTree(root);

      //TEST
      System.out.println(rtn);

      //Context.exit();

      return rtn;
   }
   */

   public static String hash(String source) throws Exception
   {
      if (md == null)
      {
         md = MessageDigest.getInstance("SHA-1");
      }
      else
      {
         md.reset();
      }

      return byteArrayToHexString(md.digest(source.getBytes()));
   }

   public static String byteArrayToHexString(byte[] b) throws Exception 
   {
      String result = "";
      for (int i = 0; i < b.length; i++) 
      {
         result +=
          Integer.toString(( b[i] & 0xff ) + 0x100, 16).substring( 1 );
      }
      return result;
   }
    
   private static void getCode(int page, List<String> code, List<Integer> ids)
   {
      String query = String.format("SELECT id, code" + 
       " FROM %s" +
       " ORDER BY id" +
       " LIMIT %d, %d",
       TOP_CODE_TABLE,
       (PAGE_SIZE * page), PAGE_SIZE);
      /*
      String query = String.format("SELECT code" + 
       " FROM %s" +
       " ORDER BY time_crawled" +
       " LIMIT %d, %d",
       CODE_TABLE,
       (PAGE_SIZE * page), PAGE_SIZE);
       */
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
  
   private static void putCode(List<Integer> ids, List<String> minCodes, List<String> hashes)
   {
      String insert = String.format("INSERT IGNORE INTO %s (id, minified, hash) VALUES (?, ?, ?)",
       MIN_CODE_TABLE);
      Connection conn = null;
      PreparedStatement pStmt = null;

      //TEST
      System.out.println("Inserting: " + ids.size());

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
            pStmt.setInt(1, ids.get(i));
            pStmt.setString(2, minCodes.get(i));
            pStmt.setString(3, hashes.get(i));

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

   private static class YuiCompressorErrorReporter implements ErrorReporter {
    public void warning(String message, String sourceName, int line, String lineSource, int lineOffset) {
        /*
        if (line < 0) {
            logger.log(Level.WARNING, message);
        } else {
            logger.log(Level.WARNING, line + ':' + lineOffset + ':' + message);
        }
        */
    }
 
    public void error(String message, String sourceName, int line, String lineSource, int lineOffset) {
        /*
        if (line < 0) {
            logger.log(Level.SEVERE, message);
        } else {
            logger.log(Level.SEVERE, line + ':' + lineOffset + ':' + message);
        }
        */
    }
 
    public EvaluatorException runtimeError(String message, String sourceName, int line, String lineSource, int lineOffset) {
        error(message, sourceName, line, lineSource, lineOffset);
        return new EvaluatorException(message);
    }
}
}
