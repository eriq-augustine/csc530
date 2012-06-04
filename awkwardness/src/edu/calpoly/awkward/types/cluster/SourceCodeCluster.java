package edu.calpoly.awkward.types.cluster;

import edu.calpoly.awkward.types.Cluster;

import org.mozilla.javascript.ast.AstRoot;

import java.util.Map;

public class SourceCodeCluster<String> extends Cluster {

   public SourceCodeCluster() {
      super();
   }

   public SourceCodeCluster(String hashId, String firstElement) {
      super(hashId, firstElement);
   }

   private double averageEditSim(EditDistanceComparison editSim,
    SourceCodeCluster otherCluster) {
      double total = 0, numComparisons = 0;

      for (Map.Entry<String, AstRoot> entry_A : mData.entrySet()) {
         for (Map.Entry<String, AstRoot> entry_B : otherCluster.mData.entrySet()) {
            total += editSim.compare(entry_A.getValue(), entry_B.getValue());
            numComparisons++;
         }
      }

      return total/numComparisons;
   }

   public double compareTo(Cluster otherCluster) {
      if (otherCluster instanceof SourceCodeCluster) {
         return averageEditSim(new EditDistanceComparison(),
                               (SourceCodeCluster) otherCluster);
      }

      //return super.compareTo(otherCluster);
      return -1;
   }
}
