package edu.calpoly.awkward.clusterers;

import edu.calpoly.awkward.types.Cluster;

import java.util.Set;
import java.util.HashSet;

public class HierarchicalClusterer {
   private static final double DEFAULT_THRESHOLD = 0.5;
   private Set<Cluster> mClusters;
   private double mThreshold;

   public HierarchicalClusterer(double simThreshold) {
      mClusters = null;
      mThreshold = simThreshold;
   }

   public HierarchicalClusterer() {
      this(DEFAULT_THRESHOLD);
   }

   public Set<Cluster> getClusters() {
      return mClusters;
   }

   public void clusterData(Set<Cluster> clusterSet) {
      boolean done = false;
      mClusters = new HashSet<Cluster>(clusterSet);

      if (mClusters.size() <= 1) { return; }
      Cluster[] closeClusters = findCloseClusters(mClusters);

      while (mClusters.size() > 1 && closeClusters != null) {
         mClusters = combineCloseClusters(closeClusters, mClusters);

         closeClusters = findCloseClusters(mClusters);
      }
   }

   protected Set<Cluster> combineCloseClusters(Cluster[] closeClusters, Set<Cluster> clusterSet) {
      Set<Cluster> newClusterSet = new HashSet<Cluster>(clusterSet.size() - 1);

      newClusterSet.add(Cluster.combine(closeClusters[0], closeClusters[1]));
      for (Cluster clust : clusterSet) {
         if (!clust.equals(closeClusters[0]) && !clust.equals(closeClusters[1])) {
            newClusterSet.add(clust);
         }
      }

      return newClusterSet;
   }

   protected Cluster[] findCloseClusters(Set<Cluster> clusterSet) {
      Cluster[] closeClusters = null;
      double closeSim = mThreshold;

      for (Cluster clust_A : clusterSet) {
         for (Cluster clust_B : clusterSet) {
            if (clust_A.equals(clust_B)) { continue; }

            double similarity = clust_A.compareTo(clust_B);

            if (similarity > closeSim) {
               closeSim = similarity;
               closeClusters = new Cluster[] { clust_A, clust_B };
            }
         }
      }

      return closeClusters;
   }
}
