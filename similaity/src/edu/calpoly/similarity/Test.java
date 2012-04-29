package edu.calpoly.similarity;

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
      System.err.println("START");

      String code = "var x = 3 + 4;";
      File file = new File("examples/NervousText.js");
      Reader reader = new FileReader(file);

      CompilerEnvirons comEnvs = new CompilerEnvirons();
      ErrorReporter errReporter = comEnvs.getErrorReporter();

      Parser parse = new Parser(comEnvs, errReporter);
      //AstRoot root = parse.parse(code, "http://www.foo.com/bar", 1);
      AstRoot root = parse.parse(reader, file.getCanonicalPath(), 0);
      String tree = root.debugPrint();
      System.out.println(tree);
   }
}
