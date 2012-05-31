package edu.calpoly.optimization;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;


public class OptimizationEngine {

	public static final String DB_USER = "csc530";
	public static final String DB_PASS = "ILoveData530";
	public static final String DB_URL = "jdbc:mysql://24.176.224.133:3306/js";
	public static final String DB_DRIVER = "com.mysql.jdbc.Driver";

	public static final String TOP_SITES_TABLE = "top_sites";
	public static final String TOP_CODE_TABLE = "top_code";

	public static final int NUM_CODE = 25;
	
	static int totalOptimizations = 0;
	static int totalPotentialOptimizations = 0;
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// Static code
		String string = "try { d = data.a.b.c.d; f = window.a.b.c; } catch (e) {}";
		
		optimizeCode(string);
		
//		List<String> codes = getCode(NUM_CODE);
//		int numOptimizations = 0;
//		
//		for (String code : codes) {
//			try {
//				// TODO: Print source of optimization
//				if (optimizeCode(code)) {
//					System.out.println("Optimization Successfull");
//					numOptimizations++;
//				}
//			} catch (Exception e) {
//				System.err.println("Failure: " + e.getMessage());
//			}
//		}
//		
//		System.out.println(numOptimizations + " optimizations happened!");
//		System.out.println(totalOptimizations + " Total Optimizations!");
//		System.out.println(totalPotentialOptimizations + " Total Potential Optimizations!");
	}
	
	private static Boolean optimizeCode(String code) {
		
		// Root Node
		AstRoot astRoot;
		
		try {
			// Set up the Rhino parser
			CompilerEnvirons compilerEnvirons = new CompilerEnvirons();
			ErrorReporter errorReporter = compilerEnvirons.getErrorReporter();
			Parser parser = new Parser(compilerEnvirons, errorReporter);
			astRoot = parser.parse(code, null, 0);
		} catch (Exception e) {
			System.err.println("Code Parse Error: " + e.getMessage());
			return false;
		}
		
		/**
		 * TryStatementOptimization
		 */
		TryCatchOptimization tryCatchOpt = new TryCatchOptimization();
		List<AstNode> tryCatchStatements = tryCatchOpt.isOptimizable(astRoot);
		totalOptimizations += tryCatchOpt.totalOptimizations;
		totalPotentialOptimizations += tryCatchOpt.totalPotentialOptimizations;
		if (tryCatchStatements != null) {
//			System.out.println(tryCatchStatements.size() + " Try Catch Optimization Available");
			System.out.println("-------\n");
			for (AstNode tryCatchBlock : tryCatchStatements) {
				tryCatchOpt.optimize(tryCatchBlock);
			}
			
			// Debug print
			System.out.println(astRoot.toSource());
//			System.out.println(astRoot.debugPrint());
			
			return true;
		}

		return false;
	}
	
	/**
	 * Gets the code from the top sites.
	 * @param num
	 * @return list of all code strings
	 */
	private static List<String> getCode(int num) {
		List<String> rtn = new ArrayList<String>();
		String query = String.format("SELECT code" + 
				" FROM %s c JOIN %s s ON (c.origin = s.id)" +
				" WHERE s.rank <= %d" + 
				" ORDER BY s.rank, c.url, c.position",
				TOP_CODE_TABLE, TOP_SITES_TABLE, num);
		Connection conn = null;
		Statement stmt = null;
		ResultSet res = null;

		try {
			Class.forName(DB_DRIVER);
			conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
		}
		catch (Exception ex) {
			System.err.println("Error establishing DB connection.");
			ex.printStackTrace(System.err);
			System.exit(1);
		}

		try {
			stmt = conn.createStatement();
			res = stmt.executeQuery(query);

			while (res.next()) {
				rtn.add(res.getString(1));
			}
		}
		catch (Exception ex) {
			System.err.println("Error getting code.");
			ex.printStackTrace(System.err);
		}
		finally {
			try {
				if (res != null) {
					res.close();
				}

				if (stmt != null) {
					stmt.close();
				}
			}
			catch (Exception ex) {
				System.err.println("Error Closing DB.");
				ex.printStackTrace(System.err);
			}
		}

		return rtn;
	}
}
