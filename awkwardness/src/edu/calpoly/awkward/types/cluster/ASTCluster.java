package edu.calpoly.awkward.types.cluster;

import edu.calpoly.awkward.types.Cluster;
import edu.calpoly.similarity.TreeEditDistComparison;

import org.mozilla.javascript.ast.AstRoot;

import java.util.Map;

public class ASTCluster<AstRoot> extends Cluster {

   public ASTCluster() {
      super();
   }

   public ASTCluster(String hashId, AstRoot firstElement) {
      super(hashId, firstElement);
   }

   private double averageTreeSim(TreeEditDistComparison treeSim,
    ASTCluster otherCluster) {
      double total = 0, numComparisons = 0;

      for (Map.Entry<String, AstRoot> entry_A : mData.entrySet()) {
         for (Map.Entry<String, AstRoot> entry_B : otherCluster.mData.entrySet()) {
            total += treeSim.compare(entry_A.getValue(), entry_B.getValue());
            numComparisons++;
         }
      }

      return total/numComparisons;
   }

   public double compareTo(Cluster otherCluster) {
      if (otherCluster instanceof ASTCluster) {
         return averageTreeSim(new TreeEditDistComparison(),
                               (ASTCluster) otherCluster);
      }

      //return otherCluster.compareTo(this);
      return -1;
   }
}
