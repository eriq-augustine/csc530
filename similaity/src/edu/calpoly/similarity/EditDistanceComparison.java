package edu.calpoly.similarity;

public class EditDistanceComparison implements ComparisonMetric
{
    /**
     *     * 0 = 100% different
     *         * 1 = 100% the same
     **/
    public double compare(String code1, String code2)
    {
        if (Math.abs(code1.length() -  code2.length()) >= 1000)
        {
            return 0;
        }

        if (code1.length() > 1000 || code2.length() > 1000)
        {
            return -1;
        }

        EditDistance ed = new EditDistance();
        return (1000.0 - ed.distance(code1,code2))/1000.0;
    }

    
}

