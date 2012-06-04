package edu.calpoly.awkward.drivers;

import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;

import edu.calpoly.awkward.database.DBConn;

import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.List;

public class AwkwardAnalysis {
   private static final boolean DEBUG = true;
   private static final int DEFAULT_PAGE_SIZE = 500,
                            DEFAULT_NUM_WINDOWS = 1;

   private static final String HASH_KEY = "hash",
                               SRC_KEY = "minified";

   private int mMaxTuples, mDataPageSize;

   public AwkwardAnalysis(int maxTuples, int pageSize) {
      mMaxTuples = maxTuples;
      mDataPageSize = pageSize;
   }

   public AwkwardAnalysis() {
      this(-1, DEFAULT_PAGE_SIZE);
   }

   public int getPageSize() { return mDataPageSize; }
   public int getMaxTuples() { return mMaxTuples; }

   public void parseArgs(String[] args) {
      if (args.length % 2 != 0) {
         programError(ERR_CODE.ARGS);
      }

      for (int argNdx = 0; argNdx < args.length; argNdx++) {
         if (args[argNdx].equals("-max")) {
            mMaxTuples = Integer.parseInt(args[++argNdx]);
         }
      }
   }

   private void programError(ERR_CODE err) {
      String correctUsage = "java AwkwardAnalysis [-max <maxTuples>]";

      switch(err) {
         case ARGS:
            System.err.println("Error: arguments insensible. Cannot Compute");
            System.err.println(correctUsage);
            System.exit(1);
         default:
            System.err.println("Unknown Error");
            System.exit(1);
      }
   }

   private static AstRoot getAST(String code) {
      CompilerEnvirons comEnvs = new CompilerEnvirons();
      ErrorReporter errReporter = comEnvs.getErrorReporter();
      Parser parse = new Parser(comEnvs, errReporter);

      return parse.parse(code, "", 0); 
   }   


   public static void main(String[] args) {
      AwkwardAnalysis driver = new AwkwardAnalysis();
      driver.parseArgs(args);

      DBConn conn = DBConn.getDBConnection();
      List<Map<String, Object>> jsTuples = null;
      
      for (int dataWindow = 0; dataWindow < DEFAULT_NUM_WINDOWS;
       dataWindow += driver.getPageSize()) {
         if (DEBUG) { System.out.printf("Computing data window %d...\n", dataWindow); }

         Set<String> jsIds = new HashSet<String>();
         Set<Cluster> astClusters = new HashSet<ASTCluster>();
         Set<Cluster> srcClusters = new HashSet<SourceCodeCluster>();

         for (Map<String, Object> jsTuple : conn.getJS(dataWindow, driver.getPageSize())) {
            String jsId = String.valueOf(jsTuple.get(HASH_KEY));
            String minifiedCode = jsTuple.get(SRC_KEY);

            jsIds.add(jsId);

            astClusters.add(new ASTCluster(jsId, getAST(minifiedCode)));
            srcClusters.add(new SourceCodeCluster(jsId, minifiedCode));
         }

         if (DEBUG) { System.out.printf("JS data retrieved...\n"); }

         HierarchicalClusterer clusterer = new HierarchicalClusterer();

         if (DEBUG) { System.out.printf("Clustering data...\n"); }

         clusterer.clusterData(astClusters);
         Set<Cluster> astResultClusters = clusterer.getClusters();

         if (DEBUG) {
            for (Cluster astCluster : astResultClusters) {
               System.out.printf("astCluster(%s):\n%s\n",
                astCluster.getName(), astCluster);
            }
         }

         clusterer.clusterData(srcClusters);
         Set<Cluster> srcResultClusters = clusterer.getClusters();

         if (DEBUG) {
            for (Cluster srcCluster : srcResultClusters) {
               System.out.printf("srcCluster(%s):\n%s\n",
                srcCluster.getName(), srcCluster);
            }
         }

         for (String jsId : jsIds) {
            for (Cluster astCluster : astResultClusters) {
               if (astCluster.containsId(jsId)) { /*TODO*/ }
            }

            for (Cluster srcCluster : srcResultClusters) {
               if (srcCluster.containsId(jsId)) { /*TODO*/ }
            }
         }

      }

      //Finished iterating on data windows
   }

   private enum ERR_CODE {
      ARGS;
   }
}
