{function confirmPost(){var a=confirm("Are you sure you want to delete?");if(a)return true;else return false}function update_alexa(a){var a=a;document.getElementById("graph_image").innerHTML='<img class="thumb2" id="alexa_thumb" width="594" height="220" src="'+a+'" alt="" border="0" />'}function submitform(){document.forms["myform"].submit()}function checkTab(a){if(document.all&&9==event.keyCode){a.selection=document.selection.createRange();setTimeout("processTab('"+a.id+"')",0)}}function processTab(a){document.all[a].selection.text=String.fromCharCode(9);document.all[a].focus()}function setSelectionRange(a,b,c){if(a.setSelectionRange){a.focus();a.setSelectionRange(b,c)}else if(a.createTextRange){var d=a.createTextRange();d.collapse(true);d.moveEnd("character",c);d.moveStart("character",b);d.select()}}function replaceSelection(a,b){if(a.setSelectionRange){var c=a.selectionStart;var d=a.selectionEnd;a.value=a.value.substring(0,c)+b+a.value.substring(d);if(c!=d){setSelectionRange(a,c,c+b.length)}else{setSelectionRange(a,c+b.length,c+b.length)}}else if(document.selection){var e=document.selection.createRange();if(e.parentElement()==a){var f=e.text=="";e.text=b;if(!f){e.moveStart("character",-b.length);e.select()}}}}function catchTab(a,b){if(navigator.userAgent.match("Gecko")){c=b.which}else{c=b.keyCode}if(c==9){var d=a.scrollTop;replaceSelection(a,String.fromCharCode(9));stopEvent(b);a.scrollTop=d;return false}}function stopEvent(a){if(a.preventDefault){a.preventDefault()}if(a.stopPropagation){a.stopPropagation()}a.stopped=true}function fliprows(a,b){var c=document.getElementsByTagName("tr");var d;for(d=0;d<c.length;d++){var e=c.item(d);if(e.className==a)e.className=b}}function showold(){fliprows("new","hidenew");fliprows("hideold","old");document.getElementById("oldlink").style.background="#ddd";document.getElementById("newlink").style.background="";document.getElementById("bothlink").style.background=""}function shownew(){fliprows("hidenew","new");fliprows("old","hideold");document.getElementById("oldlink").style.background="";document.getElementById("newlink").style.background="#ddd";document.getElementById("bothlink").style.background=""}function showboth(){fliprows("hidenew","new");fliprows("hideold","old");document.getElementById("oldlink").style.background="";document.getElementById("newlink").style.background="";document.getElementById("bothlink").style.background="#ddd"}var js={text:{lines:function(a){return this.getLines(a).length},getLines:function(a){var b=a.split("\n");return b}},textElement:{value:function(a){return a.value.replace(/\r/g,"")},caretPosition:function(a){var b={};if(document.selection){var c=document.selection.createRange();var d=document.body.createTextRange();d.moveToElementText(a);var e;for(e=0;d.compareEndPoints("StartToStart",c)<0;e++){d.moveStart("character",1)}b.start=e;b.end=e+c.text.replace(/\r/g,"").length}else if(a.selectionStart||a.selectionStart==0){b.start=a.selectionStart;b.end=a.selectionEnd}return b},setCaretPosition:function(a,b){a.focus();if(a.setSelectionRange){a.setSelectionRange(b.start,b.end)}else if(a.createTextRange){var c=a.createTextRange();c.moveStart("character",b.start);c.moveEnd("character",b.end);c.select()}}}};function highlight(a){var b=js.textElement.caretPosition(a);if(!b.start&&!b.end)return;var c=js.text.getLines(js.textElement.value(a));var d=0,e=0;var f="";var g=false;var h=0;for(var i in c){e=d+c[i].length;if(b.start>=d&&b.start<=e)g=true;if(g){var j=c[i].substr(0,3)=="@h@";if(!h){if(j)h=1;else h=2}if(h==1&&j)c[i]=c[i].substr(3,c[i].length-3);else if(h==2&&!j)f+="@h@"}f=f+c[i]+"\n";if(b.end>=d&&b.end<=e)g=false;d=e+1}a.value=f.substring(0,f.length-1);var k=b.start+(h==1?-3:3);js.textElement.setCaretPosition(a,{start:k,end:k})}function togglev(){if(document.getElementsByTagName("ol")[0].style.listStyle.substr(0,4)=="none"){document.getElementsByTagName("ol")[0].style.listStyle="decimal";document.getElementsByTagName("ol")[0].style.paddingLeft="48px"}else{document.getElementsByTagName("ol")[0].style.listStyle="none";document.getElementsByTagName("ol")[0].style.paddingLeft="5px"}}function getElementsByClassName(a,b){if(a.getElementsByClassName){return a.getElementsByClassName(b)}else{return function c(a,b){if(b==null)b=document;var c=[],d=b.getElementsByTagName("*"),e=d.length,f=new RegExp("(^|\\s)"+a+"(\\s|$)"),g,h;for(g=0,h=0;g<e;g++){if(f.test(d[g].className)){c[h]=d[g];h++}}return c}(b,a)}}function togglew(a){var b=getElementsByClassName(document,a),c=b.length;for(var d=0;d<c;d++){var e=b[d];if(e.style.whiteSpace=="nowrap"){e.style.whiteSpace="normal"}else{e.style.whiteSpace="nowrap"}}}function twitpopup(a){window.open("http://twitter.com/share?url=http://pastebin.com"+a+"&via=pastebin","tweet","height=340,width=550,resizable=1")}function facebookpopup(a){window.open("http://facebook.com/sharer.php?u=http://pastebin.com"+a,"facebook","height=340,width=660,resizable=1")}}{(function(a){a.fn.zclip=function(b){if(typeof b=="object"&&!b.length){var c=a.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:true,setHandCursor:true,setCSSEffects:true},b);return this.each(function(){var b=a(this);if(b.is(":visible")&&(typeof c.copy=="string"||a.isFunction(c.copy))){ZeroClipboard.setMoviePath(c.path);var d=new ZeroClipboard.Client;if(a.isFunction(c.copy)){b.bind("zClip_copy",c.copy)}if(a.isFunction(c.beforeCopy)){b.bind("zClip_beforeCopy",c.beforeCopy)}if(a.isFunction(c.afterCopy)){b.bind("zClip_afterCopy",c.afterCopy)}d.setHandCursor(c.setHandCursor);d.setCSSEffects(c.setCSSEffects);d.addEventListener("mouseOver",function(a){b.trigger("mouseenter")});d.addEventListener("mouseOut",function(a){b.trigger("mouseleave")});d.addEventListener("mouseDown",function(e){b.trigger("mousedown");if(!a.isFunction(c.copy)){d.setText(c.copy)}else{d.setText(b.triggerHandler("zClip_copy"))}if(a.isFunction(c.beforeCopy)){b.trigger("zClip_beforeCopy")}});d.addEventListener("complete",function(d,e){if(a.isFunction(c.afterCopy)){b.trigger("zClip_afterCopy")}else{if(e.length>500){e=e.substr(0,500)+"...\n\n("+(e.length-500)+" characters not shown)"}b.removeClass("hover");alert("Copied text to clipboard:\n\n "+e)}if(c.clickAfter){b.trigger("click")}});d.glue(b[0],b.parent()[0]);a(window).bind("load resize",function(){d.reposition()})}})}else{if(typeof b=="string"){return this.each(function(){var c=a(this);b=b.toLowerCase();var d=c.data("zclipId");var e=a("#"+d+".zclip");if(b=="remove"){e.remove();c.removeClass("active hover")}else{if(b=="hide"){e.hide();c.removeClass("active hover")}else{if(b=="show"){e.show()}}}})}}}})(jQuery);var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){if(typeof a=="string"){a=document.getElementById(a)}if(!a.addClass){a.hide=function(){this.style.display="none"};a.show=function(){this.style.display=""};a.addClass=function(a){this.removeClass(a);this.className+=" "+a};a.removeClass=function(a){var b=this.className.split(/\s+/);var c=-1;for(var d=0;d<b.length;d++){if(b[d]==a){c=d;d=b.length}}if(c>-1){b.splice(c,1);this.className=b.join(" ")}return this};a.hasClass=function(a){return!!this.className.match(new RegExp("\\s*"+a+"\\s*"))}}return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,b,c){var d=this.clients[a];if(d){d.receiveEvent(b,c)}},register:function(a,b){this.clients[a]=b},getDOMObjectPosition:function(a,b){var c={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};if(a&&a!=b){c.left+=a.offsetLeft;c.top+=a.offsetTop}return c},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);if(a){this.glue(a)}}};ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(a,b,c){this.domElement=ZeroClipboard.$(a);var d=99;if(this.domElement.style.zIndex){d=parseInt(this.domElement.style.zIndex,10)+1}if(typeof b=="string"){b=ZeroClipboard.$(b)}else{if(typeof b=="undefined"){b=document.getElementsByTagName("body")[0]}}var e=ZeroClipboard.getDOMObjectPosition(this.domElement,b);this.div=document.createElement("div");this.div.className="zclip";this.div.id="zclip-"+this.movieId;$(this.domElement).data("zclipId","zclip-"+this.movieId);var f=this.div.style;f.position="absolute";f.left=""+e.left+"px";f.top=""+e.top+"px";f.width=""+e.width+"px";f.height=""+e.height+"px";f.zIndex=d;if(typeof c=="object"){for(addedStyle in c){f[addedStyle]=c[addedStyle]}}b.appendChild(this.div);this.div.innerHTML=this.getHTML(e.width,e.height)},getHTML:function(a,b){var c="";var d="id="+this.id+"&width="+a+"&height="+b;if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+a+'" height="'+b+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+d+'"/><param name="wmode" value="transparent"/></object>'}else{c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+b+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+d+'" wmode="transparent" />'}return c},hide:function(){if(this.div){this.div.style.left="-2000px"}},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.domElement=null;this.div=null}},reposition:function(a){if(a){this.domElement=ZeroClipboard.$(a);if(!this.domElement){this.hide()}}if(this.domElement&&this.div){var b=ZeroClipboard.getDOMObjectPosition(this.domElement);var c=this.div.style;c.left=""+b.left+"px";c.top=""+b.top+"px"}},setText:function(a){this.clipText=a;if(this.ready){this.movie.setText(a)}},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");if(!this.handlers[a]){this.handlers[a]=[]}this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a;if(this.ready){this.movie.setHandCursor(a)}},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");switch(a){case"load":this.movie=document.getElementById(this.movieId);if(!this.movie){var c=this;setTimeout(function(){c.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var c=this;setTimeout(function(){c.receiveEvent("load",null)},100);this.ready=true;return}this.ready=true;try{this.movie.setText(this.clipText)}catch(d){}try{this.movie.setHandCursor(this.handCursorEnabled)}catch(d){}break;case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");if(this.recoverActive){this.domElement.addClass("active")}}break;case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass("active")){this.domElement.removeClass("active");this.recoverActive=true}this.domElement.removeClass("hover")}break;case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")}break;case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");this.recoverActive=false}break}if(this.handlers[a]){for(var e=0,f=this.handlers[a].length;e<f;e++){var g=this.handlers[a][e];if(typeof g=="function"){g(this,b)}else{if(typeof g=="object"&&g.length==2){g[0][g[1]](this,b)}else{if(typeof g=="string"){window[g](this,b)}}}}}}}}{(function(a){function e(b,c){if(b.data("AutoResizer")){b.data("AutoResizer").destroy()}c=this.config=a.extend({},d.defaults,c);this.el=b;this.nodeName=b[0].nodeName.toLowerCase();this.originalHeight=b.height();this.previousScrollTop=null;this.value=b.val();if(c.maxWidth==="original")c.maxWidth=b.width();if(c.minWidth==="original")c.minWidth=b.width();if(c.maxHeight==="original")c.maxHeight=b.height();if(c.minHeight==="original")c.minHeight=b.height();if(this.nodeName==="textarea"){b.css({resize:"none",overflowY:"hidden"})}b.data("AutoResizer",this);c.animate.complete=function(a){return function(){c.onAfterResize.call(b);return a.apply(this,arguments)}}(c.animate.complete);this.bind()}function d(b){this.filter(d.resizableFilterSelector).each(function(){new e(a(this),b)});return this}var b="ar"+ +(new Date),c=d.defaults={onResize:function(){},onBeforeResize:function(){return 123},onAfterResize:function(){return 555},animate:{duration:200,complete:function(){}},extraSpace:20,minHeight:"original",maxHeight:500,minWidth:"original",maxWidth:500};d.cloneCSSProperties=["lineHeight","textDecoration","letterSpacing","fontSize","fontFamily","fontStyle","fontWeight","textTransform","textAlign","direction","wordSpacing","fontSizeAdjust","paddingTop","paddingLeft","paddingBottom","paddingRight","width"];d.cloneCSSValues={position:"absolute",top:-9999,left:-9999,opacity:0,overflow:"hidden"};d.resizableFilterSelector=["textarea:not(textarea."+b+")","input:not(input[type])","input[type=text]","input[type=password]","input[type=email]","input[type=url]"].join(",");d.AutoResizer=e;a.fn.autoResize=d;e.prototype={bind:function(){var b=a.proxy(function(){this.check();return true},this);this.unbind();this.el.bind("keyup.autoResize",b).bind("change.autoResize",b).bind("paste.autoResize",function(){setTimeout(function(){b()},0)});if(!this.el.is(":hidden")){this.check(null,true)}},unbind:function(){this.el.unbind(".autoResize")},createClone:function(){var c=this.el,e=this.nodeName==="textarea"?c.clone():a("<span/>");this.clone=e;a.each(d.cloneCSSProperties,function(a,b){e[0].style[b]=c.css(b)});e.removeAttr("name").removeAttr("id").addClass(b).attr("tabIndex",-1).css(d.cloneCSSValues);if(this.nodeName==="textarea"){e.height("auto")}else{e.width("auto").css({whiteSpace:"nowrap"})}},check:function(a,b){if(!this.clone){this.createClone();this.injectClone()}var c=this.config,d=this.clone,e=this.el,f=e.val();if(f===this.prevValue){return true}this.prevValue=f;if(this.nodeName==="input"){d.text(f);var g=d.width(),h=g+c.extraSpace>=c.minWidth?g+c.extraSpace:c.minWidth,i=e.width();h=Math.min(h,c.maxWidth);if(h<i&&h>=c.minWidth||h>=c.minWidth&&h<=c.maxWidth){c.onBeforeResize.call(e);c.onResize.call(e);e.scrollLeft(0);if(c.animate&&!b){e.stop(1,1).animate({width:h},c.animate)}else{e.width(h);c.onAfterResize.call(e)}}return}d.width(e.width()).height(0).val(f).scrollTop(1e4);var j=d[0].scrollTop;if(this.previousScrollTop===j){return}this.previousScrollTop=j;if(j+c.extraSpace>=c.maxHeight){e.css("overflowY","");j=c.maxHeight;b=true}else if(j<=c.minHeight){j=c.minHeight}else{e.css("overflowY","hidden");j+=c.extraSpace}c.onBeforeResize.call(e);c.onResize.call(e);if(c.animate&&!b){e.stop(1,1).animate({height:j},c.animate)}else{e.height(j);c.onAfterResize.call(e)}},destroy:function(){this.unbind();this.el.removeData("AutoResizer");this.clone.remove();delete this.el;delete this.clone},injectClone:function(){(d.cloneContainer||(d.cloneContainer=a("<arclones/>").appendTo("body"))).append(this.clone)}}})(jQuery)}