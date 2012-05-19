package edu.calpoly.similarity.fuzz;

import java.util.Iterator;

public abstract class ValueIterator implements Iterator<Object>, Iterable<Object>
{
   /*
   public boolean hasNext()
   public Object next()
   */

   public void remove()
   {
      throw new UnsupportedOperationException();
   }

   public Iterator<Object> iterator()
   {
      return this;
   }
}
