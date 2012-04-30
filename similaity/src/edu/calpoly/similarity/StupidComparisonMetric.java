package edu.calpoly.similarity;

public class StupidComparisonMetric implements ComparisonMetric
{
   /**
    * @inheritDoc
    */
   public double compare(String code1, String code2)
   {
      int max = Math.max(code1.length(), code2.length());
      int diff = Math.abs(code1.length() - code2.length());
      return ((double)(max - diff)) / max;
   }
}
