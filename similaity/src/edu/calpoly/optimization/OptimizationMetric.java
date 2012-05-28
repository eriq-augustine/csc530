package edu.calpoly.optimization;

import java.util.List;

import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;

public interface OptimizationMetric {

	public List<AstNode> isOptimizable(AstRoot code);
	
	public void optimize(AstNode code);
	
}
