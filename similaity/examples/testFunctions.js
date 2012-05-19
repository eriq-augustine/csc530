function update_alexa(a) {
   var a = a;
   document.getElementById("graph_image").innerHTML = '<img class="thumb2" id="alexa_thumb" width="594" height="220" src="' + a + '" alt="" border="0" />'
}

    function submitform() {
        document.forms["myform"].submit()
    }
    function checkTab(a) {
        if (document.all && 9 == event.keyCode) {
            a.selection = document.sxelection.createRange();
            setTimeout("processTab('" + a.id + "')", 0)
        }
    }


