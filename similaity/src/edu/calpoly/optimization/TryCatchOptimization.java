package edu.calpoly.optimization;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.Node;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.Token;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.Block;
import org.mozilla.javascript.ast.CatchClause;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.NodeVisitor;
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.TryStatement;

public class TryCatchOptimization implements OptimizationMetric {

	@Override
	public List<AstNode> isOptimizable(AstRoot code) {
		// Create a new List of AstNodes
		List<AstNode> optimizableNodes = new ArrayList<AstNode>();
		AllNodeVisitor nodeVisitor = new AllNodeVisitor();
		nodeVisitor.optimizableNodes = optimizableNodes;
		code.visitAll(nodeVisitor);
		
		if (optimizableNodes.size() > 0) {
			return optimizableNodes;
		} else {
			return null;
		}
	}

	@Override
	public void optimize(AstNode node) {
		// Given a TryStatement
		if (node.getType() != Token.TRY) {
			System.out.println("Error");
			return;
		}

		TryStatement tryStmt = (TryStatement)node;
		
		// Analyze and fix try statement
		AstNode tryBlock = tryStmt.getTryBlock();
		List<GetPropPair> propList = new ArrayList<GetPropPair>();
		
		TryNodeVisitor tryNodeVisitor = new TryNodeVisitor();
		tryNodeVisitor.propList = propList;
		tryBlock.visit(tryNodeVisitor);
		
		System.out.println("List of Get Properties:");
		for (GetPropPair prop : propList) {
			System.out.println(prop.getObject() + " - " + prop.getProperty());
		}
		System.out.println();
		
		// Add the null checker function before the TCF Block
		tryStmt.getParent().addChildBefore(createNullCheckerFunction(), tryStmt);
		tryStmt.getParent().replaceChild(tryStmt, createNullCheck(propList, tryStmt));
	}
	
	class TryNodeVisitor implements NodeVisitor {
		List<GetPropPair> propList;
		
		@Override
		public boolean visit(AstNode node) {

			// Look for all PropertyGet Nodes with GETPROP
			switch (node.getType()) {
				case Token.GETPROP:
					PropertyGet getProp = (PropertyGet)node;
					
					GetPropVisitor propVisitor = new GetPropVisitor();
					getProp.visit(propVisitor);
					propList.addAll(propVisitor.getPropPairs());
					
					return false;
				default:
					break;
			}
			
			return true;
		}
	}
	
	class GetPropVisitor implements NodeVisitor {
		List<String> properties;
		String object;
		
		public GetPropVisitor () {
			this.properties = new ArrayList<String>();
		}
		
		@Override
		public boolean visit(AstNode node) {
			
			switch (node.getType()) {
				case Token.GETPROP:
					this.properties.add(((PropertyGet)node).getProperty().getIdentifier());
					
					if (((PropertyGet)node).getTarget().getType() == Token.NAME) {
						this.object = ((Name)((PropertyGet)node).getTarget()).getIdentifier();
					}
					
					break;
				case Token.NAME:
					break;
				default:
					break;
			}
			
			return true;
		}
		
		public List<GetPropPair> getPropPairs() {
			List<GetPropPair> propPairs = new ArrayList<GetPropPair>();
			
			propPairs.add(new GetPropPair(this.object, this.properties.get(this.properties.size()-1)));
			
			String dataString = this.object;
			for(int i = this.properties.size()-2; i >= 0; i--) {
				dataString += "." + this.properties.get(i+1);
				propPairs.add(new GetPropPair(dataString, this.properties.get(i)));
			}
			
			return propPairs;
		}
	}
	
	class AllNodeVisitor implements NodeVisitor {
		List<AstNode> optimizableNodes;
		
		@Override
		public boolean visit(AstNode node) {
			
			switch (node.getType()) {
				case Token.TRY:
					System.out.println("-------");
					System.out.println(node.toSource());
					System.out.print(node.debugPrint());

					TryStatement tryNode = (TryStatement)node;
					if (isOptimizable(tryNode)) {
						optimizableNodes.add(tryNode);
					}	
					
					break;
				default:
					break;
			}
						
			return true;
		}
	}
	
	private Boolean isOptimizable(TryStatement tryNode) {
		/**
		 * Try Catch Finally Block format in JS:
		 * https://developer.mozilla.org/en/JavaScript/Reference/Statements/try...catch
		 * try
		 * catch (can be multiple, can have conditions)
		 * finally (gets called w or w/o catch)
		 */
		
		// Ignore Multiple catch clauses
		List<CatchClause> catchClauses = tryNode.getCatchClauses();
		if (catchClauses.size() > 1) {
			return false;
		}
		// Ignore Catch Conditions
		if (catchClauses.get(0).getCatchCondition() != null) {
			return false;
		}
		// Ignore Finally Block
		if (tryNode.getFinallyBlock() != null) {
			return false;
		}
		
		Block catchBlock = catchClauses.get(0).getBody();
		
		// Method 1: Analyze depth of catchCondition.
		Iterator<Node> itr = catchBlock.iterator();
		if (itr.hasNext()) {
			return false;
		}
		
		// Method 2: Analyze catchCondtion for all uses of the exception.
		
		return true;
	}
		
	private AstNode createNullCheck(List<GetPropPair> propList, AstNode tryNode) {
		String isNotNull = "";

		for (int i = 0; i < propList.size(); i++) {
			isNotNull += "isNotNull(" + propList.get(i).getObject() + ", \"" + propList.get(i).getProperty() + "\")";
			if (i != propList.size()-1) {
				isNotNull += " && ";
			}
		}
		
		String nullCheck = "if (" + isNotNull + ") { " + ((TryStatement)tryNode).getTryBlock().toSource() + " }";

		System.out.println(((TryStatement)tryNode).getTryBlock().debugPrint());
		
		// Set up the Rhino parser
		CompilerEnvirons compilerEnvirons = new CompilerEnvirons();
		ErrorReporter errorReporter = compilerEnvirons.getErrorReporter();
		Parser parser = new Parser(compilerEnvirons, errorReporter);
		AstRoot ast = parser.parse(nullCheck, null, 0);
		
		return (AstNode) ast.getFirstChild();
	}
	
	private AstNode createNullCheckerFunction() {
		String nullCheckerFunction = "function isNotNull(data, property) { " +
				"return data.hasOwnProperty(property) && typeof data[property] " +
				"!= \"undefined\" && data[property] != null; }";
		
		// Set up the Rhino parser
		CompilerEnvirons compilerEnvirons = new CompilerEnvirons();
		ErrorReporter errorReporter = compilerEnvirons.getErrorReporter();
		Parser parser = new Parser(compilerEnvirons, errorReporter);
		AstRoot ast = parser.parse(nullCheckerFunction, null, 0);
		
		return (AstNode) ast.getFirstChild();
	}
}
