package edu.calpoly.similarity;

import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.Node;

import treedist.*;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.ArrayList;

public class TreeEditDistComparison implements ComparisonMetric
{
    /**
     *     * 0 = 100% different
     *     * 1 = 100% the same
     **/
    public double compare(String code1, String code2)
    {
        //CREATE AST's
        AstRoot root1 = getAST(code1);
        AstRoot root2 = getAST(code2);

        //CREATE NODE -> LABEL MAP
        //HashMap<String, Integer> labelMap = createLabelMap(root1, root2);

        //CREATE PARENT/LABEL ARRAYS
        List<NodeData> toVisit1 = new ArrayList<NodeData>();
        List<Integer> parents1 = new ArrayList<Integer>();
        List<Integer> labels1 = new ArrayList<Integer>();
        NodeData data = new NodeData();
        data.id = 0;
        data.itr = root1.iterator();
        parents1.add(-1);
        parents1.add(root1.getType());
        toVisit1.add(data);
        int nextId = 1;
       
        //WHILE the are still nodes to visit
        while(toVisit1.size() != 0)
        {
            NodeData d = toVisit1.get(0);
            int id = d.id;
            Iterator<Node> itr = d.itr;
            while(itr.hasNext())
            {
                Node n = itr.next();
                NodeData newData = new NodeData();
                newData.id = nextId;
                newData.itr = n.iterator();
                toVisit1.add(newData);
                nextId++;
                parents1.add(id);
                labels1.add(n.getType());
            }
            toVisit1.remove(0);
        }

        List<NodeData> toVisit2 = new ArrayList<NodeData>();
        List<Integer> parents2 = new ArrayList<Integer>();
        List<Integer> labels2 = new ArrayList<Integer>();
        data = new NodeData();
        data.id = 0;
        data.itr = root2.iterator();
        parents2.add(-1);
        parents2.add(root2.getType());
        toVisit2.add(data);
        nextId = 1;
       
        //WHILE the are still nodes to visit
        while(toVisit2.size() != 0)
        {
            NodeData d = toVisit2.get(0);
            int id = d.id;
            Iterator<Node> itr = d.itr;
            while(itr.hasNext())
            {
                Node n = itr.next();
                NodeData newData = new NodeData();
                newData.id = nextId;
                newData.itr = n.iterator();
                toVisit2.add(newData);
                nextId++;
                parents2.add(id);
                labels2.add(n.getType());
            }
            toVisit2.remove(0);
        }
        
        LabeledTree t1 = new LabeledTree(toArr(parents1), toArr(labels1));
	LabeledTree t2 = new LabeledTree(toArr(parents2), toArr(labels2));
	TreeEditDistance dist = new TreeEditDistance(new ScoreImpl(t1, t2));
	Mapping map = new Mapping(t1, t2);
	double d = dist.calc(t1, t2, map);
        //System.out.println("DISTANCE = " + d);

        //RETURN DISTANCE
        return (100.0 - d) / 100.0;
    }

    private AstRoot getAST(String code)
    {
	CompilerEnvirons comEnvs = new CompilerEnvirons();
        ErrorReporter errReporter = comEnvs.getErrorReporter();
        Parser parse = new Parser(comEnvs, errReporter);

        return parse.parse(code, "", 0);
    }

    private int[] toArr(List<Integer> list)
    {
        int[] arr = new int[list.size()];

        for(int i = 0; i < list.size(); i++)
        {
  	    arr[i] = list.get(i);
        }
        
        return arr;
    }

    private class NodeData
    {
        public int id;
        public Iterator<Node> itr;
    }

    class ScoreImpl implements EditScore {
	private final LabeledTree tree1, tree2;

	public ScoreImpl(LabeledTree tree1, LabeledTree tree2) {
		this.tree1 = tree1;
		this.tree2 = tree2;
	}

	@Override
	public double replace(int node1, int node2) {
		if (tree1.getLabel(node1) == tree2.getLabel(node2)) {
			return 0;
		} else {
			return 1;
		}
	}

	@Override
	public double insert(int node2) {
		return 1;
	}

	@Override
	public double delete(int node1) {
		return 1;
	}
    }   
}

