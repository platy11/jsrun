window.onerror = function(msg, url, line, col, error) {
   console.log(msg+url+line+col+error);
   return true;
};

var editor = ace.edit("jsrun-ace");
    editor.getSession().setUseWorker(false);
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/javascript");
    editor.$blockScrolling = Infinity;
    editor.setValue("// Hello, world!\n// Put code here and press run!\n\n" +
          "for (var a = 1; a < 4; a++) {\n alert('Alert no:' + a);\n}");

var jsrun = {};

jsrun.clear = function () {
  editor.setValue("")
}

jsrun.run = function () {
  try {
    var a = Function(editor.getValue())();
    console.log("[jsrun] code returned: " + a);
    console.log("[jsrun] typeof returned: " + typeof a);
  } catch (e) {
    if (e instanceof SyntaxError) {
      // console.log("[jsrun] code error");
      console.error("[jsrun] code error: SyntaxError: " + e.message);
    } else if (e instanceof ReferenceError) {
      // console.log("[jsrun] code error");
      console.error("[jsrun] code error: ReferenceError: " + e.message);
    } else if (e instanceof TypeError) {
      // console.log("[jsrun] code error");
      console.error("[jsrun] code error: TypeError: " + e.message);
    } else {
      // console.log("[jsrun] code error");
      console.error("[jsrun] code error: other: " + e.message);
    }
  }
}

document.getElementsByClassName('clear')[0].addEventListener("click", function (event) {
  jsrun.clear();
});

document.getElementsByClassName('run')[0].addEventListener("click", function (event) {
  jsrun.run();
});
