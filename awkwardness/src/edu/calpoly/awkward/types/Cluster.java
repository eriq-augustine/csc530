package edu.calpoly.awkward.types;

import treedist.Tree;

import java.util.Map;
import java.util.HashMap;

public abstract class Cluster<E> {
   private static int CLUSTER_NUM = 0;

   protected String mName;
   protected Map<String, E> mData;

   public Cluster() {
      mName = String.format("Cluster %d", CLUSTER_NUM++);
      mData = new HashMap<String, E>();
   }

   public Cluster(String hashId, E firstElement) {
      this();

      mData.put(hashId, firstElement);
   }

   public String getName() {
      return mName;
   }

   public Map<String, E> getData() {
      return mData;
   }

   public void addData(String hashId, E element) {
      mData.put(hashId, element);
   }

   public boolean containsId(String hashId) {
      return mData.containsKey(hashId);
   }

   public abstract double compareTo(Cluster otherCluster);
      /*
      Set<E> dataUnion = new HashSet<E>();
      int intersectSize = 0;

      for (Map.Entry<String, E> entry_A : mData.entrySet()) {
         for (Map.Entry<String, E> entry_B : otherCluster.mData.entrySet()) {
            if (entry_A.getKey().equals(entry_B.getKey())) {

            }
         }
      }
      */

   public String toString() {
      String printStr = "";

      for (Map.Entry<String, E> entry : mData.entrySet()) {
         printStr += String.format("\t%s (%s)\n", entry.getKey(), entry.getValue());
      }

      return printStr;
   }
}
