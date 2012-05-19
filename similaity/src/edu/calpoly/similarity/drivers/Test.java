package edu.calpoly.similarity.drivers;

import java.io.File;
import java.io.Reader;
import java.io.FileReader;

import org.mozilla.javascript.Parser;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.CompilerEnvirons;
import org.mozilla.javascript.ErrorReporter;

public class Test
{
   public static void main(String[] args) throws Exception
   {
      if (args.length != 1)
      {
         System.err.println("Give js file as single param");
         System.exit(1);
      }

      File file = new File(args[0]);
      Reader reader = new FileReader(file);

      CompilerEnvirons comEnvs = new CompilerEnvirons();
      ErrorReporter errReporter = comEnvs.getErrorReporter();

      Parser parse = new Parser(comEnvs, errReporter);
      AstRoot root = parse.parse(reader, file.getCanonicalPath(), 0);
      String tree = root.debugPrint();
      System.out.println(tree);
   }
}
