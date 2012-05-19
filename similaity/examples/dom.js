load('lib/env.rhino.js');
Envjs.scriptTypes['text/javascript'] = true;

window.location = 'examples/blank.html'
//window.location = 'http://localhost:8080';

function appendDom() {
   //var node = document.createElement('div');
   //node.setAttribute('id', 'test');
   //node.id = 'test';
   //document.write("<div id='test'></div>");
}

function modDom() {
   document.getElementById("_eriq_test_").innerHTML = "TEXT";
   //document.getElementById("test").innerHTML = "TEXT";
   //document.getElementsByTagName("div")[0].innerHTML = "TEXT";
}

appendDom();
modDom();
document.getElementById("_eriq_test_").innerHTML;
