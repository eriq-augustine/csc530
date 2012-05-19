package edu.calpoly.similarity.fuzz;

import java.io.File;
import java.io.Reader;
import java.io.FileReader;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

import org.mozilla.javascript.Node;
import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;

import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;

public class Fuzzer
{
   public static void main(String[] argv) throws Exception
   {
      if (argv.length != 1)
      {
         System.err.println("Give js file as single param.");
         System.exit(1);
      }

      try
      {
      /*
         File file = new File(args[0]);
         Reader reader = new FileReader(file);
         Scriptable scope = context.initStandardObjects();

         Object result = context.evaluateReader(scope, reader,
          file.getCanonicalPath(), 0, null);

         System.out.println("Result: " + Context.toString(result));
      */
      
         File file = new File(argv[0]);
         Reader reader = new FileReader(file);

         CompilerEnvirons comEnvs = new CompilerEnvirons();
         ErrorReporter errReporter = comEnvs.getErrorReporter();

         Parser parse = new Parser(comEnvs, errReporter);
         AstRoot root = parse.parse(reader, file.getCanonicalPath(), 0);

         List<FunctionNode> funNodes = new ArrayList<FunctionNode>();
         collectFunctions(root, funNodes);

         for (FunctionNode funNode : funNodes)
         {
            System.out.println(funNode.debugPrint());

            Map<ArgList, Object> results = fuzz(funNode);
   
   /*
            Object[] args = new Object[execContext.paramNodes.size()];
            for (int i = 0; i < args.length; i++)
            {
               args[i] = i + 1;
            }

            Object res = execContext.function.call(
             execContext.context, execContext.scope, execContext.thisObj, args);

            System.out.println("Params: " + args + ", Res: " + Context.toString(res));

   */
            for (Map.Entry<ArgList, Object> entry : results.entrySet())
            {
               System.out.println(entry.getKey().toString() + "  :  " + Context.toString(entry.getValue()));
            }
         }

         //String tree = root.debugPrint();
         //System.out.println(tree);
      }
      catch (Exception ex)
      {
         System.err.println("Error evaluating.");
         ex.printStackTrace(System.err);
      }
      finally
      {
      }
   }

   public static Map<ArgList, Object> fuzz(FunctionNode funNode)
   {
      ExecutionContext execContext = prepFunction(funNode);
      Map<ArgList, Object> rtn = fuzz(execContext);
      execContext.context.exit();
      return rtn;
   }

   public static Map<ArgList, Object> fuzz(ExecutionContext context)
   {
      Object[] args = new Object[context.paramNodes.size()];
      ValueIterator[] choosers = new ValueIterator[args.length];
      Map<ArgList, Object> res = new HashMap<ArgList, Object>();
      recursiveFuzz(context, res, args, choosers, 0);

      return res;
   }

   private static void recursiveFuzz(ExecutionContext execContext,
    Map<ArgList, Object> res, Object[] args,
    ValueIterator[] choosers, int currentParam)
   {
      if (currentParam == args.length)
      {
         Object result = null;

         try
         {
            result = execContext.function.call(
             execContext.context, execContext.scope, execContext.thisObj, args);
         }
         catch (Exception ex)
         {
            result = new FuzzRuntimeError(ex);
         }
         
         res.put(new ArgList(args), result);
      }
      else
      {
         choosers[currentParam] = new SimpleValueIterator();
         //choosers[currentParam] = new FullValueIterator();
         for (Object value : choosers[currentParam])
         {
            args[currentParam] = value;
            recursiveFuzz(execContext, res, args, choosers, currentParam + 1);
         }
      }
   }

   public static class FuzzRuntimeError
   {
      public Exception ex;

      public FuzzRuntimeError(Exception ex)
      {
         this.ex = ex;
      }
   }

   public static class ArgList
   {
      private Object[] args;

      public ArgList(Object[] args)
      {
         this.args = new Object[args.length];
         for (int i = 0; i < args.length; i++)
         {
            this.args[i] = args[i];
         }
      }

      public boolean equals(Object otherObj)
      {
         if (otherObj == null || !(otherObj instanceof ArgList))
         {
            return false;
         }

         ArgList other = (ArgList)otherObj;

         if (args.length != other.args.length)
         {
            return false;
         }

         for (int i = 0; i < args.length; i++)
         {
            if (args[i] == null && other.args[i] == null)
            {
               continue;
            }
            else if (args[i] == null || other.args[i] == null)
            {
               return false;
            }
            else if (!args[i].equals(other.args[i]))
            {
               return false;
            }
         }

         return true;
      }

      public int hashCode()
      {
         int rtn = 1;
         for (Object obj : args)
         {
            rtn *= obj.hashCode();
         }

         return rtn;
      }

      public String toString()
      {
         String rtn = "";
         for (Object obj : args)
         {
            rtn += "(" + obj.toString() + ")_";
         }
         
         return rtn.replaceFirst("_$", "");
      }
   }

   public static ExecutionContext prepFunction(FunctionNode funNode)
   {
      ExecutionContext context = new ExecutionContext();
      context.funNode = funNode;
      context.paramNodes = funNode.getParams();
      context.context = Context.enter();
      context.scope = context.context.initStandardObjects();
      context.thisObj = context.context.newObject(context.scope);
      context.source = funNode.toSource();
      context.function = context.context.compileFunction(context.scope, context.source, "SourceName", 0, null);
      return context;
   }

   // Only top-level functions
   public static void collectFunctions(AstNode node, List<FunctionNode> funs)
   {
      if (node instanceof FunctionNode)
      {
         funs.add((FunctionNode)node);
      }
      else
      {
         Iterator<Node> it = node.iterator();
         while (it.hasNext())
         {
            collectFunctions(((AstNode)(it.next())), funs);
         }
      }
   }

   public static class ExecutionContext
   {
      public AstNode funNode;
      public List<AstNode> paramNodes;
      public String source;
      public Context context;
      public Scriptable scope;
      public Scriptable thisObj;
      public Function function;
   }
}
