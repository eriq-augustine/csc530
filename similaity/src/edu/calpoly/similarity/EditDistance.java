/*
 * Kevin Watson
 * Ryan Verdon
 */
package edu.calpoly.similarity;

import java.util.Scanner;

public class EditDistance {

    public enum ActionTaken
    {
        Copy, Insert, DeleteFirst, DeleteSecond, Replace, Swap, BlankAdjust, ChangeCase, None
    }
    char[] _From, _To;
    MyObject[][] _Array;

    class MyObject
    {
        ActionTaken action;
        int solution;
        String whatWeDid;
        int blanks;
        boolean vert;
        MyObject()
        {
            action=ActionTaken.None;
            solution=0;
            whatWeDid=new String("");
            vert=true;
        }
    }

    /**
     * @param args the command line arguments
     */
    /*public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        (new EditDistance()).Solve(input.nextLine(), input.nextLine());
        //(new EditDistance()).Solve("The quick brown fox jumped  over the  lazy dog.", "Now   is the   time for all  good men     to come to    the aid of their   country!");
    }
*/
    public int Solve(String fromStr, String toStr)
    {
        _Array=new MyObject[toStr.length()+1][fromStr.length()+1];
        char[] temp;

        temp=fromStr.toCharArray();
        _From=new char[temp.length+1];
        for(int i=0; i<temp.length; i++)
            _From[i+1]=temp[i];
        _From[0]=0;

        temp=toStr.toCharArray();
        _To=new char[temp.length+1];
        for(int i=0; i<temp.length; i++)
            _To[i+1]=temp[i];
        _To[0]=0;

        for(int i=0; i<_Array.length; i++)
            for(int j=0; j<_Array[i].length; j++)
            {
                _Array[i][j]=new MyObject();
            }

        for(int i=0; i<_To.length; i++)
            for(int j=0; j<_From.length; j++)
            {
                FillCell(i, j);
            }
        //PrintArray();
        //PrintResult();
        return 0;
    }

    private void PrintArray()
    {
        System.out.print("\t");
        for(int i=0; i<_To.length; i++)
            System.out.print(String.format("%c\t", _To[i]));
        System.out.println();
        for(int j=0; j<_From.length; j++){
            System.out.print(String.format("%c\t", _From[j]));
            for(int i=0; i<_To.length; i++){
                System.out.print(String.format("%d\t", _Array[i][j].solution));
            }
            System.out.println();
        }
    }

    private void PrintResult()
    {
        String output="";
        int i, j;
        i=_To.length-1;
        j=_From.length-1;
        ActionTaken lastAction;
        System.out.println(String.format("Best cost is: %d", _Array[i][j].solution));
        while(i!=0 || j!=0)
        {
            output=_Array[i][j].whatWeDid+output;
            lastAction=_Array[i][j].action;
            if(lastAction==ActionTaken.BlankAdjust)
            {
                if(_Array[i][j].vert)
                {
                    j-=_Array[i][j].blanks;
                    i--;
                }
                else
                {
                    i-=_Array[i][j].blanks;
                    j--;
                }
            }
            else if(lastAction==ActionTaken.ChangeCase || lastAction==ActionTaken.Copy || lastAction==ActionTaken.Replace)
            {
                i--;
                j--;
            }
            else if(lastAction==ActionTaken.DeleteFirst)
            {
                j--;
            }
            else if(lastAction==ActionTaken.DeleteSecond)
            {
                j-=2;
            }
            else if(lastAction==ActionTaken.Insert)
            {
                i--;
            }
            else if(lastAction==ActionTaken.Swap)
            {
                i-=2;
                j-=2;
            }
            else{
                System.out.print(output);
                System.out.println("something bad happened");
                System.exit(1);
            }
        }
        System.out.print(output);
    }

    private void FillCell(int i, int j)
    {
        int lowest=Integer.MAX_VALUE, temp;
        char from, to;
        to=_To[i];
        from=_From[j];
        //Copy Insert Delete Replace Swap AdjustBlanks ChangeCase

        //Copy check
        if(i > 0 && j>0)
        {
            temp=Copy(from, to);
            if(temp!=-1)
            {
                temp+=_Array[i-1][j-1].solution;
                if(temp<lowest)
                {
                    lowest=SetMyObject(_Array[i][j], ActionTaken.Copy, temp);
                    _Array[i][j].whatWeDid=String.format("Copy '%c' unchanged\n", _From[j]);
                }
            }
        }
        //Insert check
        if(i>0)
        {
            temp=Insert() + _Array[i-1][j].solution;
            if(temp<lowest)
            {
                lowest=SetMyObject(_Array[i][j],ActionTaken.Insert, temp);
                _Array[i][j].whatWeDid=String.format("Insert '%c'\n", _To[i]);
            }
        }
        //Delete check
        if(j>1)
        {
            temp=DeleteSecond();
            if(temp!=-1){
                temp+=_Array[i][j-2].solution;
                if(temp<lowest)
                {
                    lowest=SetMyObject(_Array[i][j], ActionTaken.DeleteSecond, temp);
                    _Array[i][j].whatWeDid=String.format("Delete two chars\n");
                }
            }
        }
        if(j>0)
        {
            temp=Delete();
            if(temp!=-1)
            {
                temp+=_Array[i][j-1].solution;
                if(temp<lowest)
                {
                    lowest=SetMyObject(_Array[i][j], ActionTaken.DeleteFirst, temp);
                    _Array[i][j].whatWeDid=String.format("Delete one char\n");
                }
            }
        }
        //Replace check
        if(i>0 && j>0)
        {
            temp=Replace() + _Array[i-1][j-1].solution;
            if(temp<lowest)
            {
                lowest=SetMyObject(_Array[i][j], ActionTaken.Replace, temp);
                _Array[i][j].whatWeDid=String.format("Replace '%c' with '%c'\n", _From[j], _To[i]);
            }
        }
        //Swap check
        if(i>0 && j>0)
        {
            temp=Swap(i, j);
            if(temp!=-1)
            {
                temp+=_Array[i-2][j-2].solution;
                if(temp<lowest)
                {
                    lowest=SetMyObject(_Array[i][j], ActionTaken.Swap, temp);
                    _Array[i][j].whatWeDid=String.format("Swap '%c%c' to '%c%c'\n", _From[j-1], _From[j], _To[i-1], _To[i]);
                }
            }
        }
        //Adjust blanks check
        if((temp=AdjustBlanks(i, j))!=-1 && temp<lowest)
        {
            lowest=SetMyObject(_Array[i][j], ActionTaken.BlankAdjust, temp);
            if(_Array[i][j].vert)
                _Array[i][j].whatWeDid=String.format("Convert %d blanks to 1 blanks\n", _Array[i][j].blanks);
            else
                _Array[i][j].whatWeDid=String.format("Convert 1 blanks to %d blanks\n", _Array[i][j].blanks);
        }
        //ChangeCase check
        if(i>0 && j>0)
        {
            temp=ChangeCase(from, to);
            if(temp!=-1)
            {
                temp+=_Array[i-1][j-1].solution;
                if(temp<lowest)
                {
                    lowest=SetMyObject(_Array[i][j], ActionTaken.ChangeCase, temp);
                    _Array[i][j].whatWeDid=String.format("Convert case from '%c' to '%c'\n", _From[j], _To[i]);
                }
            }
        }
    }

    private static final int SetMyObject(MyObject obj, ActionTaken action, int temp)
    {
        obj.action=action;
        obj.solution=temp;

        return temp;
    }

    private static final int Copy(char from, char to)
    {
        return from==to?0:-1;
    }

    private static final int Delete()
    {
        return 3;
    }

    private final int DeleteSecond()
    {
        return 3;
    }

    private static final int Insert()
    {
        return 2;
    }

    private final int Swap(int i, int j)
    {
        char from, to, lastFrom, lastTo;
        from=_From[j];
        to=_To[i];
        lastFrom=_From[j-1];
        lastTo=_To[i-1];
        return to==lastFrom && from==lastTo?1:-1;
    }

    private static final int Replace()
    {
        return 3;
    }

    private static final int ChangeCase(char from, char to)
    {
        return Character.toUpperCase(from)==Character.toUpperCase(to) && Character.isLetter(to)?1:-1;
    }

    private int AdjustBlanks(int i, int j)
    {
        char from, to;
        int k,tempBlank, tempSol;
        from=_From[j];
        to=_To[i];
        if(to!=from || to!=' ')
            return -1;
        for(k=j-1; k>=0; k--)
            if(_From[k]!=' ')
                break;
        //_Array[i][j].blanks=j-k;
        tempBlank=j-k;
        tempSol=2 + _Array[i-1][k].solution;

        for(k=i-1; k>=0; k--)
            if(_To[k]!=' ')
                break;
        if(2+_Array[k][j-1].solution<tempSol)
        {
            _Array[i][j].blanks=i-k;
            _Array[i][j].vert=false;
            return 2+_Array[k][j-1].solution;
        }
        else
        {
            _Array[i][j].blanks=tempBlank;
            return tempSol;
        }
        //_Array[i][j].blanks=i-k;
        //_Array[i][j].vert=false;
        //return k>1?2+_Array[k][j-1].solution:-1;

        //return 2 + _Array[i-1][k].solution;
    }
}
