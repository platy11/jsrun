var editor = ace.edit("jsrun-ace");
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/javascript");
    editor.$blockScrolling = Infinity
    editor.setValue("// Hello, world!\n// Put code here and press run!\n\nfor (var a = 1; a < 4; a++) {\n alert('Alert no:' + a)\n};")

var jsrun = {};

jsrun.clear = function () {
  editor.setValue("")
}
