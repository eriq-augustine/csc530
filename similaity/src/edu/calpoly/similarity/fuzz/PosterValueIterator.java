package edu.calpoly.similarity.fuzz;

public class PosterValueIterator extends ValueIterator
{
   private final static int INT_START = -100;
   private final static int INT_END = 100;
   private final static int INT_INC = 10;

   private final static double DOUBLE_START = -1.0;
   private final static double DOUBLE_END = 1.0;
   private final static double DOUBLE_INC = 0.1;

   private final static char STRING_START = '0';
   private final static char STRING_END = 'Z';

   private int currentInt;
   private double currentDouble;
   private char currentString;

   public PosterValueIterator()
   {
      currentInt = INT_START;
      currentDouble = Double.MAX_VALUE;
      currentString = '~';
   }

   public boolean hasNext()
   {
      return currentInt <= INT_END ||
             currentDouble <= DOUBLE_END ||
             currentString <= STRING_END;
   }

   public Object next()
   {
      Object rtn = null;

      if (currentInt <= INT_END)
      {
         rtn = new Integer(currentInt);
         currentInt += INT_INC;

         if (currentInt > INT_END)
         {
            currentDouble = DOUBLE_START;
         }
      }
      else if (currentDouble <= DOUBLE_END)
      {
         rtn = new Double(currentDouble);
         currentDouble += DOUBLE_INC;

         if (currentDouble > DOUBLE_END)
         {
            currentString = STRING_START;
         }
      }
      else if (currentString <= STRING_END)
      {
         rtn = new String("" + currentString);
         currentString++;
      }

      return rtn;
   }
}
