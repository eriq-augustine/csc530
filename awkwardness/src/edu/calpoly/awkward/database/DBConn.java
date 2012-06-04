package edu.calpoly.awkward.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

public class DBConn {
   private static final boolean DEBUG = true;
   private static final String DB_USER = "csc530",
                               DB_PASS = "ILoveData530",
                               DB_URL = "jdbc:mysql://192.168.1.169:3306/js?autoReconnect=true",
                               DB_DRIVER = "com.mysql.jdbc.Driver";

   private static final String MIN_CODE_TABLE = "min_top_code",
                               TOP_SITES_TABLE = "top_sites",
                               TOP_CODE_TABLE = "top_code",
                               CODE_TABLE = "code";

   private static final String HASH_KEY = "hash",
                               SRC_KEY = "minified",
                               AST_KEY = "ast";

   private static DBConn mDBInterface = null;

   private Connection mConn;

   private DBConn() {
      if (DEBUG) { System.out.println("Initializing database connection"); }

      try {
         Class.forName(DB_DRIVER);
         mConn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
      }
      catch (Exception err) {
         System.err.println("Unable to establish DB Connection");
         err.printStackTrace(System.err);
         System.exit(1);
      }
   }

   public void disconnect() {
      try { if (mConn != null) { mConn.close(); } }
      catch (java.sql.SQLException sqlErr) {
         System.err.println("Error closing database connection");
         sqlErr.printStackTrace(System.err);
      }
   }

   public static DBConn getDBConnection() {
      if (mDBInterface == null) {
         mDBInterface = new DBConn();
      }

      return mDBInterface;
   }

   public List<Map<String, Object>> getJS(int startHint, int tupleLimit) {
      List<Map<String, Object>> jsTuples = new ArrayList<Map<String, Object>>();
      Statement statement = null;
      ResultSet results = null;

      String attrList = "hash, minified",
             tableList = MIN_CODE_TABLE,
             constraints = "hash is not null and id > " + startHint,
             groupingList = "hash",
             limit = tupleLimit > 0 ? ("limit " + tupleLimit) : ("");
             
      String query = String.format("SELECT %s FROM %s WHERE %s GROUP BY %s %s",
       attrList, tableList, constraints, groupingList, limit);

      try {
         statement = mConn.createStatement();
         results = statement.executeQuery(query);

         while (results.next()) {
            Map<String, Object> attrMap = new HashMap<String, Object>();

            attrMap.put(HASH_KEY, results.getString(1)); //Hashed ID of js
            attrMap.put(SRC_KEY, results.getString(2));  //minified Source code of js
            //attrMap.put(AST_KEY, results.getString(3));  //AST of js via Rhino

            jsTuples.add(attrMap);
         }
      }
      catch (Exception err) {
         System.err.println("Error retrieving results from database");
         err.printStackTrace(System.err);
         jsTuples = null;
      }

      finally {
         try {
            if (results != null) { results.close(); }
            if (statement != null) { statement.close(); }
         }
         catch (Exception err) {
            System.err.println("Unable to clean up after database query");
            err.printStackTrace(System.err);
         }
      }

      return jsTuples;
   }

   public static void main(String[] args) {
      DBConn conn = getDBConnection();

      System.out.println("Sample result set:");
      for (Map<String, Object> jsTuple : conn.getJS(10)) {
         System.out.print("\t");

         for (Map.Entry<String, Object> tupleAttr : jsTuple.entrySet()) {
            System.out.printf("\t%s = [%s]", tupleAttr.getKey(), String.valueOf(tupleAttr.getValue()));
         }

         System.out.println("");
      }

      System.out.println("Closing connection...");
      conn.disconnect();
   }
}
