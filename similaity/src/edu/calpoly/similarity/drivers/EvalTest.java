package edu.calpoly.similarity.drivers;

import java.io.File;
import java.io.Reader;
import java.io.FileReader;

import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;

import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.Context;

import org.mozilla.javascript.tools.shell.Global;
import org.mozilla.javascript.ContextFactory;

import org.mozilla.javascript.tools.shell.Main;

public class EvalTest
{
   public static void main(String[] args) throws Exception
   {
      if (args.length != 1)
      {
         System.err.println("Give js file as single param.");
         System.exit(1);
      }

      Global global = new Global();
      Context context = ContextFactory.getGlobal().enterContext();
      global.init(context);
      context.setOptimizationLevel(-1);
      context.setLanguageVersion(Context.VERSION_1_5);

      try
      {
         File file = new File(args[0]);
         Reader reader = new FileReader(file);
         Scriptable scope = context.initStandardObjects(global);

         Object result = context.evaluateReader(scope, reader,
          file.getCanonicalPath(), 0, null);

         System.out.println("Result: " + Context.toString(result));
      }
      catch (Exception ex)
      {
         System.err.println("Error evaluating.");
         ex.printStackTrace(System.err);
      }
      finally
      {
         Context.exit();
      }
   }
}
