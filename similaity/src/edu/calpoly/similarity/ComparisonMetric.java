package edu.calpoly.similarity;

public interface ComparisonMetric
{
   /**
    * 0 = 100% different
    * 1 = 100% the same
    */
   public double compare(String code1, String code2);
}
