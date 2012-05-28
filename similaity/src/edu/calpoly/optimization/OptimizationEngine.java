package edu.calpoly.optimization;

import java.util.List;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;


public class OptimizationEngine {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// Static code
		String string = "try { d = data.a.b.c.d; } catch (e) {}";
		
		// Set up the Rhino parser
		CompilerEnvirons compilerEnvirons = new CompilerEnvirons();
		ErrorReporter errorReporter = compilerEnvirons.getErrorReporter();
		Parser parser = new Parser(compilerEnvirons, errorReporter);
		AstRoot astRoot = parser.parse(string, null, 0);

		/**
		 * TryStatementOptimization
		 */
		TryCatchOptimization tryCatchOpt = new TryCatchOptimization();
		List<AstNode> tryCatchStatements = tryCatchOpt.isOptimizable(astRoot);
		if (tryCatchStatements != null) {
			System.out.println(tryCatchStatements.size() + " Try Catch Optimization Available");
			System.out.println("-------\n");
			for (AstNode tryCatchBlock : tryCatchStatements) {
				tryCatchOpt.optimize(tryCatchBlock);
			}
			
			// Debug print
			System.out.println(astRoot.toSource());
			System.out.println(astRoot.debugPrint());
		}
	}
}
