function Delegate() {
}



function switchcontent(className, filtertag) {
  this.className = className;
  this.collapsePrev = false;
  this.persistType = "none";
  this.filter_content_tag = (typeof filtertag != "undefined") ? filtertag.toLowerCase() : "";
  this.ajaxheaders = {};
}



function blockError() {
  return true;
}



function setRootPath(p_sPath) {
  g_ROOTPATH = p_sPath;
}



function getQuotient(num1, num2) {
  var t;
  t = num1 / num2;
  return (Math.floor(t));
}



function onRef() {
  return;
}



function getCurrPage(_currentPage) {
  var cPage = 1;
  if (_currentPage <= 0 || _currentPage == "") 
  cPage = 1; else if (_currentPage > pageCount) 
  cPage = pageCount; else cPage = _currentPage;
  return cPage;
}



function setPageNo(start, end) {
  var pageN;
  for (pageN = start; pageN <= end; pageN++) 
    {
      if (pageN == CP.value) 
      {
        pageNo += "<font color=red><b>" + pageN + "</b></font>&nbsp;";
      } else {
        pageNo += "<a href=\"javascript:onRef();\" onclick=\"toPage(" + pageN + ")\">" + pageN + "</a>&nbsp;";
      }
    }
}



function check_email(address) {
  if ((address == "") || (address.indexOf('@') == -1) || (address.indexOf('.') == -1)) 
  return false;
  return true;
}



function LTrim(p_string) {
  var nLen = p_string.length;
  var nStartPose = 0;
  for (var i = 0; i < nLen; i++) 
    {
      var sChar = p_string.charAt(i);
      if (sChar == ' ' || sChar == '\u3000') 
      {
        continue;
      }
      nStartPose = i;
      break;
    }
  return p_string.substring(nStartPose);
}



function _uVoid() {
  return;
}



function __utmSetVar(v) {
  if (!v || v == "") 
  return;
  if (!_udo || _udo == "") 
  {
    _udh = _uDomain();
    if (_udn && _udn != "") 
    {
      _udo = " domain=" + _udn + ";";
    }
  }
  if (!_uVG()) 
  return;
  var r = Math.round(Math.random() * 2147483647);
  _ubd.cookie = "__utmv=" + _udh + "." + _uES(v) + "; path=" + _utcp + "; expires=" + _uNx() + ";" + _udo;
  var s = "&utmt=var&utmn=" + r;
  if (_usample && _usample != 100) 
  s += "&utmsp=" + _uES(_usample);
  if ((_userv == 0 || _userv == 2) && _uSP()) 
  {
    var i = new Image(1, 1);
    i.src = _ugifpath + "?" + "utmwv=" + _uwv + s;
    i.onload = function() {
  _uVoid();
};
  }
  if ((_userv == 1 || _userv == 2) && _uSP()) 
  {
    var i2 = new Image(1, 1);
    i2.src = _ugifpath2 + "?" + "utmwv=" + _uwv + s + "&utmac=" + _uacct + "&utmcc=" + _uGCS();
    i2.onload = function() {
  _uVoid();
};
  }
}



function _uGC(l, n, s) {
  if (!l || l == "" || !n || n == "" || !s || s == "") 
  return "-";
  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) 
  {
    i2 = l.indexOf(s, i);
    if (i2 < 0) 
    {
      i2 = l.length;
    }
    c = l.substring((i + i3), i2);
  }
  return c;
}



function _uHash(d) {
  if (!d || d == "") 
  return 1;
  var h = 0, g = 0;
  for (var i = d.length - 1; i >= 0; i--) 
    {
      var c = parseInt(d.charCodeAt(i));
      h = ((h << 6) & fffffff) + c + (c << 14);
      if ((g = h & fe00000) != 0) 
      h = (h ^ (g >> 21));
    }
  return h;
}



function _uFixA(c, s, t) {
  if (!c || c == "" || !s || s == "" || !t || t == "") 
  return "-";
  var a = _uGC(c, "__utma=" + _udh + ".", s);
  var lt = 0, i = 0;
  if ((i = a.lastIndexOf(".")) > 9) 
  {
    _uns = a.substring(i + 1, a.length);
    _uns = (_uns * 1) + 1;
    a = a.substring(0, i);
    if ((i = a.lastIndexOf(".")) > 7) 
    {
      lt = a.substring(i + 1, a.length);
      a = a.substring(0, i);
    }
    if ((i = a.lastIndexOf(".")) > 5) 
    {
      a = a.substring(0, i);
    }
    a += "." + lt + "." + t + "." + _uns;
  }
  return a;
}



function _uTrim(s) {
  if (!s || s == "") 
  return "";
  while ((s.charAt(0) == ' ') || (s.charAt(0) == '\n') || (s.charAt(0, 1) == '\r')) 
    s = s.substring(1, s.length);
  while ((s.charAt(s.length - 1) == ' ') || (s.charAt(s.length - 1) == '\n') || (s.charAt(s.length - 1) == '\r')) 
    s = s.substring(0, s.length - 1);
  return s;
}



function _uEC(s) {
  var n = "";
  if (!s || s == "") 
  return "";
  for (var i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == " ") 
      n += "+"; else n += s.charAt(i);
    }
  return n;
}



function _uIN(n) {
  if (!n) 
  return false;
  for (var i = 0; i < n.length; i++) 
    {
      var c = n.charAt(i);
      if ((c < "0" || c > "9") && (c != ".")) 
      return false;
    }
  return true;
}



function _uES(s, u) {
  if (typeof (encodeURIComponent) == 'function') 
  {
    if (u) 
    return encodeURI(s); else return encodeURIComponent(s);
  } else {
    return escape(s);
  }
}



function _uUES(s) {
  if (typeof (decodeURIComponent) == 'function') 
  {
    return decodeURIComponent(s);
  } else {
    return unescape(s);
  }
}



function _uNx() {
  return (new Date((new Date()).getTime() + 63072000000)).toGMTString();
}



function _uVoid() {
  return;
}



function __utmSetVar(v) {
  if (!v || v == "") 
  return;
  var r = Math.round(Math.random() * 2147483647);
  _ubd.cookie = "__utmv=" + _udh + "." + escape(v) + "; path=/; expires=Sun, 18 Jan 2038 00:00:00 GMT;" + _udo;
  var s = "&utmt=var&utmn=" + r;
  if (_userv == 0 || _userv == 2) 
  {
    var i = new Image(1, 1);
    i.src = _ugifpath + "?" + "utmwv=" + _uwv + s;
    i.onload = function() {
  _uVoid();
};
  }
  if (_userv == 1 || _userv == 2) 
  {
    var i2 = new Image(1, 1);
    i2.src = _ugifpath2 + "?" + "utmwv=" + _uwv + s + "&utmac=" + _uacct + "&utmcc=" + _uGCS();
    i2.onload = function() {
  _uVoid();
};
  }
}



function _uGC(l, n, s) {
  if (!l || l == "" || !n || n == "" || !s || s == "") 
  return "-";
  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) 
  {
    i2 = l.indexOf(s, i);
    if (i2 < 0) 
    {
      i2 = l.length;
    }
    c = l.substring((i + i3), i2);
  }
  return c;
}



function _uHash(d) {
  if (!d || d == "") 
  return 1;
  var h = 0, g = 0;
  for (var i = d.length - 1; i >= 0; i--) 
    {
      var c = parseInt(d.charCodeAt(i));
      h = ((h << 6) & fffffff) + c + (c << 14);
      if ((g = h & fe00000) != 0) 
      h = (h ^ (g >> 21));
    }
  return h;
}



function _uFixA(c, s, t) {
  if (!c || c == "" || !s || s == "" || !t || t == "") 
  return "-";
  var a = _uGC(c, "__utma=" + _udh, s);
  var lt = 0, i = 0;
  if ((i = a.lastIndexOf(".")) > 9) 
  {
    _uns = a.substring(i + 1, a.length);
    _uns = (_uns * 1) + 1;
    a = a.substring(0, i);
    if ((i = a.lastIndexOf(".")) > 7) 
    {
      lt = a.substring(i + 1, a.length);
      a = a.substring(0, i);
    }
    if ((i = a.lastIndexOf(".")) > 5) 
    {
      a = a.substring(0, i);
    }
    a += "." + lt + "." + t + "." + _uns;
  }
  return a;
}



function _uTrim(s) {
  if (!s || s == "") 
  return "";
  while ((s.charAt(0) == ' ') || (s.charAt(0) == '\n') || (s.charAt(0, 1) == '\r')) 
    s = s.substring(1, s.length);
  while ((s.charAt(s.length - 1) == ' ') || (s.charAt(s.length - 1) == '\n') || (s.charAt(s.length - 1) == '\r')) 
    s = s.substring(0, s.length - 1);
  return s;
}



function _uEC(s) {
  var n = "";
  if (!s || s == "") 
  return "";
  for (var i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == " ") 
      n += "+"; else n += s.charAt(i);
    }
  return n;
}



function set_is_being_rated(a) {
  is_being_rated = a;
}



function dq(s) {
  return (s != null) ? '"' + s + '"' : '""';
}



function ch_aue(p, v) {
  if (v) 
  {
    ch_au(p, escape(v));
  }
}



function ch_def(v, def) {
  return (v) ? v : def;
}



function ch_ad_locate(obj) {
  var objPos = {'x': 0, 'y': 0};
  try {
    if (obj.offsetParent) 
    {
      while (1) 
        {
          objPos.x += obj.offsetLeft;
          objPos.y += obj.offsetTop;
          if (!obj.offsetParent) 
          {
            break;
          }
          obj = obj.offsetParent;
        }
    } else if (obj.x && obj.y) 
    {
      objPos.x += obj.x;
      objPos.y += obj.y;
    }
  }  catch (err) {
  objPos.x = -1;
  objPos.y = -1;
}
  return objPos;
}



function append_func(o, a) {
  return function(e) {
  if (typeof (o) == "function") 
  {
    o(e);
  }
  return a(e);
};
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function cmcVoid() {
  return;
}



function fetchTimezone() {
  var localclock = new Date();
  var tzRaw = localclock.getTimezoneOffset();
  var tzHour = Math.floor(Math.abs(tzRaw) / 60);
  var tzMin = Math.abs(tzRaw) % 60;
  var tzString = ((tzRaw >= 0) ? "-" : "") + ((tzHour < 10) ? "0" : "") + tzHour + ":" + ((tzMin < 10) ? "0" : "") + tzMin;
  return tzString;
}



function escapeQuotes(text) {
  var re = new RegExp("'", "g");
  text = text.replace(re, "\\'");
  re = new RegExp('"', "g");
  text = text.replace(re, '&quot;');
  re = new RegExp("\\n", "g");
  text = text.replace(re, "\\n");
  return text;
}



function escapeQuotesHTML(text) {
  var re = new RegExp('"', "g");
  text = text.replace(re, "&quot;");
  return text;
}



function ObjectAD() {
  this.ADID = 0;
  this.ADType = 0;
  this.ADName = "";
  this.ImgUrl = "";
  this.ImgWidth = 0;
  this.ImgHeight = 0;
  this.FlashWmode = 0;
  this.LinkUrl = "";
  this.LinkTarget = 0;
  this.LinkAlt = "";
  this.Priority = 0;
  this.CountView = 0;
  this.CountClick = 0;
  this.InstallDir = "";
  this.ADDIR = "";
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function getImageNum() {
  var num = 1;
  return num;
}



function parseQuery(query) {
  var Params = new Object();
  if (!query) 
  return Params;
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      continue;
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function removeInvalidCharacters(keywords) {
  return keywords.replace(/[^\w\s\-']/gi, "");
}



function getAbsolutePosition(element) {
  var r = {x: element.offsetLeft, y: element.offsetTop};
  if (element.offsetParent) 
  {
    var tmp = getAbsolutePosition(element.offsetParent);
    r.x += tmp.x;
    r.y += tmp.y;
  }
  return r;
}



function findPosX(obj) {
  var curleft = 0;
  if (obj.offsetParent) 
  {
    while (1) 
      {
        curleft += obj.offsetLeft;
        if (!obj.offsetParent) 
        {
          break;
        }
        obj = obj.offsetParent;
      }
  } else if (obj.x) 
  {
    curleft += obj.x;
  }
  return curleft;
}



function findPosY(obj) {
  var curtop = 0;
  if (obj.offsetParent) 
  {
    while (1) 
      {
        curtop += obj.offsetTop;
        if (!obj.offsetParent) 
        {
          break;
        }
        obj = obj.offsetParent;
      }
  } else if (obj.y) 
  {
    curtop += obj.y;
  }
  return curtop;
}



function delayhidemenu() {
  if ((typeof disappeardelay != "undefined") && (typeof dropmenuobj != "undefined") && (typeof IfrRef != "undefined")) 
  {
    delayhide2 = setTimeout("IfrRef.style.display='none'", disappeardelay);
    delayhide = setTimeout("dropmenuobj.style.visibility='hidden'", disappeardelay);
  }
}



function contains_ns6(a, b) {
  while (b.parentNode) 
    {
      if ((b = b.parentNode) == a) 
      {
        return true;
      }
    }
  return false;
}



function clearhidemenu() {
  if (typeof delayhide != "undefined") 
  {
    clearTimeout(delayhide);
  }
  if (typeof delayhide2 != "undefined") 
  {
    clearTimeout(delayhide2);
  }
}



function AddCss() {
}



function FixIE(el) {
  if (el.currentStyle != null && el.currentStyle.hasLayout != null && el.currentStyle.hasLayout == false) 
  el.style.display = "inline-block";
}



function Mix(c1, c2) {
  var i, step1, step2, x, y, r = new Array(3);
  if (c1.length == 4) 
  step1 = 1; else step1 = 2;
  if (c2.length == 4) 
  step2 = 1; else step2 = 2;
  for (i = 0; i < 3; i++) 
    {
      x = parseInt(c1.substr(1 + step1 * i, step1), 16);
      if (step1 == 1) 
      x = 16 * x + x;
      y = parseInt(c2.substr(1 + step2 * i, step2), 16);
      if (step2 == 1) 
      y = 16 * y + y;
      r[i] = Math.floor((x * 50 + y * 50) / 100);
      r[i] = r[i].toString(16);
      if (r[i].length == 1) 
      r[i] = "0" + r[i];
    }
  return ("#" + r[0] + r[1] + r[2]);
}



function imenus_data0() {
  this.unlock = "Add your unlock code here.";
  this.enable_visual_design_mode = false;
  this.main_is_horizontal = true;
  this.menu_showhide_delay = 150;
  this.expand_arrow_animation_frames1 = "10";
  this.expand_arrow_animation_movexy1 = "-10,0";
  this.expand_arrow_animation_frames2 = "10";
  this.expand_arrow_animation_movexy2 = "0,0";
  this.main_expand_image = 'images/08home/bw.gif';
  this.main_expand_image_hover = 'images/08home/sample3_main_arrow.gif';
  this.main_expand_image_width = '7';
  this.main_expand_image_height = '5';
  this.main_expand_image_offx = '-1';
  this.main_expand_image_offy = '5';
  this.sub_expand_image = 'http://www.opencube.com/vim/arrow_sub.gif';
  this.sub_expand_image_hover = 'http://www.opencube.com/vim/arrow_sub.gif';
  this.sub_expand_image_width = '10';
  this.sub_expand_image_height = '13';
  this.sub_expand_image_offx = '0';
  this.sub_expand_image_offy = '0';
  this.main_pointer_image_width = '7';
  this.main_pointer_image_height = '5';
  this.main_pointer_image_offx = '0';
  this.main_pointer_image_offy = '0';
  this.sub_pointer_image_width = '13';
  this.sub_pointer_image_height = '10';
  this.sub_pointer_image_offx = '0';
  this.sub_pointer_image_offy = '0';
  this.main_container_styles = "background-color:#825c26; background-image:url(images/08home/brownbackground.jpg); border-style:solid; border-color:#000000; border-width:1px; padding:0px; ";
  this.main_item_styles = "color:#ffffff; text-align:center; font-family:Arial; font-size:12px; font-weight:bold; text-decoration:none; border-style:none; border-color:#000000; border-width:0px; padding:4px 5px 4px 12px; ";
  this.main_item_hover_styles = "color:#ffffff; ";
  this.main_item_active_styles = "background-color:#ffffff; background-image:url(images/08home/green.jpg); color:#ffffff; ";
  this.subs_container_styles = "filter:progid:DXImageTransform.Microsoft.GradientWipe(duration=0.5,WipeStyle=0, GradientSize=0.25); background-color:transparent; border-style:solid; border-color:#000000; border-width:1px; padding:0px; margin:0px; ";
  this.subs_item_styles = "color:#111111; text-align:center; font-size:11px; font-weight:normal; text-decoration:none; border-style:none; border-color:#000000; border-width:1px; padding:2px 5px; ";
  this.subs_item_hover_styles = "background-color:#e0e0e0; color:#000000; ";
  this.subs_item_active_styles = "background-color:#e0e0e0; color:#008542; ";
}



function x27(obj) {
  var x = 0;
  var y = 0;
do {
    x += obj.offsetLeft;
    y += obj.offsetTop;
  } while (obj = obj.offsetParent);
  return new Array(x, y);
}



function randomString(len) {
  var chars = "0123456789abcdefghiklmnopqrstuvwxyz";
  var randomstring = '';
  for (var i = 0; i < len; i++) 
    {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
  return randomstring;
}



function AddClassName(objElement, strClass, blnMayAlreadyExist) {
  if (objElement.className) 
  {
    var arrList = objElement.className.split(' ');
    if (blnMayAlreadyExist) 
    {
      var strClassUpper = strClass.toUpperCase();
      for (var i = 0; i < arrList.length; i++) 
        {
          if (arrList[i].toUpperCase() == strClassUpper) 
          {
            arrList.splice(i, 1);
            i--;
          }
        }
    }
    arrList[arrList.length] = strClass;
    objElement.className = arrList.join(' ');
  } else {
    objElement.className = strClass;
  }
}



function RemoveClassName(objElement, strClass) {
  if (objElement.className) 
  {
    var arrList = objElement.className.split(' ');
    var strClassUpper = strClass.toUpperCase();
    for (var i = 0; i < arrList.length; i++) 
      {
        if (arrList[i].toUpperCase() == strClassUpper) 
        {
          arrList.splice(i, 1);
          i--;
        }
      }
    objElement.className = arrList.join(' ');
  }
}



function getFileName(x) {
  return (x.substring(x.lastIndexOf("/") + 1, x.length));
}



function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 8;
  var randomstring = '';
  for (var i = 0; i < string_length; i++) 
    {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
  return randomstring;
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {
    return false;
  }
}



function compareNumbers(a, b) {
  return b[0] - a[0];
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function xDef() {
  for (var i = 0; i < arguments.length; ++i) 
    {
      if (typeof (arguments[i]) == "" || typeof (arguments[i]) == "undefined") 
      return false;
    }
  return true;
}



function topOffset(el) {
  var sum = 0;
do {
    sum += el.offsetTop + el.clientTop;
  } while (el = el.offsetParent);
  return sum;
}



function ststxy(m, xy) {
  m.mcox = xy[0];
  m.mcoy = xy[1];
}



function stgsp(sp, d) {
  var i = 0, s = 5;
  if (d < s || nIEM || !stSMSC) 
  return d;
  d = (d - d % s) / s;
  while (d > 0) 
    d -= ++i;
  return Math.min(Math.min(i * s, sp + s), 100 * s);
}



function stmvto(xy, p) {
  if (xy && (p.par || stgme(p).mtyp)) 
  {
    var l = stglay(p);
    if (nNN4) 
    l.moveToAbsolute(xy[0], xy[1]); else if (nOP) 
    {
      var s = l.style;
      s.pixelLeft = xy[0];
      s.pixelTop = xy[1];
    } else {
      var s = l.style;
      s.left = xy[0] + "px";
      s.top = xy[1] + "px";
    }
    p.rc = [xy[0], xy[1], p.rc[2], p.rc[3]];
  }
}



function stsdstr(p, s) {
  return "var p=st_ms[" + p.mei + "].ps[" + p.ppi + "];p.tmid=0;" + (s ? "stftsh(" : "stfthd(") + "p);p.exed=1;";
}



function stppev(p) {
  return " onMouseOver='stppov(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);' onMouseOut='stppou(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);'";
}



function stquo(n) {
  return "\"" + n + "\"";
}



function stgdec(v) {
  return v ? (v & 1 ? "underline " : "") + (v & 2 ? "line-through " : "") + (v & 4 ? "overline" : "") : "none";
}



function stgbg(c, i, r) {
  return i ? c + " url(" + i + ") " + r : c;
}



function stbuf(s) {
  if (s && stBIMG) 
  {
    var i = new Image();
    st_ims[st_ims.length] = i;
    i.src = s;
  }
  return s;
}



function stabs(s) {
  var t = s.toLowerCase();
  return t.indexOf(":") == 1 && t.charCodeAt() >= "a" && t.charCodeAt() <= "z" || !t.indexOf("http:") || !t.indexOf("https:") || !t.indexOf("file:") || !t.indexOf("ftp:") || !t.indexOf("/") || !t.indexOf("javascript:") || !t.indexOf("mailto:") || !t.indexOf("about:") || !t.indexOf("gopher:") || !t.indexOf("news:") || !t.indexOf("telnet:") || !t.indexOf("wais:");
}



function stisit(ip) {
  return typeof (ip.iti) != "undefined";
}



function stdmld(w) {
  return typeof (w.st_load) != "undefined" && w.st_load;
}



function stssc(s, p) {
  if (s >= 0) 
  {
    if (typeof (p.scid) == "undefined") 
    p.scid = 0 , p.scsu = 0 , p.scsd = 1;
    var l = stglay(p), sp = stgobj(p.ids + "SP"), sn = stgobj(p.ids + "SN"), sc = stgobj(p.ids + "SC");
    (p.pver ? sp.parentNode : sp).parentNode.style.display = (p.pver ? sn.parentNode : sn).parentNode.style.display = s ? '' : 'none';
    sc.style.overflow = s ? "hidden" : "";
    if (s) 
    s = Math.max(s - (p.pver ? sp.offsetHeight + sn.offsetHeight : sp.offsetWidth + sn.offsetWidth) - 2 * p.ipbw - 2 * p.psds - 4 * p.pspc, 1);
    if ((p.pver ? sc.style.height : sc.style.width) == (s ? s + 'px' : '')) 
    return;
        p.pver ? (sc.style.height = s ? s + 'px' : '') : (sc.style.width = s ? s + 'px' : '');
    with (stgme(p).mscm[p.pver])       if (s) 
      {
        sp.rows[0].cells[0].childNodes[0].src = simg[0][(p.pver ? sc.scrollTop : sc.scrollLeft) ? 1 : 0];
        sn.rows[0].cells[0].childNodes[0].src = simg[1][(p.pver ? sc.scrollTop != sc.scrollHeight - sc.offsetHeight : sc.scrollLeft != sc.scrollWidth - sc.offsetWidth) ? 1 : 0];
      }
;
  }
}



function RTrim(sString) {
  var w_space = String.fromCharCode(32);
  var v_length = sString.length;
  var strTemp = "";
  if (v_length < 0) 
  {
    return "";
  }
  var iTemp = v_length - 1;
  while (iTemp > -1) 
    {
      if (sString.charAt(iTemp) == w_space) 
      {
      } else {
        strTemp = sString.substring(0, iTemp + 1);
        break;
      }
      iTemp = iTemp - 1;
    }
  return strTemp;
}



function LTrim(sString) {
  var w_space = String.fromCharCode(32);
  if (v_length < 1) 
  {
    return "";
  }
  var v_length = sString.length;
  var strTemp = "";
  var iTemp = 0;
  while (iTemp < v_length) 
    {
      if (sString.charAt(iTemp) == w_space) 
      {
      } else {
        strTemp = sString.substring(iTemp, v_length);
        break;
      }
      iTemp = iTemp + 1;
    }
  return strTemp;
}



function Left(sString, n) {
  if (n <= 0) 
  return ""; else if (n > sString.length) 
  return sString; else return sString.substring(0, n);
}



function Right(sString, n) {
  if (n <= 0) 
  return ""; else if (n > sString.length) 
  return sString; else {
    var iLen = sString.length;
    return sString.substring(iLen, iLen - n);
  }
}



function isDate(DateToCheck) {
  if (DateToCheck == "") 
  {
    return true;
  }
  var m_strDate = FormatDate(DateToCheck);
  if (m_strDate == "") 
  {
    return false;
  }
  var m_arrDate = m_strDate.split("/");
  var m_DAY = m_arrDate[0];
  var m_MONTH = m_arrDate[1];
  var m_YEAR = m_arrDate[2];
  if (m_YEAR.length > 4) 
  {
    return false;
  }
  m_strDate = m_MONTH + "/" + m_DAY + "/" + m_YEAR;
  var testDate = new Date(m_strDate);
  if (testDate.getMonth() + 1 == m_MONTH) 
  {
    return true;
  } else {
    return false;
  }
}



function FormatDate(DateToFormat, FormatAs) {
  if (DateToFormat == "") 
  {
    return "";
  }
  if (!FormatAs) 
  {
    FormatAs = "dd/mm/yyyy";
  }
  var strReturnDate;
  FormatAs = FormatAs.toLowerCase();
  DateToFormat = DateToFormat.toLowerCase();
  var arrDate;
  var arrMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var strMONTH;
  var Separator;
  while (DateToFormat.indexOf("st") > -1) 
    {
      DateToFormat = DateToFormat.replace("st", "");
    }
  while (DateToFormat.indexOf("nd") > -1) 
    {
      DateToFormat = DateToFormat.replace("nd", "");
    }
  while (DateToFormat.indexOf("rd") > -1) 
    {
      DateToFormat = DateToFormat.replace("rd", "");
    }
  while (DateToFormat.indexOf("th") > -1) 
    {
      DateToFormat = DateToFormat.replace("th", "");
    }
  if (DateToFormat.indexOf(".") > -1) 
  {
    Separator = ".";
  }
  if (DateToFormat.indexOf("-") > -1) 
  {
    Separator = "-";
  }
  if (DateToFormat.indexOf("/") > -1) 
  {
    Separator = "/";
  }
  if (DateToFormat.indexOf(" ") > -1) 
  {
    Separator = " ";
  }
  arrDate = DateToFormat.split(Separator);
  DateToFormat = "";
  for (var iSD = 0; iSD < arrDate.length; iSD++) 
    {
      if (arrDate[iSD] != "") 
      {
        DateToFormat += arrDate[iSD] + Separator;
      }
    }
  DateToFormat = DateToFormat.substring(0, DateToFormat.length - 1);
  arrDate = DateToFormat.split(Separator);
  if (arrDate.length < 3) 
  {
    return "";
  }
  var DAY = arrDate[0];
  var MONTH = arrDate[1];
  var YEAR = arrDate[2];
  if (parseFloat(arrDate[1]) > 12) 
  {
    DAY = arrDate[1];
    MONTH = arrDate[0];
  }
  if (parseFloat(DAY) && DAY.toString().length == 4) 
  {
    YEAR = arrDate[0];
    DAY = arrDate[2];
    MONTH = arrDate[1];
  }
  for (var iSD = 0; iSD < arrMonths.length; iSD++) 
    {
      var ShortMonth = arrMonths[iSD].substring(0, 3).toLowerCase();
      var MonthPosition = DateToFormat.indexOf(ShortMonth);
      if (MonthPosition > -1) 
      {
        MONTH = iSD + 1;
        if (MonthPosition == 0) 
        {
          DAY = arrDate[1];
          YEAR = arrDate[2];
        }
        break;
      }
    }
  var strTemp = YEAR.toString();
  if (strTemp.length == 2) 
  {
    if (parseFloat(YEAR) > 40) 
    {
      YEAR = "19" + YEAR;
    } else {
      YEAR = "20" + YEAR;
    }
  }
  if (parseInt(MONTH) < 10 && MONTH.toString().length < 2) 
  {
    MONTH = "0" + MONTH;
  }
  if (parseInt(DAY) < 10 && DAY.toString().length < 2) 
  {
    DAY = "0" + DAY;
  }
  switch (FormatAs) {
    case "dd/mm/yyyy":
      return DAY + "/" + MONTH + "/" + YEAR;
    case "mm/dd/yyyy":
      return MONTH + "/" + DAY + "/" + YEAR;
    case "dd/mmm/yyyy":
      return DAY + " " + arrMonths[MONTH - 1].substring(0, 3) + " " + YEAR;
    case "mmm/dd/yyyy":
      return arrMonths[MONTH - 1].substring(0, 3) + " " + DAY + " " + YEAR;
    case "dd/mmmm/yyyy":
      return DAY + " " + arrMonths[MONTH - 1] + " " + YEAR;
    case "mmmm/dd/yyyy":
      return arrMonths[MONTH - 1] + " " + DAY + " " + YEAR;
    default:
      return arrMonths[MONTH - 1] + " " + DAY + " " + YEAR;
  }
  return DAY + "/" + strMONTH + "/" + YEAR;
}



function ismaxlength(obj) {
  var mlength = obj.getAttribute ? parseInt(obj.getAttribute("maxlength")) : "";
  if (obj.getAttribute && obj.value.length > mlength) 
  obj.value = obj.value.substring(0, mlength);
}



function ModifyURL(URLstring) {
  var filter = /^(http|https|ftp|file)+\:\/\/|^(news|telnet|gopher)+\:/;
  if (filter.test(URLstring)) 
  return URLstring; else if (URLstring.indexOf(":") > 0) 
  return URLstring; else return "http://" + URLstring;
}



function getMonthName(mnth) {
  if (mnth == 0) 
  {
    name = "January";
  } else if (mnth == 1) 
  {
    name = "February";
  } else if (mnth == 2) 
  {
    name = "March";
  } else if (mnth == 3) 
  {
    name = "April";
  } else if (mnth == 4) 
  {
    name = "May";
  } else if (mnth == 5) 
  {
    name = "June";
  } else if (mnth == 6) 
  {
    name = "July";
  } else if (mnth == 7) 
  {
    name = "August";
  } else if (mnth == 8) 
  {
    name = "September";
  } else if (mnth == 9) 
  {
    name = "October";
  } else if (mnth == 10) 
  {
    name = "November";
  } else if (mnth == 11) 
  {
    name = "December";
  }
  return name;
}



function getNoOfDaysInMnth(mnth, yr) {
  rem = yr % 4;
  if (rem == 0) 
  {
    leap = 1;
  } else {
    leap = 0;
  }
  noDays = 0;
  if ((mnth == 1) || (mnth == 3) || (mnth == 5) || (mnth == 7) || (mnth == 8) || (mnth == 10) || (mnth == 12)) 
  {
    noDays = 31;
  } else if (mnth == 2) 
  {
    noDays = 28 + leap;
  } else {
    noDays = 30;
  }
  return noDays;
}



function isPrevMonth(year, mon) {
  var str = mon + "/1/" + year;
  var dt = new Date(str);
  var c_now = new Date();
  var s_date = new Date(c_now.getFullYear(), c_now.getMonth(), '1');
  if (dt.getTime() < s_date.getTime()) 
  return false; else return true;
}



function stripCharsInBag(s, bag) {
  var i;
  var returnString = "";
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (bag.indexOf(c) == -1) 
      returnString += c;
    }
  return returnString;
}



function isZipValid(s) {
  var i;
  s = s.toLowerCase();
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (((c < "0") || (c > "z"))) 
      {
        return false;
      } else {
        if (((c > "9") && (c < "a"))) 
        {
          return false;
        }
      }
    }
  return true;
}



function isInteger(s) {
  var i;
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (((c < "0") || (c > "9"))) 
      return false;
    }
  return true;
}



function arraypop(a) {
  if (typeof a != 'object' || !a.length) 
  {
    return null;
  } else {
    var response = a[a.length - 1];
    a.length--;
    return response;
  }
}



function arraypush(a, value) {
  a[a.length] = value;
  return a.length;
}



function findtags(parentobj, tag) {
  if (typeof parentobj.getElementsByTagName != 'undefined') 
  {
    return parentobj.getElementsByTagName(tag);
  } else if (parentobj.all && parentobj.all.tags) 
  {
    return parentobj.all.tags(tag);
  } else {
    return null;
  }
}



function insertAtCaret(textEl, text) {
  if (textEl.createTextRange && textEl.caretPos) 
  {
    var caretPos = textEl.caretPos;
    caretPos.text += caretPos.text.charAt(caretPos.text.length - 2) == ' ' ? text + ' ' : text;
  } else if (textEl) 
  {
    textEl.value += text;
  } else {
    textEl.value = text;
  }
}



function in_array(needle, haystack) {
  if (typeof needle == 'string') 
  {
    for (var i in haystack) 
      {
        if (haystack[i] == needle) 
        {
          return true;
        }
      }
  }
  return false;
}



function preloadRange(intPic, intRange) {
  var divStr = "";
  for (var i = intPic; i < (intPic + intRange); i++) 
    {
      arrPreload[i] = new Image();
      arrPreload[i].src = xsImgs[i];
    }
  return false;
}



function imgLoadNotify() {
  imgIsLoaded = true;
}



function dcsCookie() {
  if (typeof (dcsOther) == "function") 
  {
    dcsOther();
  } else if (typeof (dcsPlugin) == "function") 
  {
    dcsPlugin();
  } else if (typeof (dcsFPC) == "function") 
  {
    dcsFPC(gTimeZone);
  }
}



function dcsParseSvl(sv) {
  sv = sv.split(" ").join("");
  sv = sv.split("\t").join("");
  sv = sv.split("\n").join("");
  var pos = sv.toUpperCase().indexOf("WT.SVL=");
  if (pos != -1) 
  {
    var start = pos + 8;
    var end = sv.indexOf('"', start);
    if (end == -1) 
    {
      end = sv.indexOf("'", start);
      if (end == -1) 
      {
        end = sv.length;
      }
    }
    return sv.substring(start, end);
  }
  return "";
}



function dcsIsOnsite(host) {
  var doms = "";
  var aDoms = doms.split(',');
  for (var i = 0; i < aDoms.length; i++) 
    {
      if (host.indexOf(aDoms[i]) != -1) 
      {
        return 1;
      }
    }
  return 0;
}



function dcsIsHttp(e) {
  return (e.href && e.protocol && (e.protocol.indexOf("http") != -1)) ? true : false;
}



function dcsSaveHref(evt) {
  if (evt.preventDefault && evt.target.href) 
  {
    evt.preventDefault();
    gHref = evt.target.href;
  }
}



function dcsEscape(S, REL) {
  if (typeof (REL) != "undefined") 
  {
    var retStr = new String(S);
    for (var R in REL) 
      {
        retStr = retStr.replace(REL[R], R);
      }
    return retStr;
  } else {
    return escape(S);
  }
}



function dcsEncode(S) {
  return (typeof (encodeURIComponent) == "function") ? encodeURIComponent(S) : escape(S);
}



function valCheckBox(frm, elm) {
  var total1 = 0;
  var sel = 0;
  for (x = 0; x < frm.length; x++) 
    {
      if (frm.elements[x].name == elm) 
      {
        total1++;
        if (frm.elements[x].checked) 
        {
          sel = 1;
        }
      }
    }
  return sel;
}



function HM_f_PopUp() {
  return false;
}



function HM_f_PopDown() {
  return false;
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function noprodsmall(imgPath) {
  eval(imgPath).src = "/images/noimg120.jpg";
}



function noprodtiny(imgPath) {
  eval(imgPath).src = "/images/noimg40.gif";
}



function roundTo(base, precision) {
  var m = Math.pow(10, precision);
  var a = Math.round(base * m) / m;
  return a;
}



function go_m(data) {
  var idx = 0, n = data[data.length - 1];
  var result = new String();
  result = '<A class="mail" HREF="';
  while (data[idx] != n) 
    {
      result = result + '&#' + (data[idx++] ^ n) + ';';
    }
  idx++;
  result = result + '" TITLE="';
  while (data[idx] != n) 
    {
      result = result + '&#' + (data[idx++] ^ n) + ';';
    }
  idx++;
  result = result + '">';
  while (data[idx] != n) 
    {
      result = result + '&#' + (data[idx++] ^ n) + ';';
    }
  result = result + '</A>';
  return result;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function addSayuParam(url, newParamName, newParamValue) {
  var grateMark = url.indexOf("#");
  var questionMark = url.indexOf("?");
  var grateUrl = "";
  var queryString = "";
  if (grateMark != -1) 
  {
    grateUrl = url.substring(grateMark + 1, url.length);
    url = url.substring(0, grateMark);
  }
  if (questionMark != -1) 
  {
    queryString = url.substring(questionMark + 1, url.length);
    url = url.substring(0, questionMark);
  }
  var i = 0;
  var newQueryString = "";
  var newParamFound = false;
  if (queryString.length > 0) 
  {
    var queryParts = queryString.split("&");
    for (i = 0; i < queryParts.length; i++) 
      {
        var paramName = "";
        var paramValue = "";
        var queryPart = queryParts[i];
        var equalSign = queryPart.indexOf("=");
        if (equalSign == -1) 
        {
          paramName = queryPart;
        } else {
          paramName = queryPart.substring(0, equalSign);
          paramValue = unescape(queryPart.substring(equalSign + 1, queryPart.length));
        }
        newQueryString += (i == 0) ? "?" : "&";
        newQueryString += paramName + "=";
        if (paramName == newParamName) 
        {
          newQueryString += escape(newParamValue);
          newParamFound = true;
        } else {
          newQueryString += escape(paramValue);
        }
      }
  }
  if (!newParamFound) 
  {
    newQueryString += (i == 0) ? "?" : "&";
    newQueryString += newParamName + "=" + escape(newParamValue);
  }
  url += newQueryString;
  if (grateMark != -1) 
  {
    url += "#" + grateUrl;
  }
  return url;
}



function sayuClearConvValue(value) {
  var _cv = "";
  var decimals = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "-");
  var _cvLen = value.length;
  if (_cvLen > 0) 
  {
    for (var i = 0; i < _cvLen; i++) 
      {
        if (sayuLookUpElement(decimals, value.charAt(i)) >= 0) 
        {
          _cv += value.charAt(i);
        }
      }
  }
  return _cv;
}



function sayuLookUpElement(arr, element) {
  if (arr != null) 
  {
    for (i = 0; i < arr.length; i++) 
      {
        if (arr[i] == element) 
        {
          return i;
        }
      }
  }
  return -1;
}



function KillErrors() {
  return true;
}



function check_empty(text) {
  return text.length > 0;
}



function ByteLenght(s) {
  var l = 0;
  var a = s.split("");
  for (var i = 0; i < a.length; i++) 
    {
      if (a[i].charCodeAt(0) < 299) 
      {
        l++;
      } else {
        l += 2;
      }
    }
  return l;
}



function isNum(number) {
  var i, str1 = "0123456789";
  if (number == null || number == "") 
  return false;
  for (i = 0; i < number.length; i++) 
    {
      if (str1.indexOf(number.charAt(i)) == -1) 
      {
        return false;
        break;
      }
    }
  return true;
}



function isIp(data) {
  dotc = 0;
  segment = new Array();
  while ((pos = data.indexOf(".")) != -1) 
    {
      segment[dotc++] = data.substring(0, pos);
      data = data.substring(pos + 1);
    }
  segment[dotc] = data;
  if (dotc != 3) 
  return false;
  for (i = 0; i < segment.length; i++) 
    if (!isNum(segment[i])) 
    return false;
  for (i = 0; i < segment.length; i++) 
    if (parseInt(segment[i]) < 0 || parseInt(segment[i]) > 255) 
    return false;
  return true;
}



function ismaxlength(obj) {
  var mlength = obj.getAttribute ? parseInt(obj.getAttribute("maxlength")) : "";
  if (obj.getAttribute && obj.value.length > mlength) 
  obj.value = obj.value.substring(0, mlength);
}



function ImpTracker() {
  this.getUrl = function() {
  var type = 'roverimp/' + this.getDest() + "/" + this.getSegment() + "/" + this.getChannel() + '?imp=' + this.getPage();
  return this.getSojUrl(type);
};
  this.track = function() {
  Rover.track(this.getUrl(), this);
};
}



function ClickTracker() {
  this.getUrl = function() {
  var type = 'roverclk/' + this.getDest() + "/" + this.getSegment() + "/" + this.getChannel() + '?';
  var trkparam = 'sid=p' + this.getPage();
  var config = this.getConfig();
  if (config != null && config != '') 
  {
    trkparam += '.c' + config;
  }
  var module = this.getModule();
  if (module != null && module != '') 
  {
    trkparam += '.m' + module;
  }
  var linkId = this.getLinkId();
  if (linkId != null && linkId != '') 
  {
    trkparam += '.l' + linkId;
  }
  return this.getSojUrl(type, trkparam);
};
  this.track = function() {
  Rover.track(this.getUrl(), this);
};
}



function Rover() {
  this.setEnvQA = function() {
  Rover.isQA = true;
};
  this.setQAPool = function(pool) {
  Rover.isQA = true;
  Rover.qaPool = pool;
};
  this.setSiteId = function(id) {
  var s = parseInt(id);
  if (typeof (s) != 'NaN' && aSiteCodes[s]) 
  {
    Rover.siteId = s;
  }
};
  this.createROITracker = function() {
  return new ROITracker();
};
  this.createNSTracker = function() {
  return new NSTracker();
};
  this.createImpTracker = function() {
  return new ImpTracker();
};
  this.createClickTracker = this.createClkTracker = function() {
  return new ClickTracker();
};
}



function ebayStringContains(pSource, pWanted) {
  return (pSource.indexOf(pWanted) != -1);
}



function EbayParseCookie(start) {
  var mycookielets = new Array();
  var strCookielets = "";
  if (start) 
  {
    var input = this.value;
    mycookielets = input.split("^");
    for (i in mycookielets) 
      {
        var x = mycookielets[i].split("=");
        if (x[0] != "" && x[1] != "") 
        {
          var outVal = x[1];
          for (var j = 2; j < x.length; j++) 
            {
              outVal += "=" + x[j];
            }
          this.addCookielet(x[0], outVal);
        }
      }
  } else {
    strCookielets = "^";
    var cl = this.cookielets;
    for (i in cl) 
      {
        if (cl[i]) 
        strCookielets += cl[i].name + "=" + cl[i].value + "^";
      }
    this.value = strCookielets;
  }
}



function EbayDPParseCookie(start) {
  var mycookielets = new Array();
  var strCookielets = "";
  if (start) 
  {
    var input = this.value;
    input = input.substring(1, input.length);
    mycookielets = input.split("^");
    for (i in mycookielets) 
      {
        c = mycookielets[i];
        expi = c.substring(c.length - 8, c.length);
        c = c.substring(0, c.length - 8);
        var x = c.split("/");
        if (x[0] != "" && x[1] != "") 
        {
          var outVal = decodeURIComponent(c.substring(c.indexOf("/") + 1, c.length));
          this.addCookielet(x[0], outVal, expi);
        }
      }
  } else {
    strCookielets = "";
    var today = new Date();
    var cl = this.cookielets;
    for (i in cl) 
      {
        if (cl[i]) 
        {
          var timeToExpire = cl[i].expirationDate - today;
          if (timeToExpire > 0) 
          strCookielets += cl[i].name + "/" + encodeURIComponent(cl[i].value) + cl[i].expirationHex + "^";
        }
      }
    if (strCookielets != "") 
    {
      this.value = "b" + strCookielets;
    } else {
      this.value = "";
    }
  }
}



function getFlagAt(sDec, iPos) {
  sDec = parseInt(sDec, 10);
  var b, p, v = "";
  if (sDec && !isNaN(iPos) && iPos >= 0) 
  {
    b = sDec.toString(2);
    p = b.length - iPos - 1;
    v = (p >= 0) ? b.substring(p, p + 1) : v;
  }
  return v;
}



function s_fl(s, l) {
  return (s + '').substring(0, l);
}



function s_co(o) {
  if (!o) 
  return o;
  var n = new Object(), x;
  for (x in o) 
    if (x.indexOf("select") < 0 && x.indexOf("filter") < 0) 
    n[x] = o[x];
  return n;
}



function s_num(x) {
  var s = x.toString(), g = '0123456789', p, d;
  for (p = 0; p < s.length; p++) 
    {
      d = s.substring(p, p + 1);
      if (g.indexOf(d) < 0) 
      return 0;
    }
  return 1;
}



function s_rep(s, o, n) {
  var i = s.indexOf(o), l = n.length > 0 ? n.length : 1;
  while (s && i >= 0) 
    {
      s = s.substring(0, i) + n + s.substring(i + o.length);
      i = s.indexOf(o, i + l);
    }
  return s;
}



function s_ape(s) {
  return s ? encodeURIComponent('' + s) : s;
}



function s_epa(s) {
  return s ? decodeURIComponent(s_rep('' + s, '+', ' ')) : s;
}



function s_isf(t, a) {
  if (t.substring(0, 2) == 's_') 
  t = t.substring(2);
  return (t != '' && t == a);
}



function s_gtfsf(w) {
  var p = w.parent, l = w.location;
  s_tfs = w;
  if (p && p.location != l && p.location.host == l.host) 
  {
    s_tfs = p;
    return s_gtfsf(s_tfs);
  }
  return s_tfs;
}



function s_lnf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var te = t.indexOf('=');
  if (t && te > 0 && h.indexOf(t.substring(te + 1)) >= 0) 
  return t.substring(0, te);
  return '';
}



function s_ltdf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var qi = h.indexOf('?');
  h = qi >= 0 ? h.substring(0, qi) : h;
  if (t && h.substring(h.length - (t.length + 1)) == '.' + t) 
  return 1;
  return 0;
}



function s_ltef(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  if (t && h.indexOf(t) >= 0) 
  return 1;
  return 0;
}



function s_ot(o) {
  var a = o.type, b = o.tagName;
  return (a && a.toUpperCase ? a : b && b.toUpperCase ? b : o.href ? 'A' : '').toUpperCase();
}



function s_rqf(t, un) {
  var e = t.indexOf('='), u = e >= 0 ? ',' + t.substring(0, e) + ',' : '';
  return u && u.indexOf(',' + un + ',') >= 0 ? s_epa(t.substring(e + 1)) : '';
}



function s_sq(un, q) {
  return true;
  s_sqq = new Object();
  s_squ = new Object();
  s_sqq[q] = '';
  var k = 's_sq', v = s_c_r(k), x, c = 0;
  s_pt(v, '&', s_sqp, 0);
  s_pt(un, ',', s_sqs, q);
  v = '';
  for (x in s_squ) 
    s_sqq[s_squ[x]] += (s_sqq[s_squ[x]] ? ',' : '') + x;
  for (x in s_sqq) 
    if (x && s_sqq[x] && (x == q || c < 2)) 
    {
      v += (v ? '&' : '') + s_sqq[x] + '=' + s_ape(x);
      c++;
    }
  return s_c_w(k, v, 0);
}



function is_empty(str) {
  return (str == null || str == 0 || str == "" || str.length < 1);
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function removeSpaces(string) {
  var tstring = "";
  string = '' + string;
  splitstring = string.split(" ");
  for (i = 0; i < splitstring.length; i++) 
    tstring += splitstring[i];
  return tstring;
}



function resetClickOnce() {
  clickOnceButtons = new Array();
}



function Message(inName, inMessage) {
  this.name = inName;
  this.message = inMessage;
}



function preventEvent(event) {
  if (event.preventDefault) 
  {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}



function FCSS(t, d) {
  var a = t.split("|");
  var i;
  var s;
  for (i = 0; i < a.length; i++) 
    {
      if (a[i].length >= 5) 
      {
        if (s == null) 
        {
          s = a[i];
        } else {
          s += d + a[i];
        }
      }
    }
  if (s == null) 
  {
    return '';
  }
  return s;
}



function getElementWidth(inElement) {
  if (inElement.scrollWidth > inElement.offsetWidth) 
  {
    return inElement.scrollWidth;
  } else {
    return inElement.offsetWidth;
  }
}



function getElementHeight(inElement) {
  if (inElement.scrollHeight > inElement.offsetHeight) 
  {
    return inElement.scrollHeight;
  } else {
    return inElement.offsetHeight;
  }
}



function getElementX(inElement) {
  var x = 0;
  if (inElement.offsetParent) 
  {
    while (inElement.offsetParent) 
      {
        x += inElement.offsetLeft;
        inElement = inElement.offsetParent;
      }
  } else if (inElement.x) 
  {
    x += inElement.x;
  }
  return x;
}



function getElementY(inElement) {
  var y = 0;
  if (inElement.offsetParent) 
  {
    while (inElement.offsetParent) 
      {
        y += inElement.offsetTop;
        inElement = inElement.offsetParent;
      }
  } else if (inElement.y) 
  {
    y += inElement.y;
  }
  return y;
}



function restoreSelect() {
  return true;
}



function URLEncode(clearString) {
  var output = '';
  var x = 0;
  clearString = clearString.toString();
  var regex = /(^[a-zA-Z0-9_.]*)/;
  while (x < clearString.length) 
    {
      var match = regex.exec(clearString.substr(x));
      if (match != null && match.length > 1 && match[1] != '') 
      {
        output += match[1];
        x += match[1].length;
      } else {
        if (clearString[x] == ' ') 
        output += '+'; else {
          var charCode = clearString.charCodeAt(x);
          var hexVal = charCode.toString(16);
          output += '%' + (hexVal.length < 2 ? '0' : '') + hexVal.toUpperCase();
        }
        x++;
      }
    }
  return output;
}



function M_hideLayer() {
}



function _oTree() {
}



function mmMouseMove() {
}



function _TtM() {
}



function _IdM() {
}



function _ocURL() {
}



function mmClick() {
}



function autoOT() {
}



function _iF0C() {
}



function showtip() {
}



function isEditMode() {
}



function hidetip() {
}



function mmVisFunction() {
}



function doMenuResize() {
}



function _tMR() {
}



function _maxm() {
}



function _p8(a, d) {
  var t = [];
  for (_a = 0; _a < a.length; _a++) 
    {
      if (a[_a] != d) 
      {
        t[t.length] = a[_a];
      }
    }
  return t;
}



function copyOf(w) {
  for (_cO in w) 
    {
      this[_cO] = w[_cO];
    }
}



function _colD() {
}



function _p4(V, n) {
  var S, m;
  S = [];
  if (isNaN(V[n]) && V[n].indexOf("offset=") == 0) 
  {
    S[0] = V[n].substr(7, 99);
    m = S[0].indexOf(";minimum=");
    if (m > -1) 
    {
      S[1] = S[0].substr(m + 9, 99);
      S[0] = S[0].substr(0, m);
    }
    V[n] = _n;
  }
  return S;
}



function lpFixProtocol(str) {
  if ((str != null) && (str.indexOf("http:") == 0) && (lpfcProtocol == "https")) 
  return lpfcProtocol + str.substring(4);
  return str;
}



function hcDate() {
  var d = new Date();
  return d.getTime();
}



function hcPlaceLayersIE() {
}



function hcPlaceLayersNS() {
}



function hcHandlePopup(w, h) {
}



function lpIsNumber(a) {
  return typeof a == 'number' && isFinite(a);
}



function hcFloatIconLoaded() {
  hcImageFetched = true;
}



function inviteShown(channel) {
  hcCmd = "inviteShown" + ((typeof (lpInviteTimeout) != "undefined") && (lpInviteTimeout != "") && (lpInviteTimeout > 0) ? ("&scripttimeout=" + lpInviteTimeout) : "");
  hcCmd += "&channel=" + channel;
  hcCounter = 0;
}



function hcLegalPage() {
  return true;
}



function CreateArray(n) {
  this.length = n;
  return this;
}



function replace(pStr, pFind, pReplace) {
  var strLength = pStr.length, txtLength = pFind.length;
  if ((strLength == 0) || (txtLength == 0)) 
  return pStr;
  var i = pStr.indexOf(pFind);
  if ((!i) && (pFind != pStr.substring(0, txtLength))) 
  return pStr;
  if (i == -1) 
  return pStr;
  var newstr = pStr.substring(0, i) + pReplace;
  if (i + txtLength < strLength) 
  newstr += replace(pStr.substring(i + txtLength, strLength), pFind, pReplace);
  return newstr;
}



function ValidGPA(pObj) {
  if (!pObj) 
  return false;
  if (pObj.value == "") 
  return false;
  if (isNaN(pObj.value)) 
  return false;
  if (parseFloat(pObj.value) < 0 || parseFloat(pObj.value) > 4.0) 
  return false;
  var objGPAReg = /([1-3]([.][0-9]*)?|4([.][0])?)/;
  return objGPAReg.test(pObj.value);
}



function showError(pObj, pMessage) {
  if (pObj) 
  {
    pObj.innerHTML = pMessage;
    pObj.style.display = "inline";
  }
}



function isInteger(s) {
  var i;
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (((c < "0") || (c > "9"))) 
      return false;
    }
  return true;
}



function stripCharsInBag(s, bag) {
  var i;
  var returnString = "";
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (bag.indexOf(c) == -1) 
      returnString += c;
    }
  return returnString;
}



function daysInFebruary(year) {
  return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}



function DaysArray(n) {
  for (var i = 1; i <= n; i++) 
    {
      this[i] = 31;
      if (i == 4 || i == 6 || i == 9 || i == 11) 
      {
        this[i] = 30;
      }
      if (i == 2) 
      {
        this[i] = 29;
      }
    }
  return this;
}



function getBrand(account, urlLocation) {
  var myregex = /\.com\/(.*)/g;
  var match = myregex.exec(urlLocation);
  if (match != null) 
  {
    var paperBrand = "";
    if (match[1].indexOf('/') == -1) 
    {
      paperBrand = match[1];
    } else {
      paperBrand = match[1].substring(0, match[1].indexOf('/'));
    }
    switch (paperBrand) {
      case 'trivalleyherald':
      case 'oaklandtribune':
      case 'sanmateocountytimes':
      case 'argus':
      case 'review':
      case 'timesstar':
        return account + " " + paperBrand + "Old getBrand";
        break;
      default:
        return account + "Old getBrand";
        break;
    }
  } else {
    return account + "Old getBrand";
  }
}



function getWithSlash(s) {
  if (s == "") 
  {
    return ("");
  } else {
    return (" / " + s);
  }
}



function onLanding(currURL) {
  var urls = new Array(7);
  var urls2 = new Array(7);
  var urls3 = new Array(7);
  var urls4 = new Array(7);
  urls = ["http://insidebayarea.com/", "http://insidebayarea.com/oaklandtribune/", "http://insidebayarea.com/trivalleyherald/", "http://insidebayarea.com/sanmateocountytimes/", "http://insidebayarea.com/argus/", "http://insidebayarea.com/dailyreview/", "http://insidebayarea.com/timesstar/"];
  urls2 = ["http://www.insidebayarea.com/", "http://www.insidebayarea.com/oaklandtribune/", "http://www.insidebayarea.com/trivalleyherald/", "http://www.insidebayarea.com/sanmateocountytimes/", "http://www.insidebayarea.com/argus/", "http://www.insidebayarea.com/dailyreview/", "http://www.insidebayarea.com/timesstar/"];
  urls3 = ["http://betalive.insidebayarea.com/", "http://betalive.insidebayarea.com/", "http://betalive.insidebayarea.com/oaklandtribune/", "http://betalive.insidebayarea.com/trivalleyherald/", "http://betalive.insidebayarea.com/sanmateocountytimes/", "http://betalive.insidebayarea.com/argus/", "http://betalive.insidebayarea.com/dailyreview/", "http://betalive.insidebayarea.com/timesstar/"];
  urls4 = ["http://devlive.insidebayarea.com/", "http://devlive.insidebayarea.com/", "http://devlive.insidebayarea.com/oaklandtribune/", "http://devlive.insidebayarea.com/trivalleyherald/", "http://devlive.insidebayarea.com/sanmateocountytimes/", "http://devlive.insidebayarea.com/argus/", "http://devlive.insidebayarea.com/dailyreview/", "http://devlive.insidebayarea.com/timesstar/"];
  urls = urls.concat(urls2, urls3, urls4);
  for (count = 0; count < urls.length; count++) 
    {
      if (currURL == urls[count]) 
      {
        return true;
      }
    }
  return false;
}



function tagSearchIADID(t) {
  try {
    var sep = t.search ? '&' : '?';
    t.search = t.search + sep + 'IADID=Search-' + t.hostname + '-' + location.hostname;
  }  catch (e) {
}
}



function getValue(url, key) {
  if (!key) 
  return "";
  var keyIndex = url.indexOf(key + "=");
  if (keyIndex < 0) 
  return "";
  keyIndex += key.length + 1;
  var separatorIndex = url.indexOf("&", keyIndex);
  if (separatorIndex < 0) 
  {
    return url.substring(keyIndex);
  } else {
    return url.substring(keyIndex, separatorIndex);
  }
}



function isStartsWith(src, prefix) {
  return src.indexOf(prefix) == 0 ? true : false;
}



function getEmptyForValue(val) {
  return val ? val : '';
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function isChild(parent, child) {
  if (child != null) 
  {
    while (child.parentNode) 
      {
        if ((child = child.parentNode) == parent) 
        {
          return true;
        }
      }
  }
  return false;
}



function jcChangeStyleOpac(opacity, object) {
  object.opacity = (opacity / 100);
  object.MozOpacity = (opacity / 100);
  object.KhtmlOpacity = (opacity / 100);
  object.filter = "alpha(opacity=" + opacity + ")";
}



function jc_init() {
  if ((typeof jc_update_period != "undefined") && jc_autoUpdate) 
  {
    setTimeout("jc_update()", jc_update_period);
  }
}



function escapeQuotesHTML(text) {
  var re;
  re = new RegExp('&', "g");
  text = text.replace(re, "&amp;");
  re = new RegExp('"', "g");
  text = text.replace(re, "&quot;");
  re = new RegExp('<', "g");
  text = text.replace(re, "&lt;");
  re = new RegExp('>', "g");
  text = text.replace(re, "&gt;");
  return text;
}



function getHostName(url) {
  var output = "";
  url = url.toLowerCase().replace("www.", "").replace("http://", "").replace(".robocaster", "");
  if (url.indexOf("/")) 
  url = url.substring(0, url.indexOf("/"));
  output = url;
  return output;
}



function endsWith(str, t) {
  return (t.toLowerCase() == str.substring(str.length - t.length).toLowerCase());
}



function MSOLayout_SearchArray(SearchArray, Value) {
  for (var index = 0; index < SearchArray.length; index++) 
    {
      if (SearchArray[index] == Value || SearchArray[index] == "#" + Value) 
      return index;
    }
  return -1;
}



function ConvertToAspPartDisplayMode(view) {
  var displayMode;
  switch (view) {
    case '-1':
      displayMode = 'ExtensibleView';
      break;
    case '0':
      displayMode = 'Browse';
      break;
    case '1':
      displayMode = 'Edit';
      break;
    case '2':
      displayMode = 'Catalog';
      break;
    case '3':
      displayMode = 'GallerySearch';
      break;
    case '4':
      displayMode = 'Navigation';
      break;
    case '5':
      displayMode = 'Import';
      break;
    case '6':
      displayMode = 'DownLevelWebPartMenu';
      break;
    case '7':
      displayMode = 'ToolPaneErr';
      break;
  }
  return displayMode;
}



function MSOMode_RemoveMode(newUrl, regExpression) {
  var hashMarkExpression = /\#/;
  var hashMarkIndex = newUrl.search(hashMarkExpression);
  if (hashMarkIndex != -1) 
  {
    newUrl = newUrl.substring(0, hashMarkIndex);
  }
  var questionMarkExpression = /\?/;
  var questionMarkIndex = newUrl.search(questionMarkExpression);
  if (questionMarkIndex != -1) 
  {
    var pathString = newUrl.substring(0, questionMarkIndex);
    var queryString = newUrl.substring(questionMarkIndex, newUrl.length);
    queryString = queryString.replace(regExpression, '');
    if (queryString.length != 0 && queryString.charAt(0) != '?') 
    {
      queryString = "?" + queryString;
    }
    newUrl = pathString + queryString;
  }
  return newUrl;
}



function MSOMode_AddMode(newUrl, regExpression, stringToAdd) {
  var hashMarkExpression = /\#/;
  var hashMarkIndex = newUrl.search(hashMarkExpression);
  if (hashMarkIndex != -1) 
  {
    newUrl = newUrl.substring(0, hashMarkIndex);
  }
  var questionMarkExpression = /\?/;
  var questionMarkIndex = newUrl.search(questionMarkExpression);
  if (questionMarkIndex == -1) 
  {
    newUrl += '?' + stringToAdd;
  } else {
    var queryString = newUrl.substring(questionMarkIndex, newUrl.length);
    if (queryString.search(regExpression) == -1) 
    {
      newUrl += '&' + stringToAdd;
    }
  }
  return newUrl;
}



function MSOMenu_KeyboardClick(widget) {
  for (var index = 1; index < arguments.length; index++) 
    {
      if (event.keyCode == arguments[index]) 
      {
        widget.click();
        event.returnValue = false;
        return;
      }
    }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function unescape_xml_string(s) {
  return s.replace(/&apos;/g, "'").replace(/&#39;/g, "'").replace(/&quot;/g, "\"").replace(/&#34;/g, "\"").replace(/&gt;/g, ">").replace(/&#62;/g, ">").replace(/&lt;/g, "<").replace(/&#60;/g, "<").replace(/&amp;/g, "&").replace(/&#38;/g, "&");
}



function set_css_style(css, e, priority) {
  var rules = css.split(";");
  for (var i = 0; i < rules.length; i++) 
    {
      var nvpair = rules[i].split(":");
      if (nvpair.length == 2) 
      {
        try {
          var name = nvpair[0];
          var value = nvpair[1];
          if (name == "background") 
          {
            e.style.background = value;
          } else if (name == "background-attachment") 
          {
            e.style.backgroundAttachment = value;
          } else if (name == "background-color") 
          {
            e.style.backgroundColor = value;
          } else if (name == "background-image") 
          {
            e.style.backgroundImage = value;
          } else if (name == "background-position") 
          {
            e.style.backgroundPosition = value;
          } else if (name == "background-position-x") 
          {
            e.style.backgroundPositionX = value;
          } else if (name == "background-position-y") 
          {
            e.style.backgroundPositionY = value;
          } else if (name == "background-repeat") 
          {
            e.style.backgroundRepeat = value;
          } else if (name == "behavior") 
          {
            e.style.behavior = value;
          } else if (name == "border") 
          {
            e.style.border = value;
          } else if (name == "border-bottom") 
          {
            e.style.borderBottom = value;
          } else if (name == "border-bottom-color") 
          {
            e.style.borderBottomColor = value;
          } else if (name == "border-bottom-style") 
          {
            e.style.borderBottomStyle = value;
          } else if (name == "border-bottom-width") 
          {
            e.style.borderBottomWidth = value;
          } else if (name == "border-collapse") 
          {
            e.style.borderCollapse = value;
          } else if (name == "border-color") 
          {
            e.style.borderColor = value;
          } else if (name == "border-left") 
          {
            e.style.borderLeft = value;
          } else if (name == "border-left-color") 
          {
            e.style.borderLeftColor = value;
          } else if (name == "border-left-style") 
          {
            e.style.borderLeftStyle = value;
          } else if (name == "border-left-width") 
          {
            e.style.borderLeftWidth = value;
          } else if (name == "border-right") 
          {
            e.style.borderRight = value;
          } else if (name == "border-right-color") 
          {
            e.style.borderRightColor = value;
          } else if (name == "border-right-style") 
          {
            e.style.borderRightStyle = value;
          } else if (name == "border-right-width") 
          {
            e.style.borderRightWidth = value;
          } else if (name == "border-style") 
          {
            e.style.borderStyle = value;
          } else if (name == "border-top") 
          {
            e.style.borderTop = value;
          } else if (name == "border-top-color") 
          {
            e.style.borderTopColor = value;
          } else if (name == "border-top-style") 
          {
            e.style.borderTopStyle = value;
          } else if (name == "border-top-width") 
          {
            e.style.borderTopWidth = value;
          } else if (name == "border-width") 
          {
            e.style.borderWidth = value;
          } else if (name == "bottom") 
          {
            e.style.bottom = value;
          } else if (name == "clear") 
          {
            e.style.clear = value;
          } else if (name == "clip") 
          {
            e.style.clip = value;
          } else if (name == "color") 
          {
            e.style.color = value;
          } else if (name == "cssText") 
          {
            e.style.Sets = value;
          } else if (name == "cursor") 
          {
            e.style.cursor = value;
          } else if (name == "direction") 
          {
            e.style.direction = value;
          } else if (name == "display") 
          {
            e.style.display = value;
          } else if (name == "font") 
          {
            e.style.font = value;
          } else if (name == "font-family") 
          {
            e.style.fontFamily = value;
          } else if (name == "font-size") 
          {
            e.style.fontSize = value;
          } else if (name == "font-style") 
          {
            e.style.fontStyle = value;
          } else if (name == "font-variant") 
          {
            e.style.fontVariant = value;
          } else if (name == "font-weight") 
          {
            e.style.fontWeight = value;
          } else if (name == "height") 
          {
            e.style.height = value;
          } else if (name == "ime-mode") 
          {
            e.style.imeMode = value;
          } else if (name == "layout-flow") 
          {
            e.style.layoutFlow = value;
          } else if (name == "layout-grid") 
          {
            e.style.layoutGrid = value;
          } else if (name == "layout-grid-char") 
          {
            e.style.layoutGridChar = value;
          } else if (name == "layout-grid-line") 
          {
            e.style.layoutGridLine = value;
          } else if (name == "layout-grid-mode") 
          {
            e.style.layoutGridMode = value;
          } else if (name == "layout-grid-type") 
          {
            e.style.layoutGridType = value;
          } else if (name == "left") 
          {
            e.style.left = value;
          } else if (name == "letter-spacing") 
          {
            e.style.letterSpacing = value;
          } else if (name == "line-break") 
          {
            e.style.lineBreak = value;
          } else if (name == "line-height") 
          {
            e.style.lineHeight = value;
          } else if (name == "list-style") 
          {
            e.style.listStyle = value;
          } else if (name == "list-style-image") 
          {
            e.style.listStyleImage = value;
          } else if (name == "list-style-position") 
          {
            e.style.listStylePosition = value;
          } else if (name == "list-style-type") 
          {
            e.style.listStyleType = value;
          } else if (name == "margin") 
          {
            e.style.margin = value;
          } else if (name == "margin-bottom") 
          {
            e.style.marginBottom = value;
          } else if (name == "margin-left") 
          {
            e.style.marginLeft = value;
          } else if (name == "margin-right") 
          {
            e.style.marginRight = value;
          } else if (name == "margin-top") 
          {
            e.style.marginTop = value;
          } else if (name == "min-height") 
          {
            e.style.minHeight = value;
          } else if (name == "overflow") 
          {
            e.style.overflow = value;
          } else if (name == "overflow-x") 
          {
            e.style.overflowX = value;
          } else if (name == "overflow-y") 
          {
            e.style.overflowY = value;
          } else if (name == "padding") 
          {
            e.style.padding = value;
          } else if (name == "padding-bottom") 
          {
            e.style.paddingBottom = value;
          } else if (name == "padding-left") 
          {
            e.style.paddingLeft = value;
          } else if (name == "padding-right") 
          {
            e.style.paddingRight = value;
          } else if (name == "padding-top") 
          {
            e.style.paddingTop = value;
          } else if (name == "page-break-after") 
          {
            e.style.pageBreakAfter = value;
          } else if (name == "page-break-before") 
          {
            e.style.pageBreakBefore = value;
          } else if (name == "pixelBottom") 
          {
            e.style.pixelBottom = value;
          } else if (name == "pixelHeight") 
          {
            e.style.pixelHeight = value;
          } else if (name == "pixelLeft") 
          {
            e.style.pixelLeft = value;
          } else if (name == "pixelRight") 
          {
            e.style.pixelRight = value;
          } else if (name == "pixelTop") 
          {
            e.style.pixelTop = value;
          } else if (name == "pixelWidth") 
          {
            e.style.pixelWidth = value;
          } else if (name == "posBottom") 
          {
            e.style.posBottom = value;
          } else if (name == "posHeight") 
          {
            e.style.posHeight = value;
          } else if (name == "position") 
          {
            e.style.position = value;
          } else if (name == "posLeft") 
          {
            e.style.posLeft = value;
          } else if (name == "posRight") 
          {
            e.style.posRight = value;
          } else if (name == "posTop") 
          {
            e.style.posTop = value;
          } else if (name == "posWidth") 
          {
            e.style.posWidth = value;
          } else if (name == "right") 
          {
            e.style.right = value;
          } else if (name == "ruby-align") 
          {
            e.style.rubyAlign = value;
          } else if (name == "ruby-overhang") 
          {
            e.style.rubyOverhang = value;
          } else if (name == "ruby-position") 
          {
            e.style.rubyPosition = value;
          } else if (name == "scrollbar-3dlight-color") 
          {
            e.style.scrollbar3dLightColor = value;
          } else if (name == "scrollbar-arrow-color") 
          {
            e.style.scrollbarArrowColor = value;
          } else if (name == "scrollbar-base-color") 
          {
            e.style.scrollbarBaseColor = value;
          } else if (name == "scrollbar-darkshadow-color") 
          {
            e.style.scrollbarDarkShadowColor = value;
          } else if (name == "scrollbar-face-color") 
          {
            e.style.scrollbarFaceColor = value;
          } else if (name == "scrollbar-highlight-color") 
          {
            e.style.scrollbarHighlightColor = value;
          } else if (name == "scrollbar-shadow-color") 
          {
            e.style.scrollbarShadowColor = value;
          } else if (name == "scrollbar-track-color") 
          {
            e.style.scrollbarTrackColor = value;
          } else if (name == "float") 
          {
            e.style.styleFloat = value;
          } else if (name == "table-layout") 
          {
            e.style.tableLayout = value;
          } else if (name == "text-align") 
          {
            e.style.textAlign = value;
          } else if (name == "text-align-last") 
          {
            e.style.textAlignLast = value;
          } else if (name == "text-autospace") 
          {
            e.style.textAutospace = value;
          } else if (name == "text-decoration") 
          {
            e.style.textDecoration = value;
          } else if (name == "textDecorationBlink") 
          {
            e.style.textDecorationBlink = value;
          } else if (name == "textDecorationLineThrough") 
          {
            e.style.textDecorationLineThrough = value;
          } else if (name == "textDecorationNone") 
          {
            e.style.textDecorationNone = value;
          } else if (name == "textDecorationOverline") 
          {
            e.style.textDecorationOverline = value;
          } else if (name == "textDecorationUnderline") 
          {
            e.style.textDecorationUnderline = value;
          } else if (name == "text-indent") 
          {
            e.style.textIndent = value;
          } else if (name == "text-justify") 
          {
            e.style.textJustify = value;
          } else if (name == "text-kashida-space") 
          {
            e.style.textKashidaSpace = value;
          } else if (name == "text-overflow") 
          {
            e.style.textOverflow = value;
          } else if (name == "text-transform") 
          {
            e.style.textTransform = value;
          } else if (name == "text-underline-position") 
          {
            e.style.textUnderlinePosition = value;
          } else if (name == "top") 
          {
            e.style.top = value;
          } else if (name == "unicode-bidi") 
          {
            e.style.unicodeBidi = value;
          } else if (name == "vertical-align") 
          {
            e.style.verticalAlign = value;
          } else if (name == "visibility") 
          {
            e.style.visibility = value;
          } else if (name == "white-space") 
          {
            e.style.whiteSpace = value;
          } else if (name == "width") 
          {
            e.style.width = value;
          } else if (name == "word-break") 
          {
            e.style.wordBreak = value;
          } else if (name == "word-spacing") 
          {
            e.style.wordSpacing = value;
          } else if (name == "word-wrap") 
          {
            e.style.wordWrap = value;
          } else if (name == "writing-mode") 
          {
            e.style.writingMode = value;
          } else if (name == "z-index") 
          {
            e.style.zIndex = value;
          } else if (name == "zoom") 
          {
            e.style.zoom = value;
          }
        }        catch (e) {
}
      }
    }
}



function GetCookieExpireTime() {
  var ce = new Date();
  var m = ce.getMonth();
  if (m == 11) 
  {
    ce.setMonth(0);
    ce.setYear(ce.getYear() + 1);
  } else {
    ce.setMonth(m + 1);
  }
  return ce.toGMTString();
}



function _ppsi(lid, fieldID) {
  return lid + fieldID;
}



function XmlEscape(text) {
  return (text) ? text.replace('&', '&amp;').replace('>', '&gt;').replace('<', '&lt;') : '';
}



function PDF_getTags698617() {
  if (typeof pd_tags == "undefined") 
  {
    return "";
  }
  var a = "";
  for (var b in pd_tags) 
    {
      a += PDF_urlEncode698617(b) + ":" + PDF_urlEncode698617(pd_tags[b]) + ";";
    }
  return a.slice(0, -1);
}



function PDF_urlEncode698617(a) {
  return encodeURIComponent(a).replace(/\%20/g, "+").replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/\~/g, "%7E");
}



function PDF_rand698617(a) {
  var e = a.length;
  if (e == 0) 
  {
    return false;
  }
  while (--e) 
    {
      var d = Math.floor(Math.random() * (e + 1));
      var c = a[e];
      var b = a[d];
      a[e] = b;
      a[d] = c;
    }
  return a;
}



function PDF_callback698617(a) {
  if (typeof pd_callback == "function") 
  {
    pd_callback(a);
  } else {
    if (typeof pd_callback_698617 == "function") 
    {
      pd_callback_698617(a);
    }
  }
}



function PDF_log698617(a) {
  if (typeof (_debug) !== "undefined" && _debug) 
  {
    if (typeof (console) !== "undefined" && console != null) 
    {
      console.log(a);
    }
  }
}



function topix_ajax(opt) {
  var t;
  try {
    var ua = navigator.userAgent;
    if (ua.indexOf("MSIE") > -1) 
    t = new ActiveXObject("Microsoft.XMLHTTP"); else t = new XMLHttpRequest();
  }  catch (e) {
  return null;
}
  if (t == null) 
  return null;
  if (opt.callback) 
  t.onreadystatechange = function() {
  if (t.readyState == 4) 
  opt.callback(t);
};
  t.open("POST", opt.url, !opt.sync);
  t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  if (opt.headers) 
  for (var hname in headers) 
    t.setRequestHeader(hname, headers[hname]);
  t.send(opt.body);
  if (opt.sync && t.overrideMimeType) 
  opt.callback(t);
}



function topix_cobrand_params(pcode, cobrand) {
  var params = "&p=" + pcode;
  params += "&s=PB";
  if (cobrand) 
  params += "&co=1";
  return params;
}



function subscribe_buttons_next_hash() {
  var new_hash = '';
  var digits = '0123456789abcdef';
  while (new_hash.length < 32) 
    {
      start = Math.floor(Math.random() * digits.length);
      end = start + 1;
      new_hash += digits.substring(start, end);
    }
  return new_hash;
}



function get_start_tag(tag, attr, check_attr) {
  if (check_attr && attr == null) 
  {
    attr = prompt('Please enter the ' + tag.toLowerCase(), tag);
    if (attr == '' || attr == null) 
    return;
  }
  if (attr == null) 
  {
    return tag;
  } else if (typeof attr != 'object') 
  {
    return tag + '=' + attr;
  }
  var start_tag = tag;
  if (attr[tag.toLowerCase()] != null) 
  start_tag = tag + '="' + attr[tag.toLowerCase()] + '"';
  for (a in attr) 
    {
      if (a.toLowerCase() == tag.toLowerCase()) 
      continue;
      start_tag += ' ' + a.toLowerCase() + '="' + attr[a] + '"';
    }
  return start_tag;
}



function trim(inputString) {
  if (typeof inputString != "string") 
  return inputString;
  var retValue = inputString;
  var ch = retValue.substring(0, 1);
  while (ch == " ") 
    {
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
    }
  ch = retValue.substring(retValue.length - 1, retValue.length);
  while (ch == " ") 
    {
      retValue = retValue.substring(0, retValue.length - 1);
      ch = retValue.substring(retValue.length - 1, retValue.length);
    }
  while (retValue.indexOf("  ") != -1) 
    {
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ") + 1, retValue.length);
    }
  return retValue;
}



function ieKeyPress(evt, rte) {
  var key = (evt.which || evt.charCode || evt.keyCode);
  var stringKey = String.fromCharCode(key).toLowerCase();
  switch (key) {
    case 13:
      evt.keyCode = 0;
      currentRTE = rte;
      insertHTML('<br>');
      break;
  }
  }



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function removeSpaces(string) {
  var tstring = "";
  string = '' + string;
  splitstring = string.split(" ");
  for (i = 0; i < splitstring.length; i++) 
    tstring += splitstring[i];
  return tstring;
}



function getElementbyClass(rootobj, classname) {
  var temparray = new Array();
  var inc = 0;
  var rootlength = rootobj.length;
  for (i = 0; i < rootlength; i++) 
    {
      if (rootobj[i].className == classname) 
      temparray[inc++] = rootobj[i];
    }
  return temparray;
}



function __utmVoid() {
  return;
}



function __utmGetCookie(__utmclist, __utmcname, __utmcsep) {
  if (!__utmclist || __utmclist == "") 
  return "-";
  if (!__utmcname || __utmcname == "") 
  return "-";
  if (!__utmcsep || __utmcsep == "") 
  return "-";
  var __utmi, __utmi2, __utmi3, __utmtc = "-";
  __utmi = __utmclist.indexOf(__utmcname);
  __utmi3 = __utmcname.indexOf("=") + 1;
  if (__utmi > -1) 
  {
    __utmi2 = __utmclist.indexOf(__utmcsep, __utmi);
    if (__utmi2 < 0) 
    {
      __utmi2 = __utmclist.length;
    }
    __utmtc = __utmclist.substring((__utmi + __utmi3), __utmi2);
  }
  return __utmtc;
}



function __utmHash(__utmd) {
  if (!__utmd || __utmd == "") 
  return 1;
  var __utmhash = 0, __utmg = 0;
  for (var i = __utmd.length - 1; i >= 0; i--) 
    {
      var __utmc = parseInt(__utmd.charCodeAt(i));
      __utmhash = ((__utmhash << 6) & fffffff) + __utmc + (__utmc << 14);
      if ((__utmg = __utmhash & fe00000) != 0) 
      __utmhash = (__utmhash ^ (__utmg >> 21));
    }
  return __utmhash;
}



function __utmFixA(__utmcs, __utmsp, __utmst) {
  if (!__utmcs || __utmcs == "") 
  return "-";
  if (!__utmsp || __utmsp == "") 
  return "-";
  if (!__utmst || __utmst == "") 
  return "-";
  var __utmt = __utmGetCookie(__utmcs, "__utma=", __utmsp);
  var __utmlt = 0;
  var __utmi = 0;
  if ((__utmi = __utmt.lastIndexOf(".")) > 9) 
  {
    __utmns = __utmt.substring(__utmi + 1, __utmt.length);
    __utmns = (__utmns * 1) + 1;
    __utmt = __utmt.substring(0, (__utmi));
    if ((__utmi = __utmt.lastIndexOf(".")) > 7) 
    {
      __utmlt = __utmt.substring(__utmi + 1, __utmt.length);
      __utmt = __utmt.substring(0, (__utmi));
    }
    if ((__utmi = __utmt.lastIndexOf(".")) > 5) 
    {
      __utmt = __utmt.substring(0, (__utmi));
    }
    __utmt += "." + __utmlt + "." + __utmst + "." + __utmns;
  }
  return __utmt;
}



function __utmTZConvert(__utmmz) {
  var __utmhr = 0, __utmmn = 0, __utmsg = '+';
  if (__utmmz && __utmmz != "") 
  {
    if (__utmmz <= 0) 
    {
      __utmsg = '+';
      __utmmz *= -1;
    } else {
      __utmsg = '-';
      __utmmz *= 1;
    }
    __utmhr = Math.floor((__utmmz / 60));
    __utmmn = Math.floor((__utmmz % 60));
  }
  if (__utmhr < 10) 
  __utmhr = "0" + __utmhr;
  if (__utmmn < 10) 
  __utmmn = "0" + __utmmn;
  return __utmsg + __utmhr + __utmmn;
}



function RTrim(VALUE) {
  var w_space = String.fromCharCode(32);
  var v_length = VALUE.length;
  var strTemp = "";
  if (v_length < 0) 
  {
    return "";
  }
  var iTemp = v_length - 1;
  while (iTemp > -1) 
    {
      if (VALUE.charAt(iTemp) == w_space) 
      {
      } else {
        strTemp = VALUE.substring(0, iTemp + 1);
        break;
      }
      iTemp = iTemp - 1;
    }
  return strTemp;
}



function LTrim(VALUE) {
  var w_space = String.fromCharCode(32);
  if (v_length < 1) 
  {
    return "";
  }
  var v_length = VALUE.length;
  var strTemp = "";
  var iTemp = 0;
  while (iTemp < v_length) 
    {
      if (VALUE.charAt(iTemp) == w_space) 
      {
      } else {
        strTemp = VALUE.substring(iTemp, v_length);
        break;
      }
      iTemp = iTemp + 1;
    }
  return strTemp;
}



function isnumeric(alphane) {
  var numaric = alphane;
  for (var j = 0; j < numaric.length; j++) 
    {
      var alphaa = numaric.charAt(j);
      var hh = alphaa.charCodeAt(0);
      if ((hh > 47 && hh < 58) || (hh == 32) || (hh == 41) || (hh == 40)) 
      {
      } else {
        return false;
      }
    }
  return true;
}



function longTrim(str) {
  var str = str.replace(/^\s\s*/, ''), ws = /\s/, i = str.length;
  while (ws.test(str.charAt(--i))) 
      return str.slice(0, i + 1);
}



function getContainerWith(node, tagName, className) {
  while (node != null) 
    {
      if (node.tagName != null && node.tagName == tagName && hasClassName(node, className)) 
      return node;
      node = node.parentNode;
    }
  return node;
}



function removeClassName(el, name) {
  var i, curList, newList;
  if (el.className == null) 
  return;
  newList = new Array();
  curList = el.className.split(" ");
  for (i = 0; i < curList.length; i++) 
    if (curList[i] != name) 
    newList.push(curList[i]);
  el.className = newList.join(" ");
}



function getPageOffsetLeft(el) {
  var x;
  x = el.offsetLeft;
  if (el.offsetParent != null) 
  x += getPageOffsetLeft(el.offsetParent);
  return x;
}



function getPageOffsetTop(el) {
  var y;
  y = el.offsetTop;
  if (el.offsetParent != null) 
  y += getPageOffsetTop(el.offsetParent);
  return y;
}



function marcartemas(campo) {
  for (var i = 0; i < campo.length; i++) 
    if (campo.elements[i].id == "tema") 
    campo.elements[i].checked = true;
}



function desmarcartemas(campo) {
  for (var i = 0; i < campo.length; i++) 
    if (campo.elements[i].id == "tema") 
    campo.elements[i].checked = false;
}



function marcar(campo, valor) {
  for (var i = 0; i < campo.length; i++) 
    if (campo.elements[i].id == valor) 
    campo.elements[i].checked = true;
}



function desmarcar(campo, valor) {
  for (var i = 0; i < campo.length; i++) 
    if (campo.elements[i].id == valor) 
    campo.elements[i].checked = false;
}



function validar(campo) {
  for (var i = 0; i < campo.length; i++) 
    {
      quitarcomilla(campo.elements[i]);
      if (campo.elements[i].id == 2) 
      {
        campo.elements[i].focus();
        i = campo.length + 2;
      } else if ((campo.elements[i].value.replace(/ /g, "") == "") && (campo.elements[i].id == "1")) 
      {
        if ((campo.elements[i].title == "Provincia" && campo.pais.value == "Espa\ufffda") || (campo.elements[i].title != "Provincia")) 
        {
          alert("El campo " + campo.elements[i].title + " no puede estar vac\ufffdo");
          campo.elements[i].focus();
          i = campo.length + 2;
        }
      }
    }
  if (i == campo.length) 
  campo.submit();
}



function cambiamail(buzon) {
  var res = "";
  for (var n = 0; n < buzon.length; n++) 
    res += String.fromCharCode(buzon.charCodeAt(n));
  if (res.indexOf('@') < 0) 
  res = res + '@' + 'conferenzias.com';
  location = "mail" + "to:" + res;
}



function compruebanum(valor_1, valor_2) {
  var aceptar = 1;
  for (var i = 0; i < valor_1.length; i++) 
    {
      var ch = valor_1.substring(i, i + 1);
      if ((ch < "0" || "9" < ch)) 
      {
        aceptar = 0;
      }
    }
  if (aceptar == 0) 
  {
    alert("Debe introducir un valor entero y sin puntos.");
    valor_2.value = "";
    valor_2.focus();
  }
  return true;
}



function doSel(obj) {
  for (i = 0; i < obj.length; i++) 
    if (obj[i].selected == true) 
    eval(obj[i].value);
}



function compruebanum_onchange(valor_1, valor_2) {
  var aceptar = 1;
  for (var i = 0; i < valor_1.length; i++) 
    {
      var ch = valor_1.substring(i, i + 1);
      if ((ch < "0" || "9" < ch)) 
      {
        aceptar = 0;
      }
    }
  if (aceptar == 0) 
  {
    alert("En el C\ufffddigo Postal debe introducir un valor entero y sin puntos.");
    valor_2.value = "";
    valor_2.focus();
  }
  return true;
}



function _cleanString(str) {
  var rex = /\S/i;
  str = str.substring(str.search(rex), str.length);
  var i = str.indexOf("HTTP/1");
  if (i > -1) 
  {
    str = str.substring(i, str.length);
    i = str.indexOf(String.fromCharCode(13, 10, 13, 10));
    if (i > -1) 
    {
      str = str.substring(i + 2, str.length);
    }
  }
  return str;
}



function _parseWDDXnode(n) {
  var val;
  switch (n.tagName) {
    case 'string':
      val = _parseWDDXstring(n);
      break;
    case 'number':
      val = parseFloat(n.firstChild.data);
      break;
    case 'boolean':
      val = n.getAttribute('value');
      break;
    case 'dateTime':
      val = Date(n.firstChild.data);
      break;
    case 'array':
      val = _parseWDDXarray(n);
      break;
    case 'struct':
      val = _parseWDDXstruct(n);
      break;
    case 'recordset':
      val = _parseWDDXrecordset(n);
      break;
    case 'binary':
      val = n.firstChild.data;
      break;
    case 'char':
      val = _parseWDDXchar(n);
            break;
    case 'null':
      val = '';
      break;
    default:
      val = n.tagName;
      break;
  }
  return val;
}



function _toQueryString(obj) {
  if (typeof (obj) == 'string') 
  {
    return obj;
  }
  if (typeof (obj) == 'object') 
  {
    if (typeof obj.elements == 'undefined') 
    {
      return _object2queryString(obj);
    } else {
      return _form2queryString(obj);
    }
  }
}



function _object2queryString(obj) {
  var ar = new Array();
  for (x in obj) 
    {
      ar[ar.length] = _escape_utf8(x) + '=' + _escape_utf8(obj[x]);
    }
  return ar.join('&');
}



function _noCache(url) {
  var qs = new Array();
  var arr = url.split('?');
  var scr = arr[0];
  if (arr[1]) 
  {
    qs = arr[1].split('&');
  }
  qs[qs.length] = 'noCache=' + new Date().getTime();
  return scr + '?' + qs.join('&');
}



function aceptarterminos(acepto) {
  if (acepto.checked == false) 
  {
    alert("Debe aceptar los t\xe9rminos legales para continuar con el proceso");
  }
}



function validar(campo) {
  for (var i = 0; i < campo.length; i++) 
    {
      quitarcomilla(campo.elements[i]);
      if (campo.elements[i].id == 2) 
      {
        campo.elements[i].focus();
        i = campo.length + 2;
      } else if ((campo.elements[i].value.replace(/ /g, "") == "") && (campo.elements[i].id == "1")) 
      {
        if ((campo.elements[i].title == "Provincia" && campo.pais.value == "Espa\xf1a") || (campo.elements[i].title != "Provincia")) 
        {
          alert("El campo " + campo.elements[i].title + " no puede estar vac\xedo");
          campo.elements[i].focus();
          i = campo.length + 2;
        }
      }
    }
  if (i == campo.length) 
  campo.submit();
}



function doSel(obj) {
  for (i = 0; i < obj.length; i++) 
    if (obj[i].selected == true) 
    eval(obj[i].value);
}



function AddCss() {
}



function FixIE(el) {
  if (el.currentStyle != null && el.currentStyle.hasLayout != null && el.currentStyle.hasLayout == false) 
  el.style.display = "inline-block";
}



function Mix(c1, c2) {
  var i, step1, step2, x, y, r = new Array(3);
  if (c1.length == 4) 
  step1 = 1; else step1 = 2;
  if (c2.length == 4) 
  step2 = 1; else step2 = 2;
  for (i = 0; i < 3; i++) 
    {
      x = parseInt(c1.substr(1 + step1 * i, step1), 16);
      if (step1 == 1) 
      x = 16 * x + x;
      y = parseInt(c2.substr(1 + step2 * i, step2), 16);
      if (step2 == 1) 
      y = 16 * y + y;
      r[i] = Math.floor((x * 50 + y * 50) / 100);
      r[i] = r[i].toString(16);
      if (r[i].length == 1) 
      r[i] = "0" + r[i];
    }
  return ("#" + r[0] + r[1] + r[2]);
}



function get_start_tag(tag, attr, check_attr) {
  if (check_attr && attr == null) 
  {
    attr = prompt('Please enter the ' + tag.toLowerCase(), tag);
    if (attr == '' || attr == null) 
    return;
  }
  if (attr == null) 
  {
    return tag;
  } else if (typeof attr != 'object') 
  {
    return tag + '=' + attr;
  }
  var start_tag = tag;
  if (attr[tag.toLowerCase()] != null) 
  start_tag = tag + '="' + attr[tag.toLowerCase()] + '"';
  for (a in attr) 
    {
      if (a.toLowerCase() == tag.toLowerCase()) 
      continue;
      start_tag += ' ' + a.toLowerCase() + '="' + attr[a] + '"';
    }
  return start_tag;
}



function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0) 
  date.setTime(date.getTime() - skew);
}



function writeTypeKeyGreeting(commenter_name, entry_id) {
}



function jc_decode(str) {
  return unescape(str.replace(/\+/g, " "));
}



function jc_reportSendClick() {
}



function jc_unpublishPostResponse(responseText) {
}



function changeStyleOpac(opacity, object) {
  object.opacity = (opacity / 100);
  object.MozOpacity = (opacity / 100);
  object.KhtmlOpacity = (opacity / 100);
  object.filter = "alpha(opacity=" + opacity + ")";
}



function replaceSlashes(string) {
  string = string.replace(/\//gi, '%2G');
  return escape(string);
}



function adcureturn(link) {
}



function __dnn_ClientAPIEnabled() {
  return typeof (dnn) != 'undefined';
}



function __dnncore() {
  this.GetUserVal = 0;
  this.SetUserVal = 1;
}



function blurSearch() {
  if (this.value == '') 
  {
    this.value = DEF_VAL;
    this.removeAttribute('class', 'focus');
  }
}



function clearFormat(container) {
  if (!container) 
  return;
  var stack = [container];
  var c = 0;
  var fieldArr = ["color", "background"];
do {
    var node = stack.pop();
    for (var i = 0; i < node.childNodes.length; i++) 
      {
        var child = node.childNodes[i];
        if (child.hasChildNodes()) 
        {
          stack.push(child);
        }
        c++;
        for (var j = 0; j < fieldArr.length; j++) 
          {
            if (typeof (child[fieldArr[j]]) != "undefined") 
            child[fieldArr[j]] = "";
            if (typeof (child.style) != "undefined") 
            child.style[fieldArr[j]] = "";
          }
      }
  } while (stack.length > 0);
}



function addFriendHandler(res, params) {
  res = parseInt(res);
  if (res < 0) 
  {
    switch (res) {
      case -1:
        removeOPHint("");
        alert(blogLang["signintoaddfriend"]);
        break;
      case -2:
        fadeOPHint("", "\"" + params["uname"] + "\" " + blogLang["beenfriend"], "OPHintSucc");
        break;
      case -3:
        removeOPHint("");
        alert(blogLang["noselffriend"]);
        break;
    }
  } else {
    fadeOPHint("", blogLang["addfriendsucc"].format(params["uname"]), "OPHintSucc");
  }
  inFavReq = false;
  proFrid = 0;
}



function DelPostHandler(res) {
  indel = 0;
  switch (res) {
    case "0":
      setOPHint("MGMhint", blogLang["delpostsucc"], "OPHintSucc");
      setTimeout("location.href='/';", 1000);
      break;
    case "1":
      setOPHint("MGMhint", blogLang["delpostfail"], "OPHintFail");
      break;
  }
}



function DelCommentHandler(res) {
  indel = 0;
  switch (res) {
    case "0":
      setOPHint("MGMhint", blogLang["delcommentsucc"], "OPHintSucc");
      setTimeout(reloadpage, 1000);
      break;
    case "1":
      setOPHint("MGMhint", blogLang["delcommentfail"], "OPHintFail");
      break;
  }
}



function myXMLHttpRequest() {
  var xmlhttplocal;
  try {
    xmlhttplocal = new ActiveXObject("Msxml2.XMLHTTP");
  }  catch (e) {
  try {
    xmlhttplocal = new ActiveXObject("Microsoft.XMLHTTP");
  }  catch (E) {
  xmlhttplocal = false;
}
}
  if (!xmlhttplocal && typeof XMLHttpRequest != 'undefined') 
  {
    try {
      var xmlhttplocal = new XMLHttpRequest();
    }    catch (e) {
  var xmlhttplocal = false;
}
  }
  return (xmlhttplocal);
}



function _SOM_advise(strEvent, funcToCall) {
  if ((typeof (strEvent) == 'string') && (strEvent == PAGE_ONBEFORESERVEREVENT) && (funcToCall != null)) 
  {
    if (this._adviseList == null) 
    this._adviseList = new Object();
    this._adviseList[++this._nLastAdviseID] = funcToCall;
    return this._nLastAdviseID;
  }
  return -1;
}



function _SOM_unadvise(strEvent, nAdviseID) {
  if (this._adviseList != null && (typeof (strEvent) == 'string') && (strEvent == PAGE_ONBEFORESERVEREVENT) && (nAdviseID != null)) 
  {
    if (this._adviseList[nAdviseID] != null) 
    {
      this._adviseList[nAdviseID] = null;
      return true;
    }
  }
  return false;
}



function _SOM__fireEvent(strName, strEvent) {
  if (typeof (thisPage_onbeforeserverevent) == 'function') 
  {
    thisPage_onbeforeserverevent(strName, strEvent);
  }
  if (this._adviseList != null) 
  {
    for (var i = 1; i <= this._nLastAdviseID; i++) 
      {
        var adviseType = typeof (this._adviseList[i]);
        if (adviseType == 'function') 
        this._adviseList[i](strName, strEvent); else if (adviseType == 'string') 
        eval(this._adviseList[i]);
      }
  }
  if (this.cancelEvent == '0' || this.cancelEvent == 'false') 
  {
    thisPage.invokeMethod('', '_EM__onclientevent', new Array(strName, strEvent));
  }
  this.cancelEvent = false;
}



function _SOM__escapePlus(value) {
  for (var i = 0, newValue = ''; i < value.length; i++) 
    newValue += (value.charAt(i) == '+' ? '%2B' : value.charAt(i));
  return newValue;
}



function _SOM__buildURL(url, method, args) {
  if (typeof (method) == 'string') 
  {
    url += '?_method=' + method;
    var params = '&pcount=0';
    if (args != null && args.length) 
    {
      params = '&pcount=' + args.length;
      for (var i = 0; i < args.length; i++) 
        {
          var arg = args[i];
          if (arg != null) 
          params += '&p' + i + '=' + _SOM__escapePlus(escape(arg));
        }
    }
    url += params;
  }
  return url;
}



function _SOM__extractValue(s, name) {
  var chStart = s.indexOf(name + '=');
  if (chStart != -1) 
  {
    chStart += name.length + 1;
    var chEnd = s.indexOf('&', chStart);
    if (chEnd == -1) 
    chEnd = s.length + 1;
    return unescape(s.substring(chStart, chEnd));
  }
  return null;
}



function s_c2fe(f) {
  var x = '', s = 0, e, a, b, c;
  while (1) 
    {
      e = f.indexOf('"', s);
      b = f.indexOf('\\', s);
      c = f.indexOf("\n", s);
      if (e < 0 || (b >= 0 && b < e)) 
      e = b;
      if (e < 0 || (c >= 0 && c < e)) 
      e = c;
      if (e >= 0) 
      {
        x += (e > s ? f.substring(s, e) : '') + (e == c ? '\\n' : '\\' + f.substring(e, e + 1));
        s = e + 1;
      } else return x + f.substring(s);
    }
  return f;
}



function s_c2fa(f) {
  var s = f.indexOf('(') + 1, e = f.indexOf(')'), a = '', c;
  while (s >= 0 && s < e) 
    {
      c = f.substring(s, s + 1);
      if (c == ',') 
      a += '","'; else if (("\n\r\t ").indexOf(c) < 0) 
      a += c;
      s++;
    }
  return a ? '"' + a + '"' : a;
}



function get_random_number(min, max) {
  rand = min + Math.floor(Math.random() * (max - min + 1));
  return rand;
}



function confirm_if(expr, message) {
  if (!expr) 
  {
    return true;
  }
  return confirm(message);
}



function elementShowAdvanced(elements, show) {
  for (var elementIndex in elements) 
    {
      element = elements[elementIndex];
      element.className = element.className.replace(new RegExp(' ?hide'), '');
      if (!show) 
      {
        element.className += ' hide';
      }
    }
}



function filterByParent(elCollection, parentFinder) {
  var filteredCollection = [];
  for (var i = 0; i < elCollection.length; ++i) 
    {
      var findParent = parentFinder(elCollection[i]);
      if (findParent.nodeName != 'BODY') 
      {
        filteredCollection.push(elCollection[i]);
      }
    }
  return filteredCollection;
}



function _j(m) {
  var n = new Date();
  n = n.getTime() + m;
  if (m == 0) 
  return n;
  if (m > 15) 
  {
    while (true) 
      {
        m = new Date();
        if (m.getTime() > n) 
        return;
      }
  } else {
    n += "";
    return n.substring(n.length - m, n.length);
  }
}



function verify_form(arr) {
  for (i = 0; i < arr.length; i++) 
    {
      border_normale(arr[i].id);
    }
    var ok = 1;
  var msg = '.';
  for (i = 0; i < arr.length; i++) 
    {
      if (arr[i].value == "") 
      {
        border_rouge(arr[i].id);
        ok = 0;
      }
            if ((arr[i].id.indexOf("mail") > -1) || (arr[i].id.indexOf("Mail") > -1)) 
      {
        adresse_email = arr[i].value;
        arobase = adresse_email.indexOf("@");
        point = adresse_email.indexOf(".", arobase);
        mauvais_endroit_point = arobase + 1;
        double_point = adresse_email.indexOf("..", arobase);
        nbr_carac = adresse_email.length - point;
        double_arobase = adresse_email.indexOf("@", arobase + 1);
        if ((arobase < 1) || (point <= mauvais_endroit_point) || (adresse_email.length < 5) || (double_point >= 0) || (nbr_carac < 3) || (double_arobase >= 0)) 
        {
          msg = "Les informations sont invalides,\nmerci de v\ufffdrifier votre email.";
          ok = 0;
          border_rouge(arr[i].id);
        }
      }
    }
    if (ok == 0) 
  {
    alert("" + msg);
    arr[0].focus();
    return false;
  }
  if (ok == 1) 
  return true;
}



function getPosAbsolute(objet, l, h) {
  l += objet.offsetLeft;
  h += objet.offsetTop;
  if (objet.offsetParent == null) 
  return new Array(l, h); else return getPosAbsolute(objet.offsetParent, l, h);
}



function parseTokens(pf, ar) {
  var v, i, mode = -1, par = (pf != 'ol_');
  var fnMark = (par && !ar.length ? 1 : 0);
  for (i = 0; i < ar.length; i++) 
    {
      if (mode < 0) 
      {
        if (typeof ar[i] == 'number' && ar[i] > pmStart && ar[i] < pmUpper) 
        {
          fnMark = (par ? 1 : 0);
          i--;
        } else {
          switch (pf) {
            case 'ol_':
              ol_text = ar[i].toString();
              break;
            default:
              o3_text = ar[i].toString();
          }
        }
        mode = 0;
      } else {
        if (ar[i] >= pmCount || ar[i] == DONOTHING) 
        {
          continue;
        }
        if (ar[i] == INARRAY) 
        {
          fnMark = 0;
          eval(pf + 'text=ol_texts[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == CAPARRAY) 
        {
          eval(pf + 'cap=ol_caps[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == STICKY) 
        {
          if (pf != 'ol_') 
          eval(pf + 'sticky=1');
          continue;
        }
        if (ar[i] == BACKGROUND) 
        {
          eval(pf + 'background="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == NOCLOSE) 
        {
          if (pf != 'ol_') 
          opt_NOCLOSE();
          continue;
        }
        if (ar[i] == CAPTION) 
        {
          eval(pf + "cap='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CENTER || ar[i] == LEFT || ar[i] == RIGHT) 
        {
          eval(pf + 'hpos=' + ar[i]);
          if (pf != 'ol_') 
          olHautoFlag = 1;
          continue;
        }
        if (ar[i] == OFFSETX) 
        {
          eval(pf + 'offsetx=' + ar[++i]);
          continue;
        }
        if (ar[i] == OFFSETY) 
        {
          eval(pf + 'offsety=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGCOLOR) 
        {
          eval(pf + 'fgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCOLOR) 
        {
          eval(pf + 'bgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTCOLOR) 
        {
          eval(pf + 'textcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPCOLOR) 
        {
          eval(pf + 'capcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSECOLOR) 
        {
          eval(pf + 'closecolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == WIDTH) 
        {
          eval(pf + 'width=' + ar[++i]);
          continue;
        }
        if (ar[i] == BORDER) 
        {
          eval(pf + 'border=' + ar[++i]);
          continue;
        }
        if (ar[i] == CELLPAD) 
        {
          i = opt_MULTIPLEARGS(++i, ar, (pf + 'cellpad'));
          continue;
        }
        if (ar[i] == STATUS) 
        {
          eval(pf + "status='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == AUTOSTATUS) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus == 1) ? 0 : 1');
          continue;
        }
        if (ar[i] == AUTOSTATUSCAP) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus == 2) ? 0 : 2');
          continue;
        }
        if (ar[i] == HEIGHT) 
        {
          eval(pf + 'height=' + pf + 'aboveheight=' + ar[++i]);
          continue;
        }
        if (ar[i] == CLOSETEXT) 
        {
          eval(pf + "close='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == SNAPX) 
        {
          eval(pf + 'snapx=' + ar[++i]);
          continue;
        }
        if (ar[i] == SNAPY) 
        {
          eval(pf + 'snapy=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXX) 
        {
          eval(pf + 'fixx=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXY) 
        {
          eval(pf + 'fixy=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELX) 
        {
          eval(pf + 'relx=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELY) 
        {
          eval(pf + 'rely=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGBACKGROUND) 
        {
          eval(pf + 'fgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGBACKGROUND) 
        {
          eval(pf + 'bgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == PADX) 
        {
          eval(pf + 'padxl=' + ar[++i]);
          eval(pf + 'padxr=' + ar[++i]);
          continue;
        }
        if (ar[i] == PADY) 
        {
          eval(pf + 'padyt=' + ar[++i]);
          eval(pf + 'padyb=' + ar[++i]);
          continue;
        }
        if (ar[i] == FULLHTML) 
        {
          if (pf != 'ol_') 
          eval(pf + 'fullhtml=1');
          continue;
        }
        if (ar[i] == BELOW || ar[i] == ABOVE) 
        {
          eval(pf + 'vpos=' + ar[i]);
          if (pf != 'ol_') 
          olVautoFlag = 1;
          continue;
        }
        if (ar[i] == CAPICON) 
        {
          eval(pf + 'capicon="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONT) 
        {
          eval(pf + "textfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CAPTIONFONT) 
        {
          eval(pf + "captionfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CLOSEFONT) 
        {
          eval(pf + "closefont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == TEXTSIZE) 
        {
          eval(pf + 'textsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONSIZE) 
        {
          eval(pf + 'captionsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSESIZE) 
        {
          eval(pf + 'closesize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TIMEOUT) 
        {
          eval(pf + 'timeout=' + ar[++i]);
          continue;
        }
        if (ar[i] == FUNCTION) 
        {
          if (pf == 'ol_') 
          {
            if (typeof ar[i + 1] != 'number') 
            {
              v = ar[++i];
              ol_function = (typeof v == 'function' ? v : null);
            }
          } else {
            fnMark = 0;
            v = null;
            if (typeof ar[i + 1] != 'number') 
            v = ar[++i];
            opt_FUNCTION(v);
          }
          continue;
        }
        if (ar[i] == DELAY) 
        {
          eval(pf + 'delay=' + ar[++i]);
          continue;
        }
        if (ar[i] == HAUTO) 
        {
          eval(pf + 'hauto=(' + pf + 'hauto == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == VAUTO) 
        {
          eval(pf + 'vauto=(' + pf + 'vauto == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == CLOSECLICK) 
        {
          eval(pf + 'closeclick=(' + pf + 'closeclick == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == WRAP) 
        {
          eval(pf + 'wrap=(' + pf + 'wrap == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == FOLLOWMOUSE) 
        {
          eval(pf + 'followmouse=(' + pf + 'followmouse == 1) ? 0 : 1');
          continue;
        }
        if (ar[i] == MOUSEOFF) 
        {
          eval(pf + 'mouseoff=(' + pf + 'mouseoff==0) ? 1 : 0');
          v = ar[i + 1];
          if (pf != 'ol_' && eval(pf + 'mouseoff') && typeof v == 'number' && (v < pmStart || v > pmUpper)) 
          olHideDelay = ar[++i];
          continue;
        }
        if (ar[i] == CLOSETITLE) 
        {
          eval(pf + "closetitle='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CSSOFF || ar[i] == CSSCLASS) 
        {
          eval(pf + 'css=' + ar[i]);
          continue;
        }
        if (ar[i] == COMPATMODE) 
        {
          eval(pf + 'compatmode=(' + pf + 'compatmode==0) ? 1 : 0');
          continue;
        }
        if (ar[i] == FGCLASS) 
        {
          eval(pf + 'fgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCLASS) 
        {
          eval(pf + 'bgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONTCLASS) 
        {
          eval(pf + 'textfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONFONTCLASS) 
        {
          eval(pf + 'captionfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSEFONTCLASS) 
        {
          eval(pf + 'closefontclass="' + ar[++i] + '"');
          continue;
        }
        i = parseCmdLine(pf, i, ar);
      }
    }
  if (fnMark && o3_function) 
  o3_text = o3_function();
  if ((pf == 'o3_') && o3_wrap) 
  {
    o3_width = 0;
    var tReg = /<.*\n*>/ig;
    if (!tReg.test(o3_text)) 
    o3_text = o3_text.replace(/[ ]+/g, '&nbsp;');
    if (!tReg.test(o3_cap)) 
    o3_cap = o3_cap.replace(/[ ]+/g, '&nbsp;');
  }
  if ((pf == 'o3_') && o3_sticky) 
  {
    if (!o3_close && (o3_frame != ol_frame)) 
    o3_close = ol_close;
    if (o3_mouseoff && (o3_frame == ol_frame)) 
    opt_NOCLOSE(' ');
  }
}



function opt_FUNCTION(callme) {
  o3_text = (callme ? (typeof callme == 'string' ? (/.+\(.*\)/.test(callme) ? eval(callme) : callme) : callme()) : (o3_function ? o3_function() : 'No Function'));
  return 0;
}



function escSglQuote(str) {
  return str.toString().replace(/'/g, "\\'");
}



function isExclusive(args) {
  return false;
}



function setCellPadStr(parameter) {
  var Str = '', j = 0, ary = new Array(), top, bottom, left, right;
  Str += 'padding: ';
  ary = parameter.replace(/\s+/g, '').split(',');
  switch (ary.length) {
    case 2:
      top = bottom = ary[j];
      left = right = ary[++j];
      break;
    case 3:
      top = ary[j];
      left = right = ary[++j];
      bottom = ary[++j];
      break;
    case 4:
      top = ary[j];
      right = ary[++j];
      bottom = ary[++j];
      left = ary[++j];
      break;
  }
  Str += ((ary.length == 1) ? ary[0] + 'px;' : top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px;');
  return Str;
}



function hideDelay(time) {
  if (time && !o3_delay) 
  {
    if (o3_timerid > 0) 
    clearTimeout(o3_timerid);
    o3_timerid = setTimeout("cClick()", (o3_timeout = time));
  }
}



function isFunction(fnRef) {
  var rtn = true;
  if (typeof fnRef == 'object') 
  {
    for (var i = 0; i < fnRef.length; i++) 
      {
        if (typeof fnRef[i] == 'function') 
        continue;
        rtn = false;
        break;
      }
  } else if (typeof fnRef != 'function') 
  {
    rtn = false;
  }
  return rtn;
}



function argToString(array, strtInd, argName) {
  var jS = strtInd, aS = '', ar = array;
  argName = (argName ? argName : 'ar');
  if (ar.length > jS) 
  {
    for (var k = jS; k < ar.length; k++) 
      aS += argName + '[' + k + '], ';
    aS = aS.substring(0, aS.length - 2);
  }
  return aS;
}



function reOrder(hookPt, fnRef, order) {
  var newPt = new Array(), match, i, j;
  if (!order || typeof order == 'undefined' || typeof order == 'number') 
  return hookPt;
  if (typeof order == 'function') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (i = 0; i < hookPt.length; i++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[i] == fnRef) 
        {
          continue;
        } else {
          for (j = 0; j < fnRef.length; j++) 
            if (hookPt[i] == fnRef[j]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[i];
      }
    newPt[newPt.length++] = order;
  } else if (typeof order == 'object') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[j] == fnRef) 
        {
          continue;
        } else {
          for (i = 0; i < fnRef.length; i++) 
            if (hookPt[j] == fnRef[i]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    for (i = 0; i < newPt.length; i++) 
      hookPt[i] = newPt[i];
    newPt.length = 0;
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        for (i = 0; i < order.length; i++) 
          {
            if (hookPt[j] == order[i]) 
            {
              match = true;
              break;
            }
          }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    newPt = newPt.concat(order);
  }
  hookPt = newPt;
  return hookPt;
}



function setRunTimeVariables() {
  if (typeof runTime != 'undefined' && runTime.length) 
  {
    for (var k = 0; k < runTime.length; k++) 
      {
        runTime[k]();
      }
  }
}



function parseCmdLine(pf, i, args) {
  if (typeof cmdLine != 'undefined' && cmdLine.length) 
  {
    for (var k = 0; k < cmdLine.length; k++) 
      {
        var j = cmdLine[k](pf, i, args);
        if (j > -1) 
        {
          i = j;
          break;
        }
      }
  }
  return i;
}



function postParseChecks(pf, args) {
  if (typeof postParse != 'undefined' && postParse.length) 
  {
    for (var k = 0; k < postParse.length; k++) 
      {
        if (postParse[k](pf, args)) 
        continue;
        return false;
      }
  }
  return true;
}



function registerCommands(cmdStr) {
  if (typeof cmdStr != 'string') 
  return;
  var pM = cmdStr.split(',');
  pms = pms.concat(pM);
  for (var i = 0; i < pM.length; i++) 
    {
      eval(pM[i].toUpperCase() + '=' + pmCount++);
    }
}



function registerNoParameterCommands(cmdStr) {
  if (!cmdStr && typeof cmdStr != 'string') 
  return;
  pmt = (!pmt) ? cmdStr : pmt + ',' + cmdStr;
}



function attribute(name, value) {
  this.name = name;
  this.value = value;
}



function Prefix(str) {
  var prefix = "?";
  if (str.indexOf("?") >= 0) 
  prefix = "&";
  return prefix;
}



function tb_parseQuery(query) {
  var Params = {};
  if (!query) 
  {
    return Params;
  }
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      {
        continue;
      }
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function selectClicked() {
  this.changed = true;
}



function selectFocussed() {
  this.initValue = this.value;
  return true;
}



function selectKeyed(e) {
  var theEvent;
  var keyCodeTab = "9";
  var keyCodeEnter = "13";
  var keyCodeEsc = "27";
  if (e) 
  {
    theEvent = e;
  } else {
    theEvent = event;
  }
  if ((theEvent.keyCode == keyCodeEnter || theEvent.keyCode == keyCodeTab) && this.value != this.initValue) 
  {
    this.changed = true;
    selectChanged(this);
  } else if (theEvent.keyCode == keyCodeEsc) 
  {
    this.value = this.initValue;
  } else {
    this.changed = false;
  }
  return true;
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function pause(ms) {
  var date = new Date();
  curDate = null;
do {
    var curDate = new Date();
  } while (curDate - date < ms);
}



function Telligent_TabSetTab(id, text) {
  this.ID = id;
  this.Text = text;
  this.NavigateUrl = null;
  this.ClientScript = null;
  this._maxWidth = 0;
  this._element = null;
  this._tabSet = null;
  this._tabSetRow = null;
}



function Telligent_TabSetRow(element) {
  this._element = element;
  this._tabs = new Array();
  this._tabSet = null;
}



function findPos(obj) {
  var curleft = curtop = 0;
  if (obj.offsetParent) 
  {
    curleft = obj.offsetLeft;
    curtop = obj.offsetTop;
    while (obj = obj.offsetParent) 
      {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      }
  }
  return [curleft, curtop];
}



function Telligent_TabbedPaneTab(id, text) {
  this.ID = id;
  this.Text = text;
  this.ClientScript = null;
  this.Disabled = false;
  this._tabPane = null;
  this._tabsetTab = null;
  this._tabbedPanes = null;
}



function ___mh() {
  this.pks = [];
  this.pkgIndices = [];
  this.timer = 0;
  this.fl = 0;
}



function __doHl(pkg) {
  if (pkg.lckld) 
  {
    clearInterval(pkg.lckt);
    pkg._fR();
  }
}



function emv(v) {
  return v + "em";
}



function mmpx(v) {
  return (v * 16) + "px";
}



function _gL(p, l) {
  if (p != "" && l != "" && l.indexOf(":") == -1 && l.substr(0, 1) != "/" && l.indexOf("#") != 0) 
  {
    if (l.indexOf("../../") == 0) 
    {
      l = l.substr(6);
    } else {
      l = p + l;
      return l._aU(__hr);
    }
    var p = p.split("/");
    p.splice(p.length - 3, 3);
    p = p.join("/");
    if (p.length) 
    p += "/";
    l = p + l;
    l = l._aU(__hr);
  }
  var n = "navigation.html";
  if (p == "" && __hr.indexOf(n) != -1 && __hr.indexOf(menuName + "/" + n) == -1 && l.charAt(0) != "." && l.indexOf("core/") != 0) 
  {
    l = "../" + menuName + "/" + l;
  }
  return l;
}



function __hA(m, s) {
  if (m && m.pkg && m.pkg) 
  {
    var a = m.pkg.actions[m.name];
    if (a) 
    {
      var aN = a[s];
      if (aN.length && CSAct && CSAct[aN]) 
      {
        CSAction([aN]);
      }
    }
  }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function FCSS(t, d) {
  var a = t.split("|");
  var i;
  var s;
  for (i = 0; i < a.length; i++) 
    {
      if (a[i].length >= 5) 
      {
        if (s == null) 
        {
          s = a[i];
        } else {
          s += d + a[i];
        }
      }
    }
  if (s == null) 
  {
    return '';
  }
  return s;
}



function GenerateUuid() {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  var r;
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '4';
  for (var i = 0; i < 36; i++) 
    {
      if (!uuid[i]) 
      {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 3) | 8 : r];
      }
    }
  var d = new Date();
  return uuid.join('') + d.getTime();
}



function Callback_SavePageView(data) {
  return;
}



function getConfigFile() {
  return "http://img.video.ap.org/p/s/config.json";
}



function GenerateUuid() {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  var r;
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '4';
  for (var i = 0; i < 36; i++) 
    {
      if (!uuid[i]) 
      {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 3) | 8 : r];
      }
    }
  var d = new Date();
  return uuid.join('') + d.getTime();
}



function Callback_SavePageView(data) {
  return;
}



function setRootPath(p_sPath) {
  g_ROOTPATH = p_sPath;
}



function getQuotient(num1, num2) {
  var t;
  t = num1 / num2;
  return (Math.floor(t));
}



function onRef() {
  return;
}



function getCurrPage(_currentPage) {
  var cPage = 1;
  if (_currentPage <= 0 || _currentPage == "") 
  cPage = 1; else if (_currentPage > pageCount) 
  cPage = pageCount; else cPage = _currentPage;
  return cPage;
}



function setPageNo(start, end) {
  var pageN;
  for (pageN = start; pageN <= end; pageN++) 
    {
      if (pageN == CP.value) 
      {
        pageNo += "<font color=red><b>" + pageN + "</b></font>&nbsp;";
      } else {
        pageNo += "<a href=\"javascript:onRef();\" onclick=\"toPage(" + pageN + ")\">" + pageN + "</a>&nbsp;";
      }
    }
}



function check_email(address) {
  if ((address == "") || (address.indexOf('@') == -1) || (address.indexOf('.') == -1)) 
  return false;
  return true;
}



function LTrim(p_string) {
  var nLen = p_string.length;
  var nStartPose = 0;
  for (var i = 0; i < nLen; i++) 
    {
      var sChar = p_string.charAt(i);
      if (sChar == ' ' || sChar == '\u3000') 
      {
        continue;
      }
      nStartPose = i;
      break;
    }
  return p_string.substring(nStartPose);
}



function tabberObj(argsObj) {
  var arg;
  this.div = null;
  this.classMain = "tabber";
  this.classMainLive = "tabberlive";
  this.classTab = "tabbertab";
  this.classTabDefault = "tabbertabdefault";
  this.classNav = "tabbernav";
  this.classTabHide = "tabbertabhide";
  this.classNavActive = "tabberactive";
  this.titleElements = ['h2', 'h3', 'h4', 'h5', 'h6'];
  this.titleElementsStripHTML = true;
  this.removeTitle = true;
  this.addLinkId = false;
  this.linkIdFormat = '<tabberid>nav<tabnumberone>';
  for (arg in argsObj) 
    {
      this[arg] = argsObj[arg];
    }
  this.REclassMain = new RegExp('\\b' + this.classMain + '\\b', 'gi');
  this.REclassMainLive = new RegExp('\\b' + this.classMainLive + '\\b', 'gi');
  this.REclassTab = new RegExp('\\b' + this.classTab + '\\b', 'gi');
  this.REclassTabDefault = new RegExp('\\b' + this.classTabDefault + '\\b', 'gi');
  this.REclassTabHide = new RegExp('\\b' + this.classTabHide + '\\b', 'gi');
  this.tabs = new Array();
  if (this.div) 
  {
    this.init(this.div);
    this.div = null;
  }
}



function trim(strText) {
  while (strText.substring(0, 1) == ' ') 
    strText = strText.substring(1, strText.length);
  while (strText.substring(strText.length - 1, strText.length) == ' ') 
    strText = strText.substring(0, strText.length - 1);
  return strText;
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function pause(ms) {
  var date = new Date();
  curDate = null;
do {
    var curDate = new Date();
  } while (curDate - date < ms);
}



function IsValidEmail(email) {
  return (email.indexOf(".") > 2) && (email.indexOf("@") > 0);
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, true);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {
    return false;
  }
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function M_hideLayer() {
}



function _oTree() {
}



function mmMouseMove() {
}



function _cL() {
}



function _ocURL() {
}



function mmClick() {
}



function mmVisFunction() {
}



function remove(_ar, _dta) {
  var _tar = new Array();
  for (_a = 0; _a < _ar.length; _a++) 
    {
      if (_ar[_a] != _dta) 
      {
        _tar[_tar.length] = _ar[_a];
      }
    }
  return _tar;
}



function copyOf(_w) {
  for (_cO in _w) 
    {
      this[_cO] = _w[_cO];
    }
}



function vjGetTimestamp(A) {
  return Math.round(A / 1000);
}



function vjHash(C) {
  if (!C || C == "") 
  {
    return 0;
  }
  var B = 0;
  for (var A = C.length - 1; A >= 0; A--) 
    {
      var D = parseInt(C.charCodeAt(A));
      B = (B << 5) + B + D;
    }
  return B;
}



function myError() {
}



function params(location) {
  var url = new String(location);
  var pos = url.indexOf("?");
  if (pos == -1) 
  {
    return "";
  }
  if (url.charAt(url.length - 1) == "#") 
  {
    url = url.substr(0, url.length - 1);
  }
  return url.substr(pos + 1);
}



function cgi_param(params, name) {
  if (params == "" || name == "") 
  {
    return "";
  }
  var pos1 = params.indexOf(name + "=");
  if (pos1 == -1) 
  {
    return "";
  }
  var pos2 = params.indexOf("&", pos1);
  if (pos2 == -1) 
  {
    pos2 = params.length;
  }
  return params.substring(pos1 + name.length + 1, pos2);
}



function mm_showhidelayers() {
  var i, p, v, obj, args = mm_showhidelayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function updateLinea(url) {
  if (url != '') 
  {
    var ajax = new Ajax.Updater('lineas_investigacion', url, {method: 'get'});
  }
}



function getposOffset(overlay, offsettype) {
  var totaloffset = (offsettype == "left") ? overlay.offsetLeft : overlay.offsetTop;
  var parentEl = overlay.offsetParent;
  while (parentEl != null) 
    {
      totaloffset = (offsettype == "left") ? totaloffset + parentEl.offsetLeft : totaloffset + parentEl.offsetTop;
      parentEl = parentEl.offsetParent;
    }
  return totaloffset;
}



function runAccordion(index1, index2) {
  var nID = "Accordion" + index1 + "Content" + index2;
  if (index1 == 1) 
  {
    if (openAccordion1 == nID) 
    {
      openAccordion1 = '';
    }
    setTimeout("animate1(" + new Date().getTime() + "," + TimeToSlide + ",'" + openAccordion1 + "','" + nID + "')", 33);
  }
  if (index1 == 2) 
  {
    if (openAccordion2 == nID) 
    {
      openAccordion2 = '';
    }
    setTimeout("animate2(" + new Date().getTime() + "," + TimeToSlide + ",'" + openAccordion2 + "','" + nID + "')", 33);
  }
  if (index1 == 3) 
  {
    if (openAccordion3 == nID) 
    {
      openAccordion3 = '';
    }
    setTimeout("animate3(" + new Date().getTime() + "," + TimeToSlide + ",'" + openAccordion3 + "','" + nID + "')", 33);
  }
  if (index1 == 4) 
  {
    if (openAccordion4 == nID) 
    {
      openAccordion4 = '';
    }
    setTimeout("animate4(" + new Date().getTime() + "," + TimeToSlide + ",'" + openAccordion4 + "','" + nID + "')", 33);
  }
  if (index1 == 5) 
  {
    if (openAccordion5 == nID) 
    {
      openAccordion5 = '';
    }
    setTimeout("animate5(" + new Date().getTime() + "," + TimeToSlide + ",'" + openAccordion5 + "','" + nID + "')", 33);
  }
}



function ajaxTooltip_getTopPos(inputObj) {
  var returnValue = inputObj.offsetTop;
  while ((inputObj = inputObj.offsetParent) != null) 
    {
      if (inputObj.tagName != 'HTML') 
      returnValue += inputObj.offsetTop;
    }
  return returnValue;
}



function ajaxTooltip_getLeftPos(inputObj) {
  var returnValue = inputObj.offsetLeft;
  while ((inputObj = inputObj.offsetParent) != null) 
    {
      if (inputObj.tagName != 'HTML') 
      returnValue += inputObj.offsetLeft;
    }
  return returnValue;
}



function moveTo(obj, xL, yL) {
  obj.left = xL;
  obj.top = yL;
}



function getDateTime(sDate) {
  sArray = sDate.split("/");
  var newDate = new Date(sArray[0], sArray[1] - 1, sArray[2]);
  return newDate;
}



function clearField(fieldName, defaultValue) {
  if (fieldName.value == defaultValue) 
  {
    fieldName.value = "";
  }
}



function setField(fieldName, defaultValue) {
  if (fieldName.value == "") 
  {
    fieldName.value = defaultValue;
  }
}



function filter(s) {
  for (k = 0; k < 3; k++) 
    {
      j = s.indexOf("/");
      s = s.substr(j + 1, s.length - j - 1);
    }
  return s;
}



function stgJs(s, f) {
  return "<script type='text/javascript' language='javascript1.2' src='" + s + "'" + (f ? " DEFER" : "") + "></script>";
}



function stDtB(a) {
  var b = 0;
  for (var j = 0; j < a.length; j++) 
    if (a[j]) 
    b += a[j] * Math.pow(2, j);
  return b;
}



function stgPth(f, s) {
  if (!s) 
  return s;
  switch (f) {
    case 0:
      s = stabs(s) ? s : st_cm.imgP + s;
      stbuf(s);
      break;
    case 1:
      s = stabs(s) ? s : st_cm.jsP + s;
      break;
    case 2:
      s = stabs(s) ? s : st_cm.lnkP + s;
      if (!s.toLowerCase().indexOf("javascript:")) 
      s += ";void(0)";
      break;
    case 3:
      s = stabs(s) ? s : st_cm.imgP + s;
      break;
  }
  return s;
}



function stHTML(s, f) {
  if (!s) 
  return "";
  var re;
  re = /&/g;
  s = s.replace(re, "&amp;");
  if (!f) 
  {
    re = / /g;
    s = s.replace(re, "&nbsp;");
  }
  re = /</g;
  s = s.replace(re, "&lt;");
  re = />/g;
  s = s.replace(re, "&gt;");
  re = /\r\n/g;
  s = s.replace(re, "<br>");
  re = /\"/g;
  s = s.replace(re, "&quot;");
  return s;
}



function stabs(s) {
  var t = s.toLowerCase();
  return t == "@" || !t || !t.indexOf("#") || !t.indexOf("?") || t.indexOf(":") == 1 && t.charCodeAt() >= "a" && t.charCodeAt() <= "z" || !t.indexOf("http:") || !t.indexOf("https:") || !t.indexOf("file:") || !t.indexOf("ftp:") || !t.indexOf("/") || !t.indexOf("javascript:") || !t.indexOf("mailto:") || !t.indexOf("about:") || !t.indexOf("gopher:") || !t.indexOf("news:") || !t.indexOf("telnet:") || !t.indexOf("wais:") || !t.indexOf("rtsp:") || !t.indexOf("mms:");
}



function stbuf(s) {
  if (s && STM_BIMG) 
  {
    for (var j = 0; j < st_imgs.length; j++) 
      if (st_imgs[j].src == s) 
      return s;
    var i = new Image();
    i.src = s;
    st_imgs.push({src: s, img: i});
  }
  return s;
}



function sthl() {
  if (typeof (stisL) == "undefined") 
  return;
  for (var k = 0; k < st_ms.length; k++) 
    {
      var m = st_ms[k];
      if (!(m.lits & 1) || m.isOv) 
      continue;
      var w = stgtfrm(m), ip = new Array(m.ps.length), ii = new Array(m.ps.length), f = 0, i, t, is, sn = 0, pp, ex, li = m.hili, mck = m.ckhd;
      for (var j = 0; j < m.lnks.length; j++) 
        {
          is = m.lnks[j].dat;
          if (stisL(m.lnks[j].url, m.lnks[j].tar, 0, w)) 
          {
            for (var l = is.length - 1; l >= 0; l--) 
              {
                i = is[l];
                if (!i.ishl || mck) 
                {
                  ex = i.pid ? stckL(i, w) : stckL(i);
                  if (m.lits & 01000000) 
                  {
                    if (ex) 
                    {
                      i._anchor.href = "#";
                      i._anchor.target = "_self";
                      i._layer.style.cursor = !m.cur[0].indexOf("url(") && !st_nav.typ && st_nav.ver < 6 || m.cur[0] == "hand" && st_nav.typ == 1 && st_nav.nam != "opera" ? "" : m.cur[0];
                    }
                    i.blnk = i.lnk;
                    i.lnk = "@";
                  }
                  f = 1;
                } else {
do {
                    if (typeof ii[i.pid] == "undefined") 
                    ii[i.pid] = [];
                    ii[i.pid][i.id] = 1;
                    i = i.parP.parI;
                  } while (i && (m.lits & 04000000));
                  continue;
                }
                pp = [];
                t = 0;
do {
                  if (m.lits & 08000000) 
                  pp.push(i.parP);
                  if (!t || m.lits & 04000000) 
                  {
                    if (ex && !i.isOv) 
                    {
                      var los = i.lock;
                      i.lock = 0;
                      stcIt(i, li);
                      i.lock = los;
                    }
                    i.stat = i.oust = li;
                    i.ishl = 1;
                    if (typeof ii[i.pid] == "undefined") 
                    ii[i.pid] = [];
                    ii[i.pid][i.id] = 1;
                  }
                  t = 1;
                  i = i.parP.parI;
                  if (!i) 
                  break;
                  ex = i.pid ? stckL(i, w) : stckL(i);
                } while (m.lits & 04000000 || m.lits & 08000000);
                if (m.lits & 10000000) 
                sn = Math.max(pp.length - m.litl, 0);
                for (var q = pp.length - 1; q >= sn; q--) 
                  {
                    clearTimeout(pp[q].tid);
                    if (!pp[q].isSh) 
                    {
                      var los = pp[q].lock;
                      pp[q].lock = 0;
                      stshP(pp[q]);
                      pp[q].lock = los;
                    }
                    ip[pp[q].id] = 1;
                  }
              }
          }
        }
      if (f) 
      for (var j = 0; j < m.lnks.length; j++) 
        {
          is = m.lnks[j].dat;
          for (var l = 0; l < is.length; l++) 
            {
              i = is[l];
              if (i.ishl && (!ii[i.pid] || !ii[i.pid][i.id])) 
              {
                ex = i.pid ? stckL(i, w) : stckL(i);
                pp = [];
                if ((m.lits & 01000000) && i.blnk) 
                {
                  i.lnk = i.blnk;
                  i.blnk = "";
                  if (ex) 
                  {
                    i._anchor.href = i.lnk;
                    i._anchor.target = i.tar;
                    i._layer.style.cursor = !m.cur[1].indexOf("url(") && !st_nav.typ && st_nav.ver < 6 || m.cur[1] == "hand" && st_nav.typ == 1 && st_nav.nam != "opera" ? "" : m.cur[1];
                  }
                }
                t = 0;
do {
                  if (ii[i.pid] && ii[i.pid][i.id]) 
                  break;
                  if (!t || m.lits & 04000000) 
                  {
                    if (ex && !i.isOv) 
                    {
                      var los = i.lock;
                      i.lock = 0;
                      stcIt(i, 0);
                      i.lock = los;
                    }
                    i.stat = i.oust = 0;
                    i.ishl = 0;
                  }
                  if ((m.lits & 08000000) && !ip[i.pid] && i.parP.isSh) 
                  {
                    var los = i.parP.lock;
                    i.parP.lock = 0;
                    sthdP(i.parP);
                    i.parP.lock = los;
                  }
                  t = 1;
                  if (!(i = i.parP.parI)) 
                  break;
                  ex = i.pid ? stckL(i, w) : stckL(i);
                } while (m.lits & 04000000 || m.lits & 08000000);
              }
            }
        }
    }
}



function stssc() {
  if (typeof (stmvto) == 'undefined' || !st_lded) 
  return;
  for (var j = 0; j < st_ms.length; j++) 
    {
      var m = st_ms[j];
      if (!isNaN(m.x) && !isNaN(m.y)) 
      continue;
      var p = m.ps[0], rc = p._rc, xy = [eval(m.x), eval(m.y)];
      if (typeof (p.scxs) == 'undefined') 
      p.scxs = 0;
      if (typeof (p.scys) == 'undefined') 
      p.scys = 0;
      var dx = xy[0] - rc[0], dy = xy[1] - rc[1];
      if (dx || dy) 
      {
        p.scxs = stgsp(p.scxs, Math.abs(dx));
        p.scys = stgsp(p.scys, Math.abs(dy));
        var x = dx > 0 ? rc[0] + p.scxs : rc[0] - p.scxs, y = dy > 0 ? rc[1] + p.scys : rc[1] - p.scys;
        stmvto([x, y], p);
      }
    }
}



function stgsp(sp, d) {
  var i = 0, s = 5;
  if (d < s) 
  return d;
  return Math.floor(Math.sqrt(2 * d * s));
}



function stgfd(s) {
  var ts = s.toLowerCase();
  if (!ts.indexOf("//") || !ts.indexOf("file:/") || !ts.indexOf("http://") || !ts.indexOf("https://")) 
  return s.substr(0, s.lastIndexOf("/") + 1); else return "";
}



function stots(a) {
  var s = "";
  for (var i in a) 
    s += i + ":" + a[i] + ";";
  return s;
}



function LT01(TT1, JJL) {
  return (typeof (TT1) != "undefined" && TT1) ? TT1 : JJL;
}



function L10b(LLb, excludeInd) {
  for (var i = 0; i < LLb.length; i++) 
    if (i != excludeInd && LLb[i]) 
    {
      T01++;
      L1T[T01] = new Image();
      L1T[T01].src = LLb[i];
    }
}



function L0bJ(LJ0) {
  var sF = "";
  if (LJ0.Jb0) 
  if (LJ0.Jb0 == 24) 
  sF += "blendTrans(Duration=" + LJ0.J01 / 1000 + ") "; else if (LJ0.Jb0 < 24) 
  sF += "revealTrans(Transition=" + LJ0.Jb0 + ",Duration=" + LJ0.J01 / 1000 + ") "; else sF += LL0T(LJ0.Jb0, LJ0.J01 / 1000);
  sF += ";";
  return sF;
}



function L0T1(TL, J00, T0L) {
  if (!TL) 
  return;
  var fl = null;
  if (T0L && J00 && Lb0 && !JJ0) 
  fl = TL.filters[0];
  with (TL.style)     {
      if (fl && !_Tab) 
      {
        if (fl.Status != 0) 
        fl.stop();
        fl.apply();
      }
      visibility = (J00 ? "visible" : "hidden");
      display = (J00 ? "" : "none");
      if (fl && !_Tab) 
      fl.play();
    }
;
}



function Lbb0(itVart) {
  if (!itVart || !itVart.L00) 
  return;
  var io = LL01(itVart.id);
  var TJT = L01T(itVart.oi, itVart.Tb);
  if (itVart.L00[TJT]) 
  io.style.backgroundImage = "url(" + itVart.L00[TJT] + ")";
}



function L011(bLJ, LbT, JLb) {
  if (LbT == -1) 
  return JLb;
  var TbJ = [];
  var b11 = bstyles[LbT];
  for (var j = 0; b11[j].indexOf(bLJ) < 0 && j < b11.length - 1; ++j) 
      if (b11[j].indexOf(bLJ) < 0) 
  return JLb;
  var L1L = b11[j];
  var Jb = L1L.split('=');
  if (Jb.length < 2) 
  return JLb;
  TbJ = Jb[1].split(',');
  return TbJ;
}



function LT10(o) {
  var l = 0, Jb = 0;
  if (!o) 
  return [l, Jb];
  while (o) 
    {
      l += parseInt(J0 ? o.pageX : o.offsetLeft);
      Jb += parseInt(J0 ? o.pageY : o.offsetTop);
      o = o.offsetParent;
    }
  return [l, Jb];
}



function L0Tb(o) {
  var l = 0, Jb = 0, h = 0, bT = 0;
  if (!o) 
  return [l, Jb, bT, h];
  if (LL0 && bJ < 6) 
  {
    h = o.style.pixelHeight;
    bT = o.style.pixelWidth;
  } else if (J0) 
  {
    h = o.clip.height;
    bT = o.clip.width;
  } else {
    h = o.offsetHeight;
    bT = o.offsetWidth;
  }
    while (o) 
    {
      l += parseInt(J0 ? o.pageX : o.offsetLeft);
      Jb += parseInt(J0 ? o.pageY : o.offsetTop);
      o = o.offsetParent;
    }
  return [l, Jb, bT, h];
}



function mjsSeizeCheck() {
  var_nothing = 0;
}



function jso_findPosY(obj) {
  var curtop = 0;
  if (obj.offsetParent) 
  {
    while (1) 
      {
        curtop += obj.offsetTop;
        if (!obj.offsetParent) 
        break;
        obj = obj.offsetParent;
      }
  } else if (obj.y) 
  {
    curtop += obj.y;
  }
  return curtop;
}



function jso_findPosition(oElement) {
  if (typeof (oElement.offsetParent) != 'undefined') 
  {
    for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) 
      {
        posX += oElement.offsetLeft;
        posY += oElement.offsetTop;
      }
    return [posX, posY];
  } else {
    return [oElement.x, oElement.y];
  }
}



function onBeforeCleanprint() {
}



function convertFromAscii(str) {
  result = "";
  var codes = str.split("|");
  for (i = 0; i < codes.length; i++) 
    {
      result += String.fromCharCode(codes[i]);
    }
  return result;
}



function nullFunction() {
}



function toggle_class(el, added_class, removed_class) {
  add = false;
  if (typeof (added_class) != 'undefined' && added_class) 
  add = true;
  remove = false;
  if (typeof (removed_class) != 'undefined' && removed_class) 
  remove = true;
  if (!add && !remove) 
  return false;
  el = get_element(el);
  if (!el) 
  return false;
  var class_array = el.className.split(' ');
  var class_changed = false;
  for (var i in class_array) 
    {
      if (remove && class_array[i] == removed_class) 
      {
        class_array.splice(i, 1);
        class_changed = true;
      }
      if (add && class_array[i] == added_class) 
      add = false;
    }
  if (add) 
  {
    class_array[class_array.length] = added_class;
    class_changed = true;
  }
  if (class_changed) 
  el.className = class_array.join(' ');
  return class_changed;
}



function jsonlineTruncate(stringobj, lengthobj) {
  if (!stringobj) 
  return ("");
  var gotstring = stringobj;
  var gotlength = lengthobj;
  if (!gotlength) 
  {
    gotlength = 10;
  }
  return ((gotlength) < gotstring.length ? (gotstring.slice(0, gotlength) + "&hellip;") : gotstring);
}



function jsonlineClassifiedInit(obj) {
  switch (obj) {
    case ("marketplace"):
      milwaukeeMarketplaceSearchForm("mktsearchform", "Keyword, Business Name, or Zip Code");
      break;
    default:
  }
}



function pocketTrace_htmlspecialchars(str) {
  if (str != null) 
  {
    str = str.replace("&", "&amp;");
    str = str.replace(">", "&gt;");
    str = str.replace("<", "&lt;");
    str = str.replace("'", "&#039;");
    str = str.replace("\"", "&quot;");
  }
  return str;
}



function pocketTrace_strLen(str) {
  var len = 0;
  for (var j = 0; j < str.length; j++) 
    {
      var c = str.charCodeAt(j);
      if ((c >= 0 && c < 81) || (c == f8f0) || (c >= ff61 && c < ffa0) || (c >= f8f1 && c < f8f4)) 
      {
        len++;
      } else {
        len += 2;
      }
    }
  return len;
}



function pocketTrace_close() {
}



function bufimg(sr) {
  if (sr != "") 
  {
    st_buf[st_buf.length] = new Image();
    st_buf[st_buf.length - 1].src = sr;
  }
}



function normal_init() {
}



function movetoex(menu, xy) {
  menu.pos_l = xy[0];
  menu.pos_t = xy[1];
}



function getparit() {
  return !this.par ? null : st_menus[this.par[0]].bodys[this.par[1]].items[this.par[2]];
}



function getparmb() {
  return !this.par ? null : st_menus[this.par[0]].bodys[this.par[1]];
}



function getsubmenu() {
  return !this.sub ? null : st_menus[this.sub[0]].bodys[this.sub[1]];
}



function getsrc(sr, me) {
  if (sr == '') 
  return '';
  _sr = sr.toLowerCase();
  if (_sr.indexOf('http://') == 0 || (_sr.indexOf(':') == 1 && _sr.charCodeAt(0) > 96 && _sr.charCodeAt(0) < 123) || _sr.indexOf('ftp://') == 0 || _sr.indexOf('/') == 0 || _sr.indexOf('gopher') == 0) 
  return sr; else return me.web_path + sr;
}



function get_sdstr(mb, issh) {
  return "var _mb=st_menus['" + mb.mei + "'].bodys[" + mb.mbi + "];_mb.tmid=null;_mb.spec_" + (issh ? "sh" : "hd") + "();_mb.exec_ed=true;";
}



function addquo(n) {
  return "\"" + n + "\"";
}



function moveto(xy) {
  if (xy && (this.mbi || this.getme().pos == ab_)) 
  {
    tp_ = this.getlayer();
    if (nNN4) 
    tp_.moveToAbsolute(xy[0], xy[1]); else if (nOP) 
    {
      tp_ = tp_.style;
      tp_.pixelLeft = xy[0];
      tp_.pixelTop = xy[1];
    } else {
      tp_ = tp_.style;
      tp_.left = xy[0] + 'px';
      tp_.top = xy[1] + 'px';
    }
    this.rc = [xy[0], xy[1], this.rc[2], this.rc[3]];
  }
}



function getbg(bg_cl, bg_img, bg_rep) {
  s = bg_cl;
  if (bg_img != '') 
  s += " url(" + bg_img + ") " + bg_rep;
  return s;
}



function IsInstalled() {
  piginst = null;
  try {
    piginst = new ActiveXObject("WebInst.Inst");
  }  catch (e) {
  try {
    piginst = new ActiveXObject("PigWebInst.Inst");
  }  catch (e) {
  return false;
}
  return true;
}
  return true;
}



function checkKey(event, oPut) {
  if (event.keyCode == 13) 
  oPut.click();
}



function addMContent(obj) {
  var conStr = "";
  conStr += '<div id="blo_tran">';
  conStr += '<form name=worlp method="post" action="http://fanyi.cn.yahoo.com/translate_txt" target="_blank">';
  conStr += '<div id="s"><input name="lp" type="radio" value="en_zh" checked="checked" />';
  conStr += '\u82f1\u6587\u2192\u4e2d\u6587&nbsp;&nbsp;<input name="lp" type="radio" value="zh_en" />\u4e2d\u6587\u2192\u82f1\u6587</div>';
  conStr += '<div id="i">';
  conStr += '<input type=hidden name="ei" value="gbk"><input type=hidden name=doit value="done"><input type=hidden name=fr value="bf-home"><input type=hidden name=intl value="1">';
  conStr += '<textarea name="trtext" rows="5" style="width:95% "></textarea>';
  conStr += '</div>';
  conStr += '<table border="0" cellpadding="0" cellspacing="0" id="ok">';
  conStr += '<tr>';
  conStr += '<td width="80%" id="t1">\u8bf7\u8f93\u5165\u6216\u7c98\u8d34\u60a8\u60f3\u7ffb\u8bd1\u7684\u5185\u5bb9(150\u8bcd\u4ee5\u5185)</td>';
  conStr += '<td width="20%" id="t2"><input name="" type="submit" value=" \u7ffb\u8bd1 " /></td>';
  conStr += '</tr>';
  conStr += '</table>';
  conStr += '</form>';
  conStr += '<div class="sp5"></div>';
  conStr += '</div>';
  obj.innerHTML = conStr;
}



function getSearchMenu(num) {
  var sTypeNum = 6;
  var sTypeItem = ["\u7f51\u9875", "\u65b0\u95fb", "MP3", "\u56fe\u7247", "\u8bba\u575b", "\u535a\u5ba2"];
  var resultStr = "";
  var spN = 0;
  for (var i = 0; i < sTypeNum; i++) 
    {
      if (num == i) 
      {
        resultStr += ("<strong>" + sTypeItem[i] + "</strong>");
        if (i != sTypeNum - 1) 
        {
          resultStr += "&nbsp;&nbsp;";
        }
      } else {
        resultStr += ("<span style=\"cursor:hand\">" + sTypeItem[i] + "</span>");
        if (i != sTypeNum - 1) 
        {
          resultStr += "&nbsp;&nbsp;";
        }
      }
    }
  return resultStr;
}



function setIGMessenger(obj, flag, user) {
  return;
  var conStr = "";
  conStr = '<div class="im_widget">';
  if (flag == 1) 
  {
    conStr += '<div class="online_im" title="\u548c\u6211\u8054\u7cfb" onclick="IM(\'' + user + '\')"></div>';
  } else {
    conStr += '<div class="disonline_im" title="\u7ed9\u6211\u7559\u8a00" onclick="IM(\'' + user + '\')"></div>';
  }
  conStr += '</div>';
  obj.innerHTML = conStr;
  conStr = null;
}



function myXMLHttpRequest() {
  var xmlhttplocal;
  try {
    xmlhttplocal = new ActiveXObject("Msxml2.XMLHTTP");
  }  catch (e) {
  try {
    xmlhttplocal = new ActiveXObject("Microsoft.XMLHTTP");
  }  catch (E) {
  xmlhttplocal = false;
}
}
  if (!xmlhttplocal && typeof XMLHttpRequest != 'undefined') 
  {
    try {
      var xmlhttplocal = new XMLHttpRequest();
    }    catch (e) {
  var xmlhttplocal = false;
  alert('couldn\'t create xmlhttp object');
}
  }
  return (xmlhttplocal);
}



function Localization() {
  this.Translations = new Array();
}



function setTranslateBlk(mh) {
  var cont = "<DIV id=blo_tran>\n";
  cont += "  <FORM name=worlp action=http://fanyi.cn.yahoo.com/translate_txt method=post target=_blank>\n";
  cont += "  <DIV id=s><INPUT type=radio CHECKED value=en_zh name=lp>\u82f1\u6587\u2192\u4e2d\u6587&nbsp;&nbsp;<INPUT type=radio value=zh_en name=lp>\u4e2d\u6587\u2192\u82f1\u6587<INPUT type=hidden value=gbk name=ei><INPUT type=hidden value=done name=doit><INPUT type=hidden value=bf-home name=fr><INPUT type=hidden value=1 name=intl></DIV>\n";
  cont += "  <DIV><TEXTAREA onkeydown=\"if(this.value.length==600 &amp;&amp; event.keyCode!=8 &amp;&amp; event.keyCode!=46) return false;\" style=\"WIDTH: 98%;height:" + ((mh - 100) < 0 ? 0 : (mh - 100)) + "px\" name=trtext ></TEXTAREA></DIV>\n";
  cont += "  <TABLE id=ok cellSpacing=0 cellPadding=0 border=0>\n";
  cont += "  <TBODY>\n";
  cont += "  <TR>\n";
  cont += "  <TD id=t1 width=\"80%\">\u8bf7\u8f93\u5165\u6216\u7c98\u8d34\u60a8\u60f3\u7ffb\u8bd1\u7684\u5185\u5bb9</TD>\n";
  cont += "  <TD id=t2 width=\"20%\"><INPUT type=submit value=\" \u7ffb\u8bd1 \" name=\"\"></TD></TR></TBODY></TABLE></FORM>\n";
  cont += "  </DIV>\n";
  return cont;
}



function encode(value) {
  value = escape(value);
  value = value.replace(/@/gi, "%40");
  value = value.replace(/\*/gi, "%2A");
  value = value.replace(/_/gi, "%5F");
  value = value.replace(/-/gi, "%2D");
  value = value.replace(/\+/gi, "%2B");
  value = value.replace(/\./gi, "%2E");
  value = value.replace(/\//gi, "%2F");
  value = value.replace(/%20/gi, "+");
  return value;
}



function decode(value) {
  value = value.replace(/\+/g, " ");
  value = unescape(value);
  return value;
}



function AttachEvent(element, event, func) {
  if (element) 
  {
    if (element.addEventListener) 
    {
      element.addEventListener(event.toLowerCase(), func, false);
    } else {
      element.attachEvent('on' + event.toLowerCase(), func);
    }
  }
}



function DetachEvent(element, event, func) {
  if (element) 
  {
    if (element.removeEventListener) 
    {
      element.removeEventListener(event.toLowerCase(), func, false);
    } else {
      element.detachEvent('on' + event.toLowerCase(), func);
    }
  }
}



function Search_For_Products(element) {
  while (element && element.nodeName.toLowerCase() != 'form') 
    {
      element = element.parentNode;
    }
  if (element) 
  {
    if (element.nodeName.toLowerCase() == 'form') 
    {
      element.submit();
    }
  }
}



function IsReturnKey(evt) {
  return (evt.which && evt.which == 13) || (evt.keyCode && evt.keyCode == 13);
}



function CancelEvent(evt) {
  evt.cancelBubble = true;
  evt.returnResult = false;
  if (evt.preventDefault) 
  {
    evt.preventDefault();
  }
  if (evt.stopPropagation) 
  {
    evt.stopPropagation();
  }
  return false;
}



function isvalidfield(fieldname) {
  if (fieldname === "") 
  return false;
  if (fieldname.toLowerCase() === "cvv2" || fieldname.toLowerCase() === "creditcardnumber") 
  return false;
  return true;
}



function PredictiveSearch() {
}



function highlightSearchText(search, result) {
  var regex = new RegExp(search, "gi");
  var startIndex, startIndices = [];
  while ((startIndex = regex.exec(result))) 
    {
      startIndices.push(startIndex.index);
    }
  var originalResultLength = result.length;
  for (var i = 0; i < startIndices.length; i++) 
    {
      result = result.substring(0, startIndices[i]) + "<b>" + result.substring(startIndices[i], (startIndices[i] + search.length)) + "</b>" + result.substring(startIndices[i] + search.length);
      if (i == 0) 
      htmlStylingTagsLength = result.length - originalResultLength;
      if (i < (startIndices.length - 1)) 
      startIndices[i + 1] += htmlStylingTagsLength + (htmlStylingTagsLength * i);
    }
  return result;
}



function DisplayLocalDate(value, ServerUTCOffset) {
  var d = new Date();
  var o = ServerUTCOffset - d.getTimezoneOffset();
  d = new Date(value);
  d.setMinutes(d.getMinutes() + o);
  return d.toString();
}



function mouseover(el) {
  el.className = "raised";
}



function mouseout(el) {
  el.className = "button";
}



function mousedown(el) {
  el.className = "pressed";
}



function mouseup(el) {
  el.className = "raised";
}



function errexit() {
  return true;
}



function jwdflt2GetNameVal(adtype, code, chk) {
  var nameVal;
  nameVal = "flt2:" + adtype + ":" + code + ":" + chk;
  return nameVal;
}



function jwdflt2ForSP2SetCookieLimit(days) {
  setDay = new Date();
  expDay = new Date();
  expDay.setTime(expDay.getTime() + (days * 1000 * 60));
  return expDay;
}



function jwdflt2isVista() {
  return false;
}



function jwdflt2instisWin9x() {
  return false;
}



function jwdflt2instisWin64bit() {
  return false;
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function pause(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) 
    {
      now = new Date();
      if (now.getTime() > exitTime) 
      return;
    }
}



function lpFixProtocol(str) {
  if ((str != null) && (str.indexOf("http:") == 0) && (lpfcProtocol == "https")) 
  return lpfcProtocol + str.substring(4);
  return str;
}



function hcDate() {
  var d = new Date();
  return d.getTime();
}



function hcPlaceLayersIE() {
}



function hcPlaceLayersNS() {
}



function hcHandlePopup(w, h) {
}



function lpIsNumber(a) {
  return typeof a == 'number' && isFinite(a);
}



function hcFloatIconLoaded() {
  hcImageFetched = true;
}



function inviteShown(channel) {
  hcCmd = "inviteShown" + ((typeof (lpInviteTimeout) != "undefined") && (lpInviteTimeout != "") && (lpInviteTimeout > 0) ? ("&scripttimeout=" + lpInviteTimeout) : "");
  hcCmd += "&channel=" + channel;
  hcCounter = 0;
}



function hcLegalPage() {
  return true;
}



function OmnPartnerLinkClick(partnerName) {
  if (partnerName) 
  {
    if (s_account) 
    {
      var s = s_gi(s_account);
      s.trackDownloadLinks = false;
      s.linkTrackVars = 'eVar6,events';
      s.linkTrackEvents = 'event6';
      s.events = 'event6';
      s.tl(this, 'o', partnerName);
    }
  }
}



function getHTTPObject() {
  var xmlhttp;
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') 
  {
    try {
      xmlhttp = new XMLHttpRequest();
    }    catch (e) {
  xmlhttp = false;
}
  }
  return xmlhttp;
}



function StopPrevAnimation() {
  if (this.previousAnim != null) 
  {
    this.previousAnim.onComplete = null;
    this.previousAnim.stop();
  }
  this.previousAnim = this.nextAnim;
}



function isDefined(property) {
  return (typeof property != 'undefined');
}



function AnchorPosition_getPageOffsetLeft(el) {
  var ol = el.offsetLeft;
  while ((el = el.offsetParent) != null) 
    {
      ol += el.offsetLeft;
    }
  return ol;
}



function AnchorPosition_getPageOffsetTop(el) {
  var ot = el.offsetTop;
  while ((el = el.offsetParent) != null) 
    {
      ot += el.offsetTop;
    }
  return ot;
}



function LZ(x) {
  return (x < 0 || x > 9 ? "" : "0") + x;
}



function _isInteger(val) {
  var digits = "1234567890";
  for (var i = 0; i < val.length; i++) 
    {
      if (digits.indexOf(val.charAt(i)) == -1) 
      {
        return false;
      }
    }
  return true;
}



function getDateFromFormat(val, format) {
  val = val + "";
  format = format + "";
  var i_val = 0;
  var i_format = 0;
  var c = "";
  var token = "";
  var token2 = "";
  var x, y;
  var now = new Date();
  var year = now.getYear();
  var month = now.getMonth() + 1;
  var date = 1;
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  var ampm = "";
  while (i_format < format.length) 
    {
      c = format.charAt(i_format);
      token = "";
      while ((format.charAt(i_format) == c) && (i_format < format.length)) 
        {
          token += format.charAt(i_format++);
        }
      if (token == "yyyy" || token == "yy" || token == "y") 
      {
        if (token == "yyyy") 
        {
          x = 4;
          y = 4;
        }
        if (token == "yy") 
        {
          x = 2;
          y = 2;
        }
        if (token == "y") 
        {
          x = 2;
          y = 4;
        }
        year = _getInt(val, i_val, x, y);
        if (year == null) 
        {
          return 0;
        }
        i_val += year.length;
        if (year.length == 2) 
        {
          if (year > 70) 
          {
            year = 1900 + (year - 0);
          } else {
            year = 2000 + (year - 0);
          }
        }
      } else if (token == "MMM" || token == "NNN") 
      {
        month = 0;
        for (var i = 0; i < MONTH_NAMES.length; i++) 
          {
            var month_name = MONTH_NAMES[i];
            if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) 
            {
              if (token == "MMM" || (token == "NNN" && i > 11)) 
              {
                month = i + 1;
                if (month > 12) 
                {
                  month -= 12;
                }
                i_val += month_name.length;
                break;
              }
            }
          }
        if ((month < 1) || (month > 12)) 
        {
          return 0;
        }
      } else if (token == "EE" || token == "E") 
      {
        for (var i = 0; i < DAY_NAMES.length; i++) 
          {
            var day_name = DAY_NAMES[i];
            if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) 
            {
              i_val += day_name.length;
              break;
            }
          }
      } else if (token == "MM" || token == "M") 
      {
        month = _getInt(val, i_val, token.length, 2);
        if (month == null || (month < 1) || (month > 12)) 
        {
          return 0;
        }
        i_val += month.length;
      } else if (token == "dd" || token == "d") 
      {
        date = _getInt(val, i_val, token.length, 2);
        if (date == null || (date < 1) || (date > 31)) 
        {
          return 0;
        }
        i_val += date.length;
      } else if (token == "hh" || token == "h") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 12)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "HH" || token == "H") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 23)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "KK" || token == "K") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 11)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "kk" || token == "k") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 24)) 
        {
          return 0;
        }
        i_val += hh.length;
        hh--;
      } else if (token == "mm" || token == "m") 
      {
        mm = _getInt(val, i_val, token.length, 2);
        if (mm == null || (mm < 0) || (mm > 59)) 
        {
          return 0;
        }
        i_val += mm.length;
      } else if (token == "ss" || token == "s") 
      {
        ss = _getInt(val, i_val, token.length, 2);
        if (ss == null || (ss < 0) || (ss > 59)) 
        {
          return 0;
        }
        i_val += ss.length;
      } else if (token == "a") 
      {
        if (val.substring(i_val, i_val + 2).toLowerCase() == "am") 
        {
          ampm = "AM";
        } else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") 
        {
          ampm = "PM";
        } else {
          return 0;
        }
        i_val += 2;
      } else {
        if (val.substring(i_val, i_val + token.length) != token) 
        {
          return 0;
        } else {
          i_val += token.length;
        }
      }
    }
  if (i_val != val.length) 
  {
    return 0;
  }
  if (month == 2) 
  {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) 
    {
      if (date > 29) 
      {
        return 0;
      }
    } else {
      if (date > 28) 
      {
        return 0;
      }
    }
  }
  if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) 
  {
    if (date > 30) 
    {
      return 0;
    }
  }
  if (hh < 12 && ampm == "PM") 
  {
    hh = hh - 0 + 12;
  } else if (hh > 11 && ampm == "AM") 
  {
    hh -= 12;
  }
  var newdate = new Date(year, month - 1, date, hh, mm, ss);
  return newdate.getTime();
}



function CP_setReturnFunction(name) {
  this.returnFunction = name;
}



function CP_setReturnMonthFunction(name) {
  this.returnMonthFunction = name;
}



function CP_setReturnQuarterFunction(name) {
  this.returnQuarterFunction = name;
}



function CP_setReturnYearFunction(name) {
  this.returnYearFunction = name;
}



function CP_setDayHeaders() {
  for (var i = 0; i < arguments.length; i++) 
    {
      this.dayHeaders[i] = arguments[i];
    }
}



function CP_setWeekStartDay(day) {
  this.weekStartDay = day;
}



function CP_showYearNavigation() {
  this.isShowYearNavigation = (arguments.length > 0) ? arguments[0] : true;
}



function CP_setYearSelectStartOffset(num) {
  this.yearSelectStartOffset = num;
}



function CP_setDisabledWeekDays() {
  this.disabledWeekDays = new Object();
  for (var i = 0; i < arguments.length; i++) 
    {
      this.disabledWeekDays[arguments[i]] = true;
    }
}



function CP_setTodayText(text) {
  this.todayText = text;
}



function CP_setCssPrefix(val) {
  this.cssPrefix = val;
}



function CP_showNavigationDropdowns() {
  this.isShowNavigationDropdowns = (arguments.length > 0) ? arguments[0] : true;
}



function CP_showYearNavigationInput() {
  this.isShowYearNavigationInput = (arguments.length > 0) ? arguments[0] : true;
}



function getCalendarStyles() {
  var result = "";
  var p = "";
  if (this != null && typeof (this.cssPrefix) != "undefined" && this.cssPrefix != null && this.cssPrefix != "") 
  {
    p = this.cssPrefix;
  }
  result += "<STYLE>\n";
  result += "." + p + "cpYearNavigation,." + p + "cpMonthNavigation { background-color:#C0C0C0; text-align:center; vertical-align:center; text-decoration:none; color:#000000; font-weight:bold; }\n";
  result += "." + p + "cpDayColumnHeader, ." + p + "cpYearNavigation,." + p + "cpMonthNavigation,." + p + "cpCurrentMonthDate,." + p + "cpCurrentMonthDateDisabled,." + p + "cpOtherMonthDate,." + p + "cpOtherMonthDateDisabled,." + p + "cpCurrentDate,." + p + "cpCurrentDateDisabled,." + p + "cpTodayText,." + p + "cpTodayTextDisabled,." + p + "cpText { font-family:arial; font-size:8pt; }\n";
  result += "TD." + p + "cpDayColumnHeader { text-align:right; border:solid thin #C0C0C0;border-width:0px 0px 1px 0px; }\n";
  result += "." + p + "cpCurrentMonthDate, ." + p + "cpOtherMonthDate, ." + p + "cpCurrentDate  { text-align:right; text-decoration:none; }\n";
  result += "." + p + "cpCurrentMonthDateDisabled, ." + p + "cpOtherMonthDateDisabled, ." + p + "cpCurrentDateDisabled { color:#D0D0D0; text-align:right; text-decoration:line-through; }\n";
  result += "." + p + "cpCurrentMonthDate, .cpCurrentDate { color:#000000; }\n";
  result += "." + p + "cpOtherMonthDate { color:#808080; }\n";
  result += "TD." + p + "cpCurrentDate { color:white; background-color: #C0C0C0; border-width:1px; border:solid thin #800000; }\n";
  result += "TD." + p + "cpCurrentDateDisabled { border-width:1px; border:solid thin #FFAAAA; }\n";
  result += "TD." + p + "cpTodayText, TD." + p + "cpTodayTextDisabled { border:solid thin #C0C0C0; border-width:1px 0px 0px 0px;}\n";
  result += "A." + p + "cpTodayText, SPAN." + p + "cpTodayTextDisabled { height:20px; }\n";
  result += "A." + p + "cpTodayText { color:black; }\n";
  result += "." + p + "cpTodayTextDisabled { color:#D0D0D0; }\n";
  result += "." + p + "cpBorder { border:solid thin #808080; }\n";
  result += "</STYLE>\n";
  return result;
}



function TB_parseQuery(query) {
  if (!query) 
  return {};
  var params = {};
  var pairs = query.split(/[;&]/);
  for (var i = 0; i < pairs.length; i++) 
    {
      var pair = pairs[i].split('=');
      if (!pair || pair.length != 2) 
      continue;
      params[unescape(pair[0])] = unescape(pair[1]).replace(/\+/g, ' ');
    }
  return params;
}



function getXMLHttpRequestObject() {
  var xmlobj;
  if (xmlobj != null && xmlobj.readyState != 0 && xmlobj.readyState != 4) 
  {
    xmlobj.abort();
  }
  try {
    xmlobj = new XMLHttpRequest();
  }  catch (e) {
  try {
    xmlobj = new ActiveXObject('Microsoft.XMLHTTP');
  }  catch (e) {
  xmlobj = null;
  return false;
}
}
  return xmlobj;
}



function collect(a, f) {
  var n = [];
  for (var i = 0; i < a.length; i++) 
    {
      var v = f(a[i]);
      if (v != null) 
      n.push(v);
    }
  return n;
}



function __parse_int(value) {
  var iv = parseInt(value);
  return isNaN(iv) ? 0 : iv;
}



function __parse_float(value) {
  var fv = parseFloat(value);
  return isNaN(fv) ? 0 : fv;
}



function __esc(s) {
  return s == null ? "" : escape(s.toString());
}



function __unesc(s) {
  return s == null ? "" : unescape(s.toString());
}



function __sme_restore_content(obj) {
  if (obj.value == "") 
  {
    if (__SME_PROBE_CUSTOM_PARAMS.language == __SME_STATIC.ZH_CN) 
    {
      obj.innerHTML = __SME_CLIENT_VAR.visitorInputInitCodeCN;
    } else {
      obj.innerHTML = __SME_CLIENT_VAR.visitorInputInitCodeEN;
    }
    obj.style.color = "#888";
    __is_first_focus = true;
  }
}



function __detect_im() {
  return null;
  try {
    var im = new ActiveXObject("AlitalkSetup.Install");
    if (im != null) 
    {
      delete im;
      return "Alitalk";
    }
  }  catch (e) {
}
  try {
    var im = new ActiveXObject("WangWangX.WangWangObj");
    if (im != null) 
    {
      delete im;
      return "WangWang";
    }
  }  catch (e) {
}
  return null;
}



function _subStringUrl(varUrl) {
  if (varUrl != null && varUrl.indexOf("http://") > -1) 
  {
    varUrl = varUrl.substring(varUrl.indexOf("http://") + 7, varUrl.length - 1);
    if (varUrl.indexOf("/") > -1) 
    return varUrl.substring(0, varUrl.indexOf("/")); else if (varUrl.indexOf("\\") > -1) 
    return varUrl.substring(0, varUrl.indexOf("\\")); else return varUrl;
  } else return varUrl;
}



function _subStringTitle(titleStr, strNum) {
  if (titleStr == null || titleStr.length == 0) 
  return ""; else if (titleStr.length > strNum) 
  return titleStr.substring(0, strNum); else return titleStr;
}



function roundNumber(num, dec) {
  var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
  return result;
}



function do_nothing() {
  return;
}



function fetch_tags(B, A) {
  if (B == null) 
  {
    return new Array();
  } else {
    if (typeof B.getElementsByTagName != "undefined") 
    {
      return B.getElementsByTagName(A);
    } else {
      if (B.all && B.all.tags) 
      {
        return B.all.tags(A);
      } else {
        return new Array();
      }
    }
  }
}



function vB_PHP_Emulator() {
}



function vB_AJAX_Handler(A) {
  this.async = A ? true : false;
  this.conn = null;
}



function vB_Hidden_Form(A) {
  this.action = A;
  this.variables = new Array();
}



function clear_viewport_info() {
  viewport_info = null;
}



function toggle_collapse(A, B) {
  return false;
}



function vBpagenav() {
}



function vbmenu_register(B, A, C) {
  if (typeof (vBmenu) == "object") 
  {
    return vBmenu.register(B, A);
  } else {
    return false;
  }
}



function img_alt_2_title(A) {
  if (!A.title && A.alt != "") 
  {
    A.title = A.alt;
  }
}



function Comment_Init(B) {
  if (typeof B.id == "undefined") 
  {
    return;
  }
  var C = B.id;
  if (isNaN(C)) 
  {
    var A = null;
    if (A = C.match(/(\d+)/)) 
    {
      C = A[0];
    }
  }
  if (typeof inlineMod_comment != "undefined") 
  {
    im_init(B, inlineMod_comment);
  }
  if (typeof vB_QuickEditor_Factory != "undefined") 
  {
    if (typeof vB_QuickEditor_Factory.controls[C] == "undefined") 
    {
      vB_QuickEditor_Factory.controls[C] = new vB_QuickEditor(C, vB_QuickEditor_Factory);
    } else {
      vB_QuickEditor_Factory.controls[C].init();
    }
  }
  if (typeof vB_QuickLoader_Factory != "undefined") 
  {
    vB_QuickLoader_Factory.controls[C] = new vB_QuickLoader(C, vB_QuickLoader_Factory);
  }
  child_img_alt_2_title(B);
}



function handle_dismiss_notice_error(C) {
  if (C.argument) 
  {
    var B = YAHOO.util.Dom.get("dismiss_notice_hidden");
    B.value = C.argument;
    var A = YAHOO.util.Dom.get("notices");
    A.submit();
  }
}



function GetCssClass(element) {
  var cssclass;
  if (element.className) 
  {
    if (element.className != "bkg_triangle_green_12" && element.className != "bkg_triangle_green_12_new" && element.className != "bkg_triangle_green_13" && element.className != "link_green_arrow" && element.className.indexOf("bkg_triangle_green") != -1 && element.className.indexOf("simple-slide") < 0) 
    {
      var sizeString = getFontSize(element);
      var sizeIndex = sizeString.indexOf("px");
      if (sizeIndex != -1) 
      {
        var size = sizeString.substring(0, sizeIndex);
        if (size <= 10 || size == 11) 
        {
          cssclass = "bkg_triangle_green_1";
        } else if (size == 12 || size == 13) 
        {
          cssclass = "bkg_triangle_green_2";
        } else if (size == 14 || size == 15) 
        {
          cssclass = "bkg_triangle_green_3";
        } else if (size == 16 || size == 17) 
        {
          cssclass = "bkg_triangle_green_4";
        } else if (size == 18 || size == 19) 
        {
          cssclass = "bkg_triangle_green_5";
        } else if (size == 20 || size == 21) 
        {
          cssclass = "bkg_triangle_green_6";
        } else if (size == 22 || size == 23) 
        {
          cssclass = "bkg_triangle_green_7";
        } else if (size == 24 || size == 25) 
        {
          cssclass = "bkg_triangle_green_8";
        } else if (size == 26 || size == 27) 
        {
          cssclass = "bkg_triangle_green_9";
        } else if (size == 28 || size == 29) 
        {
          cssclass = "bkg_triangle_green_10";
        } else if (size == 30 || size >= 31) 
        {
          cssclass = "bkg_triangle_green_11";
        }
      }
    }
  }
  return cssclass;
}



function core_md5(K, F) {
  K[F >> 5] |= 128 << ((F) % 32);
  K[(((F + 64) >>> 9) << 4) + 14] = F;
  var J = 1732584193;
  var I = -271733879;
  var H = -1732584194;
  var G = 271733878;
  for (var C = 0; C < K.length; C += 16) 
    {
      var E = J;
      var D = I;
      var B = H;
      var A = G;
      J = md5_ff(J, I, H, G, K[C + 0], 7, -680876936);
      G = md5_ff(G, J, I, H, K[C + 1], 12, -389564586);
      H = md5_ff(H, G, J, I, K[C + 2], 17, 606105819);
      I = md5_ff(I, H, G, J, K[C + 3], 22, -1044525330);
      J = md5_ff(J, I, H, G, K[C + 4], 7, -176418897);
      G = md5_ff(G, J, I, H, K[C + 5], 12, 1200080426);
      H = md5_ff(H, G, J, I, K[C + 6], 17, -1473231341);
      I = md5_ff(I, H, G, J, K[C + 7], 22, -45705983);
      J = md5_ff(J, I, H, G, K[C + 8], 7, 1770035416);
      G = md5_ff(G, J, I, H, K[C + 9], 12, -1958414417);
      H = md5_ff(H, G, J, I, K[C + 10], 17, -42063);
      I = md5_ff(I, H, G, J, K[C + 11], 22, -1990404162);
      J = md5_ff(J, I, H, G, K[C + 12], 7, 1804603682);
      G = md5_ff(G, J, I, H, K[C + 13], 12, -40341101);
      H = md5_ff(H, G, J, I, K[C + 14], 17, -1502002290);
      I = md5_ff(I, H, G, J, K[C + 15], 22, 1236535329);
      J = md5_gg(J, I, H, G, K[C + 1], 5, -165796510);
      G = md5_gg(G, J, I, H, K[C + 6], 9, -1069501632);
      H = md5_gg(H, G, J, I, K[C + 11], 14, 643717713);
      I = md5_gg(I, H, G, J, K[C + 0], 20, -373897302);
      J = md5_gg(J, I, H, G, K[C + 5], 5, -701558691);
      G = md5_gg(G, J, I, H, K[C + 10], 9, 38016083);
      H = md5_gg(H, G, J, I, K[C + 15], 14, -660478335);
      I = md5_gg(I, H, G, J, K[C + 4], 20, -405537848);
      J = md5_gg(J, I, H, G, K[C + 9], 5, 568446438);
      G = md5_gg(G, J, I, H, K[C + 14], 9, -1019803690);
      H = md5_gg(H, G, J, I, K[C + 3], 14, -187363961);
      I = md5_gg(I, H, G, J, K[C + 8], 20, 1163531501);
      J = md5_gg(J, I, H, G, K[C + 13], 5, -1444681467);
      G = md5_gg(G, J, I, H, K[C + 2], 9, -51403784);
      H = md5_gg(H, G, J, I, K[C + 7], 14, 1735328473);
      I = md5_gg(I, H, G, J, K[C + 12], 20, -1926607734);
      J = md5_hh(J, I, H, G, K[C + 5], 4, -378558);
      G = md5_hh(G, J, I, H, K[C + 8], 11, -2022574463);
      H = md5_hh(H, G, J, I, K[C + 11], 16, 1839030562);
      I = md5_hh(I, H, G, J, K[C + 14], 23, -35309556);
      J = md5_hh(J, I, H, G, K[C + 1], 4, -1530992060);
      G = md5_hh(G, J, I, H, K[C + 4], 11, 1272893353);
      H = md5_hh(H, G, J, I, K[C + 7], 16, -155497632);
      I = md5_hh(I, H, G, J, K[C + 10], 23, -1094730640);
      J = md5_hh(J, I, H, G, K[C + 13], 4, 681279174);
      G = md5_hh(G, J, I, H, K[C + 0], 11, -358537222);
      H = md5_hh(H, G, J, I, K[C + 3], 16, -722521979);
      I = md5_hh(I, H, G, J, K[C + 6], 23, 76029189);
      J = md5_hh(J, I, H, G, K[C + 9], 4, -640364487);
      G = md5_hh(G, J, I, H, K[C + 12], 11, -421815835);
      H = md5_hh(H, G, J, I, K[C + 15], 16, 530742520);
      I = md5_hh(I, H, G, J, K[C + 2], 23, -995338651);
      J = md5_ii(J, I, H, G, K[C + 0], 6, -198630844);
      G = md5_ii(G, J, I, H, K[C + 7], 10, 1126891415);
      H = md5_ii(H, G, J, I, K[C + 14], 15, -1416354905);
      I = md5_ii(I, H, G, J, K[C + 5], 21, -57434055);
      J = md5_ii(J, I, H, G, K[C + 12], 6, 1700485571);
      G = md5_ii(G, J, I, H, K[C + 3], 10, -1894986606);
      H = md5_ii(H, G, J, I, K[C + 10], 15, -1051523);
      I = md5_ii(I, H, G, J, K[C + 1], 21, -2054922799);
      J = md5_ii(J, I, H, G, K[C + 8], 6, 1873313359);
      G = md5_ii(G, J, I, H, K[C + 15], 10, -30611744);
      H = md5_ii(H, G, J, I, K[C + 6], 15, -1560198380);
      I = md5_ii(I, H, G, J, K[C + 13], 21, 1309151649);
      J = md5_ii(J, I, H, G, K[C + 4], 6, -145523070);
      G = md5_ii(G, J, I, H, K[C + 11], 10, -1120210379);
      H = md5_ii(H, G, J, I, K[C + 2], 15, 718787259);
      I = md5_ii(I, H, G, J, K[C + 9], 21, -343485551);
      J = safe_add(J, E);
      I = safe_add(I, D);
      H = safe_add(H, B);
      G = safe_add(G, A);
    }
  return Array(J, I, H, G);
}



function safe_add(A, D) {
  var C = (A & 65535) + (D & 65535);
  var B = (A >> 16) + (D >> 16) + (C >> 16);
  return (B << 16) | (C & 65535);
}



function bit_rol(A, B) {
  return (A << B) | (A >>> (32 - B));
}



function binl2b64(D) {
  var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var F = "";
  for (var B = 0; B < D.length * 4; B += 3) 
    {
      var E = (((D[B >> 2] >> 8 * (B % 4)) & 255) << 16) | (((D[B + 1 >> 2] >> 8 * ((B + 1) % 4)) & 255) << 8) | ((D[B + 2 >> 2] >> 8 * ((B + 2) % 4)) & 255);
      for (var A = 0; A < 4; A++) 
        {
          if (B * 8 + A * 6 > D.length * 32) 
          {
            F += b64pad;
          } else {
            F += C.charAt((E >> 6 * (3 - A)) & 63);
          }
        }
    }
  return F;
}



function str_to_ent(D) {
  var A = "";
  var C;
  for (C = 0; C < D.length; C++) 
    {
      var E = D.charCodeAt(C);
      var B = "";
      if (E > 255) 
      {
        while (E >= 1) 
          {
            B = "0123456789".charAt(E % 10) + B;
            E = E / 10;
          }
        if (B == "") 
        {
          B = "0";
        }
        B = "#" + B;
        B = "&" + B;
        B = B + ";";
        A += B;
      } else {
        A += D.charAt(C);
      }
    }
  return A;
}



function trim(A) {
  while (A.substring(0, 1) == " ") 
    {
      A = A.substring(1, A.length);
    }
  while (A.substring(A.length - 1, A.length) == " ") 
    {
      A = A.substring(0, A.length - 1);
    }
  return A;
}



function forced_disp_ad_top() {
}



function forced_disp_ad2_top() {
}



function forced_disp_ad() {
}



function forced_disp_ad2() {
}



function forced_disp_ad3() {
}



function forced_disp_ad_skyscraper() {
}



function forced_disp_ad_wide() {
}



function amazon_affiliate_disp() {
}



function oc_get_domain(str) {
  if (str.substr(0, 7) == 'http://') 
  str = str.substr(7);
  if (str.substr(0, 8) == 'https://') 
  str = str.substr(8);
  str = str.substr(0, str.indexOf('/'));
  str = str.replace('www.', '');
  return str;
}



function esc(str) {
  if (typeof encodeURIComponent == 'undefined') 
  return escape(str); else return encodeURIComponent(str);
}



function get_position(obj) {
  var left_pos = 0;
  var top_pos = 0;
  if (obj.offsetParent) 
  {
do {
      left_pos += obj.offsetLeft;
      top_pos += obj.offsetTop;
    } while (obj = obj.offsetParent);
  } else if (obj.x) 
  {
    left_pos += obj.x;
    top_pos += obj.y;
  }
  var jada = new Array(left_pos, top_pos);
  return jada;
}



function nl2br(string) {
  return string.replace(/(\\r)?\\n/g, "<br />");
}



function nohtml(string) {
  string = string.replace(/"/g, '&quot;');
  string = string.replace(/</g, '&lt;');
  string = string.replace(/>/g, '&gt;');
  return string;
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    {
      if ((obj = MM_findObj(args[i])) != null) 
      {
        v = args[i + 2];
        if (obj.style) 
        {
          obj = obj.style;
          obj.visibility = (obj.visibility == 'visible') ? 'hidden' : 'visible';
        } else {
          obj.visibility = (obj.visibility == 'show') ? 'hide' : 'show';
        }
      }
    }
}



function flvS11() {
  if (!Array.prototype.shift) 
  {
    Array.prototype.shift = function() {
  var v1 = this[0];
  this.reverse();
  this.length = Math.max(this.length - 1, 0);
  this.reverse();
  return v1;
};
  }
  if (!Array.prototype.unshift) 
  {
    Array.prototype.unshift = function() {
  var v2 = arguments;
  this.reverse();
  for (var v3 = v2.length - 1; v3 >= 0; v3--) 
    {
      this[this.length] = v2[v3];
    }
  this.reverse();
  return this.length;
};
  }
  if (!Array.prototype.push) 
  {
    Array.prototype.push = function() {
  var v2 = arguments;
  for (var v3 = v2.length - 1; v3 >= 0; v3--) 
    {
      this[this.length] = v2[v3];
    }
  return this.length;
};
  }
  if (!Array.prototype.pop) 
  {
    Array.prototype.pop = function() {
  var v4 = this[this.length - 1];
  this.length = Math.max(this.length - 1, 0);
  return v4;
};
  }
}



function replaceSubstring(inputString, fromString, toString) {
  var temp = inputString;
  if (fromString == "") 
  {
    return inputString;
  }
  if (toString.indexOf(fromString) == -1) 
  {
    while (temp.indexOf(fromString) != -1) 
      {
        var toTheLeft = temp.substring(0, temp.indexOf(fromString));
        var toTheRight = temp.substring(temp.indexOf(fromString) + fromString.length, temp.length);
        temp = toTheLeft + toString + toTheRight;
      }
  } else {
    var midStrings = new Array("~", "`", "_", "^", "#");
    var midStringLen = 1;
    var midString = "";
    while (midString == "") 
      {
        for (var i = 0; i < midStrings.length; i++) 
          {
            var tempMidString = "";
            for (var j = 0; j < midStringLen; j++) 
              {
                tempMidString += midStrings[i];
              }
            if (fromString.indexOf(tempMidString) == -1) 
            {
              midString = tempMidString;
              i = midStrings.length + 1;
            }
          }
      }
    while (temp.indexOf(fromString) != -1) 
      {
        var toTheLeft = temp.substring(0, temp.indexOf(fromString));
        var toTheRight = temp.substring(temp.indexOf(fromString) + fromString.length, temp.length);
        temp = toTheLeft + midString + toTheRight;
      }
    while (temp.indexOf(midString) != -1) 
      {
        var toTheLeft = temp.substring(0, temp.indexOf(midString));
        var toTheRight = temp.substring(temp.indexOf(midString) + midString.length, temp.length);
        temp = toTheLeft + toString + toTheRight;
      }
  }
  return temp;
}



function trim(inputString) {
  var retValue = inputString;
  var ch = retValue.substring(0, 1);
  while (ch == " ") 
    {
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
    }
  ch = retValue.substring(retValue.length - 1, retValue.length);
  while (ch == " ") 
    {
      retValue = retValue.substring(0, retValue.length - 1);
      ch = retValue.substring(retValue.length - 1, retValue.length);
    }
  while (retValue.indexOf("  ") != -1) 
    {
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ") + 1, retValue.length);
    }
  return retValue;
}



function startListening(obj, evnt, func) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evnt, func, false);
  } else if (obj.attachEvent) 
  {
    obj.attachEvent("on" + evnt, func);
  }
}



function blenza_header() {
  return true;
}



function pause(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) 
    {
      now = new Date();
      if (now.getTime() > exitTime) 
      return;
    }
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
    hideLightbox();
  }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function AtLeastOneAlphaNumeric(val) {
  var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < val.length; i++) 
    {
      var ch = val.charAt(i);
      for (var j = 0; j < checkOK.length; j++) 
        if (ch == checkOK.charAt(j)) 
        return true;
    }
  return false;
}



function GetAttribute(obj, attrib) {
  try {
    if (obj != null && obj.attributes[attrib] != null && obj.attributes[attrib].value.length > 0) 
    return obj.attributes[attrib].value;
  }  catch (e) {
  return '';
}
}



function ValidateGroup(fields, chkAlphaNumeric) {
  var missing = false;
  for (i = 0; i < fields.length; i++) 
    {
      var field = fields[i];
      if (field.attributes != null && field.attributes['required'] != null && field.disabled == false) 
      {
        if (field.value == null || field.value.length == 0 || trim(field.value).length == 0 || (chkAlphaNumeric && !AtLeastOneAlphaNumeric(field.value))) 
        {
          missing = true;
          if (field.attributes['class'] != null && field.attributes['class'].value.indexOf('required') == -1) 
          field.attributes['class'].value += 'required';
        } else if (field.attributes['class'] != null) 
        {
          var s = field.attributes['class'].value;
          field.attributes['class'].value = s.replace('required', '');
        }
      } else if (field.disabled == true && field.attributes != null) 
      {
        var s = field.attributes['class'].value;
        field.attributes['class'].value = s.replace('required', '');
      }
    }
  return missing;
}



function UsedInReportChecked(data, callbackargs) {
}



function Move(id, e) {
}



function checkValue(val, str) {
  var txt = '' + val;
  var re = new RegExp(str);
  return (txt.match(re) ? true : false);
}



function arrayPush(arr, val) {
  var num = arr.length;
  arr[num] = val;
  return arr;
}



function parseQuery(qstr) {
  qstr = qstr.replace(/^\?/, '');
  var query = new Array();
  var arr = qstr.split("&");
  for (var i = 0; i < arr.length; i++) 
    {
      var str = arr[i].split('=');
      var key = str[0];
      var val = str[1];
      if (key != '') 
      {
        query[key] = val;
      }
    }
  return query;
}



function class_onloadlib() {
  this.onloadFunc = new Array();
  this.addFunc = addFunc;
  this.exec = exec;
  this.completed = false;
  function addFunc(fn) {
    this.onloadFunc = array_push(this.onloadFunc, fn);
  }
  function exec() {
    for (var i = 0; i < this.onloadFunc.length; i++) 
      {
        eval(this.onloadFunc[i]);
      }
    this.completed = true;
  }
}



function nav_DoFSCommand(command, args) {
  if (command == "showMenu") 
  {
    hideCur();
    Menus[args].show();
  }
}



function M_hideLayer() {
}



function _oTree() {
}



function mmMouseMove() {
}



function _TtM() {
}



function _IdM() {
}



function _ocURL() {
}



function mmClick() {
}



function autoOT() {
}



function _iF0C() {
}



function showtip() {
}



function isEditMode() {
}



function hidetip() {
}



function mmVisFunction() {
}



function doMenuResize() {
}



function _tMR() {
}



function _maxm() {
}



function _p8(a, d) {
  var t = [];
  for (_a = 0; _a < a.length; _a++) 
    {
      if (a[_a] != d) 
      {
        t[t.length] = a[_a];
      }
    }
  return t;
}



function copyOf(w) {
  for (_cO in w) 
    {
      this[_cO] = w[_cO];
    }
}



function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0) 
  date.setTime(date.getTime() - skew);
}



function buildCal(y, m, isAdmin) {
  if (y != null) 
  currYear = y;
  if (m != null) 
  currMonth = m;
  var mn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dim = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var oD = new Date(currYear, currMonth, 1);
  oD.od = oD.getDay() + 1;
  var todaydate = new Date();
  var scanfortoday = (currYear == todaydate.getFullYear() && currMonth == todaydate.getMonth()) ? todaydate.getDate() : 0;
  var page = '../site/archive.aspx';
  if (isAdmin) 
  page = '../admin/events.aspx';
  var paging = '<tr class="header"><td><a href="javascript:PrevMonth(' + isAdmin + ');">&#60;&#60;</a></td><td colspan="5">' + mn[currMonth] + ' ' + currYear + '</td><td><a href="javascript:NextMonth(' + isAdmin + ');">&#62;&#62;</a></td></tr>';
  dim[1] = (((oD.getFullYear() % 100 != 0) && (oD.getFullYear() % 4 == 0)) || (oD.getFullYear() % 400 == 0)) ? 29 : 28;
  var t = '<table cols="7" cellpadding="0" cellspacing="0">' + paging + '<tr>';
  for (s = 0; s < 7; s++) 
    t += '<td class="header">' + "SMTWTFS".substr(s, 1) + '</td>';
  t += '</tr><tr>';
  var lastCol = 1;
  var col = 1;
  var j = 1;
  var lastI = 1;
  var dInc = 1;
  var dInc2 = 1;
  for (i = 1; i <= 42; i++) 
    {
      var x = ((i - oD.od >= 0) && (i - oD.od < dim[currMonth])) ? i - oD.od + 1 : '&nbsp;';
      if (j == dim[currMonth]) 
      {
        lastCol = col;
        lastI = i;
      }
      if (x == scanfortoday) 
      {
        t += '<td class="current"><b><a href="' + page + '?d=' + (currMonth + 1) + '/' + x + '/' + currYear + '" title="View Event Date">' + x + '</a></b></td>';
        j++;
      } else if (x == '&nbsp;') 
      {
        if (i > dim[currMonth] && i <= (lastI + (7 - lastCol))) 
        {
          var d2 = new Date();
          d2.setUTCMonth((currMonth + 1));
          d2.setUTCDate(dim[currMonth]);
          d2.setUTCFullYear(currYear);
          d2.setUTCDate(d2.getUTCDate() + dInc);
          if (d2.getUTCDate() > dim[currMonth]) 
          {
            d2.setUTCDate(1);
            d2.setUTCMonth(d2.getUTCMonth() + 1);
            dInc++;
          }
          dInc++;
          t += '<td class="othermonth"><a href="' + page + '?d=' + getDateStr(d2) + '" title="View Event Date">' + d2.getDate() + '</a></td>';
        } else if (i < dim[currMonth]) 
        {
          t += '<td>&nbsp;</td>';
        } else t += '<td>&nbsp;</td>';
      } else {
        t += '<td><a href="' + page + '?d=' + (currMonth + 1) + '/' + x + '/' + currYear + '" title="View Event Date">' + x + '</a></td>';
        j++;
      }
      col++;
      if (((i) % 7 == 0) && (i < 36)) 
      {
        t += '</tr><tr>';
        col = 1;
      }
    }
  if (t.indexOf('<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>') != -1) 
  t = t.replace('<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>', '');
  t += '</tr></table>';
  return t;
}



function AC_AX_GetArgs(args) {
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i = 0; i < args.length; i = i + 2) 
    {
      var currArg = args[i].toLowerCase();
      switch (currArg) {
        case "pluginspage":
        case "type":
        case "src":
          ret.embedAttrs[args[i]] = args[i + 1];
          break;
        case "data":
        case "codebase":
        case "classid":
        case "id":
        case "onafterupdate":
        case "onbeforeupdate":
        case "onblur":
        case "oncellchange":
        case "onclick":
        case "ondblClick":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondrop":
        case "onfinish":
        case "onfocus":
        case "onhelp":
        case "onmousedown":
        case "onmouseup":
        case "onmouseover":
        case "onmousemove":
        case "onmouseout":
        case "onkeypress":
        case "onkeydown":
        case "onkeyup":
        case "onload":
        case "onlosecapture":
        case "onpropertychange":
        case "onreadystatechange":
        case "onrowsdelete":
        case "onrowenter":
        case "onrowexit":
        case "onrowsinserted":
        case "onstart":
        case "onscroll":
        case "onbeforeeditfocus":
        case "onactivate":
        case "onbeforedeactivate":
        case "ondeactivate":
          ret.objAttrs[args[i]] = args[i + 1];
          break;
        case "width":
        case "height":
        case "align":
        case "vspace":
        case "hspace":
        case "class":
        case "title":
        case "accesskey":
        case "name":
        case "tabindex":
          ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
          break;
        default:
          ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
      }
    }
  return ret;
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent('on' + evType, fn);
    return r;
  } else {
    return false;
  }
}



function hitGetURL(c) {
  var b = "http://";
  var a = "/";
  var d = c;
  if (d.indexOf(b) != -1) 
  {
    d = c.substring(c.indexOf(b) + b.length, c.length);
  }
  if (d.indexOf(a) != -1) 
  {
    d = d.substring(0, d.indexOf(a));
  }
  return d;
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent('on' + evType, fn);
    return r;
  } else {
    return false;
  }
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent('on' + evType, fn);
    return r;
  } else {
    return false;
  }
}



function AnchorPosition_getPageOffsetLeft(el) {
  var ol = el.offsetLeft;
  while ((el = el.offsetParent) != null) 
    {
      ol += el.offsetLeft;
    }
  return ol;
}



function AnchorPosition_getPageOffsetTop(el) {
  var ot = el.offsetTop;
  while ((el = el.offsetParent) != null) 
    {
      ot += el.offsetTop;
    }
  return ot;
}



function LZ(x) {
  return (x < 0 || x > 9 ? "" : "0") + x;
}



function _isInteger(val) {
  var digits = "1234567890";
  for (var i = 0; i < val.length; i++) 
    {
      if (digits.indexOf(val.charAt(i)) == -1) 
      {
        return false;
      }
    }
  return true;
}



function getDateFromFormat(val, format) {
  val = val + "";
  format = format + "";
  var i_val = 0;
  var i_format = 0;
  var c = "";
  var token = "";
  var token2 = "";
  var x, y;
  var now = new Date();
  var year = now.getYear();
  var month = now.getMonth() + 1;
  var date = 1;
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  var ampm = "";
  while (i_format < format.length) 
    {
      c = format.charAt(i_format);
      token = "";
      while ((format.charAt(i_format) == c) && (i_format < format.length)) 
        {
          token += format.charAt(i_format++);
        }
      if (token == "yyyy" || token == "yy" || token == "y") 
      {
        if (token == "yyyy") 
        {
          x = 4;
          y = 4;
        }
        if (token == "yy") 
        {
          x = 2;
          y = 2;
        }
        if (token == "y") 
        {
          x = 2;
          y = 4;
        }
        year = _getInt(val, i_val, x, y);
        if (year == null) 
        {
          return 0;
        }
        i_val += year.length;
        if (year.length == 2) 
        {
          if (year > 70) 
          {
            year = 1900 + (year - 0);
          } else {
            year = 2000 + (year - 0);
          }
        }
      } else if (token == "MMM" || token == "NNN") 
      {
        month = 0;
        for (var i = 0; i < MONTH_NAMES.length; i++) 
          {
            var month_name = MONTH_NAMES[i];
            if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) 
            {
              if (token == "MMM" || (token == "NNN" && i > 11)) 
              {
                month = i + 1;
                if (month > 12) 
                {
                  month -= 12;
                }
                i_val += month_name.length;
                break;
              }
            }
          }
        if ((month < 1) || (month > 12)) 
        {
          return 0;
        }
      } else if (token == "EE" || token == "E") 
      {
        for (var i = 0; i < DAY_NAMES.length; i++) 
          {
            var day_name = DAY_NAMES[i];
            if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) 
            {
              i_val += day_name.length;
              break;
            }
          }
      } else if (token == "MM" || token == "M") 
      {
        month = _getInt(val, i_val, token.length, 2);
        if (month == null || (month < 1) || (month > 12)) 
        {
          return 0;
        }
        i_val += month.length;
      } else if (token == "dd" || token == "d") 
      {
        date = _getInt(val, i_val, token.length, 2);
        if (date == null || (date < 1) || (date > 31)) 
        {
          return 0;
        }
        i_val += date.length;
      } else if (token == "hh" || token == "h") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 12)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "HH" || token == "H") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 23)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "KK" || token == "K") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 11)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "kk" || token == "k") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 24)) 
        {
          return 0;
        }
        i_val += hh.length;
        hh--;
      } else if (token == "mm" || token == "m") 
      {
        mm = _getInt(val, i_val, token.length, 2);
        if (mm == null || (mm < 0) || (mm > 59)) 
        {
          return 0;
        }
        i_val += mm.length;
      } else if (token == "ss" || token == "s") 
      {
        ss = _getInt(val, i_val, token.length, 2);
        if (ss == null || (ss < 0) || (ss > 59)) 
        {
          return 0;
        }
        i_val += ss.length;
      } else if (token == "a") 
      {
        if (val.substring(i_val, i_val + 2).toLowerCase() == "am") 
        {
          ampm = "AM";
        } else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") 
        {
          ampm = "PM";
        } else {
          return 0;
        }
        i_val += 2;
      } else {
        if (val.substring(i_val, i_val + token.length) != token) 
        {
          return 0;
        } else {
          i_val += token.length;
        }
      }
    }
  if (i_val != val.length) 
  {
    return 0;
  }
  if (month == 2) 
  {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) 
    {
      if (date > 29) 
      {
        return 0;
      }
    } else {
      if (date > 28) 
      {
        return 0;
      }
    }
  }
  if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) 
  {
    if (date > 30) 
    {
      return 0;
    }
  }
  if (hh < 12 && ampm == "PM") 
  {
    hh = hh - 0 + 12;
  } else if (hh > 11 && ampm == "AM") 
  {
    hh -= 12;
  }
  var newdate = new Date(year, month - 1, date, hh, mm, ss);
  return newdate.getTime();
}



function CP_setReturnFunction(name) {
  this.returnFunction = name;
}



function CP_setReturnMonthFunction(name) {
  this.returnMonthFunction = name;
}



function CP_setReturnQuarterFunction(name) {
  this.returnQuarterFunction = name;
}



function CP_setReturnYearFunction(name) {
  this.returnYearFunction = name;
}



function CP_setDayHeaders() {
  for (var i = 0; i < arguments.length; i++) 
    {
      this.dayHeaders[i] = arguments[i];
    }
}



function CP_setWeekStartDay(day) {
  this.weekStartDay = day;
}



function CP_showYearNavigation() {
  this.isShowYearNavigation = (arguments.length > 0) ? arguments[0] : true;
}



function CP_setYearSelectStartOffset(num) {
  this.yearSelectStartOffset = num;
}



function CP_setDisabledWeekDays() {
  this.disabledWeekDays = new Object();
  for (var i = 0; i < arguments.length; i++) 
    {
      this.disabledWeekDays[arguments[i]] = true;
    }
}



function CP_setTodayText(text) {
  this.todayText = text;
}



function CP_setCssPrefix(val) {
  this.cssPrefix = val;
}



function CP_showNavigationDropdowns() {
  this.isShowNavigationDropdowns = (arguments.length > 0) ? arguments[0] : true;
}



function CP_showYearNavigationInput() {
  this.isShowYearNavigationInput = (arguments.length > 0) ? arguments[0] : true;
}



function getCalendarStyles() {
  var result = "";
  var p = "";
  if (this != null && typeof (this.cssPrefix) != "undefined" && this.cssPrefix != null && this.cssPrefix != "") 
  {
    p = this.cssPrefix;
  }
  result += "<STYLE>\n";
  result += "." + p + "cpYearNavigation,." + p + "cpMonthNavigation { background-color:#C0C0C0; text-align:center; vertical-align:center; text-decoration:none; color:#000000; font-weight:bold; }\n";
  result += "." + p + "cpDayColumnHeader, ." + p + "cpYearNavigation,." + p + "cpMonthNavigation,." + p + "cpCurrentMonthDate,." + p + "cpCurrentMonthDateDisabled,." + p + "cpOtherMonthDate,." + p + "cpOtherMonthDateDisabled,." + p + "cpCurrentDate,." + p + "cpCurrentDateDisabled,." + p + "cpTodayText,." + p + "cpTodayTextDisabled,." + p + "cpText { font-family:arial; font-size:8pt; }\n";
  result += "TD." + p + "cpDayColumnHeader { text-align:right; border:solid thin #C0C0C0;border-width:0px 0px 1px 0px; }\n";
  result += "." + p + "cpCurrentMonthDate, ." + p + "cpOtherMonthDate, ." + p + "cpCurrentDate  { text-align:right; text-decoration:none; }\n";
  result += "." + p + "cpCurrentMonthDateDisabled, ." + p + "cpOtherMonthDateDisabled, ." + p + "cpCurrentDateDisabled { color:#D0D0D0; text-align:right; text-decoration:line-through; }\n";
  result += "." + p + "cpCurrentMonthDate, .cpCurrentDate { color:#000000; }\n";
  result += "." + p + "cpOtherMonthDate { color:#808080; }\n";
  result += "TD." + p + "cpCurrentDate { color:white; background-color: #C0C0C0; border-width:1px; border:solid thin #800000; }\n";
  result += "TD." + p + "cpCurrentDateDisabled { border-width:1px; border:solid thin #FFAAAA; }\n";
  result += "TD." + p + "cpTodayText, TD." + p + "cpTodayTextDisabled { border:solid thin #C0C0C0; border-width:1px 0px 0px 0px;}\n";
  result += "A." + p + "cpTodayText, SPAN." + p + "cpTodayTextDisabled { height:20px; }\n";
  result += "A." + p + "cpTodayText { color:black; }\n";
  result += "." + p + "cpTodayTextDisabled { color:#D0D0D0; }\n";
  result += "." + p + "cpBorder { border:solid thin #808080; }\n";
  result += "</STYLE>\n";
  return result;
}



function CP_getCalendar() {
  var now = new Date();
  if (this.year22 != null && this.month22 != null && this.day22 != null) 
  {
    this.currentDate = parseDate(this.month22 + '/' + this.day22 + '/' + this.year22);
  }
  var result = "";
  result += '<table cellspacing="0">\n';
  if (this.displayType == "date" || this.displayType == "week-end") 
  {
    if (this.currentDate == null) 
    {
      this.currentDate = now;
    }
    if (arguments.length > 0) 
    {
      var month = arguments[0];
    } else {
      var month = this.currentDate.getMonth() + 1;
    }
    if (arguments.length > 1 && arguments[1] > 0 && arguments[1] - 0 == arguments[1]) 
    {
      var year = arguments[1];
    } else {
      var year = this.currentDate.getFullYear();
    }
    var daysinmonth = new Array(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) 
    {
      daysinmonth[2] = 29;
    }
    var current_month = new Date(year, month - 1, 1);
    var display_year = year;
    var display_month = month;
    var display_date = 1;
    var weekday = current_month.getDay();
    var offset = 0;
    offset = (weekday >= this.weekStartDay) ? weekday - this.weekStartDay : 7 - this.weekStartDay + weekday;
    if (offset > 0) 
    {
      display_month--;
      if (display_month < 1) 
      {
        display_month = 12;
        display_year--;
      }
      display_date = daysinmonth[display_month] - offset + 1;
    }
    var next_month = month + 1;
    var next_month_year = year;
    if (next_month > 12) 
    {
      next_month = 1;
      next_month_year++;
    }
    var last_month = month - 1;
    var last_month_year = year;
    if (last_month < 1) 
    {
      last_month = 12;
      last_month_year--;
    }
    var date_class;
    result += '<tr class="header">\n';
    var refresh = 'CP_refreshCalendar';
    var refreshLink = 'javascript:' + refresh;
    result += '<td><A HREF="' + refreshLink + '(' + this.index + ',' + last_month + ',' + last_month_year + ');">&lt;&lt;</A></td>\n';
    result += '<td colspan="5">' + this.monthNames[month - 1] + ' ' + year + '</TD>\n';
    result += '<td><A HREF="javascript:CP_refreshCalendar(' + this.index + ',' + next_month + ',' + next_month_year + ');">&gt;&gt;</A></td>\n';
    result += '</tr>\n';
    result += '<tr class="header">\n';
    for (var j = 0; j < 7; j++) 
      {
        result += '<TD>' + this.dayHeaders[(this.weekStartDay + j) % 7] + '</TD>\n';
      }
    result += '</tr>\n';
    var today = new Date();
    for (var row = 1; row <= 6; row++) 
      {
        result += '<tr>\n';
        for (var col = 1; col <= 7; col++) 
          {
            var disabled = false;
            var dateClass = "";
            if ((display_month == this.currentDate.getMonth() + 1) && (display_date == this.currentDate.getDate()) && (display_year == this.currentDate.getFullYear())) 
            {
              dateClass = "current";
            } else if ((display_month == today.getMonth() + 1) && (display_date == today.getDate()) && (display_year == today.getFullYear())) 
            {
              dateClass = "today";
            } else if (display_month == month) 
            {
              dateClass = "";
            } else {
              dateClass = "othermonth";
            }
            var selected_date = display_date;
            var selected_month = display_month;
            var selected_year = display_year;
            if (this.displayType == "week-end") 
            {
              var d = new Date(selected_year, selected_month - 1, selected_date, 0, 0, 0, 0);
              d.setDate(d.getDate() + (7 - col));
              selected_year = d.getYear();
              if (selected_year < 1000) 
              {
                selected_year += 1900;
              }
              selected_month = d.getMonth() + 1;
              selected_date = d.getDate();
            }
            if (dateClass.length > 0) 
            result += '\t<TD CLASS="' + dateClass + '"><A HREF="../site/archive.aspx?d=' + selected_month + '/' + selected_date + '/' + selected_year + '">' + display_date + '</A></TD>\n'; else result += '\t<TD><A HREF="../site/archive.aspx?d=' + selected_month + '/' + selected_date + '/' + selected_year + '">' + display_date + '</A></TD>\n';
            display_date++;
            if (display_date > daysinmonth[display_month]) 
            {
              display_date = 1;
              display_month++;
            }
            if (display_month > 12) 
            {
              display_month = 1;
              display_year++;
            }
          }
        result += '</tr>';
      }
    var current_weekday = now.getDay() - this.weekStartDay;
    if (current_weekday < 0) 
    {
      current_weekday += 7;
    }
    result += '</table>\n';
  }
  return result;
}



function encode(value) {
  value = escape(value);
  value = value.replace(/@/gi, "%40");
  value = value.replace(/\*/gi, "%2A");
  value = value.replace(/_/gi, "%5F");
  value = value.replace(/-/gi, "%2D");
  value = value.replace(/\+/gi, "%2B");
  value = value.replace(/\./gi, "%2E");
  value = value.replace(/\//gi, "%2F");
  value = value.replace(/%20/gi, "+");
  return value;
}



function decode(value) {
  value = value.replace(/\+/g, " ");
  value = unescape(value);
  return value;
}



function AttachEvent(element, event, func) {
  if (element) 
  {
    if (element.addEventListener) 
    {
      element.addEventListener(event.toLowerCase(), func, false);
    } else {
      element.attachEvent('on' + event.toLowerCase(), func);
    }
  }
}



function DetachEvent(element, event, func) {
  if (element) 
  {
    if (element.removeEventListener) 
    {
      element.removeEventListener(event.toLowerCase(), func, false);
    } else {
      element.detachEvent('on' + event.toLowerCase(), func);
    }
  }
}



function Search_For_Products(element) {
  while (element && element.nodeName.toLowerCase() != 'form') 
    {
      element = element.parentNode;
    }
  if (element) 
  {
    if (element.nodeName.toLowerCase() == 'form') 
    {
      element.submit();
    }
  }
}



function IsReturnKey(evt) {
  return (evt.which && evt.which == 13) || (evt.keyCode && evt.keyCode == 13);
}



function CancelEvent(evt) {
  evt.cancelBubble = true;
  evt.returnResult = false;
  if (evt.preventDefault) 
  {
    evt.preventDefault();
  }
  if (evt.stopPropagation) 
  {
    evt.stopPropagation();
  }
  return false;
}



function isvalidfield(fieldname) {
  if (fieldname === "") 
  return false;
  if (fieldname.toLowerCase() === "cvv2" || fieldname.toLowerCase() === "creditcardnumber") 
  return false;
  return true;
}



function PredictiveSearch() {
}



function highlightSearchText(search, result) {
  var regex = new RegExp(search, "gi");
  var startIndex, startIndices = [];
  while ((startIndex = regex.exec(result))) 
    {
      startIndices.push(startIndex.index);
    }
  var originalResultLength = result.length;
  for (var i = 0; i < startIndices.length; i++) 
    {
      result = result.substring(0, startIndices[i]) + "<b>" + result.substring(startIndices[i], (startIndices[i] + search.length)) + "</b>" + result.substring(startIndices[i] + search.length);
      if (i == 0) 
      htmlStylingTagsLength = result.length - originalResultLength;
      if (i < (startIndices.length - 1)) 
      startIndices[i + 1] += htmlStylingTagsLength + (htmlStylingTagsLength * i);
    }
  return result;
}



function DisplayLocalDate(value, ServerUTCOffset) {
  var d = new Date();
  var o = ServerUTCOffset - d.getTimezoneOffset();
  d = new Date(value);
  d.setMinutes(d.getMinutes() + o);
  return d.toString();
}



function isEmpty(input) {
  return (input == null || input == "");
}



function hasDot(input) {
  return (input.search(/\./) == -1);
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function parseTokens(pf, ar) {
  var v, i, mode = -1, par = (pf != 'ol_'), fnMark = (par && !ar.length ? 1 : 0);
  for (i = 0; i < ar.length; i++) 
    {
      if (mode < 0) 
      {
        if (typeof ar[i] == 'number' && ar[i] > pmStart && ar[i] < pmUpper) 
        {
          fnMark = (par ? 1 : 0);
          i--;
        } else {
          switch (pf) {
            case 'ol_':
              ol_text = ar[i].toString();
              break;
            default:
              o3_text = ar[i].toString();
          }
        }
        mode = 0;
      } else {
        if (ar[i] >= pmCount || ar[i] == DONOTHING) 
        {
          continue;
        }
        if (ar[i] == INARRAY) 
        {
          fnMark = 0;
          eval(pf + 'text=ol_texts[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == CAPARRAY) 
        {
          eval(pf + 'cap=ol_caps[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == STICKY) 
        {
          if (pf != 'ol_') 
          eval(pf + 'sticky=1');
          continue;
        }
        if (ar[i] == BACKGROUND) 
        {
          eval(pf + 'background="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == NOCLOSE) 
        {
          if (pf != 'ol_') 
          opt_NOCLOSE();
          continue;
        }
        if (ar[i] == CAPTION) 
        {
          eval(pf + "cap='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CENTER || ar[i] == LEFT || ar[i] == RIGHT) 
        {
          eval(pf + 'hpos=' + ar[i]);
          if (pf != 'ol_') 
          olHautoFlag = 1;
          continue;
        }
        if (ar[i] == OFFSETX) 
        {
          eval(pf + 'offsetx=' + ar[++i]);
          continue;
        }
        if (ar[i] == OFFSETY) 
        {
          eval(pf + 'offsety=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGCOLOR) 
        {
          eval(pf + 'fgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCOLOR) 
        {
          eval(pf + 'bgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTCOLOR) 
        {
          eval(pf + 'textcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPCOLOR) 
        {
          eval(pf + 'capcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSECOLOR) 
        {
          eval(pf + 'closecolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == WIDTH) 
        {
          eval(pf + 'width=' + ar[++i]);
          continue;
        }
        if (ar[i] == BORDER) 
        {
          eval(pf + 'border=' + ar[++i]);
          continue;
        }
        if (ar[i] == CELLPAD) 
        {
          i = opt_MULTIPLEARGS(++i, ar, (pf + 'cellpad'));
          continue;
        }
        if (ar[i] == STATUS) 
        {
          eval(pf + "status='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == AUTOSTATUS) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus==1)?0:1');
          continue;
        }
        if (ar[i] == AUTOSTATUSCAP) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus==2)?0:2');
          continue;
        }
        if (ar[i] == HEIGHT) 
        {
          eval(pf + 'height=' + pf + 'aboveheight=' + ar[++i]);
          continue;
        }
        if (ar[i] == CLOSETEXT) 
        {
          eval(pf + "close='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == SNAPX) 
        {
          eval(pf + 'snapx=' + ar[++i]);
          continue;
        }
        if (ar[i] == SNAPY) 
        {
          eval(pf + 'snapy=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXX) 
        {
          eval(pf + 'fixx=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXY) 
        {
          eval(pf + 'fixy=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELX) 
        {
          eval(pf + 'relx=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELY) 
        {
          eval(pf + 'rely=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGBACKGROUND) 
        {
          eval(pf + 'fgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGBACKGROUND) 
        {
          eval(pf + 'bgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == PADX) 
        {
          eval(pf + 'padxl=' + ar[++i]);
          eval(pf + 'padxr=' + ar[++i]);
          continue;
        }
        if (ar[i] == PADY) 
        {
          eval(pf + 'padyt=' + ar[++i]);
          eval(pf + 'padyb=' + ar[++i]);
          continue;
        }
        if (ar[i] == FULLHTML) 
        {
          if (pf != 'ol_') 
          eval(pf + 'fullhtml=1');
          continue;
        }
        if (ar[i] == BELOW || ar[i] == ABOVE) 
        {
          eval(pf + 'vpos=' + ar[i]);
          if (pf != 'ol_') 
          olVautoFlag = 1;
          continue;
        }
        if (ar[i] == CAPICON) 
        {
          eval(pf + 'capicon="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONT) 
        {
          eval(pf + "textfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CAPTIONFONT) 
        {
          eval(pf + "captionfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CLOSEFONT) 
        {
          eval(pf + "closefont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == TEXTSIZE) 
        {
          eval(pf + 'textsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONSIZE) 
        {
          eval(pf + 'captionsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSESIZE) 
        {
          eval(pf + 'closesize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TIMEOUT) 
        {
          eval(pf + 'timeout=' + ar[++i]);
          continue;
        }
        if (ar[i] == FUNCTION) 
        {
          if (pf == 'ol_') 
          {
            if (typeof ar[i + 1] != 'number') 
            {
              v = ar[++i];
              ol_function = (typeof v == 'function' ? v : null);
            }
          } else {
            fnMark = 0;
            v = null;
            if (typeof ar[i + 1] != 'number') 
            v = ar[++i];
            opt_FUNCTION(v);
          }
          continue;
        }
        if (ar[i] == DELAY) 
        {
          eval(pf + 'delay=' + ar[++i]);
          continue;
        }
        if (ar[i] == HAUTO) 
        {
          eval(pf + 'hauto=(' + pf + 'hauto==0)?1:0');
          continue;
        }
        if (ar[i] == VAUTO) 
        {
          eval(pf + 'vauto=(' + pf + 'vauto==0)?1:0');
          continue;
        }
        if (ar[i] == CLOSECLICK) 
        {
          eval(pf + 'closeclick=(' + pf + 'closeclick==0)?1:0');
          continue;
        }
        if (ar[i] == WRAP) 
        {
          eval(pf + 'wrap=(' + pf + 'wrap==0)?1:0');
          continue;
        }
        if (ar[i] == FOLLOWMOUSE) 
        {
          eval(pf + 'followmouse=(' + pf + 'followmouse==1)?0:1');
          continue;
        }
        if (ar[i] == MOUSEOFF) 
        {
          eval(pf + 'mouseoff=(' + pf + 'mouseoff==0)?1:0');
          v = ar[i + 1];
          if (pf != 'ol_' && eval(pf + 'mouseoff') && typeof v == 'number' && (v < pmStart || v > pmUpper)) 
          olHideDelay = ar[++i];
          continue;
        }
        if (ar[i] == CLOSETITLE) 
        {
          eval(pf + "closetitle='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CSSOFF || ar[i] == CSSCLASS) 
        {
          eval(pf + 'css=' + ar[i]);
          continue;
        }
        if (ar[i] == COMPATMODE) 
        {
          eval(pf + 'compatmode=(' + pf + 'compatmode==0)?1:0');
          continue;
        }
        if (ar[i] == FGCLASS) 
        {
          eval(pf + 'fgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCLASS) 
        {
          eval(pf + 'bgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONTCLASS) 
        {
          eval(pf + 'textfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONFONTCLASS) 
        {
          eval(pf + 'captionfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSEFONTCLASS) 
        {
          eval(pf + 'closefontclass="' + ar[++i] + '"');
          continue;
        }
        i = parseCmdLine(pf, i, ar);
      }
    }
  if (fnMark && o3_function) 
  o3_text = o3_function();
  if ((pf == 'o3_') && o3_wrap) 
  {
    o3_width = 0;
    var tReg = /<.*\n*>/ig;
    if (!tReg.test(o3_text)) 
    o3_text = o3_text.replace(/[ ]+/g, '&nbsp;');
    if (!tReg.test(o3_cap)) 
    o3_cap = o3_cap.replace(/[ ]+/g, '&nbsp;');
  }
  if ((pf == 'o3_') && o3_sticky) 
  {
    if (!o3_close && (o3_frame != ol_frame)) 
    o3_close = ol_close;
    if (o3_mouseoff && (o3_frame == ol_frame)) 
    opt_NOCLOSE(' ');
  }
}



function opt_FUNCTION(callme) {
  o3_text = (callme ? (typeof callme == 'string' ? (/.+\(.*\)/.test(callme) ? eval(callme) : callme) : callme()) : (o3_function ? o3_function() : 'No Function'));
  return 0;
}



function escSglQuote(str) {
  return str.toString().replace(/'/g, "\\'");
}



function isExclusive(args) {
  return false;
}



function setCellPadStr(parameter) {
  var Str = '', j = 0, ary = new Array(), top, bottom, left, right;
  Str += 'padding: ';
  ary = parameter.replace(/\s+/g, '').split(',');
  switch (ary.length) {
    case 2:
      top = bottom = ary[j];
      left = right = ary[++j];
      break;
    case 3:
      top = ary[j];
      left = right = ary[++j];
      bottom = ary[++j];
      break;
    case 4:
      top = ary[j];
      right = ary[++j];
      bottom = ary[++j];
      left = ary[++j];
      break;
  }
  Str += ((ary.length == 1) ? ary[0] + 'px;' : top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px;');
  return Str;
}



function hideDelay(time) {
  if (time && !o3_delay) 
  {
    if (o3_timerid > 0) 
    clearTimeout(o3_timerid);
    o3_timerid = setTimeout("cClick()", (o3_timeout = time));
  }
}



function isFunction(fnRef) {
  var rtn = true;
  if (typeof fnRef == 'object') 
  {
    for (var i = 0; i < fnRef.length; i++) 
      {
        if (typeof fnRef[i] == 'function') 
        continue;
        rtn = false;
        break;
      }
  } else if (typeof fnRef != 'function') 
  {
    rtn = false;
  }
  return rtn;
}



function argToString(array, strtInd, argName) {
  var jS = strtInd, aS = '', ar = array;
  argName = (argName ? argName : 'ar');
  if (ar.length > jS) 
  {
    for (var k = jS; k < ar.length; k++) 
      aS += argName + '[' + k + '], ';
    aS = aS.substring(0, aS.length - 2);
  }
  return aS;
}



function reOrder(hookPt, fnRef, order) {
  var newPt = new Array(), match, i, j;
  if (!order || typeof order == 'undefined' || typeof order == 'number') 
  return hookPt;
  if (typeof order == 'function') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (i = 0; i < hookPt.length; i++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[i] == fnRef) 
        {
          continue;
        } else {
          for (j = 0; j < fnRef.length; j++) 
            if (hookPt[i] == fnRef[j]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[i];
      }
    newPt[newPt.length++] = order;
  } else if (typeof order == 'object') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[j] == fnRef) 
        {
          continue;
        } else {
          for (i = 0; i < fnRef.length; i++) 
            if (hookPt[j] == fnRef[i]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    for (i = 0; i < newPt.length; i++) 
      hookPt[i] = newPt[i];
    newPt.length = 0;
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        for (i = 0; i < order.length; i++) 
          {
            if (hookPt[j] == order[i]) 
            {
              match = true;
              break;
            }
          }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    newPt = newPt.concat(order);
  }
  hookPt = newPt;
  return hookPt;
}



function setRunTimeVariables() {
  if (typeof runTime != 'undefined' && runTime.length) 
  {
    for (var k = 0; k < runTime.length; k++) 
      {
        runTime[k]();
      }
  }
}



function parseCmdLine(pf, i, args) {
  if (typeof cmdLine != 'undefined' && cmdLine.length) 
  {
    for (var k = 0; k < cmdLine.length; k++) 
      {
        var j = cmdLine[k](pf, i, args);
        if (j > -1) 
        {
          i = j;
          break;
        }
      }
  }
  return i;
}



function postParseChecks(pf, args) {
  if (typeof postParse != 'undefined' && postParse.length) 
  {
    for (var k = 0; k < postParse.length; k++) 
      {
        if (postParse[k](pf, args)) 
        continue;
        return false;
      }
  }
  return true;
}



function registerCommands(cmdStr) {
  if (typeof cmdStr != 'string') 
  return;
  var pM = cmdStr.split(',');
  pms = pms.concat(pM);
  for (var i = 0; i < pM.length; i++) 
    {
      eval(pM[i].toUpperCase() + '=' + pmCount++);
    }
}



function registerNoParameterCommands(cmdStr) {
  if (!cmdStr && typeof cmdStr != 'string') 
  return;
  pmt = (!pmt) ? cmdStr : pmt + ',' + cmdStr;
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function stimuli_pause(ms) {
  var date = new Date();
  curDate = null;
do {
    var curDate = new Date();
  } while (curDate - date < ms);
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function dcsCookie() {
  if (typeof (dcsOther) == "function") 
  {
    dcsOther();
  } else if (typeof (dcsPlugin) == "function") 
  {
    dcsPlugin();
  } else if (typeof (dcsFPC) == "function") 
  {
    dcsFPC(gTimeZone);
  }
}



function dcsParseSvl(sv) {
  sv = sv.split(" ").join("");
  sv = sv.split("\t").join("");
  sv = sv.split("\n").join("");
  var pos = sv.toUpperCase().indexOf("WT.SVL=");
  if (pos != -1) 
  {
    var start = pos + 8;
    var end = sv.indexOf('"', start);
    if (end == -1) 
    {
      end = sv.indexOf("'", start);
      if (end == -1) 
      {
        end = sv.length;
      }
    }
    return sv.substring(start, end);
  }
  return "";
}



function dcsIsHttp(e) {
  return (e.href && e.protocol && (e.protocol.indexOf("http") != -1)) ? true : false;
}



function dcsSaveHref(evt) {
  if (evt.preventDefault && evt.target.href) 
  {
    evt.preventDefault();
    gHref = evt.target.href;
  }
}



function dcsEscape(S, REL) {
  if (typeof (REL) != "undefined") 
  {
    var retStr = new String(S);
    for (R in REL) 
      {
        retStr = retStr.replace(REL[R], R);
      }
    return retStr;
  } else {
    return escape(S);
  }
}



function dcsEncode(S) {
  return (typeof (encodeURIComponent) == "function") ? encodeURIComponent(S) : escape(S);
}



function MM_callJS(jsStr) {
  return eval(jsStr);
}



function escapeHTML(s) {
  var MAP = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;'};
  var repl = function(c) {
  return MAP[c];
};
  return s.replace(/[&<>'"]/g, repl);
}



function rsimg(o, w) {
  if (o.width > w) 
  {
    o.resized = true;
    o.width = w;
    o.height = (w / o.width) * o.height;
  }
}



function srExecute() {
}



function srExecute() {
}



function s_c2fe(f) {
  var x = '', s = 0, e, a, b, c;
  while (1) 
    {
      e = f.indexOf('"', s);
      b = f.indexOf('\\', s);
      c = f.indexOf("\n", s);
      if (e < 0 || (b >= 0 && b < e)) 
      e = b;
      if (e < 0 || (c >= 0 && c < e)) 
      e = c;
      if (e >= 0) 
      {
        x += (e > s ? f.substring(s, e) : '') + (e == c ? '\\n' : '\\' + f.substring(e, e + 1));
        s = e + 1;
      } else return x + f.substring(s);
    }
  return f;
}



function s_c2fa(f) {
  var s = f.indexOf('(') + 1, e = f.indexOf(')'), a = '', c;
  while (s >= 0 && s < e) 
    {
      c = f.substring(s, s + 1);
      if (c == ',') 
      a += '","'; else if (("\n\r\t ").indexOf(c) < 0) 
      a += c;
      s++;
    }
  return a ? '"' + a + '"' : a;
}



function srExecute() {
}



function TM0P() {
  if (this.TM1R > 0 || !this.TM1p) 
  return;
  if (this.TM0L) 
  this.TM0L.collapse(this.TMW);
  this.TM0L = null;
  if (this.TMz) 
  this.TMz();
  if (TM1E.TMp) 
  TM1E.TMv(TM1E.TMp);
  if (!TM1E.TM0G && !TM1E.TMI) 
  this.TM1g(true);
}



function TM0S() {
  if (this.TM0L) 
  this.TM0L.collapse(this.TMW);
  this.TM0L = null;
  this.TM1R = 0;
}



function TM0g(TM1Y) {
  return TM1Y;
}



function ststxy(m, xy) {
  m.mcox = xy[0];
  m.mcoy = xy[1];
}



function stgsp(sp, d) {
  var i = 0, s = 5;
  if (d < s || nIEM || !stSMSC) 
  return d;
  d = (d - d % s) / s;
  while (d > 0) 
    d -= ++i;
  return Math.min(Math.min(i * s, sp + s), 100 * s);
}



function stmvto(xy, p) {
  if (xy && (p.par || stgme(p).mtyp)) 
  {
    var l = stglay(p);
    if (nNN4) 
    l.moveToAbsolute(xy[0], xy[1]); else if (nOP) 
    {
      var s = l.style;
      s.pixelLeft = xy[0];
      s.pixelTop = xy[1];
    } else {
      var s = l.style;
      s.left = xy[0] + "px";
      s.top = xy[1] + "px";
    }
    p.rc = [xy[0], xy[1], p.rc[2], p.rc[3]];
  }
}



function stsdstr(p, s) {
  return "var p=st_ms[" + p.mei + "].ps[" + p.ppi + "];p.tmid=0;" + (s ? "stftsh(" : "stfthd(") + "p);p.exed=1;";
}



function stppev(p) {
  return " onMouseOver='stppov(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);' onMouseOut='stppou(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);'";
}



function stquo(n) {
  return "\"" + n + "\"";
}



function stgdec(v) {
  return v ? (v & 1 ? "underline " : "") + (v & 2 ? "line-through " : "") + (v & 4 ? "overline" : "") : "none";
}



function stgbg(c, i, r) {
  return i ? c + " url(" + i + ") " + r : c;
}



function stbuf(s) {
  if (s && stBIMG) 
  {
    var i = new Image();
    st_ims[st_ims.length] = i;
    i.src = s;
  }
  return s;
}



function stabs(s) {
  var t = s.toLowerCase();
  return t.indexOf(":") == 1 && t.charCodeAt() >= "a" && t.charCodeAt() <= "z" || !t.indexOf("http:") || !t.indexOf("https:") || !t.indexOf("file:") || !t.indexOf("ftp:") || !t.indexOf("/") || !t.indexOf("javascript:") || !t.indexOf("mailto:") || !t.indexOf("about:") || !t.indexOf("gopher:") || !t.indexOf("news:") || !t.indexOf("telnet:") || !t.indexOf("wais:");
}



function stisit(ip) {
  return typeof (ip.iti) != "undefined";
}



function stdmld(w) {
  return typeof (w.st_load) != "undefined" && w.st_load;
}



function stssc(s, p) {
  if (s >= 0) 
  {
    if (typeof (p.scid) == "undefined") 
    p.scid = 0 , p.scsu = 0 , p.scsd = 1;
    var l = stglay(p), sp = stgobj(p.ids + "SP"), sn = stgobj(p.ids + "SN"), sc = stgobj(p.ids + "SC");
    (p.pver ? sp.parentNode : sp).parentNode.style.display = (p.pver ? sn.parentNode : sn).parentNode.style.display = s ? '' : 'none';
    sc.style.overflow = s ? "hidden" : "";
    if (s) 
    s = Math.max(s - (p.pver ? sp.offsetHeight + sn.offsetHeight : sp.offsetWidth + sn.offsetWidth) - 2 * p.ipbw - 2 * p.psds - 4 * p.pspc, 1);
    if ((p.pver ? sc.style.height : sc.style.width) == (s ? s + 'px' : '')) 
    return;
        p.pver ? (sc.style.height = s ? s + 'px' : '') : (sc.style.width = s ? s + 'px' : '');
    with (stgme(p).mscm[p.pver])       if (s) 
      {
        sp.rows[0].cells[0].childNodes[0].src = simg[0][(p.pver ? sc.scrollTop : sc.scrollLeft) ? 1 : 0];
        sn.rows[0].cells[0].childNodes[0].src = simg[1][(p.pver ? sc.scrollTop != sc.scrollHeight - sc.offsetHeight : sc.scrollLeft != sc.scrollWidth - sc.offsetWidth) ? 1 : 0];
      }
;
  }
}



function TMGWrapItemAll(s_caption, n_state) {
  if (s_caption == '') 
  return '&nbsp;'; else if (this.TMi == 0) 
  return ['&nbsp;', s_caption, '&nbsp;<img src="/images/icons/', n_state, 'darrow.gif" width="12" height="12" align="absmiddle">&nbsp;'].join(''); else if (this.TM4.length > 3) 
  return ['<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td width=100% class="minner">&nbsp; ', s_caption, '</td><td nowrap>&nbsp;<img src="/images/icons/', n_state, 'rarrow.gif" width=12 height=12 align="absmiddle">&nbsp;</td></tr></table>'].join('');
  return '&nbsp;' + s_caption;
}



function tb_parseQuery(query) {
  var Params = {};
  if (!query) 
  {
    return Params;
  }
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      {
        continue;
      }
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function tb_parseQuery(query) {
  var Params = {};
  if (!query) 
  {
    return Params;
  }
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      {
        continue;
      }
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function podPress_getfileext(strMediaFile) {
  if (typeof strMediaFile == 'undefined') 
  {
    return false;
  }
  var pos = strMediaFile.lastIndexOf('.');
  pos = pos + 1;
  var strExt = strMediaFile.substring(pos);
  strExt = strExt.toLowerCase();
  return strExt;
}



function podPressGetBaseName(file) {
  var Parts = file.split('\\');
  if (Parts.length < 2) 
  {
    Parts = file.split('/');
  }
  return Parts[Parts.length - 1];
}



function dec(num, dp) {
  var n = "" + num;
  var dp1 = n.indexOf(".");
  var l = n.length;
  if (dp > 0 && dp1 == -1) 
  {
    n += ".";
    dp1 = n.indexOf(".");
    l = n.length;
  }
  while (l - dp1 < dp + 1) 
    {
      n += "0";
      l = n.length;
    }
  return n;
}



function convertEscapes(str) {
  var gt;
  gt = -1;
  while (str.indexOf("&lt;", gt + 1) > -1) 
    {
      var gt = str.indexOf("&lt;", gt + 1);
      var newStr = str.substr(0, gt);
      newStr += "<";
      newStr = newStr + str.substr(gt + 4, str.length);
      str = newStr;
    }
  gt = -1;
  while (str.indexOf("&gt;", gt + 1) > -1) 
    {
      var gt = str.indexOf("&gt;", gt + 1);
      var newStr = str.substr(0, gt);
      newStr += ">";
      newStr = newStr + str.substr(gt + 4, str.length);
      str = newStr;
    }
  gt = -1;
  while (str.indexOf("&amp;", gt + 1) > -1) 
    {
      var gt = str.indexOf("&amp;", gt + 1);
      var newStr = str.substr(0, gt);
      newStr += "&";
      newStr = newStr + str.substr(gt + 5, str.length);
      str = newStr;
    }
  return str;
}



function convertToEscapes(str) {
  var gt = -1;
  while (str.indexOf("&", gt + 1) > -1) 
    {
      gt = str.indexOf("&", gt + 1);
      var newStr = str.substr(0, gt);
      newStr += "&amp;";
      newStr = newStr + str.substr(gt + 1, str.length);
      str = newStr;
    }
  gt = -1;
  while (str.indexOf("<", gt + 1) > -1) 
    {
      var gt = str.indexOf("<", gt + 1);
      var newStr = str.substr(0, gt);
      newStr += "&lt;";
      newStr = newStr + str.substr(gt + 1, str.length);
      str = newStr;
    }
  gt = -1;
  while (str.indexOf(">", gt + 1) > -1) 
    {
      var gt = str.indexOf(">", gt + 1);
      var newStr = str.substr(0, gt);
      newStr += "&gt;";
      newStr = newStr + str.substr(gt + 1, str.length);
      str = newStr;
    }
  return str;
}



function _displayElement(domElement, strRet) {
  if (domElement == null) 
  {
    return;
  }
  if (!(domElement.nodeType == 'ELEMENT')) 
  {
    return;
  }
  var tagName = domElement.tagName;
  var tagInfo = "";
  tagInfo = "<" + tagName;
  var attributeList = domElement.getAttributeNames();
  for (var intLoop = 0; intLoop < attributeList.length; intLoop++) 
    {
      var attribute = attributeList[intLoop];
      tagInfo = tagInfo + " " + attribute + "=";
      tagInfo = tagInfo + "\"" + domElement.getAttribute(attribute) + "\"";
    }
  tagInfo = tagInfo + ">";
  strRet = strRet + tagInfo;
  if (domElement.children != null) 
  {
    var domElements = domElement.children;
    for (var intLoop = 0; intLoop < domElements.length; intLoop++) 
      {
        var childNode = domElements[intLoop];
        if (childNode.nodeType == 'COMMENT') 
        {
          strRet = strRet + "<!--" + childNode.content + "-->";
        } else if (childNode.nodeType == 'TEXT') 
        {
          var cont = trim(childNode.content, true, true);
          strRet = strRet + childNode.content;
        } else if (childNode.nodeType == 'CDATA') 
        {
          var cont = trim(childNode.content, true, true);
          strRet = strRet + "<![CDATA[" + cont + "]]>";
        } else {
          strRet = _displayElement(childNode, strRet);
        }
      }
  }
  strRet = strRet + "</" + tagName + ">";
  return strRet;
}



function isEmpty(str) {
  return (str == null) || (str.length == 0);
}



function _XMLDoc_error(str) {
  this.hasErrors = true;
  if (this.errFn) 
  {
    this.errFn("ERROR: " + str);
  } else if (this.onerror) 
  {
    this.onerror("ERROR: " + str);
  }
  return 0;
}



function _XMLDoc_getTagNameParams(tag, obj) {
  var elm = -1, e, s = tag.indexOf('[');
  var attr = [];
  if (s >= 0) 
  {
    e = tag.indexOf(']');
    if (e >= 0) 
    elm = tag.substr(s + 1, (e - s) - 1); else obj.error('expected ] near ' + tag);
    tag = tag.substr(0, s);
    if (isNaN(elm) && elm != '*') 
    {
      attr = elm.substr(1, elm.length - 1);
      attr = attr.split('=');
      if (attr[1]) 
      {
        s = attr[1].indexOf('"');
        attr[1] = attr[1].substr(s + 1, attr[1].length - 1);
        e = attr[1].indexOf('"');
        if (e >= 0) 
        attr[1] = attr[1].substr(0, e); else obj.error('expected " near ' + tag);
      }
            elm = -1;
    } else if (elm == '*') 
    elm = -1;
  }
  return [tag, elm, attr[0], attr[1]];
}



function _XMLDoc_getUnderlyingXMLText() {
  var strRet = "";
  strRet = strRet + "<?xml version=\"1.0\"?>";
  if (this.docNode == null) 
  {
    return;
  }
  strRet = _displayElement(this.docNode, strRet);
  return strRet;
}



function _XMLDoc_parseAttribute(src, pos, node) {
  while ((pos < src.length) && (whitespace.indexOf(src.charAt(pos)) != -1)) 
    {
      pos++;
    }
  if (pos >= src.length) 
  {
    return pos;
  }
  var p1 = pos;
  while ((pos < src.length) && (src.charAt(pos) != '=')) 
    {
      pos++;
    }
  var msg = "attributes must have values";
  if (pos >= src.length) 
  {
    return this.error(msg);
  }
  var paramname = trim(src.substring(p1, pos++), false, true);
  while ((pos < src.length) && (whitespace.indexOf(src.charAt(pos)) != -1)) 
    {
      pos++;
    }
  if (pos >= src.length) 
  {
    return this.error(msg);
  }
  msg = "attribute values must be in quotes";
  var quote = src.charAt(pos++);
  if (quotes.indexOf(quote) == -1) 
  {
    return this.error(msg);
  }
  p1 = pos;
  while ((pos < src.length) && (src.charAt(pos) != quote)) 
    {
      pos++;
    }
  if (pos >= src.length) 
  {
    return this.error(msg);
  }
  if (!node.addAttribute(paramname, trim(src.substring(p1, pos++), false, true))) 
  {
    return 0;
  }
  return pos;
}



function _XMLDoc_parsePI(str, pos) {
  var closepos = str.indexOf('?>', pos);
  return closepos + 2;
}



function _XMLNode_getAttribute(name) {
  if (this.attributes == null) 
  {
    return null;
  }
  return this.attributes['_' + name];
}



function _XMLNode_getAttributeNames() {
  if (this.attributes == null) 
  {
    var ret = new Array();
    return ret;
  }
  var attlist = new Array();
  for (var a in this.attributes) 
    {
      attlist[attlist.length] = a.substring(1);
    }
  return attlist;
}



function _XMLNode_getElements(byName) {
  if (this.children == null) 
  {
    var ret = new Array();
    return ret;
  }
  var elements = new Array();
  for (var i = 0; i < this.children.length; i++) 
    {
      if ((this.children[i].nodeType == 'ELEMENT') && ((byName == null) || (this.children[i].tagName == byName))) 
      {
        elements[elements.length] = this.children[i];
      }
    }
  return elements;
}



function _XMLNode_getText() {
  if (this.nodeType == 'ELEMENT') 
  {
    if (this.children == null) 
    {
      return null;
    }
    var str = "";
    for (var i = 0; i < this.children.length; i++) 
      {
        var t = this.children[i].getText();
        str += (t == null ? "" : t);
      }
    return str;
  } else if (this.nodeType == 'TEXT') 
  {
    return convertEscapes(this.content);
  } else {
    return this.content;
  }
}



function _XMLNode_getParent() {
  return this.parent;
}



function _XMLNode_toString() {
  return "" + this.nodeType + ":" + (this.nodeType == 'TEXT' || this.nodeType == 'CDATA' || this.nodeType == 'COMMENT' ? this.content : this.tagName);
}



function ststxy(m, xy) {
  m.mcox = xy[0];
  m.mcoy = xy[1];
}



function stgsp(sp, d) {
  var i = 0, s = 5;
  if (d < s || nIEM || !stSMSC) 
  return d;
  d = (d - d % s) / s;
  while (d > 0) 
    d -= ++i;
  return Math.min(Math.min(i * s, sp + s), 100 * s);
}



function stmvto(xy, p) {
  if (xy && (p.par || stgme(p).mtyp)) 
  {
    var l = stglay(p);
    if (nNN4) 
    l.moveToAbsolute(xy[0], xy[1]); else if (nOP) 
    {
      var s = l.style;
      s.pixelLeft = xy[0];
      s.pixelTop = xy[1];
    } else {
      var s = l.style;
      s.left = xy[0] + "px";
      s.top = xy[1] + "px";
    }
    p.rc = [xy[0], xy[1], p.rc[2], p.rc[3]];
  }
}



function stsdstr(p, s) {
  return "var p=st_ms[" + p.mei + "].ps[" + p.ppi + "];p.tmid=0;" + (s ? "stftsh(" : "stfthd(") + "p);p.exed=1;";
}



function stppev(p) {
  return " onMouseOver='stppov(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);' onMouseOut='stppou(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);'";
}



function stquo(n) {
  return "\"" + n + "\"";
}



function stgdec(v) {
  return v ? (v & 1 ? "underline " : "") + (v & 2 ? "line-through " : "") + (v & 4 ? "overline" : "") : "none";
}



function stgbg(c, i, r) {
  return i ? c + " url(" + i + ") " + r : c;
}



function stbuf(s) {
  if (s && stBIMG) 
  {
    var i = new Image();
    st_ims[st_ims.length] = i;
    i.src = s;
  }
  return s;
}



function stabs(s) {
  var t = s.toLowerCase();
  return t.indexOf(":") == 1 && t.charCodeAt() >= "a" && t.charCodeAt() <= "z" || !t.indexOf("http:") || !t.indexOf("https:") || !t.indexOf("file:") || !t.indexOf("ftp:") || !t.indexOf("/") || !t.indexOf("javascript:") || !t.indexOf("mailto:") || !t.indexOf("about:") || !t.indexOf("gopher:") || !t.indexOf("news:") || !t.indexOf("telnet:") || !t.indexOf("wais:");
}



function stisit(ip) {
  return typeof (ip.iti) != "undefined";
}



function stdmld(w) {
  return typeof (w.st_load) != "undefined" && w.st_load;
}



function stssc(s, p) {
  if (s >= 0) 
  {
    if (typeof (p.scid) == "undefined") 
    p.scid = 0 , p.scsu = 0 , p.scsd = 1;
    var l = stglay(p), sp = stgobj(p.ids + "SP"), sn = stgobj(p.ids + "SN"), sc = stgobj(p.ids + "SC");
    (p.pver ? sp.parentNode : sp).parentNode.style.display = (p.pver ? sn.parentNode : sn).parentNode.style.display = s ? '' : 'none';
    sc.style.overflow = s ? "hidden" : "";
    if (s) 
    s = Math.max(s - (p.pver ? sp.offsetHeight + sn.offsetHeight : sp.offsetWidth + sn.offsetWidth) - 2 * p.ipbw - 2 * p.psds - 4 * p.pspc, 1);
    if ((p.pver ? sc.style.height : sc.style.width) == (s ? s + 'px' : '')) 
    return;
        p.pver ? (sc.style.height = s ? s + 'px' : '') : (sc.style.width = s ? s + 'px' : '');
    with (stgme(p).mscm[p.pver])       if (s) 
      {
        sp.rows[0].cells[0].childNodes[0].src = simg[0][(p.pver ? sc.scrollTop : sc.scrollLeft) ? 1 : 0];
        sn.rows[0].cells[0].childNodes[0].src = simg[1][(p.pver ? sc.scrollTop != sc.scrollHeight - sc.offsetHeight : sc.scrollLeft != sc.scrollWidth - sc.offsetWidth) ? 1 : 0];
      }
;
  }
}



function aj(bx, by) {
  this.ao = bx;
  this.cf = by;
  this.cg = null;
  this.ef = null;
  this.ce = false;
  this.ch = false;
}



function formatNumber(num) {
  return (num < 10) ? '0' + num : num;
}



function l(log) {
  if (typeof (console) == 'object' && DEFINE.get('IS_DEV')) 
  console.log(log);
}



function pause(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) 
    {
      now = new Date();
      if (now.getTime() > exitTime) 
      return;
    }
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
    hideLightbox();
  }
}



function wp_menus() {
}



function wp_activestack() {
}



function menus() {
}



function stack(name) {
  this.stack_name = name;
}



function activeMenuStack() {
}



function initCircleHelper() {
}



function tb_parseQuery(query) {
  var Params = {};
  if (!query) 
  {
    return Params;
  }
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      {
        continue;
      }
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function isInteger(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}



function inArray(needle, haystack) {
  var length = haystack.length;
  for (var i = 0; i < length; i++) 
    {
      if (haystack[i] == needle) 
      return true;
    }
  return false;
}



function O0000(O0000O, O0O0OOO) {
  return (eval("typeof " + O0000O + " != \"undefined\"") ? eval(O0000O) : O0O0OOO);
}



function PxToNum(pxStr) {
  if (pxStr.length > 2) 
  {
    n = Number(pxStr.substr(0, pxStr.length - 2));
    return (n);
  }
  return (0);
}



function StranText(txt, toFT, chgTxt) {
  if (txt == "" || txt == null) 
  return "";
  toFT = toFT == null ? BodyIsFt : toFT;
  if (chgTxt) 
  txt = txt.replace((toFT ? "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd" : "\ufffd\ufffd\ufffdw\ufffd\ufffd\ufffd\ufffd"), (toFT ? "\ufffd\ufffd\ufffdw\ufffd\ufffd\ufffd\ufffd" : "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"));
  if (toFT) 
  {
    return Traditionalized(txt);
  } else {
    return Simplized(txt);
  }
}



function JTPYStr() {
  return '\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xb0\u04f0\u0570\u06b0\u0730\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u02b1\u03f1\u0431\u0571\u07f1\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03b2\u03f2\u0432\u0472\u04b2\u04f2\u0532\u0572\u05b2\u05f2\u07b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xb3\u0133\u0173\u01b3\u0373\u03f3\u04b3\u0573\u0673\u06f3\u0733\u0773\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xb4\u01f4\u02b4\u0374\u03f4\u0434\u0474\u04f4\u0534\u0574\u0734\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01b5\u02f5\u0435\u04f5\u0775\u07b5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0136\u01b6\u0376\u03f6\u0436\u04b6\u04f6\u0536\u05b6\u0676\u06f6\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xf7\u0137\u0277\u03f7\u0477\u05f7\u0637\u0737\u07f7\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xf8\u01b8\u01f8\u0278\u03f8\u0478\u04f8\u0538\u0578\u05b8\u0678\u06b8\u07b8\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01b9\u02f9\u0439\u0639\u06f9\u0779\u07f9\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u04ba\u05fa\u063a\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01bb\u047b\u04fb\u053b\u067b\u07fb\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xfc\u01bc\u01fc\u02bc\u033c\u037c\u043c\u053c\u057c\u05bc\u063c\u06fc\u077c\u07fc\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xbd\xfd\u013d\u017d\u023d\u027d\u02bd\u03bd\u03fd\u057d\u05fd\u06be\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01fe\u027e\u053e\u067e\u077e\ufffd\ufffd\ufffd\ufffd\ufffd\u073d\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u017f\u01ff\u03bf\u047f\u04bf\u067f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xab\xac\xae\xaf\xb0\xb1\xb2\xb3\xb8\xbb\xbc\xbd\xbf\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xe1\xe8\xea\xed\xf3\xf4\xf9\xfb\xfe\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0131\u0136\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0161\u0162\u0165\u0166\u0167\u0168\u0169\u0171\u0175\u0177\u0178\u0179\u017b\u017d\ufffd\ufffd\ufffd\u04f9\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01ad\u01ae\u01b5\u01b6\u01bb\u01be\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01e3\u01e4\u01e5\u01e6\u01e8\u01e9\u01eb\u01ee\u01ef\u01f1\u01f3\u01f4\u01f5\u01f9\u01fa\u01fd\u01fe\u01ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0223\u0227\u0228\u0230\u0234\u0235\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0261\u0265\u0267\u0268\u026c\u0271\u0274\u0278\u0279\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u02a4\u02a5\u02a6\u02a8\u02aa\u02ab\u02ac\u02b1\u02b4\u02b5\u02b6\u02bb\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u02e7\u02eb\u02ed\u02f0\u02f3\u02f5\u02f6\u02f8\u02ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0321\u0322\u0327\u032f\u0330\u0331\u0332\u0333\u0337\u0338\u033e\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u036d\u0373\u0377\u037c\u037f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03a4\u03a5\u03a7\u03aa\u03ab\u03ac\u03ad\u03b0\u03b1\u03b3\u03bd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03ee\u03f0\u03f3\u03f7\u03f8\u03fa\u03fd\u03ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0425\u042b\u042d\u042e\u042f\u0432\u0433\u0434\u043a\u043b\u043f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0461\u0462\u0464\u0467\u046b\u046f\u0470\u0471\u0475\u0476\u0477\u0479\u047b\u047c\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u04a1\u04a2\u04a3\u04a4\u04a5\u04a9\u04af\u04b3\u04b5\u04b6\u04bd\u04bf\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u04e3\u04e4\u04e5\u04e6\u04e7\u04e8\u04e9\u04ea\u04eb\u04ec\u04f1\u04f4\u04f5\u04f6\u04f8\u04fb\u04fd\u04ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0524\u0526\u0527\u0528\u052f\u0530\u0531\u0532\u0535\u0536\u0538\u053c\u053e\u053f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0561\u0562\u0569\u056b\u056e\u0571\u0575\u0576\u0577\u0578\u057b\u057d\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u05a1\u05a3\u05a4\u05af\u05b0\u05b4\u05bd\u05bf\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u05e4\u05e8\u05e9\u05ea\u05ec\u05ee\u05ef\u05f0\u05f1\u05f3\u05f4\u05f6\u05f8\u05f9\u05fa\u05fb\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xf4\u03aa\u05bb\ufffd\ufffd\u05fc\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0439';
}



function FTPYStr() {
  return '\ufffd}\ufffd@\ufffdK\ufffd\ufffd\ufffdO\ufffd\ufffdW\ufffd\ufffd\ufffdT\ufffd[\ufffd\ufffd\ufffdC\ufffdk\ufffdO\ufffd\u037d\ufffd\ufffd^\ufffdr\ufffd\ufffd\uf58c\ufffd\ufffd\ufffd\ufffdU\u0745\u0610\ufffd^\ufffdN\ufffd\ufffdv\ufffd\ufffd\ufffdP\ufffd\ufffd\ufffd\ufffd\ufffd]\u07c5\ufffd\ufffd\ufffdH\u05c3\ufffdq\ufffdp\ufffdT\ufffdl\ufffdI\ufffde\ufffdP\uf793\ufffd\ufffd\ufffd\ufffdK\ufffdg\ufffdN\ufffda\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffdM\ufffdK\ufffdN\ufffdn\u0153\ufffd}\ufffd\ufffd\ufffd\u0203\u051cy\ufffd\ufffd\u050c\ufffdv\ufffd\ufffd\ufffds\ufffd\u05cb\ufffdp\ufffdP\ufffdb\ufffdU\ue748\ufffd\ufffdL\ufffdL\ufffd\ufffd\ufffdc\ufffdS\ufffd\ufffd\ufffdn\u0707\ufffd\u0609m\ufffd\ufffdr\ufffd\u03b7Q\ufffd\ufffd\ufffd\ufffdG\ufffdV\ufffdt\ufffdY\ufffdu\ufffdX\ufffd\ufffd_\ufffdx\ufffd\ufffd\ufffd\ufffd\ufffdP\ufffdI\ufffdI\ufffdh\ufffd\ufffd\ufffdN\ufffdz\ufffdr\ufffdA\ufffd\ufffd\ufffd|\u030e\ufffd\ufffd\ufffd\ufffd\ufffdJ\ufffd\ufffd\ufffdN\ufffd\ufffd\ufffdb\ufffdo\ufffd~\ufffdn\x94\ufffd[\ufffd\ufffd\u0105\ufffd\ufffd\ufffd\ufffdZ\ufffde\ufffd_\ufffd\ufffd\ufffdJ\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0111\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdh\u028e\ufffdn\ufffdv\ufffdu\ufffd\ufffd\ufffd\ufffdI\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdf\ufffd\ufffd\ufffdc\ufffd|\ub29d\ufffd\ufffd\ufffd{\ufffd\ufffd\u0559\ufffdB\ufffd\ufffd\ufffdV\u04c6\ufffd|\ufffd\u04d7\ufffd\ufffd\ufffd\ufffdY\ufffd\u066a\ufffd\ufffdx\u0640\ufffd\u5454\u0f84\ufffd\ufffd\ua80c\ufffd\ufffd\ufffd\ufffdD\ufffdg\ufffdZ\ufffdZ\ufffd~\u04de\ufffd\ufffd\ufffdI\ufffd\ufffd\ufffd\ufffd\ufffdD\ufffdE\ufffdl\ufffdP\ufffdy\ufffdm\ufffd\ufffdC\ufffd\ufffd\ufffd\ufffd\u061c\ufffd\ufffdL\ufffd\ufffd\ufffdw\ufffdU\ufffdM\ufffd\ufffd\ufffd\ufffd\ufffd^\ufffd\ufffd\ufffdS\ufffdS\ufffd\ufffd\ufffdh\ufffdL\ufffd\ufffd\ufffdT\ufffdp\ufffdS\ufffdP\ufffdw\u0757\ufffd\ufffd\ufffdo\ufffdx\ufffd}\u0613\u04c7\ufffdD\ufffd`\u0513\ufffd}\ufffdw\ufffd\ufffd\ufffds\ufffd\ufffd\ufffdM\ufffd\ufffd\u44feV\ufffd\ufffd\ufffdV\u6014R\ufffd\ufffdw\ufffdt\ufffd\ufffd\ufffdo\ufffdm\ufffd\u0615\ufffdh\ufffd\u03d8\ufffd\u064f\ufffd\ufffd\ufffdM\ue644\ufffd\ufffdP\ufffd^\ufffd^\ufffdT\u061e\ufffdV\u048e\ufffd\ufffdw\ufffd\ufffd|\u0709\u050e\ufffd\ufffd\ufffdF\ufffd\ufffd\u0741\ufffdL\u5047\ufffd\ufffd^\ufffd\ufffdn\ufffdh\ufffdu\ufffdQ\ufffdR\ufffdM\ufffdZ\ufffdt\ufffd\ufffd\ufffd\ufffdo\ufffd\ufffd\ufffdW\ufffdA\ufffd\ufffd\ufffd\ufffd\u0512\ufffd\u0449\u011ag\ufffdh\u07c0\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdo\ufffdS\ufffde\ufffd]\ufffdx\ufffd\ufffd\ufffdV\ufffdx\ufffd\ufffd\ufffdZ\ufffd\ufffd\ufffdM\ufffdd\ufffdL\u021d\ufffd\ufffd\u2deb@\u061b\ufffd\ufffd\ufffd\ufffd\ufffdC\ufffde\ufffd\ufffd\ufffdI\ufffdu\ufffd\ufffd\ufffd\ufffd\ufffdO\u074b\ufffd\ufffd\ufffdD\ufffd\ufffd\ufffdE\ufffd\ufffd\ufffd\ufffd\u04cb\u04db\ufffdH\ufffd^\ufffdo\ufffdA\ufffdv\ufffda\ufffdZ\u26c3r\ufffd{\ufffd\ufffd\ufffdO\ufffd\u0539{\ufffdg\ufffdD\ufffd}\ufffdO\ufffdz\ufffdA\ufffd|\ufffd\ufffd\ufffd\uce86\ufffd\ufffd\ufffdp\ufffd]\ufffd\ufffd\ufffdb\ufffd`\ufffdv\u048a\ufffdI\u015e\ufffd\ufffd\ufffdT\ufffdu\ufffdR\ufffd\ufffd\ufffd{\ufffdY\ufffd\ufffd\ufffd\ufffd\ufffdv\ufffdu\ufffdz\ufffd\ufffd\ufffd\u0254\ufffd\ufffdq\ufffdC\ufffde\ufffd_\ufffd\ufffdU\ufffdg\ufffdI\ufffd^\ufffdM\ufffdA\ufffd\ufffd\ufffdo\ufffd@\ufffd\ufffd\ufffdi\ufffdo\ufffdR\ufffd\ufffd\ufffdd\ufffd\ufffd\ufffdQ\ufffdm\ufffd\ufffd\ufffdf\ufffdx\ufffde\ufffd\ufffd\u43d1\u0584\ufffd\ufffdN\ufffd\ufffd\ufffd\u071d\ufffd\ufffdY\ufffd]\ufffd\xfeo\ufffd\ufffdH\u0594\ufffdM\ufffdx\ufffda\ufffdM\ufffd\ufffd\ufffdG\ufffdX\ufffdQ\ufffdE\ufffd^\ufffdx\u070a\ufffdE\ufffd_\ufffdP\ufffdw\ufffd\ufffd\ufffdn\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u045d\ufffdF\ufffdK\ufffd~\ufffd\ufffd\ufffdV\ufffd\ufffdr\u031d\ufffdh\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffdU\ufffd\u03de\ufffdD\ufffdR\ufffd\ufffd\u0647\ufffd{\ufffd\u0694r\ufffd@\ufffd@\ufffdm\ufffd\ufffd\u05ce\ufffd\ufffd\ufffd[\ufffd\ufffd\ufffd|\ufffd\ufffd\ufffdE\ufffd\u0184\u069d\ufffd\ufffd\ufffd\ufffdD\ufffd\ufffd\ue41cI\ufffdh\ufffdx\ufffdY\ufffd\ufffd\ufffdY\ufffd\ufffd[\ufffd\u045er\ufffd`\ufffdz\x93\u024f\ufffdB\u7811z\ufffdi\ufffd\ufffd\ufffd\ufffd\u0118\u6711\u065f\ufffd\ufffd\ufffd\ufffdZ\ufffd\ufffd\ufffd\ufffd\ufffdv\u054f\ufffd\ufffd\ufffd|\u70abC\ufffdR\ufffd\ufffd\ufffd[\ufffdC\ufffdU\ufffdg\u23dcR\ufffd`\ufffdX\ufffdI\ufffds\ufffd\ufffd\ufffd\ufffd@\ufffd\ufffd\ufffd\ufffd\u0154n\ufffd]\ufffd\u01ca\u44e7\ufffdt\ufffdJ\ufffdR\ufffdB\ufffd]\ufffdt\ufffd\ufffd\ufffdu\u0314\ufffd\ufffd\ufffdT\ufffd\ufffd\ufffd\ufffd\ufffdH\ufffd\ufffd\ufffdX\ufffdH\ufffd\u04bf|\ufffd]\ufffdV\ufffdG\ufffdn\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdy\ufffd\ufffd\u0746\ufffd\ufffd\ufffd\ufffd\ufffdS\ufffd]\u0553\ufffd}\ufffd_\u07c9\u833bj\ufffd\ufffdj\ufffd\ufffd\ufffd\ufffd\ufffda\u039b\ufffdR\ufffdR\ufffd\ufffd\ufffdI\ufffd\ufffdu\ufffd~\ufffd}\ufffdm\ufffdz\ufffdU\ufffdM\u0599\u0608\ufffd^\ufffdT\ufffdQ\ufffd\ufffd\ufffdq\ufffd]\ufffdV\ufffdT\ufffd\ufffd\ufffd\ufffd\ufffdi\ufffd\ufffd\ufffdi\ufffd\ufffd\u0492\ufffdd\ufffd\ufffd\ufffdR\ufffd\u7451\ufffd}\ufffdQ\ufffd\u0587\ufffd\ufffd\ufffd\ufffdc\ufffd{\ufffdy\ufffd\ufffd\ufffdX\ufffd\ufffd\ufffd[\ufffdH\u0101\ufffdf\ufffd\ufffd\ufffd\ufffdB\x99\ufffdm\ufffd\u61d9\ufffd\ufffd\ufffd\u5e14Q\ufffd\ufffd\ufffdo\ufffd~\u0113\ufffd\ufffd\ufffdr\ufffd\ufffd\ufffdZ\ufffdW\ufffdt\ufffd\ufffd\ufffdI\ufffda\ufffdP\ufffd\ufffd\ufffd\ufffdr\ufffd\ufffd\ufffdi\ufffd_\ufffdh\ufffdl\u061a\ufffdO\ufffd{\ufffdu\ufffd\ufffd\ufffdH\ufffd\ufffd\u4058\ufffd\ufffdV\u011a\ufffdR\ufffdT\ufffdM\ufffd\ufffd\ufffd\u25c9\u04d9\ufffd\ufffd\ufffdL\ufffdT\ufffdU\ufffdw\ufffd\ufffd\ufffdt\ufffdX\ufffdQ\ufffd\ufffd\ufffd\ufffdl\ufffdq\ufffd\ufffd\ufffd\u0720\ufffd\ufffdN\ufffd\ufffd\ufffd\ufffd\ufffd@\ufffd\ufffd\u0303S\ufffdN\ufffd[\ufffd`\ufffdJ\ufffdH\ufffdp\ufffd\ufffdA\ufffd\u0548\ufffdc\ufffd\ufffd\ufffdF\u0685\ufffd^\ufffd|\ufffd\ufffdx\ufffdE\ufffd\ufffd\ufffd\ufffds\ufffdo\u05cc\ufffd\ufffd\ufffd_\ufffd@\ufffd\ufffd\ufffdg\ufffdJ\ufffdx\ufffds\ufffdq\u071b\ufffdJ\ufffdc\ufffd\ufffd\ufffd\ufffd\ufffd_\ufffdw\u0650\ufffd\ufffd\ufffd\ufffd}\ufffd\u07dd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdY\ufffd\ufffd\ufffdW\ufffd\u0660\ufffd\ufffd\ufffd\ufffd\ufffdp\ufffd\ufffdB\ufffdd\ufffdz\ufffd\ufffd\ufffdO\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdI\ufffdB\x95\ufffdK\ufffd\ufffd\ufffd}\ufffd\ufffd\ufffd{\ufffd\ufffd\u050a\ufffd\u0195r\ufffdg\ufffd\ufffd\ufffdR\ufffd\ufffd\ufffd\ufffd\u0495\u0507\ufffd\u06ebF\ufffd\ufffd\u0754\ufffd\ufffd\ufffdH\ufffd\ufffd\ufffdg\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffdp\ufffdl\ufffd\ufffd\ufffd\ufffdf\ufffdT\ufffdq\ufffdz\ufffd\x96\ufffdZ\ufffd\ufffdA\ufffdb\ufffd\ufffdK\ufffdV\ufffdC\ufffdm\ufffd\ufffd\ufffdq\ufffdO\ufffdp\ufffdS\ufffds\ufffd\ufffd\ufffdi\ufffdH\ufffd\ufffdE\ufffd\ufffd\u061d\ufffdc\ufffd\ufffd\ufffd\ufffd\ufffdT\u0544\ufffdU\ufffd\ufffd\ufffdC\ufffd\ufffdl\ufffdv\ufffd`\ufffdR\ufffd}\ufffdw\ufffd\u03d7l\ufffdN\ufffdF\ufffdd\xa0\ufffdN\ufffd~\ufffdy\ufffd^\ufffdD\ufffdT\ufffdF\ufffdj\u0351\xd3\ufffdr\ufffdW\ufffdE\ufffdD\ufffdm\ufffd\ufffd\ufffd\ufffd\ufffdB\ufffdf\ufffdW\ufffdf\ufffd`\ufffd\ufffdH\ufffdS\u0214\ufffd\ufffd\ufffd^\ufffd\ufffd\ufffd^\ufffdl\ufffd\ufffd\x84\ufffdy\ufffd\ufffd\ufffd\ufffd\ufffdY\ufffd\ufffd\u0381\ufffdu\ufffdC\ufffd\ufffd\ufffdu\ufffd\ufffd\ufffd_\ufffdo\u028f\ufffd\u01c9]\ufffdF\ufffd\ufffd\ufffd`\ufffda\ufffd\ufffd\ufffdu\ufffd\ufffd\u3291\ufffd\ufffdr\u0760\ufffd{\ufffdb\ufffdM\ufffdB\ufffdv\ufffdr\ufffdw\ufffdy\ufffdt\ufffd\ufffde\ufffd@\ufffdU\ufffdF\ufffdI\ufffdh\ufffdW\ufffdw\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdl\u0514\ufffd\ufffd\u0292\ufffdN\ufffd\u0507[\u03d0\ufffdf\ufffd\ufffd\ufffdy\ufffd{\ufffdC\ufffd\ufffd\ufffda\ufffdx\ufffd\ufffd\ufffdd\ufffd\ufffd\ufffdn\ufffdC\u0313\ufffdu\ufffd\ufffdS\ufffdw\ufffdm\u070e\ufffd\ufffd\ufffdx\ufffd_\ufffdk\ufffdW\ufffd\ufffd\u0503\ufffd\ufffd\ufffdZ\u04d6\u04cd\ufffdd\ufffd\ufffd\ufffdf\ufffd\ufffd\u04e0\u939f\ufffd\ufffd}\ufffd\ufffd\ufffd\ufffd\ufffdW\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdV\ufffd\ufffd\ufffdP\ufffd\ufffd\ua5b0W\ufffdB\ufffd\u04ec\ufffd\ufffdu\ufffd\ufffd\ufffdb\ufffdG\ufffd{\u02ce\ufffd\ufffd\ud4d8I\ufffd~\ufffdt\ufffd\ufffdU\ufffdz\ufffdx\ufffd\ufffd\u03c1\u02c7\ufffd|\ufffd\ufffd\ufffdx\u0504\ufffdh\ufffdx\ufffdg\ufffd\ufffd\ufffd[\ufffda\ufffd\ufffdy\uf2d9\u044b\ufffd\ufffd\ufffdt\ufffd\ufffd\u039e\ufffdI\ufffd\ufffd\u03c9\ufffdf\ufffd\u0453\ufffd\ufffdb\ufffdx\u0501\ufffd\ufffd\ufffd\ufffd\ufffdn\ufffd]\u266aq\ufffd[\ufffdT\u075b\ufffd~\ufffdO\ufffd\ufffd\ufffdc\ufffdZ\ufffdZ\ufffdn\ufffdR\ufffdz\ufffdu\ufffdA\ufffdS\ufffdx\ufffdY\ufffd@\ufffd@\ufffdT\ufffdA\ufffd\ufffd\ufffdh\ue2bcs\ufffdS\u800e[\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdy\ufffd\ufffd\ufffdE\ufffd\ufffdN\ufffdj\ufffd\ufffd\ufffd\ufffds\ufffd\ufffd\ufffdd\ufffd\ufffd\ufffd\ufffd\u065d\ufffdE\ufffdv\u83d7\ufffd\ufffd^\u061f\ufffd\ufffdt\ufffd\ufffd\ufffd\u065b\ufffd\ufffd\ufffd\ufffd\u0708\ufffd\ufffdl\ufffdp\ufffdS\ufffd\ufffd\u05b1K\ufffd\ufffd\u075a\ufffd\u45e3\ufffd\ufffd`\ufffd\ufffd\ufffdq\ufffd\ufffd\ufffd~\xdb\ufffdw\ufffdU\ufffdH\ufffdN\ufffd@\u0611\u1602\ufffd\ufffd\ufffd\ua1d2\uac60\ufffdb\ufffd\ufffd\ufffd\ufffd\ufffdC\ufffd\ufffd\x9a\ufffd\u033c\ufffd\ufffd\ufffd\ufffdS\ufffd\ufffd\ufffd|\ufffdR\ufffdK\ufffdN\ufffd[\ufffd\ufffda\ufffdS\ufffd\ufffd\ufffd\ufffd\ufffdE\ufffdi\ufffdT\ufffdD\ufffdT\ufffd\ufffd\ufffd\ufffd\ufffdA\ufffdT\ufffdB\ufffdv\ufffd\ufffd\ufffdu\ufffdD\u064d\ufffd\ufffd\ufffdf\ufffdb\ufffdy\ufffd\u0460\ufffd\ufffdF\u0658\ufffd\ufffd\ufffdY\u0541\ufffd\ufffd\u019d\ufffdY\ufffdn\u06d9\ufffdC\ufffd\ufffd\ufffdv\ufffdu\ufffd{\ufffdM\u837f@\ufffd\ufffdN\ufffd\ufffd\ufffdb\ufffd\ufffd\ufffd\u0286\ufffd\ufffd\ufffde\ufffdZ\ufffdN\u501b\ufffd';
}



function _QTDeleteTagAttrs() {
  for (var ndx = 0; ndx < arguments.length; ndx++) 
    {
      var attrName = arguments[ndx];
      delete gTagAttrs[attrName];
      delete gTagAttrs["emb#" + attrName];
      delete gTagAttrs["obj#" + attrName];
    }
}



function getCurrentDate() {
  currDate = new Date();
  var currDateString;
  if (currDate.getDay() == 1) 
  currDateString = "Monday"; else if (currDate.getDay() == 2) 
  currDateString = "Tuesday"; else if (currDate.getDay() == 3) 
  currDateString = "Wednesday"; else if (currDate.getDay() == 4) 
  currDateString = "Thursday"; else if (currDate.getDay() == 5) 
  currDateString = "Friday"; else if (currDate.getDay() == 6) 
  currDateString = "Saturday"; else if (currDate.getDay() == 0) 
  currDateString = "Sunday";
  currDateString = currDateString + "   ";
  if (currDate.getMonth() == 0) 
  currDateString = currDateString + "Jan"; else if (currDate.getMonth() == 1) 
  currDateString = currDateString + "Feb"; else if (currDate.getMonth() == 2) 
  currDateString = currDateString + "Mar"; else if (currDate.getMonth() == 3) 
  currDateString = currDateString + "Apr"; else if (currDate.getMonth() == 4) 
  currDateString = currDateString + "May"; else if (currDate.getMonth() == 5) 
  currDateString = currDateString + "Jun"; else if (currDate.getMonth() == 6) 
  currDateString = currDateString + "Jul"; else if (currDate.getMonth() == 7) 
  currDateString = currDateString + "Aug"; else if (currDate.getMonth() == 8) 
  currDateString = currDateString + "Sep"; else if (currDate.getMonth() == 9) 
  currDateString = currDateString + "Oct"; else if (currDate.getMonth() == 10) 
  currDateString = currDateString + "Nov"; else if (currDate.getMonth() == 11) 
  currDateString = currDateString + "Dec";
  currDateString = currDateString + " " + currDate.getDate() + ", " + currDate.getFullYear();
  return currDateString;
}



function selectPopup(select, win_width, win_height) {
  return true;
}



function limitTextArea(obj) {
  var mlength = obj.getAttribute ? parseInt(obj.getAttribute("maxlength")) : "";
  if (obj.getAttribute && obj.value.length > mlength) 
  obj.value = obj.value.substring(0, mlength);
}



function isDigit(num) {
  if (num.length > 1) 
  {
    return false;
  }
  var string = "1234567890";
  if (string.indexOf(num) != -1) 
  {
    return true;
  }
  return false;
}



function isBlank(theObject) {
  if (theObject == null) 
  {
    return true;
  }
  if (theObject.value == "") 
  {
    return true;
  }
  return false;
}



function formatDate(date) {
  var spot = date.indexOf('-', 0);
  if ((spot != 4) || (date.length != 10)) 
  {
    return false;
  }
  spot = date.indexOf('-', 5);
  if (spot != 7) 
  {
    return false;
  }
  return true;
}



function addAnEvent(el, evname, func) {
  if (el.attachEvent) 
  {
    el.attachEvent("on" + evname, func);
  } else if (el.addEventListener) 
  {
    el.addEventListener(evname, func, true);
  } else {
    el["on" + evname] = func;
  }
}



function gaTrackPageView(gaPageID) {
  if (typeof (pageTracker) != 'undefined') 
  {
    pageTracker._trackPageview(gaPageID);
  }
}



function gaTrackPageViewOnSubmit(gaPageID) {
  try {
    gaTrackPageView(gaPageID);
  }  catch (e) {
}
  return true;
}



function MM_showHideLayers() {
  var i, p, v, d, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    {
      if ((obj = MM_findObj(args[i])) != null) 
      {
        v = args[i + 2];
        if (obj.style) 
        {
          obj = obj.style;
          if (v == 'hide') 
          {
            v = 'hidden';
            d = 'none';
          } else {
            v = 'visible';
            d = 'block';
          }
        }
        obj.visibility = v;
        obj.display = d;
      }
    }
}



function rmReplace(myString, toReplace, replaceBy) {
  return (myString.replace(new RegExp(toReplace, 'gi'), replaceBy));
}



function TB_parseQuery(query) {
  var Params = new Object();
  if (!query) 
  return Params;
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      continue;
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function TB_strpos(str, ch) {
  for (var i = 0; i < str.length; i++) 
    if (str.substring(i, i + 1) == ch) 
    return i;
  return -1;
}



function _ssvoid() {
  return;
}



function sseC(d) {
  if (typeof (encodeURIComponent) == 'function') 
  {
    return encodeURIComponent(d);
  } else {
    return escape(d);
  }
}



function sseXr(a, b) {
  var rt = "";
  for (var i = 0; i < a.length; i++) 
    {
      rt += String.fromCharCode(b ^ a.charCodeAt(i));
    }
  return (rt);
}



function SSsdk() {
  return ("");
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function remove_html(html) {
  return html.replace(/<[^>]+>/g, '');
}



function validDecimal(fldVal) {
  validChars = "0123456789.,-";
  for (k = 1; k < fldVal.length; k++) 
    {
      testChar = fldVal.charAt(k);
      if (validChars.indexOf(testChar, 0) == -1) 
      {
        return false;
      }
    }
  return true;
}



function validScreen(fldVal) {
  if (fldVal.length < 6) 
  {
    return false;
  }
  return true;
}



function validSortCode(fldVal) {
  if (fldVal.length < 6) 
  {
    alert(SITE_SORT_CODE);
    return false;
  }
  if (isNaN(fldVal)) 
  {
    alert(SITE_SORT_CODE);
    return false;
  }
  return true;
}



function validPass(fldVal) {
  vC1 = 'abcdefghijklmnopqrstuvwxyz';
  vC2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  vC3 = '0123456789';
  lng1 = 0;
  lng2 = 0;
  lng3 = 0;
  for (j = 0; j < fldVal.length; j++) 
    {
      if (vC1.indexOf(fldVal.charAt(j)) != -1) 
      {
        lng1++;
      } else if (vC2.indexOf(fldVal.charAt(j)) != -1) 
      {
        lng2++;
      } else if (vC3.indexOf(fldVal.charAt(j)) != -1) 
      {
        lng3++;
      } else {
        return false;
        break;
      }
    }
  if (lng1 == 0 || lng2 == 0 || lng3 == 0) 
  {
    return false;
  } else {
    return true;
  }
}



function validNumLength(strVal, lRequired, lNumLength) {
  if (lRequired == 0 && strVal.length == 0) 
  {
    return true;
  }
  if (strVal.length < lNumLength) 
  {
    alert(arrAlert[i] + " must be " + lNumLength + " digits long.");
    return false;
  }
  validChars = " 0123456789";
  for (k = 1; k < strVal.length; k++) 
    {
      testChar = strVal.charAt(k);
      if (validChars.indexOf(testChar, 0) == -1) 
      {
        alert(arrAlert[i] + SITE_NUMBER);
        return false;
      }
    }
  return true;
}



function validDateNumerical(year, month, day) {
  if (month < 1 || month > 12) 
  {
    alert("Month must be between 1 and 12.");
    return false;
  }
  if (day < 1 || day > 31) 
  {
    alert("Day must be between 1 and 31.");
    return false;
  }
  if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) 
  {
    alert("Month " + month + " doesn`t have 31 days!");
    return false;
  }
  if (month == 2) 
  {
    var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    if (day > 29 || (day == 29 && !isleap)) 
    {
      alert("February " + year + " doesn't have " + day + " days!");
      return false;
    }
  }
  return true;
}



function futureDate(year, month, day) {
  var today = new Date();
  var date = new Date();
  date.setFullYear(year, month - 1, day);
  return date > today;
}



function validDateMac(sD, sM, sY) {
  if (sD.charAt(0) == "0") 
  {
    sD = sD.charAt(1);
  }
  if (sM.charAt(0) == "0") 
  {
    sM = sM.charAt(1);
  }
  lD = parseInt(sD);
  lM = parseInt(sM);
  lY = parseInt(sY);
  if (lD > 31 || lM > 12 || lY > 2030) 
  {
    return false;
  }
  switch (lM) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (lD == 31) 
      {
        return false;
      }
      break;
    case 2:
      var isLeap = (lY % 4 == 0 && (lY % 100 != 0 || lY % 400 == 0));
      if (lD > 29 || (lD == 29 && !isLeap)) 
      {
        return false;
      }
      break;
  }
  return true;
}



function validTime(sTime) {
  var msg = '';
  var ok = true;
  var sa1Pos = sTime.search(/:/);
  if (sa1Pos == -1) 
  {
    return false;
  }
  var h1 = sTime.slice(0, sa1Pos);
  var sa1 = sTime.slice(sa1Pos, sa1Pos + 1);
  var m1 = sTime.slice(sa1Pos + 1, sTime.length);
  if (isNaN(h1) || isNaN(m1)) 
  {
    ok = false;
  } else {
    if (h1 < 0 || h1 > 23) 
    {
      ok = false;
    }
    if (m1 < 0 || m1 > 59) 
    {
      ok = false;
    }
  }
  if (sa1 != ':') 
  {
    ok = false;
  }
  if (!ok) 
  {
    return false;
  }
  return true;
}



function validateNos(fldVal) {
  if (fldVal != '') 
  {
    var valid = '0123456789';
    var temp;
    for (j = 0; j < fldVal.length; j++) 
      {
        temp = '' + fldVal.substring(j, j + 1);
        if (valid.indexOf(temp) == -1) 
        {
          if (j == 0 && temp != '-') 
          {
            return false;
          } else {
            return false;
          }
        }
      }
    return true;
  } else {
    return true;
  }
}



function validChars(fldVal) {
  vChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (j = 0; j < fldVal.length; j++) 
    {
      if (vChars.indexOf(fldVal.charAt(j)) == -1) 
      {
        ivC = fldVal.charAt(j);
        if (ivC == ' ') 
        {
          ivC = 'Spaces';
        }
        return false;
        break;
      }
    }
  return true;
}



function validCharsName(fldVal) {
  vChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -';
  for (j = 0; j < fldVal.length; j++) 
    {
      if (vChars.indexOf(fldVal.charAt(j)) == -1) 
      {
        return false;
        break;
      }
    }
  return true;
}



function validFileChars(fldVal) {
  vChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._';
  for (k = 0; k < fldVal.length; k++) 
    {
      if (vChars.indexOf(fldVal.charAt(k)) == -1) 
      {
        ivC = fldVal.charAt(k);
        if (ivC == ' ') 
        {
          ivC = 'Spaces';
        }
        return false;
        break;
      }
    }
  return true;
}



function popDD(eDD, aNames, aVals) {
  for (i = 0; i < aNames.length; i++) 
    {
      newOpt = new Option(aNames[i], aVals[i], false, false);
      eDD.options[eDD.length] = newOpt;
    }
}



function setDDbyIdx(eDD, iSet) {
  if (iSet != -1) 
  {
    eDD.selectedIndex = iSet;
  }
}



function setDDbyTxt(eDD, sSet, bIpt) {
  if (sSet != -1) 
  {
    var sIpt;
    if (bIpt == true) 
    {
      sSet = nReplace(sSet.toUpperCase(), ' ', '');
    }
    for (i = 0; i < eDD.length; i++) 
      {
        sIpt = eDD[i].text;
        if (bIpt == true) 
        {
          sIpt = nReplace(sIpt.toUpperCase(), ' ', '');
        }
        if (sIpt == sSet) 
        {
          eDD.selectedIndex = i;
          break;
        }
      }
  }
}



function setDDbyPartTxt(eDD, sSet, bIpt) {
  var uI = -1;
  var uC = 0;
  if (sSet != -1) 
  {
    var sIpt;
    if (bIpt == true) 
    {
      sSet = nReplace(sSet.toUpperCase(), ' ', '');
    }
    for (i = 0; i < eDD.length; i++) 
      {
        sIpt = eDD[i].text;
        if (bIpt == true) 
        {
          sIpt = nReplace(sIpt.toUpperCase(), ' ', '');
        }
        if (sIpt == sSet) 
        {
          uI = i;
          break;
        } else {
          for (c = uC; c < sIpt.length; c++) 
            {
              if (sSet.substring(0, c) == sIpt.substring(0, c)) 
              {
                uI = i;
              }
            }
        }
      }
  }
  if (uI.length != -1) 
  {
    eDD.selectedIndex = uI;
  }
}



function setDDbyVal(eDD, iSet) {
  if (iSet != -1) 
  {
    eDD.value = iSet;
  }
}



function nReplace(sVal, need, hay) {
  var sHold = sVal;
  var j = sHold.indexOf(need);
  while (j > -1) 
    {
      sHold = sHold.replace(need, hay);
      j = sHold.indexOf(need, j + hay.length + 1);
    }
  return sHold;
}



function in_array(needle, haystack) {
  var hay = haystack.toString();
  if (hay == '') 
  {
    return false;
  }
  var pattern = new RegExp(needle, 'g');
  var matched = pattern.test(haystack);
  return matched;
}



function getOpacity(node) {
  return node.opacityVal ? node.opacityVal : 0;
}



function changemandnoteproceedflag(val) {
  if (typeof (dF) == 'undefined') 
  {
    return false;
  }
  if (dF.mandnoteproceed) 
  {
    dF.mandnoteproceed.value = val;
  }
  return true;
}



function FontResizer(domNode) {
  this.cookieName = "frszCurSizeIndex";
  this.domNode = domNode;
  this.curSizeIndex = -1;
  if (!this.domNode) 
  return;
  this.classList = Array('frsz-S', 'frsz-M', 'frsz-L', 'frsz-XL', 'frsz-XXL');
  this.curSizeIndex = this.loadSize();
  this.doUpdate();
}



function pause(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) 
    {
      now = new Date();
      if (now.getTime() > exitTime) 
      return;
    }
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
    hideLightbox();
  }
}



function GetDays(month, year) {
  if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) 
  return 31; else if (month == 2) 
  if (year % 4 == 0) 
  return 29; else return 28; else return 30;
}



function getTimeZoneOffset() {
  var today = new Date();
  var timezone;
  timezone = -today.getTimezoneOffset();
  return timezone;
}



function Highlight(src, clrOver) {
  src.bgColor = clrOver;
}



function FCSS(t, d) {
  var a = t.split("|");
  var i;
  var s;
  for (i = 0; i < a.length; i++) 
    {
      if (a[i].length >= 5) 
      {
        if (s == null) 
        {
          s = a[i];
        } else {
          s += d + a[i];
        }
      }
    }
  if (s == null) 
  {
    return '';
  }
  return s;
}



function getWidth(obj) {
  var width = obj.offsetWidth;
  if (width > 0) 
  return width;
  if (!obj.firstChild) 
  return 0;
  return obj.lastChild.offsetLeft - obj.firstChild.offsetLeft + getWidth(obj.lastChild);
}



function getHeight(obj) {
  var height = obj.offsetHeight;
  if (height > 0) 
  return height;
  if (!obj.firstChild) 
  return 0;
  return obj.firstChild.offsetHeight;
}



function x1(a, b) {
  return String.fromCharCode(a.charCodeAt(0) - 1 - (b - (parseInt(b / 4) * 4)));
}



function qa(a, b) {
  return String.fromCharCode(a.charCodeAt(0) - (b - (parseInt(b / 2) * 2)));
}



function qm_kille(e) {
  if (!e) 
  e = event;
  e.cancelBubble = true;
  if (e.stopPropagation && !(qm_s && e.type == "click")) 
  e.stopPropagation();
}



function qm_ibcss_hover_off(e, o) {
  if (!o) 
  o = qmad.ibcss.lasth;
  if (o && o.qmibulletcss) 
  x2("qm-ibcss-hover", o.qmibulletcss);
}



function qm_ibcss_wait_relative(a) {
  if (!a) 
  a = qmad.ibcss.cura;
  if (a.cdiv) 
  {
    if (a.cdiv.qmtree && a.cdiv.style.position != "relative") 
    {
      qmad.ibcss.cura = a;
      setTimeout("qm_ibcss_wait_relative()", 10);
      return;
    }
    var aa = a.cdiv.childNodes;
    for (var i = 0; i < aa.length; i++) 
      {
        if (aa[i].tagName == "A" && aa[i].qmibulletcss) 
        qm_ibcss_position(aa[i], aa[i].qmibulletcss);
      }
  }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function getIEClipValues(str) {
  var clip = new Array();
  var i;
  i = str.indexOf("(");
  clip[0] = parseInt(str.substring(i + 1, str.length), 10);
  i = str.indexOf(" ", i + 1);
  clip[1] = parseInt(str.substring(i + 1, str.length), 10);
  i = str.indexOf(" ", i + 1);
  clip[2] = parseInt(str.substring(i + 1, str.length), 10);
  i = str.indexOf(" ", i + 1);
  clip[3] = parseInt(str.substring(i + 1, str.length), 10);
  return (clip);
}



function pause(x) {
  var now = new Date();
  var stop = now.getTime() + (x || clicky_custom.timer || 500);
  while (now.getTime() < stop) 
    var now = new Date()}



function scrollerSetColors(fgcolor, bgcolor, bdcolor) {
  if (this.created) 
  {
    alert("Scroller Error: Scroller has already been created.");
    return;
  }
  this.fgColor = fgcolor;
  this.bgColor = bgcolor;
  this.bdColor = bdcolor;
}



function scrollerSetFont(face, size) {
  if (this.created) 
  {
    alert("Scroller Error: Scroller has already been created.");
    return;
  }
  this.fontFace = face;
  this.fontSize = size;
}



function scrollerSetSpeed(pps) {
  if (this.created) 
  {
    alert("Scroller Error: Scroller has already been created.");
    return;
  }
  this.speed = pps;
}



function scrollersetPause(ms) {
  if (this.created) 
  {
    alert("Scroller Error: Scroller has already been created.");
    return;
  }
  this.pauseTime = ms;
}



function scrollerShow() {
  if (this.created) 
  showLayer(this.baseLayer);
}



function scrollerHide() {
  if (this.created) 
  hideLayer(this.baseLayer);
}



function scrollerMoveTo(x, y) {
  if (this.created) 
  moveLayerTo(this.baseLayer, x, y);
}



function scrollerMoveBy(dx, dy) {
  if (this.created) 
  moveLayerBy(this.baseLayer, dx, dy);
}



function scrollerGetzIndex() {
  if (this.created) 
  return (getzIndex(this.baseLayer)); else return (0);
}



function scrollerSetzIndex(z) {
  if (this.created) 
  setzIndex(this.baseLayer, z);
}



function scrollerStart() {
  this.stopped = false;
}



function scrollerStop() {
  this.stopped = true;
}



function MakeArray(n) {
  this.length = n;
  return this;
}



function DeCryptString(s) {
  var n = 0;
  var r = "mailto:";
  for (var i = 0; i < s.length; i++) 
    {
      n = s.charCodeAt(i);
      if (n >= 8364) 
      {
        n = 128;
      }
      r += String.fromCharCode(n - 1);
    }
  return r;
}



function Region() {
  this.regionid = "";
  this.name = "";
  this.activities = new Array();
}



function Activity() {
  this.actid = "";
  this.name = "";
}



function arrayContains(a, v) {
  for (idx in a) 
    {
      if (v == a[idx]) 
      {
        return (idx);
      }
    }
  return (-1);
}



function M_hideLayer() {
}



function opentree() {
}



function _cL() {
}



function remove(_ar, _dta) {
  var _tar = new Array();
  for (_a = 0; _a < _ar.length; _a++) 
    {
      if (_ar[_a] != _dta) 
      {
        _tar[_tar.length] = _ar[_a];
      }
    }
  return _tar;
}



function copyOf(_w) {
  for (_cO in _w) 
    {
      this[_cO] = _w[_cO];
    }
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function pause(ms) {
  var date = new Date();
  curDate = null;
do {
    var curDate = new Date();
  } while (curDate - date < ms);
}



function addOptionsToIcon(icon, options) {
  for (var k in options) 
    {
      icon[k] = options[k];
    }
  return icon;
}



function addCodeToFunction(func, code) {
  if (func == undefined) 
  return code; else {
    return function() {
  func();
  code();
};
  }
}



function addGeocodingToMarker(marker, address) {
  marker.orig_initialize = marker.initialize;
  orig_redraw = marker.redraw;
  marker.redraw = function(force) {
};
  marker.initialize = function(map) {
  new GClientGeocoder().getLatLng(address, function(latlng) {
  if (latlng) 
  {
    marker.redraw = orig_redraw;
    marker.orig_initialize(map);
    marker.setPoint(latlng);
  }
});
};
  return marker;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function contains_ns6(a, b) {
  while (b.parentNode) 
    if ((b = b.parentNode) == a) 
    return true;
  return false;
}



function addDescriptionToMarker(marker, description) {
  marker.description = description;
  return marker;
}



function itemOff(_i) {
  if (_i == -1) 
  return;
  _gmi = gmobj("el" + _i);
  if (!_gmi) 
  return;
  if (_gmi.itemOn == 0) 
  return;
  _gmi.itemOn = 0;
  _gs = _gmi.style;
  _I = _mi[_i];
  if (_I[32] && _I[29]) 
  {
    gmobj("img" + _i).src = _I[29];
  }
  if (_I[3] && _I[24] && _I[48]) 
  {
    gmobj("simg" + _i).src = _I[24];
  }
  _lnk = gmobj("lnk" + _i);
  if (_lnk) 
  {
    if (_startM || op) 
    _lnk.oC = _I[8];
    _lnk.style.color = _lnk.oC;
    if (_I[26]) 
    _lnk.style.textDecoration = "none";
    if (_I[33]) 
    _lnk.style.textDecoration = _I[33];
  }
  if (_I[54]) 
  {
    if (!_I[72]) 
    {
      hrgm = gmobj("mmlink" + _I[0]);
      hrgm.className = _I[54];
    }
    _gmi.className = _I[54];
    if (_lnk) 
    _lnk.className = _I[54];
  }
  if (_I[46]) 
  _gmi.style.backgroundImage = "url(" + _I[46] + ")"; else if (_I[7]) 
  _gmi.style.background = _I[7];
  if (!mac) 
  {
    if (_I[44] && (_I[14] == "normal" || !_I[14])) 
    _lnk.style.fontWeight = "normal";
    if (_I[45] && (_I[13] == "normal" || !_I[13])) 
    _lnk.style.fontStyle = "normal";
  }
  if (!_startM && _I[43]) 
  eval(_I[43]);
}



function closeMenusByArray(_cmnu) {
  for (_a = 0; _a < _cmnu.length; _a++) 
    if (_cmnu[_a] != _mnu) 
    if (!_m[_cmnu[_a]][7]) 
    menuDisplay(_cmnu[_a], 0);
}



function _setPath(_mpi) {
  if (_mpi > -1) 
  {
    _ci = _m[_mpi][21];
    while (_ci > -1) 
      {
        if (_mi[_ci][34] != "tree") 
        itemOn(_ci);
        _ci = _m[_mi[_ci][0]][21];
      }
  }
}



function _setCPage(_i) {
  if (_i[18]) 
  _i[8] = _i[18];
  if (_i[19]) 
  _i[7] = _i[19];
  if (_i[56]) 
  _i[29] = _i[56];
  if (_i[69]) 
  _i[46] = _i[69];
  if (_i[48] && _i[3]) 
  _i[24] = _i[48];
  if (_i[25]) 
  _i[9] = _i[25];
  if (_i[72]) 
  _i[54] = _i[72];
  if (_i[75]) 
  _i[9] = _i[75];
  _i.cpage = 1;
}



function _getLink(_I, _gli) {
  if (!_I[1]) 
  return "";
  _Ltxt = _I[1];
  _ofc = (_I[8] ? "color:" + _I[8] : "");
  if (_I[58] && !_I.cpage) 
  _ofc = "";
  _fsize = (_I[12] ? ";font-Size:" + _I[12] : "");
  _fstyle = (_I[13] ? ";font-Style:" + _I[13] : ";font-Style:normal");
  _fweight = (_I[14] ? ";font-Weight:" + _I[14] : ";font-Weight:normal");
  _ffam = (_I[15] ? ";font-Family:" + _I[15] : "");
  _tdec = (_I[33] ? ";text-Decoration:" + _I[33] : ";text-Decoration:none;");
  _disb = (_I[34] == "disabled" ? "disabled" : "");
  _clss = " ";
  if (_I[54]) 
  {
    _clss = " class='" + _I[54] + "' ";
  } else if (_I[58]) 
  {
    _clss = " class='" + _m[_mi[_gli][0]][6].linkclass + "' ";
  }
  _tpee = "";
  _tpe = ((_I[2] && _I[34] != "html") ? "a" : "div");
  if (_tpe != "a") 
  _tpee = " onclick=clickAction(" + _gli + ") ";
  _link = "<" + _tpe + _tpee + " name=mM1 href='" + _I[2] + "' " + _disb + _clss + " id=lnk" + _gli + " style='" + _I[78] + ";background:transparent;display:block;" + _ofc + _ffam + _fweight + _fstyle + _fsize + _tdec + "'>" + _Ltxt + "</" + _tpe + ">";
  return _link;
}



function changeStatus(_i) {
  if (_i > -1) 
  {
    _I = _mi[_i];
    if (_I[4]) 
    {
      _W.status = _I[4];
      return true;
    }
    _W.status = "";
    if (!_I[2]) 
    return true;
  }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function Mint_SI_IO_isLocal(url) {
  return /^([^:]+):\/\/([a-z0-9]+[\._-])*(tinypineapple\.com)/i.test(url);
}



function rr_variableArrayToString(variableArray, variableParentArrayString) {
  var variableString = "";
  for (i in variableArray) 
    {
      if (variableArray[i].constructor.toString().indexOf("Array") > -1) 
      {
        if (variableParentArrayString == null) 
        {
          variableParentArrayString = i + "[";
        } else {
          variableParentArrayString += i + "[";
        }
        variableString += rr_variableArrayToString(variableArray[i], variableParentArrayString);
      } else {
        if (variableParentArrayString == null) 
        {
          variableString += i + "=" + variableArray[i] + "&";
        } else {
          variableString += variableParentArrayString + i + "]=" + variableArray[i] + "&";
        }
      }
    }
  if (variableParentArrayString == null) 
  {
    variableString = variableString.substring(0, variableString.length - 1);
  }
  return variableString;
}



function rr_xml2Array(oXml, sTag, oArray) {
  if (typeof (sTag) == "string") 
  {
    if (oXml.getElementsByTagName(sTag)) 
    {
      var oTag = oXml.getElementsByTag(sTag).item(0);
    }
  } else {
    if (sTag) 
    {
      var oTag = sTag;
    }
  }
  if (oTag) 
  {
    if (oTag.childNodes.length > 0) 
    {
      for (var i in oTag.childNodes) 
        {
          if (oTag.childNodes[i].nodeType == 1 && oTag.childNodes[i].firstChild) 
          {
            if (oTag.childNodes[i].childNodes.length == 1) 
            {
              oArray[oTag.childNodes[i].tagName] = oTag.childNodes[i].firstChild.nodeValue;
            } else {
              oArray[oTag.childNodes[i].tagName] = [];
              rr_xml2Array(oXml, oTag.childNodes[i], oArray);
            }
          }
        }
    } else {
      oArray = oTag.innerHTML;
    }
  }
  return oArray;
}



function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0) 
  date.setTime(date.getTime() - skew);
}



function writeTypeKeyGreeting(commenter_name, entry_id) {
}



function parse_url(url, param) {
  param = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  url = url.replace(/&amp;/, "&");
  var regexS = "[\\?&]" + param + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  if (results === null) 
  {
    return "";
  } else {
    return results[1];
  }
}



function _uVoid() {
  return;
}



function __utmSetVar(v) {
  if (!v || v == "") 
  return;
  var r = Math.round(Math.random() * 2147483647);
  _ubd.cookie = "__utmv=" + _udh + "." + escape(v) + "; path=/; expires=Sun, 18 Jan 2038 00:00:00 GMT;" + _udo;
  var s = "&utmt=var&utmn=" + r;
  if (_userv == 0 || _userv == 2) 
  {
    var i = new Image(1, 1);
    i.src = _ugifpath + "?" + "utmwv=" + _uwv + s;
    i.onload = function() {
  _uVoid();
};
  }
  if (_userv == 1 || _userv == 2) 
  {
    var i2 = new Image(1, 1);
    i2.src = _ugifpath2 + "?" + "utmwv=" + _uwv + s + "&utmac=" + _uacct + "&utmcc=" + _uGCS();
    i2.onload = function() {
  _uVoid();
};
  }
}



function _uGC(l, n, s) {
  if (!l || l == "" || !n || n == "" || !s || s == "") 
  return "-";
  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) 
  {
    i2 = l.indexOf(s, i);
    if (i2 < 0) 
    {
      i2 = l.length;
    }
    c = l.substring((i + i3), i2);
  }
  return c;
}



function _uHash(d) {
  if (!d || d == "") 
  return 1;
  var h = 0, g = 0;
  for (var i = d.length - 1; i >= 0; i--) 
    {
      var c = parseInt(d.charCodeAt(i));
      h = ((h << 6) & fffffff) + c + (c << 14);
      if ((g = h & fe00000) != 0) 
      h = (h ^ (g >> 21));
    }
  return h;
}



function _uFixA(c, s, t) {
  if (!c || c == "" || !s || s == "" || !t || t == "") 
  return "-";
  var a = _uGC(c, "__utma=" + _udh, s);
  var lt = 0, i = 0;
  if ((i = a.lastIndexOf(".")) > 9) 
  {
    _uns = a.substring(i + 1, a.length);
    _uns = (_uns * 1) + 1;
    a = a.substring(0, i);
    if ((i = a.lastIndexOf(".")) > 7) 
    {
      lt = a.substring(i + 1, a.length);
      a = a.substring(0, i);
    }
    if ((i = a.lastIndexOf(".")) > 5) 
    {
      a = a.substring(0, i);
    }
    a += "." + lt + "." + t + "." + _uns;
  }
  return a;
}



function _uTrim(s) {
  if (!s || s == "") 
  return "";
  while ((s.charAt(0) == ' ') || (s.charAt(0) == '\n') || (s.charAt(0, 1) == '\r')) 
    s = s.substring(1, s.length);
  while ((s.charAt(s.length - 1) == ' ') || (s.charAt(s.length - 1) == '\n') || (s.charAt(s.length - 1) == '\r')) 
    s = s.substring(0, s.length - 1);
  return s;
}



function _uEC(s) {
  var n = "";
  if (!s || s == "") 
  return "";
  for (var i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == " ") 
      n += "+"; else n += s.charAt(i);
    }
  return n;
}



function remSuffix(str) {
  ind = str.indexOf("FP");
  str = str.substring(0, ind);
  return str;
}



function startWord(ih, i) {
  for (tag = false; i < ih.length; i++) 
    {
      c = ih.charAt(i);
      if (c == '<') 
      {
        if (ih.substring(i + 1, i + 4) == "IMG") 
        return i;
        tag = true;
      }
      if (!tag) 
      return i;
      if (c == '>') 
      tag = false;
    }
  return -1;
}



function endWord(ih, i) {
  nonSpace = false;
  space = false;
  img = false;
  if (ih.charAt(i) == '<') 
  {
    img = true;
    i++;
  }
  while (i < ih.length) 
    {
      c = ih.charAt(i);
      if (c != ' ') 
      nonSpace = true;
      if (img && c == '>') 
      img = false;
      if (nonSpace && !img && c == ' ') 
      space = true;
      if (c == '<') 
      return i;
      if (space && c != ' ') 
      return i;
      i++;
    }
  return -1;
}



function s_doPlugins() {
}



function s_cgif(t, k) {
  if (t) 
  {
    var te = t.indexOf('='), sk = te < 0 ? t : t.substring(0, te), sv = te < 0 ? 'True' : t.substring(te + 1);
    if (sk == k) 
    return s_epa(sv);
  }
  return '';
}



function s_dt(tz, t) {
  var d = new Date();
  if (t) 
  d.setTime(t);
  d = new Date(d.getTime() + (d.getTimezoneOffset() * 60 * 1000));
  return new Date(Math.floor(d.getTime() + (tz * 60 * 60 * 1000)));
}



function s_vh_s(k, v) {
  if (k && v) 
  {
    var e = new Date(), st = e.getTime(), y = e.getYear(), c = 's_vh_' + k, vh = '|' + s_c_r(c) + '|', t = s_vh_gt(k, v);
    e.setYear((y < 1900 ? y + 1900 : y) + 5);
    if (t) 
    vh = s_rep(vh, '|' + v + '=' + t + '|', '|');
    if (vh.substring(0, 1) == '|') 
    vh = vh.substring(1);
    if (vh.substring(vh.length - 1, vh.length) == '|') 
    vh = vh.substring(0, vh.length - 1);
    vh = v + '=[PCC]' + (vh ? '|' + vh : '');
    s_c_w(c, vh, e);
    if (s_vh_gt(k, v) != '[PCC]') 
    return 0;
    vh = s_rep(vh, '[PCC]', st);
    s_c_w(c, vh, e);
  }
  return 1;
}



function s_fl(s, l) {
  return (s + '').substring(0, l);
}



function s_co(o) {
  if (!o) 
  return o;
  var n = new Object();
  for (x in o) 
    n[x] = o[x];
  return n;
}



function s_num(x) {
  var s = x.toString(), g = '0123456789', p, d;
  for (p = 0; p < s.length; p++) 
    {
      d = s.substring(p, p + 1);
      if (g.indexOf(d) < 0) 
      return 0;
    }
  return 1;
}



function s_rep(s, o, n) {
  var i = s.indexOf(o), l = n.length > 0 ? n.length : 1;
  while (s && i >= 0) 
    {
      s = s.substring(0, i) + n + s.substring(i + o.length);
      i = s.indexOf(o, i + l);
    }
  return s;
}



function s_ape(s) {
  return s ? s_rep(escape('' + s), '+', '%2B') : s;
}



function s_epa(s) {
  return s ? unescape(s_rep('' + s, '+', ' ')) : s;
}



function s_isf(t, a) {
  if (t.substring(0, 2) == 's_') 
  t = t.substring(2);
  return (t != '' && t == a);
}



function s_gtfsf(w) {
  var p = w.parent, l = w.location;
  s_tfs = w;
  if (p && p.location != l && p.location.host == l.host) 
  {
    s_tfs = p;
    return s_gtfsf(s_tfs);
  }
  return s_tfs;
}



function s_lnf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var te = t.indexOf('=');
  if (t && te > 0 && h.indexOf(t.substring(te + 1)) >= 0) 
  return t.substring(0, te);
  return '';
}



function s_ltdf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var qi = h.indexOf('?');
  h = qi >= 0 ? h.substring(0, qi) : h;
  if (t && h.substring(h.length - (t.length + 1)) == '.' + t) 
  return 1;
  return 0;
}



function s_ltef(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  if (t && h.indexOf(t) >= 0) 
  return 1;
  return 0;
}



function s_ot(o) {
  var x = o.type, y = o.tagName;
  return (x && x.toUpperCase ? x : y && y.toUpperCase ? y : o.href ? 'A' : '').toUpperCase();
}



function s_rqf(t, un) {
  var e = t.indexOf('='), u = e >= 0 ? ',' + t.substring(0, e) + ',' : '';
  return u && u.indexOf(',' + un + ',') >= 0 ? s_epa(t.substring(e + 1)) : '';
}



function AC_AX_GetArgs(args) {
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i = 0; i < args.length; i = i + 2) 
    {
      var currArg = args[i].toLowerCase();
      switch (currArg) {
        case "pluginspage":
        case "type":
        case "src":
          ret.embedAttrs[args[i]] = args[i + 1];
          break;
        case "data":
        case "codebase":
        case "classid":
        case "id":
        case "onafterupdate":
        case "onbeforeupdate":
        case "onblur":
        case "oncellchange":
        case "onclick":
        case "ondblClick":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondrop":
        case "onfinish":
        case "onfocus":
        case "onhelp":
        case "onmousedown":
        case "onmouseup":
        case "onmouseover":
        case "onmousemove":
        case "onmouseout":
        case "onkeypress":
        case "onkeydown":
        case "onkeyup":
        case "onload":
        case "onlosecapture":
        case "onpropertychange":
        case "onreadystatechange":
        case "onrowsdelete":
        case "onrowenter":
        case "onrowexit":
        case "onrowsinserted":
        case "onstart":
        case "onscroll":
        case "onbeforeeditfocus":
        case "onactivate":
        case "onbeforedeactivate":
        case "ondeactivate":
          ret.objAttrs[args[i]] = args[i + 1];
          break;
        case "width":
        case "height":
        case "align":
        case "vspace":
        case "hspace":
        case "class":
        case "title":
        case "accesskey":
        case "name":
        case "tabindex":
          ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
          break;
        default:
          ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
      }
    }
  return ret;
}



function _uVoid() {
  return;
}



function __utmSetVar(v) {
  if (!v || v == "") 
  return;
  if (!_udo || _udo == "") 
  {
    _udh = _uDomain();
    if (_udn && _udn != "") 
    {
      _udo = " domain=" + _udn + ";";
    }
  }
  if (!_uVG()) 
  return;
  var r = Math.round(Math.random() * 2147483647);
  _ubd.cookie = "__utmv=" + _udh + "." + _uES(v) + "; path=" + _utcp + "; expires=" + _uNx() + ";" + _udo;
  var s = "&utmt=var&utmn=" + r;
  if ((_userv == 0 || _userv == 2) && _uSP()) 
  {
    var i = new Image(1, 1);
    i.src = _ugifpath + "?" + "utmwv=" + _uwv + s;
    i.onload = function() {
  _uVoid();
};
  }
  if ((_userv == 1 || _userv == 2) && _uSP()) 
  {
    var i2 = new Image(1, 1);
    i2.src = _ugifpath2 + "?" + "utmwv=" + _uwv + s + "&utmac=" + _uacct + "&utmcc=" + _uGCS();
    i2.onload = function() {
  _uVoid();
};
  }
}



function _uGC(l, n, s) {
  if (!l || l == "" || !n || n == "" || !s || s == "") 
  return "-";
  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) 
  {
    i2 = l.indexOf(s, i);
    if (i2 < 0) 
    {
      i2 = l.length;
    }
    c = l.substring((i + i3), i2);
  }
  return c;
}



function _uHash(d) {
  if (!d || d == "") 
  return 1;
  var h = 0, g = 0;
  for (var i = d.length - 1; i >= 0; i--) 
    {
      var c = parseInt(d.charCodeAt(i));
      h = ((h << 6) & fffffff) + c + (c << 14);
      if ((g = h & fe00000) != 0) 
      h = (h ^ (g >> 21));
    }
  return h;
}



function _uFixA(c, s, t) {
  if (!c || c == "" || !s || s == "" || !t || t == "") 
  return "-";
  var a = _uGC(c, "__utma=" + _udh, s);
  var lt = 0, i = 0;
  if ((i = a.lastIndexOf(".")) > 9) 
  {
    _uns = a.substring(i + 1, a.length);
    _uns = (_uns * 1) + 1;
    a = a.substring(0, i);
    if ((i = a.lastIndexOf(".")) > 7) 
    {
      lt = a.substring(i + 1, a.length);
      a = a.substring(0, i);
    }
    if ((i = a.lastIndexOf(".")) > 5) 
    {
      a = a.substring(0, i);
    }
    a += "." + lt + "." + t + "." + _uns;
  }
  return a;
}



function _uTrim(s) {
  if (!s || s == "") 
  return "";
  while ((s.charAt(0) == ' ') || (s.charAt(0) == '\n') || (s.charAt(0, 1) == '\r')) 
    s = s.substring(1, s.length);
  while ((s.charAt(s.length - 1) == ' ') || (s.charAt(s.length - 1) == '\n') || (s.charAt(s.length - 1) == '\r')) 
    s = s.substring(0, s.length - 1);
  return s;
}



function _uEC(s) {
  var n = "";
  if (!s || s == "") 
  return "";
  for (var i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == " ") 
      n += "+"; else n += s.charAt(i);
    }
  return n;
}



function _uIN(n) {
  if (!n) 
  return false;
  for (var i = 0; i < n.length; i++) 
    {
      var c = n.charAt(i);
      if ((c < "0" || c > "9") && (c != ".")) 
      return false;
    }
  return true;
}



function _uES(s, u) {
  if (typeof (encodeURIComponent) == 'function') 
  {
    if (u) 
    return encodeURI(s); else return encodeURIComponent(s);
  } else {
    return escape(s);
  }
}



function _uUES(s) {
  if (typeof (decodeURIComponent) == 'function') 
  {
    return decodeURIComponent(s);
  } else {
    return unescape(s);
  }
}



function _uNx() {
  return (new Date((new Date()).getTime() + 63072000000)).toGMTString();
}



function newCheckAlitalkInstalled() {
  var obj5, obj6;
  try {
    obj5 = new ActiveXObject("Ali_Check.InfoCheck");
  }  catch (e) {
  obj5 = null;
}
  if (obj5 != null) 
  {
    alitalkVersion = 5;
    return true;
  }
  try {
    obj6 = new ActiveXObject("aliimx.wangwangx");
  }  catch (e) {
  obj6 = null;
}
  if (obj6 != null) 
  {
    alitalkVersion = 6;
    return true;
  }
  return false;
}



function newCheckAlitoolbarInstalled() {
  var obj;
  try {
    obj = new ActiveXObject("YAliALive.Live");
  }  catch (e) {
}
  if (null != obj) 
  {
    return true;
  } else {
    return false;
  }
}



function addListener(el, eventType, fn) {
  if (el.addEventListener) 
  {
    el.addEventListener(eventType, fn, false);
  } else if (el.attachEvent) 
  {
    el.attachEvent("on" + eventType, fn);
  } else {
    el["on" + eventType] = fn;
  }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    {
      if ((obj = MM_findObj(args[i])) != null) 
      {
        v = args[i + 2];
        if (obj.style) 
        {
          obj = obj.style;
          v = (v == 'show') ? 'block' : (v == 'hide') ? 'none' : v;
        }
        obj.display = v;
      }
    }
}



function checkSelected(selectObject) {
  var onSelect = false;
  if (selectObject.selectedIndex == -1) 
  {
    onSelect = false;
  } else {
    onSelect = true;
  }
  if (!onSelect) 
  {
    alert("\ufffd\ufffd\u0461\ufffd\ufffd\ufffd\u0431\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd");
    return false;
  } else {
    return true;
  }
}



function addListener(el, eventType, fn) {
  if (el.addEventListener) 
  {
    el.addEventListener(eventType, fn, false);
  } else if (el.attachEvent) 
  {
    el.attachEvent("on" + eventType, fn);
  } else {
    el["on" + eventType] = fn;
  }
}



function init() {
}



function getImgName(n) {
  return "";
}



function preloadImages(arr) {
  var preloadImgs = new Array();
  var arrLength = arr.length;
  for (var i = 0; i < arrLength; i++) 
    {
    }
}



function search(url) {
  var qryName = new Array();
  var qryValue = new Array();
  var toParseArray = new Array();
  var camp_str = '';
  url = url.substr(url.indexOf("?") + 1);
  toParseArray = url.split("&");
  if (toParseArray.length == 0 && url != "") 
  toParseArray[0] = url;
  for (var i = 0; i < toParseArray.length; i++) 
    {
      qryName[i] = toParseArray[i].substr(0, toParseArray[i].indexOf("=")).replace(/\+|space/gi, " ");
      qryValue[i] = toParseArray[i].substr(toParseArray[i].indexOf("=") + 1).replace(/[+]/g, " ");
      if (qryName[i] == "chm") 
      {
        camp_str = "&chm=" + qryValue[i];
      }
    }
  return camp_str;
}



function RelURL(x) {
  var address = "";
  if (x > 0) 
  for (z = 0; z < x; z++) 
    address = address + "../";
  return address;
}



function toUpper(word) {
  var pattern = /(\w)(\w*)/;
  var a = word.split(/\s+/g);
  for (i = 0; i < a.length; i++) 
    {
      var parts = a[i].match(pattern);
      var firstLetter = parts[1].toUpperCase();
      var restOfWord = parts[2].toLowerCase();
      a[i] = firstLetter + restOfWord;
    }
  word = a.join(' ');
  return word;
}



function isBlank(s) {
  for (var i = 0; i < s.length; i++) 
    {
      var c = s.substr(i, 1);
      if ((c != " ") && (c != "\n") && (c != "\t")) 
      return false;
    }
  return true;
}



function isNumber(s) {
  for (var i = 0; i < s.length; i++) 
    {
      var c = s.substr(i, 1);
      if ((c != "1") && (c != "2") && (c != "3") && (c != "4") && (c != "5") && (c != "6") && (c != "7") && (c != "8") && (c != "9") && (c != "0")) 
      return false;
    }
  return true;
}



function validateEmail(em) {
  var atIdx = em.indexOf("@");
  var dotIdx = em.lastIndexOf(".");
  if (atIdx < 0 || dotIdx < 0) 
  return false;
  var chunk1 = em.slice(0, atIdx);
  var chunk2 = em.slice(atIdx + 1, dotIdx);
  var chunk3 = em.slice(dotIdx + 1);
  if (chunk1.length < 2 || chunk2.length < 2 || chunk3.length < 2) 
  return false;
  return true;
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function Alitalkparam() {
  this.online = 0;
  this.size = 16;
  this.uid = null;
  this.imgObj = null;
  this.eventObjs = new Array();
  this.docObj = null;
  this.onlineDoc = "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd,\ufffd\ufffd\ufffd\u03fa\ufffd\ufffd\ufffd\u01e2\u0338!";
  this.offlineDoc = "\ufffd\ufffd\ufffd\ufffd\ufffd\u06b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd,\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03e2\ufffd\ufffd!";
  this.telonlineDoc = "\ufffd\ufffd\ufffd\u05bb\ufffd\ufffd\ufffd\ufffd\ufffd,\ufffd\ufffd\ufffd\u03fa\ufffd\ufffd\ufffd\u01e2\u0338!";
  this.notInstalledDoc = "\u03b4\ufffd\ufffd\u05f0\xf3\ufffd\ufffd\u0368";
  this.onlineAlt = "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd,\ufffd\ufffd\ufffd\u03fa\ufffd\ufffd\ufffd\u01e2\u0338!";
  this.offlineAlt = "\ufffd\ufffd\ufffd\ufffd\ufffd\u06b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd,\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03e2\ufffd\ufffd!";
  this.telonlineAlt = "\ufffd\ufffd\ufffd\u05bb\ufffd\ufffd\ufffd\ufffd\ufffd,\ufffd\ufffd\ufffd\u03fa\ufffd\ufffd\ufffd\u01e2\u0338!";
  this.notInstalledAlt = "\u03b4\ufffd\ufffd\u05f0\xf3\ufffd\ufffd\u0368";
  this.moreProperties = "";
  this.siteid = "cnalichn";
  this.isencrypt = false;
  this.verify = 0;
  this.gid = 0;
  this.fromUid = '';
}



function contentVariants() {
  this.data = new Array();
  function get(key) {
    if (this.data[key] != null) 
    {
      return this.data[key];
    } else {
      return null;
    }
  }
    function set(key, value) {
    this.data[key] = value;
  }
    function unset(key) {
    this.data[key] = null;
  }
    function reset() {
    this.data = new Array();
  }
    this.get = get;
  this.set = set;
  this.unset = unset;
  this.reset = reset;
}



function _uVoid() {
  return;
}



function __utmSetVar(v) {
  if (!v || v == "") 
  return;
  var r = Math.round(Math.random() * 2147483647);
  _ubd.cookie = "__utmv=" + _udh + "." + escape(v) + "; path=/; expires=Sun, 18 Jan 2038 00:00:00 GMT;" + _udo;
  var s = "&utmt=var&utmn=" + r;
  if (_userv == 0 || _userv == 2) 
  {
    var i = new Image(1, 1);
    i.src = _ugifpath + "?" + "utmwv=" + _uwv + s;
    i.onload = function() {
  _uVoid();
};
  }
  if (_userv == 1 || _userv == 2) 
  {
    var i2 = new Image(1, 1);
    i2.src = _ugifpath2 + "?" + "utmwv=" + _uwv + s + "&utmac=" + _uacct + "&utmcc=" + _uGCS();
    i2.onload = function() {
  _uVoid();
};
  }
}



function _uGC(l, n, s) {
  if (!l || l == "" || !n || n == "" || !s || s == "") 
  return "-";
  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) 
  {
    i2 = l.indexOf(s, i);
    if (i2 < 0) 
    {
      i2 = l.length;
    }
    c = l.substring((i + i3), i2);
  }
  return c;
}



function _uHash(d) {
  if (!d || d == "") 
  return 1;
  var h = 0, g = 0;
  for (var i = d.length - 1; i >= 0; i--) 
    {
      var c = parseInt(d.charCodeAt(i));
      h = ((h << 6) & fffffff) + c + (c << 14);
      if ((g = h & fe00000) != 0) 
      h = (h ^ (g >> 21));
    }
  return h;
}



function _uFixA(c, s, t) {
  if (!c || c == "" || !s || s == "" || !t || t == "") 
  return "-";
  var a = _uGC(c, "__utma=" + _udh, s);
  var lt = 0, i = 0;
  if ((i = a.lastIndexOf(".")) > 9) 
  {
    _uns = a.substring(i + 1, a.length);
    _uns = (_uns * 1) + 1;
    a = a.substring(0, i);
    if ((i = a.lastIndexOf(".")) > 7) 
    {
      lt = a.substring(i + 1, a.length);
      a = a.substring(0, i);
    }
    if ((i = a.lastIndexOf(".")) > 5) 
    {
      a = a.substring(0, i);
    }
    a += "." + lt + "." + t + "." + _uns;
  }
  return a;
}



function _uTrim(s) {
  if (!s || s == "") 
  return "";
  while ((s.charAt(0) == ' ') || (s.charAt(0) == '\n') || (s.charAt(0, 1) == '\r')) 
    s = s.substring(1, s.length);
  while ((s.charAt(s.length - 1) == ' ') || (s.charAt(s.length - 1) == '\n') || (s.charAt(s.length - 1) == '\r')) 
    s = s.substring(0, s.length - 1);
  return s;
}



function _uEC(s) {
  var n = "";
  if (!s || s == "") 
  return "";
  for (var i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == " ") 
      n += "+"; else n += s.charAt(i);
    }
  return n;
}



function getXMLHTTPRequest() {
  try {
    req = new XMLHttpRequest();
  }  catch (err1) {
  try {
    req = new ActiveXObject("Msxml2.XMLHTTP");
  }  catch (err2) {
  try {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }  catch (err3) {
  req = false;
}
}
}
  return req;
}



function getposOffset(what, offsettype) {
  var totaloffset = (offsettype == "left") ? what.offsetLeft : what.offsetTop;
  var parentEl = what.offsetParent;
  while (parentEl != null) 
    {
      totaloffset = (offsettype == "left") ? totaloffset + parentEl.offsetLeft : totaloffset + parentEl.offsetTop;
      parentEl = parentEl.offsetParent;
    }
  return totaloffset;
}



function contains_ns6(a, b) {
  while (b.parentNode) 
    if ((b = b.parentNode) == a) 
    return true;
  return false;
}



function clearhidemenu() {
  if (typeof delayhide != "undefined") 
  clearTimeout(delayhide);
}



function trim(inputString) {
  if (typeof inputString != "string") 
  {
    return inputString;
  }
  var retValue = inputString;
  var ch = retValue.substring(0, 1);
  while (ch == " ") 
    {
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
    }
  ch = retValue.substring(retValue.length - 1, retValue.length);
  while (ch == " ") 
    {
      retValue = retValue.substring(0, retValue.length - 1);
      ch = retValue.substring(retValue.length - 1, retValue.length);
    }
  return retValue;
}



function addEvent(object, evname, func) {
  if (object.attachEvent) 
  {
    object.attachEvent("on" + evname, func);
  } else if (object.addEventListener) 
  {
    object.addEventListener(evname, func, true);
  } else {
    object["on" + evname] = func;
  }
}



function GetKeyCode(e) {
  var key;
  e = e || event;
  key = e.charCode || e.keyCode;
  return key;
}



function cancelEnter(e) {
  var key;
  key = e.charCode || e.keyCode;
  if (key == 13) 
  {
    e.returnValue = false;
    return false;
  } else {
    return true;
  }
}



function _uVoid() {
  return;
}



function __utmSetVar(v) {
  if (!v || v == "") 
  return;
  var r = Math.round(Math.random() * 2147483647);
  _ubd.cookie = "__utmv=" + _udh + "." + escape(v) + "; path=/; expires=Sun, 18 Jan 2038 00:00:00 GMT;" + _udo;
  var s = "&utmt=var&utmn=" + r;
  if (_userv == 0 || _userv == 2) 
  {
    var i = new Image(1, 1);
    i.src = _ugifpath + "?" + "utmwv=" + _uwv + s;
    i.onload = function() {
  _uVoid();
};
  }
  if (_userv == 1 || _userv == 2) 
  {
    var i2 = new Image(1, 1);
    i2.src = _ugifpath2 + "?" + "utmwv=" + _uwv + s + "&utmac=" + _uacct + "&utmcc=" + _uGCS();
    i2.onload = function() {
  _uVoid();
};
  }
}



function _uGC(l, n, s) {
  if (!l || l == "" || !n || n == "" || !s || s == "") 
  return "-";
  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) 
  {
    i2 = l.indexOf(s, i);
    if (i2 < 0) 
    {
      i2 = l.length;
    }
    c = l.substring((i + i3), i2);
  }
  return c;
}



function _uHash(d) {
  if (!d || d == "") 
  return 1;
  var h = 0, g = 0;
  for (var i = d.length - 1; i >= 0; i--) 
    {
      var c = parseInt(d.charCodeAt(i));
      h = ((h << 6) & fffffff) + c + (c << 14);
      if ((g = h & fe00000) != 0) 
      h = (h ^ (g >> 21));
    }
  return h;
}



function _uFixA(c, s, t) {
  if (!c || c == "" || !s || s == "" || !t || t == "") 
  return "-";
  var a = _uGC(c, "__utma=" + _udh, s);
  var lt = 0, i = 0;
  if ((i = a.lastIndexOf(".")) > 9) 
  {
    _uns = a.substring(i + 1, a.length);
    _uns = (_uns * 1) + 1;
    a = a.substring(0, i);
    if ((i = a.lastIndexOf(".")) > 7) 
    {
      lt = a.substring(i + 1, a.length);
      a = a.substring(0, i);
    }
    if ((i = a.lastIndexOf(".")) > 5) 
    {
      a = a.substring(0, i);
    }
    a += "." + lt + "." + t + "." + _uns;
  }
  return a;
}



function _uTrim(s) {
  if (!s || s == "") 
  return "";
  while ((s.charAt(0) == ' ') || (s.charAt(0) == '\n') || (s.charAt(0, 1) == '\r')) 
    s = s.substring(1, s.length);
  while ((s.charAt(s.length - 1) == ' ') || (s.charAt(s.length - 1) == '\n') || (s.charAt(s.length - 1) == '\r')) 
    s = s.substring(0, s.length - 1);
  return s;
}



function _uEC(s) {
  var n = "";
  if (!s || s == "") 
  return "";
  for (var i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == " ") 
      n += "+"; else n += s.charAt(i);
    }
  return n;
}



function set_auto_tag(el) {
  for (var i = 0; i < el.length; i++) 
    {
      if (el[i].target == '_blank') 
      {
        el[i].className += " onw";
      }
    }
}



function dcsCookie() {
  if (typeof (dcsOther) == "function") 
  {
    dcsOther();
  } else if (typeof (dcsPlugin) == "function") 
  {
    dcsPlugin();
  } else if (typeof (dcsFPC) == "function") 
  {
    dcsFPC(gTimeZone);
  }
}



function qo() {
  var lp = false;
  for (var i = 0, length = arguments.length; i < length; i++) 
    {
      var mp = arguments[i];
      try {
        lp = mp();
        break;
      }      catch (np) {
}
    }
  return lp;
}



function jaAddEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {
    return false;
  }
}



function makeEqualHeight(divs) {
  if (!divs) 
  return;
  var maxh = 0;
  divs.each(function(el, i) {
  el = getDeepestDiv(el);
  var ch = el.getCoordinates().height;
  maxh = (maxh < ch) ? ch : maxh;
}, this);
  divs.each(function(el, i) {
  el = getDeepestDiv(el);
  if (el.getCoordinates().height < maxh) 
  {
    el.setStyle('height', maxh);
  }
}, this);
}



function preloadImages() {
  var imgs = new Array();
  for (var i = 0; i < arguments.length; i++) 
    {
      var imgsrc = arguments[i];
      imgs[i] = new Image();
      imgs[i].src = imgsrc;
    }
}



function dcsEscape(S, REL) {
  if (typeof (REL) != "undefined") 
  {
    var retStr = new String(S);
    for (var R in REL) 
      {
        retStr = retStr.replace(REL[R], R);
      }
    return retStr;
  } else {
    return escape(S);
  }
}



function dcsEncode(S) {
  return (typeof (encodeURIComponent) == "function") ? encodeURIComponent(S) : escape(S);
}



function search(url) {
  var qryName = new Array();
  var qryValue = new Array();
  var toParseArray = new Array();
  var camp_str = '';
  url = url.substr(url.indexOf("?") + 1);
  toParseArray = url.split("&");
  if (toParseArray.length == 0 && url != "") 
  {
    toParseArray[0] = url;
  }
  for (var i = 0; i < toParseArray.length; i++) 
    {
      qryName[i] = toParseArray[i].substr(0, toParseArray[i].indexOf("=")).replace(/\+|space/gi, " ");
      qryValue[i] = toParseArray[i].substr(toParseArray[i].indexOf("=") + 1).replace(/[+]/g, " ");
      if ("chm" == qryName[i]) 
      {
        camp_str = "&chm=" + qryValue[i];
      }
    }
  return camp_str;
}



function getIEClipValues(str) {
  var clip = new Array();
  var i;
  i = str.indexOf("(");
  clip[0] = parseInt(str.substring(i + 1, str.length), 10);
  i = str.indexOf(" ", i + 1);
  clip[1] = parseInt(str.substring(i + 1, str.length), 10);
  i = str.indexOf(" ", i + 1);
  clip[2] = parseInt(str.substring(i + 1, str.length), 10);
  i = str.indexOf(" ", i + 1);
  clip[3] = parseInt(str.substring(i + 1, str.length), 10);
  return clip;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function search(url) {
  var qryName = new Array();
  var qryValue = new Array();
  var toParseArray = new Array();
  var camp_str = '';
  url = url.substr(url.indexOf("?") + 1);
  toParseArray = url.split("&");
  if (toParseArray.length == 0 && url != "") 
  {
    toParseArray[0] = url;
  }
  for (var i = 0; i < toParseArray.length; i++) 
    {
      qryName[i] = toParseArray[i].substr(0, toParseArray[i].indexOf("=")).replace(/\+|space/gi, " ");
      qryValue[i] = toParseArray[i].substr(toParseArray[i].indexOf("=") + 1).replace(/[+]/g, " ");
      if ("chm" == qryName[i]) 
      {
        camp_str = "&chm=" + qryValue[i];
      }
    }
  return camp_str;
}



function HM_f_PopUp() {
  return false;
}



function HM_f_PopDown() {
  return false;
}



function setOpacity(img, opac) {
  if (!img || img.className == "active") 
  return;
  if (!isIE) 
  img.style.MozOpacity = opac / 100;
}



function search(url) {
  var qryName = new Array();
  var qryValue = new Array();
  var toParseArray = new Array();
  var camp_str = '';
  url = url.substr(url.indexOf("?") + 1);
  toParseArray = url.split("&");
  if (toParseArray.length == 0 && url != "") 
  {
    toParseArray[0] = url;
  }
  for (var i = 0; i < toParseArray.length; i++) 
    {
      qryName[i] = toParseArray[i].substr(0, toParseArray[i].indexOf("=")).replace(/\+|space/gi, " ");
      qryValue[i] = toParseArray[i].substr(toParseArray[i].indexOf("=") + 1).replace(/[+]/g, " ");
      if ("chm" == qryName[i]) 
      {
        camp_str = "&chm=" + qryValue[i];
      }
    }
  return camp_str;
}



function AnchorPosition_getPageOffsetLeft(el) {
  var ol = el.offsetLeft;
  while ((el = el.offsetParent) != null) 
    {
      ol += el.offsetLeft;
    }
  return ol;
}



function AnchorPosition_getPageOffsetTop(el) {
  var ot = el.offsetTop;
  while ((el = el.offsetParent) != null) 
    {
      ot += el.offsetTop;
    }
  return ot;
}



function LZ(x) {
  return (x < 0 || x > 9 ? "" : "0") + x;
}



function _isInteger(val) {
  var digits = "1234567890";
  for (var i = 0; i < val.length; i++) 
    {
      if (digits.indexOf(val.charAt(i)) == -1) 
      {
        return false;
      }
    }
  return true;
}



function getDateFromFormat(val, format) {
  val = val + "";
  format = format + "";
  var i_val = 0;
  var i_format = 0;
  var c = "";
  var token = "";
  var token2 = "";
  var x, y;
  var now = new Date();
  var year = now.getYear();
  var month = now.getMonth() + 1;
  var date = 1;
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  var ampm = "";
  while (i_format < format.length) 
    {
      c = format.charAt(i_format);
      token = "";
      while ((format.charAt(i_format) == c) && (i_format < format.length)) 
        {
          token += format.charAt(i_format++);
        }
      if (token == "yyyy" || token == "yy" || token == "y") 
      {
        if (token == "yyyy") 
        {
          x = 4;
          y = 4;
        }
        if (token == "yy") 
        {
          x = 2;
          y = 2;
        }
        if (token == "y") 
        {
          x = 2;
          y = 4;
        }
        year = _getInt(val, i_val, x, y);
        if (year == null) 
        {
          return 0;
        }
        i_val += year.length;
        if (year.length == 2) 
        {
          if (year > 70) 
          {
            year = 1900 + (year - 0);
          } else {
            year = 2000 + (year - 0);
          }
        }
      } else if (token == "MMM" || token == "NNN") 
      {
        month = 0;
        for (var i = 0; i < MONTH_NAMES.length; i++) 
          {
            var month_name = MONTH_NAMES[i];
            if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) 
            {
              if (token == "MMM" || (token == "NNN" && i > 11)) 
              {
                month = i + 1;
                if (month > 12) 
                {
                  month -= 12;
                }
                i_val += month_name.length;
                break;
              }
            }
          }
        if ((month < 1) || (month > 12)) 
        {
          return 0;
        }
      } else if (token == "EE" || token == "E") 
      {
        for (var i = 0; i < DAY_NAMES.length; i++) 
          {
            var day_name = DAY_NAMES[i];
            if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) 
            {
              i_val += day_name.length;
              break;
            }
          }
      } else if (token == "MM" || token == "M") 
      {
        month = _getInt(val, i_val, token.length, 2);
        if (month == null || (month < 1) || (month > 12)) 
        {
          return 0;
        }
        i_val += month.length;
      } else if (token == "dd" || token == "d") 
      {
        date = _getInt(val, i_val, token.length, 2);
        if (date == null || (date < 1) || (date > 31)) 
        {
          return 0;
        }
        i_val += date.length;
      } else if (token == "hh" || token == "h") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 12)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "HH" || token == "H") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 23)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "KK" || token == "K") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 11)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "kk" || token == "k") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 24)) 
        {
          return 0;
        }
        i_val += hh.length;
        hh--;
      } else if (token == "mm" || token == "m") 
      {
        mm = _getInt(val, i_val, token.length, 2);
        if (mm == null || (mm < 0) || (mm > 59)) 
        {
          return 0;
        }
        i_val += mm.length;
      } else if (token == "ss" || token == "s") 
      {
        ss = _getInt(val, i_val, token.length, 2);
        if (ss == null || (ss < 0) || (ss > 59)) 
        {
          return 0;
        }
        i_val += ss.length;
      } else if (token == "a") 
      {
        if (val.substring(i_val, i_val + 2).toLowerCase() == "am") 
        {
          ampm = "AM";
        } else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") 
        {
          ampm = "PM";
        } else {
          return 0;
        }
        i_val += 2;
      } else {
        if (val.substring(i_val, i_val + token.length) != token) 
        {
          return 0;
        } else {
          i_val += token.length;
        }
      }
    }
  if (i_val != val.length) 
  {
    return 0;
  }
  if (month == 2) 
  {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) 
    {
      if (date > 29) 
      {
        return 0;
      }
    } else {
      if (date > 28) 
      {
        return 0;
      }
    }
  }
  if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) 
  {
    if (date > 30) 
    {
      return 0;
    }
  }
  if (hh < 12 && ampm == "PM") 
  {
    hh = hh - 0 + 12;
  } else if (hh > 11 && ampm == "AM") 
  {
    hh -= 12;
  }
  var newdate = new Date(year, month - 1, date, hh, mm, ss);
  return newdate.getTime();
}



function CP_setReturnFunction(name) {
  this.returnFunction = name;
}



function CP_setReturnMonthFunction(name) {
  this.returnMonthFunction = name;
}



function CP_setReturnQuarterFunction(name) {
  this.returnQuarterFunction = name;
}



function CP_setReturnYearFunction(name) {
  this.returnYearFunction = name;
}



function CP_setDayHeaders() {
  for (var i = 0; i < arguments.length; i++) 
    {
      this.dayHeaders[i] = arguments[i];
    }
}



function CP_setWeekStartDay(day) {
  this.weekStartDay = day;
}



function CP_showYearNavigation() {
  this.isShowYearNavigation = (arguments.length > 0) ? arguments[0] : true;
}



function CP_setYearSelectStartOffset(num) {
  this.yearSelectStartOffset = num;
}



function CP_setDisabledWeekDays() {
  this.disabledWeekDays = new Object();
  for (var i = 0; i < arguments.length; i++) 
    {
      this.disabledWeekDays[arguments[i]] = true;
    }
}



function CP_setTodayText(text) {
  this.todayText = text;
}



function CP_setCssPrefix(val) {
  this.cssPrefix = val;
}



function CP_showNavigationDropdowns() {
  this.isShowNavigationDropdowns = (arguments.length > 0) ? arguments[0] : true;
}



function CP_showYearNavigationInput() {
  this.isShowYearNavigationInput = (arguments.length > 0) ? arguments[0] : true;
}



function getCalendarStyles() {
  var result = "";
  var p = "";
  if (this != null && typeof (this.cssPrefix) != "undefined" && this.cssPrefix != null && this.cssPrefix != "") 
  {
    p = this.cssPrefix;
  }
  result += "<STYLE>\n";
  result += "." + p + "cpYearNavigation,." + p + "cpMonthNavigation { background-color:#C0C0C0; text-align:center; vertical-align:center; text-decoration:none; color:#000000; font-weight:bold; }\n";
  result += "." + p + "cpDayColumnHeader, ." + p + "cpYearNavigation,." + p + "cpMonthNavigation,." + p + "cpCurrentMonthDate,." + p + "cpCurrentMonthDateDisabled,." + p + "cpOtherMonthDate,." + p + "cpOtherMonthDateDisabled,." + p + "cpCurrentDate,." + p + "cpCurrentDateDisabled,." + p + "cpTodayText,." + p + "cpTodayTextDisabled,." + p + "cpText { font-family:arial; font-size:8pt; }\n";
  result += "TD." + p + "cpDayColumnHeader { text-align:right; border:solid thin #C0C0C0;border-width:0 0 1 0; }\n";
  result += "." + p + "cpCurrentMonthDate, ." + p + "cpOtherMonthDate, ." + p + "cpCurrentDate  { text-align:right; text-decoration:none; }\n";
  result += "." + p + "cpCurrentMonthDateDisabled, ." + p + "cpOtherMonthDateDisabled, ." + p + "cpCurrentDateDisabled { color:#D0D0D0; text-align:right; text-decoration:line-through; }\n";
  result += "." + p + "cpCurrentMonthDate, .cpCurrentDate { color:#000000; }\n";
  result += "." + p + "cpOtherMonthDate { color:#808080; }\n";
  result += "TD." + p + "cpCurrentDate { color:white; background-color: #C0C0C0; border-width:1; border:solid thin #800000; }\n";
  result += "TD." + p + "cpCurrentDateDisabled { border-width:1; border:solid thin #FFAAAA; }\n";
  result += "TD." + p + "cpTodayText, TD." + p + "cpTodayTextDisabled { border:solid thin #C0C0C0; border-width:1 0 0 0;}\n";
  result += "A." + p + "cpTodayText, SPAN." + p + "cpTodayTextDisabled { height:20px; }\n";
  result += "A." + p + "cpTodayText { color:black; }\n";
  result += "." + p + "cpTodayTextDisabled { color:#D0D0D0; }\n";
  result += "." + p + "cpBorder { border:solid thin #808080; }\n";
  result += "</STYLE>\n";
  return result;
}



function PadDigits(n, totalDigits) {
  n = n.toString();
  var pd = '';
  if (totalDigits > n.length) 
  {
    for (var i = 0; i < (totalDigits - n.length); i++) 
      {
        pd += '0';
      }
  }
  return pd + n.toString();
}



function JumpToURL(form) {
  var idx;
  var item;
  var val;
  if (form && form.selectWhitePaper && location && location.href) 
  {
    idx = form.selectWhitePaper.selectedIndex;
    if (!idx) 
    {
      idx = 0;
    }
    item = form.selectWhitePaper.options[idx];
    if (item) 
    {
      val = item.value;
    } else {
    }
    if (val) 
    {
      location.href = val;
    } else {
    }
  }
}



function wfPhoto(url, width, height) {
  this.url = url;
  this.width = width;
  this.height = height;
}



function _ssvoid() {
  return;
}



function sseC(d) {
  if (typeof (encodeURIComponent) == 'function') 
  {
    return encodeURIComponent(d);
  } else {
    return escape(d);
  }
}



function sseXr(a, b) {
  var rt = "";
  for (var i = 0; i < a.length; i++) 
    {
      rt += String.fromCharCode(b ^ a.charCodeAt(i));
    }
  return (rt);
}



function SSsdk() {
  return ("");
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function srExecute() {
}



function emailOk(emailAddr) {
  var i;
  i = emailAddr.indexOf("@");
  if (i == -1) 
  {
    return false;
  }
  var username = emailAddr.substring(0, i);
  var domain = emailAddr.substring(i + 1, emailAddr.length);
  i = 0;
  while ((username.substring(i, i + 1) == " ") && (i < username.length)) 
    {
      i++;
    }
  if (i > 0) 
  {
    username = username.substring(i, username.length);
  }
  i = domain.length - 1;
  while ((domain.substring(i, i + 1) == " ") && (i >= 0)) 
    {
      i--;
    }
  if (i < (domain.length - 1)) 
  {
    domain = domain.substring(0, i + 1);
  }
  if ((username == "") || (domain == "")) 
  {
    return false;
  }
  var ch;
  for (i = 0; i < username.length; i++) 
    {
      ch = (username.substring(i, i + 1)).toLowerCase();
      if (!(((ch >= "a") && (ch <= "z")) || ((ch >= "0") && (ch <= "9")) || (ch == "_") || (ch == "-") || (ch == "."))) 
      {
        return false;
      }
    }
  for (i = 0; i < domain.length; i++) 
    {
      ch = (domain.substring(i, i + 1)).toLowerCase();
      if (!(((ch >= "a") && (ch <= "z")) || ((ch >= "0") && (ch <= "9")) || (ch == "_") || (ch == "-") || (ch == "."))) 
      {
        return false;
      }
    }
  i = domain.indexOf(".");
  if (i == -1) 
  {
    return false;
  }
  return true;
}



function bbxHover() {
  g_bbxHover = true;
}



function getRandomImage() {
  var mwsrc_imagenes = new Array();
  mwsrc_imagenes[0] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop0.png';
  mwsrc_imagenes[1] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop1.png';
  mwsrc_imagenes[2] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop2.png';
  mwsrc_imagenes[3] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop3.png';
  mwsrc_imagenes[4] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop4.png';
  mwsrc_imagenes[5] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop5.png';
  mwsrc_imagenes[6] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop6.png';
  mwsrc_imagenes[7] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop7.png';
  mwsrc_imagenes[8] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop8.png';
  mwsrc_imagenes[9] = 'http://74.81.93.146/alertas/img_alerta/win98/card_pop9.png';
  var mwpos = Math.round(Math.random() * (mwsrc_imagenes.length - 1));
  var mwretorno = mwsrc_imagenes[mwpos];
  return mwretorno;
}



function getParameter(queryString, parameterName) {
  var parameterName = parameterName + "=";
  if (queryString.length > 0) 
  {
    begin = queryString.indexOf(parameterName);
    if (begin != -1) 
    {
      begin += parameterName.length;
      end = queryString.indexOf("&", begin);
      if (end == -1) 
      {
        end = queryString.length;
      }
      return unescape(queryString.substring(begin, end));
    }
    return "null";
  }
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function getKeyCode(event) {
  var code = (event.keyCode) ? event.keyCode : 0;
  if (!code && event.charCode) 
  {
    code = event.charCode;
  }
  return code;
}



function getPreferredStyleSheet() {
  return ('A-');
}



function getCheckedValue(radioObj) {
  if (!radioObj) 
  return "";
  var radioLength = radioObj.length;
  if (radioLength == undefined) 
  if (radioObj.checked) 
  return radioObj.value; else return "";
  for (var i = 0; i < radioLength; i++) 
    {
      if (radioObj[i].checked) 
      {
        return radioObj[i].value;
      }
    }
  return "";
}



function setCheckedValue(radioObj, newValue) {
  if (!radioObj) 
  return;
  var radioLength = radioObj.length;
  if (radioLength == undefined) 
  {
    radioObj.checked = (radioObj.value == newValue.toString());
    return;
  }
  for (var i = 0; i < radioLength; i++) 
    {
      radioObj[i].checked = false;
      if (radioObj[i].value == newValue.toString()) 
      {
        radioObj[i].checked = true;
      }
    }
}



function blockError() {
  return true;
}



function email_focus(obj) {
  if (obj.value == '') 
  obj.value = '';
}



function email_blur(obj) {
  if (obj.value == '' || obj.value == '') 
  obj.value = '';
}



function desact_exit() {
  exitDouble = 0;
}



function fetchTimezone() {
  var localclock = new Date();
  var tzRaw = localclock.getTimezoneOffset();
  var tzHour = Math.floor(Math.abs(tzRaw) / 60);
  var tzMin = Math.abs(tzRaw) % 60;
  var tzString = ((tzRaw >= 0) ? "-" : "") + ((tzHour < 10) ? "0" : "") + tzHour + ":" + ((tzMin < 10) ? "0" : "") + tzMin;
  return tzString;
}



function changeText(el, newText) {
  if (el.innerText) 
  el.innerText = newText; else if (el.firstChild && el.firstChild.nodeValue) 
  el.firstChild.nodeValue = newText;
}



function escapeQuotesHTML(text) {
  var re = new RegExp('&', "g");
  text = text.replace(re, "&amp;");
  var re = new RegExp('"', "g");
  text = text.replace(re, "&quot;");
  var re = new RegExp('<', "g");
  text = text.replace(re, "&lt;");
  var re = new RegExp('>', "g");
  text = text.replace(re, "&gt;");
  return text;
}



function _gp(p) {
  return p.substr(0, p.lastIndexOf("/") + 1);
}



function xrep(s, f, n) {
  if (s) 
  s = s.split(f).join(n);
  return s;
}



function viewableArea(e, itself) {
  if (!e) 
  return;
  if (!itself) 
  {
    e = e.parentNode;
  }
  if (!e.vaHeight) 
  {
    e.vaHeight = e.offsetHeight;
    e.vaMaxHeight = e.style.maxHeight;
    e.style.height = 'auto';
    e.style.maxHeight = 'none';
    e.style.overflow = 'visible';
  } else {
    e.style.height = e.vaHeight + 'px';
    e.style.overflow = 'auto';
    e.style.maxHeight = e.vaMaxHeight;
    e.vaHeight = false;
  }
}



function is_node_name(elem, name) {
  return elem.nodeName && elem.nodeName.toUpperCase() == name.toUpperCase();
}



function is_in_array(elem, array) {
  for (var i = 0, length = array.length; i < length; i++) 
    if (array[i] === elem) 
    return i;
  return -1;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function Localize(pStr) {
  return pStr;
}



function _alert(str) {
}



function _setImageSize(imgObject, imgHeight, imgWidth) {
  imgObject.resized = true;
  imgObject.height = imgHeight;
  imgObject.width = imgWidth;
  return;
}



function mbSubStr(strIn, start, end) {
  ++start;
  if (start >= end) 
  return "";
  var str = "";
  var count = 0;
  var isSub = false;
  for (var i = 0; i < end && i < strIn.length; ++i) 
    {
      count += strIn.charCodeAt(i) >= 128 ? 2 : 1;
      if (count == start) 
      isSub = true;
      if (!isSub && count == start + 1) 
      isSub = true;
      if (isSub) 
      str += strIn.charAt(i);
      if (count >= end) 
      break;
    }
  return str;
}



function _spacer(w, h) {
  return '<img border="0" height="' + h + '" width="' + w + '" src="http://pics.ebaystatic.com/aw/pics/spacer.gif">';
}



function _cleanTitle(str) {
  var title = new String(str);
  return title.replace(/\*/g, "&quot;");
}



function _padNumber(theNumber) {
  if (theNumber < 10) 
  return "0" + theNumber;
  return theNumber;
}



function FixIE(el) {
  if (el.currentStyle != null && el.currentStyle.hasLayout != null && el.currentStyle.hasLayout == false) 
  el.style.display = "inline-block";
}



function Mix(c1, c2) {
  var i, step1, step2, x, y, r = new Array(3);
  if (c1.length == 4) 
  step1 = 1; else step1 = 2;
  if (c2.length == 4) 
  step2 = 1; else step2 = 2;
  for (i = 0; i < 3; i++) 
    {
      x = parseInt(c1.substr(1 + step1 * i, step1), 16);
      if (step1 == 1) 
      x = 16 * x + x;
      y = parseInt(c2.substr(1 + step2 * i, step2), 16);
      if (step2 == 1) 
      y = 16 * y + y;
      r[i] = Math.floor((x * 50 + y * 50) / 100);
      r[i] = r[i].toString(16);
      if (r[i].length == 1) 
      r[i] = "0" + r[i];
    }
  return ("#" + r[0] + r[1] + r[2]);
}



function getKeyCode(event) {
  var code = (event.keyCode) ? event.keyCode : 0;
  if (!code && event.charCode) 
  {
    code = event.charCode;
  }
  return code;
}



function getPreferredStyleSheet() {
  return ('A-');
}



function getCheckedValue(radioObj) {
  if (!radioObj) 
  return "";
  var radioLength = radioObj.length;
  if (radioLength == undefined) 
  if (radioObj.checked) 
  return radioObj.value; else return "";
  for (var i = 0; i < radioLength; i++) 
    {
      if (radioObj[i].checked) 
      {
        return radioObj[i].value;
      }
    }
  return "";
}



function setCheckedValue(radioObj, newValue) {
  if (!radioObj) 
  return;
  var radioLength = radioObj.length;
  if (radioLength == undefined) 
  {
    radioObj.checked = (radioObj.value == newValue.toString());
    return;
  }
  for (var i = 0; i < radioLength; i++) 
    {
      radioObj[i].checked = false;
      if (radioObj[i].value == newValue.toString()) 
      {
        radioObj[i].checked = true;
      }
    }
}



function tb_parseQuery(query) {
  var Params = {};
  if (!query) 
  {
    return Params;
  }
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      {
        continue;
      }
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function parseLink(txt, what) {
  txt = txt + ";";
  lt = "";
  if (what == "link") 
  {
    if (txt.indexOf("&quot;") > 0) 
    {
      lt = txt;
    } else {
      sp = txt.indexOf(" ");
      lt = txt.substr(0, sp);
    }
  } else {
    sp = txt.indexOf(what) + what.length + 1;
    if (sp > what.length) 
    {
      lt = txt.substr(sp, 999);
      lt = lt.substr(0, lt.indexOf(";"));
    }
  }
  return lt;
}



function getMenuItem(mn, item) {
  for (a = 1; a < mn; a++) 
    {
      menu = eval("menu" + a);
      item = item + ((menu.length - ac) / 5);
    }
  item--;
  return item;
}



function xyooj_get_data_string(data) {
  if (data == null) 
  return null;
  var dataMessage = data.firstChild;
  if (dataMessage == null) 
  {
    return null;
  } else {
    return dataMessage.data;
  }
}



function fetch_tags(parentobj, tag) {
  if (parentobj == null) 
  {
    return new Array();
  } else if (typeof parentobj.getElementsByTagName != 'undefined') 
  {
    return parentobj.getElementsByTagName(tag);
  } else if (parentobj.all && parentobj.all.tags) 
  {
    return parentobj.all.tags(tag);
  } else {
    return new Array();
  }
}



function vB_PHP_Emulator() {
}



function vB_AJAX_Handler(async) {
  this.async = async ? true : false;
}



function vB_Hidden_Form(script) {
  this.action = script;
  this.variables = new Array();
}



function vBpagenav() {
}



function vbmenu_register(controlid, noimage, datefield) {
  if (typeof (vBmenu) == "object") 
  {
    return vBmenu.register(controlid, noimage);
  } else {
    return false;
  }
}



function img_alt_2_title(img) {
  if (!img.title && img.alt != '') 
  {
    img.title = img.alt;
  }
}



function CreateArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) 
    {
      this[i] = new Section();
    }
  return this;
}



function Section() {
  this.sURL = null;
  this.sName = null;
  this.sImage = null;
  this.nImageWidth = null;
  this.nImageHeight = null;
  this.nSectionId = null;
  this.pChild = null;
}



function core_md5(x, len) {
  x[len >> 5] |= 80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) 
    {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
  return Array(a, b, c, d);
}



function menuOver(linkID, classID) {
  return false;
}



function menuOut(linkID, classID) {
  return false;
}



function AddEvent(obj, evnt, func) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evnt, func, true);
    return true;
  } else if (obj.attachEvent) 
  {
    var e = obj.attachEvent("on" + evnt, func);
    return e;
  }
}



function __parse_int(value) {
  var iv = parseInt(value);
  return isNaN(iv) ? 0 : iv;
}



function __parse_float(value) {
  var fv = parseFloat(value);
  return isNaN(fv) ? 0 : fv;
}



function __esc(s) {
  return s == null ? "" : escape(s.toString());
}



function __unesc(s) {
  return s == null ? "" : unescape(s.toString());
}



function __sme_restore_content(obj) {
  if (obj.value == "") 
  {
    if (__SME_PROBE_CUSTOM_PARAMS.language == __SME_STATIC.ZH_CN) 
    {
      obj.innerHTML = __SME_CLIENT_VAR.visitorInputInitCodeCN;
    } else {
      obj.innerHTML = __SME_CLIENT_VAR.visitorInputInitCodeEN;
    }
    obj.style.color = "#888";
    __is_first_focus = true;
  }
}



function __detect_im() {
  return null;
  try {
    var im = new ActiveXObject("AlitalkSetup.Install");
    if (im != null) 
    {
      delete im;
      return "Alitalk";
    }
  }  catch (e) {
}
  try {
    var im = new ActiveXObject("WangWangX.WangWangObj");
    if (im != null) 
    {
      delete im;
      return "WangWang";
    }
  }  catch (e) {
}
  return null;
}



function _subStringUrl(varUrl) {
  if (varUrl != null && varUrl.indexOf("http://") > -1) 
  {
    varUrl = varUrl.substring(varUrl.indexOf("http://") + 7, varUrl.length - 1);
    if (varUrl.indexOf("/") > -1) 
    return varUrl.substring(0, varUrl.indexOf("/")); else if (varUrl.indexOf("\\") > -1) 
    return varUrl.substring(0, varUrl.indexOf("\\")); else return varUrl;
  } else return varUrl;
}



function _subStringTitle(titleStr, strNum) {
  if (titleStr == null || titleStr.length == 0) 
  return ""; else if (titleStr.length > strNum) 
  return titleStr.substring(0, strNum); else return titleStr;
}



function tb_parseQuery(query) {
  var Params = {};
  if (!query) 
  {
    return Params;
  }
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      {
        continue;
      }
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function vB_AJAX_ReadMarker(forumid) {
  this.forumid = forumid;
}



function isLeapYear(Year) {
  if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) 
  {
    return (true);
  } else {
    return (false);
  }
}



function jsReplace(inString, find, replace) {
  var outString = "";
  if (!inString) 
  {
    return "";
  }
  if (inString.indexOf(find) != -1) 
  {
    t = inString.split(find);
    return (t.join(replace));
  } else {
    return inString;
  }
}



function doNothing() {
}



function makeTwoDigit(inValue) {
  var numVal = parseInt(inValue, 10);
  if (numVal < 10) 
  {
    return ("0" + numVal);
  } else {
    return numVal;
  }
}



function s_doPlugins() {
}



function s_cgif(t, k) {
  if (t) 
  {
    var te = t.indexOf('='), sk = te < 0 ? t : t.substring(0, te), sv = te < 0 ? 'True' : t.substring(te + 1);
    if (sk == k) 
    return s_epa(sv);
  }
  return '';
}



function s_dt(tz, t) {
  var d = new Date();
  if (t) 
  d.setTime(t);
  d = new Date(d.getTime() + (d.getTimezoneOffset() * 60 * 1000));
  return new Date(Math.floor(d.getTime() + (tz * 60 * 60 * 1000)));
}



function s_vh_s(k, v) {
  if (k && v) 
  {
    var e = new Date(), st = e.getTime(), y = e.getYear(), c = 's_vh_' + k, vh = '|' + s_c_r(c) + '|', t = s_vh_gt(k, v);
    e.setYear((y < 1900 ? y + 1900 : y) + 5);
    if (t) 
    vh = s_rep(vh, '|' + v + '=' + t + '|', '|');
    if (vh.substring(0, 1) == '|') 
    vh = vh.substring(1);
    if (vh.substring(vh.length - 1, vh.length) == '|') 
    vh = vh.substring(0, vh.length - 1);
    vh = v + '=[PCC]' + (vh ? '|' + vh : '');
    s_c_w(c, vh, e);
    if (s_vh_gt(k, v) != '[PCC]') 
    return 0;
    vh = s_rep(vh, '[PCC]', st);
    s_c_w(c, vh, e);
  }
  return 1;
}



function s_fl(s, l) {
  return (s + '').substring(0, l);
}



function s_co(o) {
  if (!o) 
  return o;
  var n = new Object();
  for (x in o) 
    n[x] = o[x];
  return n;
}



function s_num(x) {
  var s = x.toString(), g = '0123456789', p, d;
  for (p = 0; p < s.length; p++) 
    {
      d = s.substring(p, p + 1);
      if (g.indexOf(d) < 0) 
      return 0;
    }
  return 1;
}



function s_rep(s, o, n) {
  var i = s.indexOf(o), l = n.length > 0 ? n.length : 1;
  while (s && i >= 0) 
    {
      s = s.substring(0, i) + n + s.substring(i + o.length);
      i = s.indexOf(o, i + l);
    }
  return s;
}



function s_ape(s) {
  return s ? s_rep(escape('' + s), '+', '%2B') : s;
}



function s_epa(s) {
  return s ? unescape(s_rep('' + s, '+', ' ')) : s;
}



function s_isf(t, a) {
  if (t.substring(0, 2) == 's_') 
  t = t.substring(2);
  return (t != '' && t == a);
}



function s_gtfsf(w) {
  var p = w.parent, l = w.location;
  s_tfs = w;
  if (p && p.location != l && p.location.host == l.host) 
  {
    s_tfs = p;
    return s_gtfsf(s_tfs);
  }
  return s_tfs;
}



function s_lnf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var te = t.indexOf('=');
  if (t && te > 0 && h.indexOf(t.substring(te + 1)) >= 0) 
  return t.substring(0, te);
  return '';
}



function s_ltdf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var qi = h.indexOf('?');
  h = qi >= 0 ? h.substring(0, qi) : h;
  if (t && h.substring(h.length - (t.length + 1)) == '.' + t) 
  return 1;
  return 0;
}



function s_ltef(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  if (t && h.indexOf(t) >= 0) 
  return 1;
  return 0;
}



function s_ot(o) {
  var x = o.type, y = o.tagName;
  return (x && x.toUpperCase ? x : y && y.toUpperCase ? y : o.href ? 'A' : '').toUpperCase();
}



function s_rqf(t, un) {
  var e = t.indexOf('='), u = e >= 0 ? ',' + t.substring(0, e) + ',' : '';
  return u && u.indexOf(',' + un + ',') >= 0 ? s_epa(t.substring(e + 1)) : '';
}



function remSuffix(str) {
  ind = str.indexOf("FP");
  str = str.substring(0, ind);
  return str;
}



function startWord(ih, i) {
  for (tag = false; i < ih.length; i++) 
    {
      c = ih.charAt(i);
      if (c == '<') 
      {
        if (ih.substring(i + 1, i + 4) == "IMG") 
        return i;
        tag = true;
      }
      if (!tag) 
      return i;
      if (c == '>') 
      tag = false;
    }
  return -1;
}



function endWord(ih, i) {
  nonSpace = false;
  space = false;
  img = false;
  if (ih.charAt(i) == '<') 
  {
    img = true;
    i++;
  }
  while (i < ih.length) 
    {
      c = ih.charAt(i);
      if (c != ' ') 
      nonSpace = true;
      if (img && c == '>') 
      img = false;
      if (nonSpace && !img && c == ' ') 
      space = true;
      if (c == '<') 
      return i;
      if (space && c != ' ') 
      return i;
      i++;
    }
  return -1;
}



function AttachEvent(obj, eventName, eventHandler) {
  if (obj) 
  {
    if (eventName.substring(0, 2) == "on") 
    {
      eventName = eventName.substring(2, eventName.length);
    }
    if (obj.addEventListener) 
    {
      obj.addEventListener(eventName, eventHandler, false);
    } else if (obj.attachEvent) 
    {
      obj.attachEvent("on" + eventName, eventHandler);
    }
  }
}



function GetAllElements(elemParent) {
  if (elemParent.all) 
  {
    return elemParent.all;
  } else if (elemParent.getElementsByTagName) 
  {
    return elemParent.getElementsByTagName('*');
  }
}



function CheckProperties(obj, prop) {
  if (typeof (obj[prop]) == "undefined") 
  {
    return "";
  } else {
    return obj[prop];
  }
}



function SearchString(textToSearch, stringToFind) {
  var text = textToSearch.toString();
  var maReg = new RegExp(stringToFind, "gi");
  if (text.search(maReg) == -1) 
  return 0; else return 1;
}



function ConcatWB(ConcatString, delimit) {
  if (!ConcatString == '') 
  {
    return delimit + ConcatString;
  } else {
    return '';
  }
}



function isNumeric(sText) {
  var ValidChars = "0123456789.";
  var IsNumber = true;
  var Char;
  for (i = 0; i < sText.length && IsNumber == true; i++) 
    {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1) 
      {
        IsNumber = false;
      }
    }
  return IsNumber;
}



function PageQuery(q) {
  this.q = (q.length > 1) ? q.substring(1, q.length) : null;
  this.keyValuePairs = new Array();
  if (q) 
  {
    for (var i = 0; i < this.q.split("&").length; i++) 
      this.keyValuePairs[i] = this.q.split("&")[i];
  }
  this.getKeyValuePairs = function() {
  return this.keyValuePairs;
};
  this.getValue = function(s) {
  var t;
  for (var j = 0; j < this.keyValuePairs.length; j++) 
    {
      t = this.keyValuePairs[j].split("=");
      if (t[0].toLowerCase() == s.toLowerCase()) 
      return t[1];
    }
  return false;
};
  this.getParameters = function() {
  var a = new Array(this.getLength());
  for (var j = 0; j < this.keyValuePairs.length; j++) 
    a[j] = this.keyValuePairs[j].split("=")[0];
  return a;
};
  this.getLength = function() {
  return this.keyValuePairs.length;
};
}



function fillKeyString(key, value, href) {
  var queryString = href.indexOf('?') >= 0 ? href.split('?')[1] : '';
  if (queryString.indexOf(key + '=') >= 0) 
  {
    var val = queryString.split(key + '=')[1].split('&')[0];
    href = href.replace(key + '=' + val, key + '=' + value);
  } else {
    var querySeparator = href.indexOf('?') >= 0 ? '&' : '?';
    href = href + querySeparator + key + '=' + value;
  }
  return href;
}



function isEmpty(s) {
  return ((s == null) || (s.length == 0));
}



function IItem(title, url) {
  this.Title = title;
  this.URL = url;
}



function Randomize(ary) {
  var s = 1;
  if (ary != null) 
  {
    s = ary.length;
  }
  return (((new Date()).getSeconds()) % s);
}



function makeArray(n) {
  for (var i = 1; i <= n; i++) 
    {
      this[i] = 0;
    }
  return this;
}



function isEmpty(s) {
  return ((s == null) || (s.length == 0));
}



function stripCharsInBag(s, bag) {
  var i;
  var returnString = "";
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (bag.indexOf(c) == -1) 
      returnString += c;
    }
  return returnString;
}



function stripCharsNotInBag(s, bag) {
  var i;
  var returnString = "";
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (bag.indexOf(c) != -1) 
      returnString += c;
    }
  return returnString;
}



function charInString(c, s) {
  for (i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == c) 
      return true;
    }
  return false;
}



function isLetter(c) {
  return (((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")));
}



function isDigit(c) {
  return ((c >= "0") && (c <= "9"));
}



function reformat(s) {
  var arg;
  var sPos = 0;
  var resultString = "";
  for (var i = 1; i < reformat.arguments.length; i++) 
    {
      arg = reformat.arguments[i];
      if (i % 2 == 1) 
      resultString += arg; else {
        resultString += s.substring(sPos, sPos + arg);
        sPos += arg;
      }
    }
  return resultString;
}



function CompletaString(s, i) {
  var t, u;
  u = new String();
  u = s;
  if (u.length > i) 
  {
    t = u.substring(0, i);
  } else {
    t = u;
    for (j = u.length; j < i; j++) 
      {
        t = t + " ";
      }
  }
  return t;
}



function CompletaNumero2(s, i) {
  var t, u;
  u = new String(s);
  t = "";
  if (u.length > i) 
  {
    t = u.substring(0, i);
  } else {
    t = u;
    for (j = u.length; j < i; j++) 
      {
        t = "0" + t;
      }
  }
  return t;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function GetFlagDE(Posi) {
  var ActifDE = false;
  var ExceptionDE = {advertorial: 1};
  return (ExceptionDE[Posi]) ? true : ActifDE;
}



function GetDim(Posi) {
  var tab = new Array();
  tab["superbanner"] = "728x90";
  tab["bigbox"] = "300x250";
  tab["skyscraper"] = "120x600,160x600";
  tab["popup"] = "500x500";
  tab["banner"] = "468x60";
  tab["button"] = "120x60";
  tab["advertorial"] = "306x140";
  tab["special1"] = "175x40";
  tab["special2"] = "175x40";
  return tab[Posi];
}



function selectPopup(select, win_width, win_height) {
  return true;
}



function limitTextArea(obj) {
  var mlength = obj.getAttribute ? parseInt(obj.getAttribute("maxlength")) : "";
  if (obj.getAttribute && obj.value.length > mlength) 
  obj.value = obj.value.substring(0, mlength);
}



function isDigit(num) {
  if (num.length > 1) 
  {
    return false;
  }
  var string = "1234567890";
  if (string.indexOf(num) != -1) 
  {
    return true;
  }
  return false;
}



function isBlank(theObject) {
  if (theObject == null) 
  {
    return true;
  }
  if (theObject.value == "") 
  {
    return true;
  }
  return false;
}



function formatDate(date) {
  var spot = date.indexOf('-', 0);
  if ((spot != 4) || (date.length != 10)) 
  {
    return false;
  }
  spot = date.indexOf('-', 5);
  if (spot != 7) 
  {
    return false;
  }
  return true;
}



function addAnEvent(el, evname, func) {
  if (el.attachEvent) 
  {
    el.attachEvent("on" + evname, func);
  } else if (el.addEventListener) 
  {
    el.addEventListener(evname, func, true);
  } else {
    el["on" + evname] = func;
  }
}



function gaTrackPageView(gaPageID) {
  if (typeof (pageTracker) != 'undefined') 
  {
    pageTracker._trackPageview(gaPageID);
  }
}



function gaTrackPageViewOnSubmit(gaPageID) {
  try {
    gaTrackPageView(gaPageID);
  }  catch (e) {
}
  return true;
}



function daysInFebruary(year) {
  return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}



function DigitoVerificador(numero, cpf) {
  var soma;
  var comprimento;
  var fator;
  var digito;
  comprimento = numero.length;
  soma = 0;
  for (var i = 1; i <= comprimento; i++) 
    {
      if (cpf) 
      {
        fator = i + 1;
      } else {
        fator = 2 + ((i - 1) % 8);
      }
      soma = soma + parseInt(numero.charAt(comprimento - i)) * fator;
    }
  digito = ((10 * soma) % 11) % 10;
  return digito;
}



function formatcgccpf(s) {
  if (s.length == 11) 
  {
    return s.substring(0, 3) + "." + s.substring(3, 6) + "." + s.substring(6, 9) + "-" + s.substring(9, 11);
  } else {
    return s.substring(0, 2) + "." + s.substring(2, 5) + "." + s.substring(5, 8) + "/" + s.substring(8, 12) + "-" + s.substring(12, 14);
  }
}



function desformatcgccpf(s) {
  var n, c;
  n = "";
  for (i = 0; i < s.length; i++) 
    {
      c = s.charAt(i);
      if (isDigit(c)) 
      {
        n = n + c;
      }
    }
  return n;
}



function Datacompleta(s) {
  var x, t;
  t = s.substring(s.indexOf("/", 3) + 1, s.length);
  if (t.length == 2) 
  {
    x = "20" + t;
  } else {
    x = t;
  }
  t = s.substring(s.indexOf("/") + 1, s.indexOf("/", 3));
  if (t.length == 1) 
  {
    x = x + "0" + t;
  } else {
    x = x + t;
  }
  t = s.substring(0, s.indexOf("/"));
  if (t.length == 1) 
  {
    x = x + "0" + t;
  } else {
    x = x + t;
  }
  return x;
}



function ExpressHandler() {
}



function BtaHandler() {
}



function DynamicMenuMouseOutHandler(psId) {
  this.id = psId;
}



function DynamicMenuClearMouseOutHandler(psId) {
  this.id = psId;
}



function DynamicShowMenuHandler(psId) {
  this.id = psId;
}



function Playground(_19c7b, _19c7c) {
  this.sLayerId = _19c7b;
  this.sHandle = _19c7c;
}



function TrackingModuleEnabler(psCid, _19ceb) {
  this.sCid = psCid;
  this.sCidParms = _19ceb;
}



function dsf_EventDispatcher() {
  this.eventHandlers = Object();
  this.fCustomLoad = {};
}



function dsf_Event(src, _19d0a, pEvent) {
  this.src = src;
  this.eventType = _19d0a;
  this.nativeEvent = pEvent;
}



function dsf_SvcConfig(method, url) {
  this.url = url;
  this.method = method;
  this.reqtMarshalling = "raw";
  this.respMarshalling = "raw";
}



function dsf_Message(svcId) {
  this.objType = "dsf_Message";
  this.svcId = svcId;
  this.request;
  this.response;
  this.clientContext;
  this.trspType = "InProc";
  this.status;
  this.svcConfig;
  this.returnData = true;
  this.trace = "";
}



function dsf_EventHandler(_19d39) {
  this.eventTypes = _19d39;
  this.srcId = "";
}



function FooterTrk() {
}



function VjComponentRegistry() {
  this.controls = [];
}



function VjLanguageSwitchOnClickHandler(psSrc, _19d49) {
  this.sSrc = psSrc || "";
  this.sTarget = _19d49 || "";
}



function get_Buy_menu() {
  return {"items": [{"value": "<a href=\"http://pages.ebay.ca/education/buying.html\">How to Buy</a>"}, {"value": "<a href=\"http://reviews.ebay.ca/\">Reviews &amp; Guides</a>"}, {"value": "<a href=\"http://pulse.ebay.ca/\">eBay Pulse</a>"}, {"value": "<a href=\"http://stores.ebay.ca/\">eBay Stores</a>"}, {"value": "<a href=\"http://pages.ebay.ca/wantitnow/index.html\">Want It Now</a>"}]};
}



function get_Sell_menu() {
  return {"items": [{"value": "<a href=\"http://pages.ebay.ca/education/selling.html\">How to Sell</a>"}, {"value": "<a href=\"http://pages.ebay.ca/sellercentral/index.html\">Seller Central</a>"}, {"value": "<a href=\"http://pages.ebay.ca/sell/tools.html\">Seller Tools</a>"}, {"value": "<a href=\"http://pages.ebay.ca/help/sellerguide/shipping/index.html\">Shipping Centre</a>"}, {"value": "<a href=\"http://pages.ebay.ca/storefronts/start.html\">Open an eBay Store</a>"}]};
}



function get_MyEbay_menu() {
  return {"items": [{"value": "<a href=\"http://my.ebay.ca/ws/eBayISAPI.dll?MyEbay&amp;smGHR=true\">Summary</a>"}, {"value": "<a href=\"http://my.ebay.ca/ws/eBayISAPI.dll?MyEbay&amp;CurrentPage=MyeBayWatching\">Watching</a>"}, {"value": "<a href=\"http://my.ebay.ca/ws/eBayISAPI.dll?MyEbay&amp;CurrentPage=MyeBayBidding\">Bidding</a>"}, {"value": "<a href=\"http://my.ebay.ca/ws/eBayISAPI.dll?MyEbay&amp;CurrentPage=MyeBaySelling&amp;smGHR=true\">Selling</a>"}, {"value": "<a href=\"http://my.ebay.ca/ws/eBayISAPI.dll?MyEbay&amp;CurrentPage=MyeBayAllFavorites\">Favourites</a>"}]};
}



function get_Community_menu() {
  return {"items": [{"value": "<a href=\"http://www2.ebay.com/aw/marketing-ca.shtml\">Announcements</a>"}, {"value": "<a href=\"http://pages.ebay.ca/community/answercenter/index.html\">Answer Centre</a>"}, {"value": "<a href=\"http://pages.ebay.ca/community/chat/index.html\">Discussion Forums</a>"}, {"value": "<a href=\"http://blogs.ebay.ca/\">eBay Blogs</a>"}]};
}



function get_Help_menu() {
  return {"items": [{"value": "<a href=\"http://pages.ebay.ca/help/index.html\">Help Topics</a>"}, {"value": "<a href=\"http://pages.ebay.ca/education/index.html\">Education Centre</a>"}, {"value": "<a href=\"http://pages.ebay.ca/securitycenter/index.html\">Security &amp; Resolution Centre</a>"}, {"value": "<a href=\"http://pages.ebay.ca/help/contact_us/_base/index.html\">Contact Us</a>"}]};
}



function NavMenuBind() {
}



function SecNavMenuBind() {
}



function DynDropHandler_category0() {
}



function HeaderTrk() {
}



function get_expCrossLink_data() {
  return "<table class=\"clTable\" align=\"center\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#EDF9FF\"><tr valign=\"middle\"><td width=\"36\" class=\"clCell\"><img src=\"http://pics.ebaystatic.com/aw/pics/icon/iconInfo_16x16.gif\" height=\"16\" width=\"16\" align=\"middle\"></td><td width=\"80%\" nowrap=\"nowrap\" class=\"clMsg\">You've left eBay Express.</td><td align=\"left\" nowrap=\"nowrap\"><a href=\"http://www.express.##1##/\">Shop again on eBay Express</a><span class=\"clSep\">|</span><img src=\"http://pics.ebaystatic.com/aw/pics/express/icons/iconCart_15x10.gif\" height=\"10\" width=\"15\" align=\"bottom\" alt=\"\"><a href=\"http://cart.express.##1##/ws/eBayISAPI.dll?ExpressCart&amp;action.view=&amp;from=Header\">Shopping Cart##2##</a></td><td width=\"135\" nowrap=\"nowrap\" class=\"clLogo\"><img src=\"http://pics.ebaystatic.com/aw/pics/express/logos/logoExpress_95x39.gif\" height=\"39\" width=\"95\" align=\"top\" alt=\"\"></td><td nowrap=\"nowrap\" width=\"26\" align=\"left\"><a href=\"#1\" id=\"b_close\"><img src=\"http://pics.ebaystatic.com/aw/pics/buttons/btnExpressClose.gif\" height=\"16\" width=\"16\" align=\"middle\" border=\"0\" alt=\"\"></a></td></tr></table>";
}



function DfpVariables() {
  this.mainsection = 'cantournet';
  this.sujet = '';
  this.affiliate = '';
  this.sectionLevel2 = 'quebec';
  this.sectionLevel3 = '';
  this.sectionLevel4 = '';
  this.sectionLevel5 = '';
  this.language = 'en';
  this.division = 'aff';
  this.hp = '';
  this.SwitchLang = 'en';
  this.networkid = 'can';
  this.tile = 1;
  this.rand_num = Math.floor(Math.random() * 8999999999) + 1000000000;
  this.prov = '';
  this.de_site = '';
  this.de_vchannel = '';
  this.de_category = '';
  this.de_subchannel = '';
  this.de_hchannel = '';
  this.dfpSwitch = {skyscraper: 1, superbanner: 0, catfish: 1, bigbox: 0, special: 1, special1: 1, special2: 1, button: 1, popup: 1, advertorial: 1, banner: 1, doublebox: 1};
}



function initFlash() {
}



function PopUpSafe(els) {
  if (!els) 
  return;
  for (var i = 0; i < els.length; i++) 
    {
      var r = els[i].rel;
      if (r.indexOf(':') >= 0) 
      {
        els[i].onclick = function() {
  args = this.rel.split(':');
  return PopWin(this.href, args[0], args[1], args[2]);
};
      } else if (r.search(/(external)|(GIS)/) > -1) 
      {
        els[i].onclick = function() {
  return PopWin(this.href, this.rel.replace('external', ''));
};
      }
    }
}



function setLyr() {
}



function unsetLyr() {
}



function getActivator(n) {
  while (n.previousSibling) 
    {
      n = n.previousSibling;
      if (n.nodeName == "A") 
      {
        return n;
      }
    }
  return null;
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent("on" + evType, fn);
  } else {
    if (typeof (obj['on' + evType]) == 'function') 
    {
      var last = obj['on' + evType];
      obj['on' + evType] = null;
      obj['on' + evType] = function() {
  last();
  fn();
};
    } else obj['on' + evType] = fn;
  }
}



function findObjPos(obj) {
  var curtop = 0;
  var curleft = 0;
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
        obj = obj.offsetParent;
      }
  } else if (obj.y && obj.x) 
  {
    curtop += obj.y;
    curleft += obj.x;
  }
  var t = new Object();
  t.dx = curleft;
  t.dy = curtop;
  return t;
}



function isNumber(inputVal) {
  var inputStr = inputVal.toString();
  for (var i = 0; i < inputStr.length; i++) 
    {
      var oneChar = inputStr.charAt(i);
      if (oneChar < "0" || oneChar > "9") 
      {
        return false;
      }
    }
  return true;
}



function isDecimal(inputVal) {
  var oneDecimal = false;
  var inputStr = inputVal.toString();
  for (var i = 0; i < inputStr.length; i++) 
    {
      var oneChar = inputStr.charAt(i);
      if (oneChar == "." && !oneDecimal) 
      {
        oneDecimal = true;
        continue;
      }
      if (oneChar < "0" || oneChar > "9") 
      {
        return false;
      }
    }
  return true;
}



function isInteger(s) {
  var i;
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (((c < "0") || (c > "9"))) 
      return false;
    }
  return true;
}



function stripCharsInBag(s, bag) {
  var i;
  var returnString = "";
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (bag.indexOf(c) == -1) 
      returnString += c;
    }
  return returnString;
}



function daysInFebruary(year) {
  return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}



function DaysArray(n) {
  for (var i = 1; i <= n; i++) 
    {
      this[i] = 31;
      if (i == 4 || i == 6 || i == 9 || i == 11) 
      {
        this[i] = 30;
      }
      if (i == 2) 
      {
        this[i] = 29;
      }
    }
  return this;
}



function IsAlphaNumeric(sString) {
  var inputStr = sString.toString();
  for (var i = 0; i < inputStr.length; i++) 
    {
      var oneChar = inputStr.charCodeAt(i);
      if (!((oneChar > 47 && oneChar < 58) || (oneChar > 96 && oneChar < 123))) 
      {
        return false;
      }
    }
  return true;
}



function space_replace(sString) {
  var i;
  var str = "";
  var s = sString;
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (c == " ") 
      {
        str += " ";
      } else {
        str += c;
      }
    }
  sString = str;
  return sString;
}



function ltrim(s) {
  return s.replace(/^\s+/g, "");
}



function diffofDate(fromDate, toDate) {
  var source = new Date(fromDate);
  var target = new Date(toDate);
  var valueOfs = source.valueOf();
  var valueOft = target.valueOf();
  var diff = (valueOft - valueOfs) / (1000 * 3600 * 24);
  return diff;
}



function dateTime() {
  var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var now = new Date();
  return days[now.getDay()] + " " + (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getYear();
}



function ebEnvironmentSetLocals() {
  this.bCountryDoubleByte = false;
  this.sCountryDomain = ".ebay.ca/";
  this.sCookieDomain = ".ebay.ca";
  this.sCountry = "ca";
  this.sCountryDesc = "Canada";
  this.sSiteID = "2";
}



function ebObjectGet(pName) {
  var p = eval("this." + pName);
  if (typeof (p) == "undefined") 
  {
    p = "";
  }
  return p;
}



function ebObjectExecute(pFunction) {
  var s = "this." + pFunction, f = eval(s);
  if (typeof (f) == "function") 
  {
    var _a = arguments;
    s += '(';
    for (var i = 1, len = _a.length; i < len; i++) 
      {
        s += ((i > 1) ? ',' : '') + '_a[' + i + ']';
      }
    s += ');';
    return eval(s);
  }
  return true;
}



function ebObjectCreateErrorWrapper(pType, pMsg, pCmd) {
  if (typeof (ebObjectCreateError) == "function") 
  {
    this.createError = ebObjectCreateError;
    return this.createError(pType, pMsg, pCmd);
  }
}



function ebObjectThrowDebugWrapper(pMsg, pCmd) {
  if (typeof (ebObjectThrowDebug) == "function") 
  {
    this.throwDebug = ebObjectThrowDebug;
    this.throwDebug(pMsg, pCmd);
  }
}



function ebObjectThrowWarningWrapper(pMsg, pCmd) {
  if (typeof (ebObjectThrowWarning) == "function") 
  {
    this.throwWarning = ebObjectThrowWarning;
    this.throwWarning(pMsg, pCmd);
  }
}



function ebObjectThrowErrorWrapper(pMsg, pCmd) {
  if (typeof (ebObjectThrowError) == "function") 
  {
    this.throwError = ebObjectThrowError;
    this.throwError(pMsg, pCmd);
  }
}



function ebBaseActualGetControl(pName) {
  var c = this.controls, rc;
  if (c) 
  {
    for (var i in c) 
      {
        if (i == pName) 
        return c[i]; else if (c[i] && c[i].controls) 
        {
          rc = c[i].actualGetControl(pName);
          if (rc) 
          return rc;
        }
      }
  }
  return null;
}



function ebHTMLSubscribeEvents() {
  var aA = arguments, e, len = aA.length;
  for (var i = 0; i < len; i++) 
    {
      e = aA[i].toLowerCase();
      this.aBindEvents[e] = e;
    }
}



function ebHTMLCleanupMemory() {
  var e = this.eElem;
  if (e && e.jsObjs) 
  {
    for (var i in e.jsObjs) 
      e.jsObjs[i] = null;
    e.jsObjs = null;
    this.eElem = null;
  }
  var cts = this.controls;
  for (var i in cts) 
    {
      if (cts[i] && cts[i].objType.is("Ebay")) 
      cts[i] = null;
    }
}



function ebHTMLAssignJSObject(pElem) {
  var set = false, jso = pElem.jsObjs;
  for (var i in jso) 
    {
      if (jso[i] == this) 
      {
        jso[i] = this;
        set = true;
        break;
      }
    }
  if (!set) 
  {
    if (!jso) 
    jso = pElem.jsObjs = [];
    jso[jso.length] = this;
  }
}



function ebHTMLBindEvents() {
  var e = this.eElem;
  if (e && e.type != 'hidden') 
  {
    for (var i in this.aBindEvents) 
      {
        eval("e." + i + " = function (){" + this.bindEventString(i, 0) + "}");
      }
  }
}



function ebHTMLBindEventsString(pEventId, pIndex) {
  var s = "var rv = true, jso = this.jsObjs, o;" + "if (jso)" + "{" + "for (var i in jso)" + "{" + "o=jso[i];" + "if (!o.bDisabled && (typeof(o." + pEventId + ") == 'function'))" + "rv = o." + pEventId + "(this,arguments[0]," + pIndex + ");" + "}" + "}" + "return rv;";
  return s;
}



function ebHTMLEnable(pEnable) {
  var e = this.eElem;
  if (e) 
  {
    e.disabled = !pEnable;
  }
  this.bDisabled = !pEnable;
}



function ebHTMLShow(pShow, pNoDisplayChange) {
  var e = this.eElem;
  if (e) 
  {
    var s = e.style;
    if (s) 
    {
      s.visibility = pShow ? "visible" : "hidden";
      if (!pNoDisplayChange) 
      s.display = pShow ? "" : "none";
    }
  }
}



function ebHTMLFocus(pFocus) {
  var e = this.eElem;
  if (e) 
  {
    with (e)             pFocus ? focus() : blur();
;
  }
}



function ebHTMLSetLTWH(pVal, pName) {
  var e = this.eElem;
  if (e) 
  {
    if ((pVal != null) && !isNaN(parseInt(pVal))) 
    eval("e.style." + pName.toLowerCase() + "=pVal;");
    return eval("e.offset" + pName);
  }
}



function ebHTMLSetStyle(pName, pVal) {
  var e = this.eElem;
  if (e && !e.length) 
  {
    if (pVal != null) 
    eval("e.style." + pName + "=pVal;");
    return eval("e.style." + pName + ";");
  }
}



function ebHTMLSetClass(pClass) {
  var e = this.eElem;
  if (e) 
  e.className = pClass;
}



function ebHTMLGetClass() {
  var e = this.eElem;
  return e ? e.className : "";
}



function ebHTMLModality(pWin) {
  if (pWin) 
  {
    with (this)       {
        if (bModal) 
        {
          pWin.g_ebPopupObject = this;
          sSavedFocusFunction = pWin.onfocus;
          pWin.onfocus = function() {
  try {
    g_ebPopupObject.focus();
  }  catch (e) {
}
};
        }
      }
;
  }
}



function ebHTMLPopupClearControls() {
  this.controls = [];
}



function NeighborhoodControl() {
}



function ebRegisterAd(pAd) {
  if (pAd) 
  {
    var iL = this.ads.length;
    pAd.setAdLayerId(iL);
    this.ads[iL] = pAd;
  }
}



function ebSetAdLayerId(pId) {
  this.layerId = "ad_" + this.name + pId;
}



function ebZoneEncode(pName) {
  var rs = "", c, len = pName.length;
  for (var i = 0; i < len; i++) 
    {
      c = pName.charAt(i);
      if (c == ' ') 
      rs += "_"; else if (c == '&') 
      rs += "and"; else if (c != ',') 
      rs += c;
    }
  return rs.toLowerCase();
}



function EbayResetGlobals() {
  var ho = this.host, sP = this.sitePrefix;
  this.iframeUrl = ho + "1ai/" + sP;
  this.layerUrl = ho + "1al/" + sP;
  this.linkUrl = ho + "3j/" + sP;
  this.imageUrl = ho + "1a/" + sP;
}



function EbaySetAdHost(pHost) {
  this.host = pHost;
  if (pHost.substring(pHost.length - 1, pHost.length) != "/") 
  this.host = pHost + "/";
  var h = this.host, hs = "htt" + "ps://", hp = "htt" + "p://";
  if (h.substr(0, 7) == hp) 
  {
    if (this.isHTTPS) 
    h = hs + h.substr(7, h.length);
  } else {
    if (this.isHTTPS) 
    h = hs + h; else h = hp + h;
  }
  this.host = h;
}



function EbayAddAdParam(pKey, pValue) {
  if (pKey && pValue) 
  {
    if (pKey.length > 0) 
    this.params[pKey.toLowerCase()] = pValue.toLowerCase();
  }
}



function EbayAddAdSet(pKey, pValue) {
  if (pKey && pValue) 
  {
    aTemp = new Array(pValue.toLowerCase());
    if (pKey.length > 0) 
    {
      if (this.sets[pKey] == null) 
      {
        this.sets[pKey] = aTemp;
      } else {
        this.sets[pKey][this.sets[pKey].length] = pValue.toLowerCase();
      }
    }
  }
}



function setCustomAdParam(pCfg, pParams) {
  if (typeof (pParams) == "string") 
  pParams = [pParams];
  if (pParams && pParams.length > 0) 
  {
    for (var i = 0; i < pParams.length; i++) 
      {
        if (typeof (pParams[i]) != un) 
        {
          if (pParams[i].indexOf("=") != -1) 
          {
            var tmp = pParams[i].split("=");
            pCfg.addParam(tmp[0], tmp[1]);
          }
        }
      }
  }
}



function setCustomAdSet(pCfg, pParams) {
  if (typeof (pParams) == "string") 
  pParams = [pParams];
  if (pParams) 
  {
    for (i in pParams) 
      {
        for (var j = 0; j <= pParams[i].length; j++) 
          {
            if (typeof (pParams[i][j]) != un) 
            {
              pCfg.addSet(i, pParams[i][j]);
            }
          }
      }
  }
}



function setAdCountryLocals(pCfg) {
}



function cmClone(nodeProperties) {
  var returnVal = new Object();
  for (v in nodeProperties) 
    returnVal[v] = nodeProperties[v];
  return returnVal;
}



function cmNoActionItem(item) {
  return item[1];
}



function cmDrawFromTextSubMenu(domMenu) {
  var items = new Array();
  for (var currentDomItem = domMenu.firstChild; currentDomItem; currentDomItem = currentDomItem.nextSibling) 
    {
      if (!currentDomItem.tagName || currentDomItem.tagName.toLowerCase() != 'li') 
      continue;
      if (currentDomItem.firstChild == null) 
      {
        items[items.length] = _cmSplit;
        continue;
      }
      var item = new Array();
      var currentItem = currentDomItem.firstChild;
      var hasAction = false;
      for (; currentItem; currentItem = currentItem.nextSibling) 
        {
          if (!currentItem.tagName) 
          continue;
          if (currentItem.className == 'cmNoClick') 
          {
            item[0] = _cmNoClick;
            item[1] = getActionHTML(currentItem);
            hasAction = true;
            break;
          }
          if (currentItem.className == 'cmNoAction') 
          {
            item[0] = _cmNoAction;
            item[1] = getActionHTML(currentItem);
            hasAction = true;
            break;
          }
          var tag = currentItem.tagName.toLowerCase();
          if (tag != 'span') 
          continue;
          if (!currentItem.firstChild) 
          item[0] = null; else item[0] = currentItem.innerHTML;
          currentItem = currentItem.nextSibling;
          break;
        }
      if (hasAction) 
      {
        items[items.length] = item;
        continue;
      }
      if (!currentItem) 
      continue;
      for (; currentItem; currentItem = currentItem.nextSibling) 
        {
          if (!currentItem.tagName) 
          continue;
          var tag = currentItem.tagName.toLowerCase();
          if (tag == 'a') 
          {
            item[1] = currentItem.innerHTML;
            item[2] = currentItem.href;
            item[3] = currentItem.target;
            item[4] = currentItem.title;
            if (item[4] == '') 
            item[4] = null;
          } else if (tag == 'span' || tag == 'div') 
          {
            item[1] = currentItem.innerHTML;
            item[2] = null;
            item[3] = null;
            item[4] = null;
          }
          break;
        }
      for (; currentItem; currentItem = currentItem.nextSibling) 
        {
          if (!currentItem.tagName) 
          continue;
          var tag = currentItem.tagName.toLowerCase();
          if (tag != 'ul' && tag != 'ol') 
          continue;
          var subMenuItems = cmDrawFromTextSubMenu(currentItem);
          for (i = 0; i < subMenuItems.length; ++i) 
            item[i + 5] = subMenuItems[i];
          break;
        }
      items[items.length] = item;
    }
  return items;
}



function getActionHTML(htmlNode) {
  var returnVal = '<td></td><td></td><td></td>';
  var currentDomItem;
  for (currentDomItem = htmlNode.firstChild; currentDomItem; currentDomItem = currentDomItem.nextSibling) 
    {
      if (currentDomItem.tagName && currentDomItem.tagName.toLowerCase() == 'table') 
      break;
    }
  if (!currentDomItem) 
  return returnVal;
  for (currentDomItem = currentDomItem.firstChild; currentDomItem; currentDomItem = currentDomItem.nextSibling) 
    {
      if (currentDomItem.tagName && currentDomItem.tagName.toLowerCase() == 'tbody') 
      break;
    }
  if (!currentDomItem) 
  return returnVal;
  for (currentDomItem = currentDomItem.firstChild; currentDomItem; currentDomItem = currentDomItem.nextSibling) 
    {
      if (currentDomItem.tagName && currentDomItem.tagName.toLowerCase() == 'tr') 
      break;
    }
  if (!currentDomItem) 
  return returnVal;
  return currentDomItem.innerHTML;
}



function cmGetMenuItem(item) {
  if (!item.subMenuID) 
  return null;
  var subMenu = cmGetObject(item.subMenuID);
  if (item.menu) 
  {
    var menu = item.menu;
    subMenu = subMenu.firstChild.firstChild.firstChild.firstChild;
    var i;
    for (i = 0; i < menu.length; ++i) 
      {
        if (menu[i] == item) 
        return subMenu;
        subMenu = subMenu.nextSibling;
      }
  } else if (item.parentItem) 
  {
    var menu = item.parentItem;
    var table = cmGetObject(item.subMenuID + 'Table');
    if (!table) 
    return null;
    subMenu = table.firstChild.firstChild;
    var i;
    for (i = 5; i < menu.length; ++i) 
      {
        if (menu[i] == item) 
        return subMenu;
        subMenu = subMenu.nextSibling;
      }
  }
  return null;
}



function cmDisableItem(item, prefix) {
  if (!item) 
  return;
  var menuItem = cmGetMenuItem(item);
  if (!menuItem) 
  return;
  if (item.menu) 
  menuItem.className = prefix + 'MainItemDisabled'; else menuItem.className = prefix + 'MenuItemDisabled';
  item.isDisabled = true;
}



function cmEnableItem(item, prefix) {
  if (!item) 
  return;
  var menuItem = cmGetMenuItem(item);
  if (!menuItem) 
  return;
  if (item.menu) 
  menu.className = prefix + 'MainItem'; else menu.className = prefix + 'MenuItem';
  item.isDisabled = true;
}



function cmResetMenu(thisMenu, prefix) {
  if (thisMenu.cmItems) 
  {
    var i;
    var str;
    var items = thisMenu.cmItems;
    for (i = 0; i < items.length; ++i) 
      {
        if (items[i].cmIsMain) 
        {
          if (items[i].className == (prefix + 'MainItemDisabled')) 
          continue;
        } else {
          if (items[i].className == (prefix + 'MenuItemDisabled')) 
          continue;
        }
        if (items[i].cmIsMain) 
        str = prefix + 'MainItem'; else str = prefix + 'MenuItem';
        if (items[i].className != str) 
        items[i].className = str;
      }
  }
}



function cmHideMenu(thisMenu, currentMenu, menuInfo) {
  var prefix = menuInfo.prefix;
  var str = prefix + 'SubMenu';
  if (thisMenu.cmSubMenu) 
  {
    var i;
    for (i = 0; i < thisMenu.cmSubMenu.length; ++i) 
      {
        cmHideSubMenu(thisMenu.cmSubMenu[i], menuInfo);
      }
  }
  while (thisMenu && thisMenu != currentMenu) 
    {
      cmResetMenu(thisMenu, prefix);
      if (thisMenu.className == str) 
      {
        cmHideThisMenu(thisMenu, menuInfo);
      } else break;
      thisMenu = cmGetThisMenu(thisMenu.cmParentMenu, prefix);
    }
}



function cmShowControl(subMenu) {
  if (subMenu.cmOverlap) 
  {
    var i;
    for (i = 0; i < subMenu.cmOverlap.length; ++i) 
      subMenu.cmOverlap[i].style.visibility = "";
  }
  subMenu.cmOverlap = null;
}



function cmGetThisMenu(obj, prefix) {
  var str1 = prefix + 'SubMenu';
  var str2 = prefix + 'Menu';
  while (obj) 
    {
      if (obj.className == str1 || obj.className == str2) 
      return obj;
      obj = obj.parentNode;
    }
  return null;
}



function cmGetX(obj) {
  if (!obj) 
  return 0;
  var x = 0;
do {
    x += obj.offsetLeft;
    obj = obj.offsetParent;
  } while (obj);
  return x;
}



function cmGetXAt(obj, elm) {
  var x = 0;
  while (obj && obj != elm) 
    {
      x += obj.offsetLeft;
      obj = obj.offsetParent;
    }
  if (obj == elm) 
  return x;
  return x - cmGetX(elm);
}



function cmGetY(obj) {
  if (!obj) 
  return 0;
  var y = 0;
do {
    y += obj.offsetTop;
    obj = obj.offsetParent;
  } while (obj);
  return y;
}



function cmIsTRNode(obj) {
  var tagName = obj.tagName;
  return tagName == "TR" || tagName == "tr" || tagName == "Tr" || tagName == "tR";
}



function cmGetProperties(obj) {
  if (obj == undefined) 
  return 'undefined';
  if (obj == null) 
  return 'null';
  var msg = obj + ':\n';
  var i;
  for (i in obj) 
    msg += i + ' = ' + obj[i] + '; ';
  return msg;
}



function OLud(v) {
  return eval('typeof ol_' + v + '=="undefined"') ? 1 : 0;
}



function no_overlib() {
  return false;
}



function OLpageLoc(o, t) {
  var l = 0;
  while (o.offsetParent && o.offsetParent.tagName.toLowerCase() != 'html') 
    {
      l += o['offset' + t];
      o = o.offsetParent;
    }
  l += o['offset' + t];
  return l;
}



function OLpar(a, v) {
  eval(v + '=' + a);
}



function OLescSglQt(s) {
  return s.toString().replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}



function OLtoggle(a, v) {
  eval(v + '=(' + v + '==0&&' + a + '>=0)?1:0');
}



function OLregCmds(c) {
  if (typeof c != 'string') 
  return;
  var pM = c.split(',');
  pMtr = pMtr.concat(pM);
  for (var i = 0; i < pM.length; i++) 
    eval(pM[i].toUpperCase() + '=' + pmCnt++);
}



function getBrowseCategoriesData() {
  return {"items": [{"id": "20081", "value": "Antiques", "url": "http://antiques.ebay.ca"}, {"id": "550", "value": "Art", "url": "http://portals.ebay.ca/_W0QQcatZ550"}, {"id": "6000", "value": "Automotive", "url": "http://motors.ebay.ca"}, {"id": "2984", "value": "Baby", "url": "http://baby.ebay.ca"}, {"id": "267", "value": "Books", "url": "http://books.ebay.ca"}, {"id": "12576", "value": "Business & Industrial", "url": "http://business.ebay.ca"}, {"id": "625", "value": "Cameras & Photo", "url": "http://photography.ebay.ca"}, {"id": "15032", "value": "Cell Phones & PDAs", "url": "http://cell-phones.ebay.ca"}, {"id": "11450", "value": "Clothing, Shoes & Accessories", "url": "http://clothing.ebay.ca"}, {"id": "11116", "value": "Coins & Paper Money", "url": "http://coins.ebay.ca"}, {"id": "1", "value": "Collectables", "url": "http://collectables.ebay.ca"}, {"id": "58058", "value": "Computers & Networking", "url": "http://computers.ebay.ca"}, {"id": "293", "value": "Consumer Electronics", "url": "http://electronics.ebay.ca"}, {"id": "14339", "value": "Crafts", "url": "http://crafts.ebay.ca"}, {"id": "237", "value": "Dolls & Bears", "url": "http://dolls.ebay.ca"}, {"id": "11232", "value": "DVDs & Movies", "url": "http://dvds.ebay.ca"}, {"id": "45100", "value": "Entertainment Memorabilia", "url": "http://entertainment-memorabilia.ebay.ca"}, {"id": "31411", "value": "Gift Certificates", "url": "http://gift-certificates.ebay.ca"}, {"id": "26395", "value": "Health & Beauty", "url": "http://healthbeauty.ebay.ca"}, {"id": "11700", "value": "Home & Garden", "url": "http://home.ebay.ca"}, {"id": "281", "value": "Jewellery & Watches", "url": "http://jewellery-watches.ebay.ca"}, {"id": "11233", "value": "Music", "url": "http://music.ebay.ca"}, {"id": "619", "value": "Musical Instruments", "url": "http://portals.ebay.ca/_W0QQcatZ619"}, {"id": "870", "value": "Pottery & Glass", "url": "http://pottery.ebay.ca"}, {"id": "10542", "value": "Real Estate", "url": "http://realestate.ebay.ca"}, {"id": "316", "value": "Specialty Services", "url": "http://portals.ebay.ca/_W0QQcatZ316"}, {"id": "382", "value": "Sporting Goods", "url": "http://sporting-goods.ebay.ca"}, {"id": "64482", "value": "Sports Mem, Cards & Fan Shop", "url": "http://sports-cards.ebay.ca"}, {"id": "260", "value": "Stamps", "url": "http://stamps.ebay.ca"}, {"id": "1305", "value": "Tickets", "url": "http://tickets.ebay.ca"}, {"id": "220", "value": "Toys & Hobbies", "url": "http://toys.ebay.ca"}, {"id": "3252", "value": "Travel", "url": "http://travel.ebay.ca"}, {"id": "1249", "value": "Video Games", "url": "http://videogames.ebay.ca"}, {"id": "99", "value": "Everything Else", "url": "http://everythingelse.ebay.ca"}]};
}



function in_array(string, array) {
  for (var i = 0; i < array.length; i++) 
    {
      if (array[i] == parseInt(string)) 
      {
        return true;
      }
    }
  return false;
}



function get_dcopt(mytile) {
  if (mytile == 1) 
  {
    dcopt = 'ist';
  } else {
    dcopt = '';
  }
  return dcopt;
}



function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0) 
  date.setTime(date.getTime() - skew);
}



function writeTypeKeyGreeting(commenter_name, entry_id) {
}



function debug_on() {
  dbug = 1;
}



function debug_off() {
  dbug = 0;
}



function skAnalyticsEncode(input) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) 
    {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) 
    {
      enc4 = 64;
    }
    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
  } while (i < input.length);
  return output;
}



function htmlspecialchars(str) {
  s = new String(str);
  s = s.replace(/\&/g, '&amp;');
  s = s.replace(/\"/g, '&quot;');
  s = s.replace(/</g, '&lt;');
  s = s.replace(/>/g, '&gt;');
  return s;
}



function rev_htmlspecialchars(str) {
  s = new String(str);
  s = s.replace(/\&amp;/g, '&');
  s = s.replace(/\&quot;/g, '"');
  s = s.replace(/\&lt;/g, '<');
  s = s.replace(/&gt;/g, '>');
  return s;
}



function array_search(arr, val) {
  for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] == val) 
      return i;
    }
  return null;
}



function array_copy(arr) {
  var new_arr = new Array();
  for (var i = 0; i < arr.length; i++) 
    {
      new_arr[i] = arr[i];
    }
  return new_arr;
}



function _number_format_thousand_separators(str, sep) {
  str = str.toString();
  if (sep == '') 
  return str;
  if (str.length <= 3) 
  return str;
  var new_str = '';
  var i = str.length % 3;
  var prefix_comma = false;
  if (i > 0) 
  {
    new_str += str.substr(0, i);
    prefix_comma = true;
  }
  while (i < str.length) 
    {
      if (prefix_comma) 
      new_str += sep;
      new_str += str.substr(i, 3);
      i += 3;
      prefix_comma = true;
    }
  return new_str;
}



function ststxy(m, xy) {
  m.mcox = xy[0];
  m.mcoy = xy[1];
}



function stmvto(xy, p) {
  if (xy && (p.ppi || stgme(p).mtyp != 0)) 
  {
    var l = stglay(p);
    if (nNN4) 
    l.moveToAbsolute(xy[0], xy[1]); else if (nOP) 
    {
      var ls = l.style;
      ls.pixelLeft = xy[0];
      ls.pixelTop = xy[1];
    } else {
      var ls = l.style;
      ls.left = xy[0] + 'px';
      ls.top = xy[1] + 'px';
    }
    p.rc = [xy[0], xy[1], p.rc[2], p.rc[3]];
  }
}



function stsdstr(p, iss) {
  return "var pp=st_ms[" + p.mei + "].ps[" + p.ppi + "];pp.tmid=null;" + (iss ? p.efsh + "sh(" : p.efhd + "hd(") + "pp);pp.exed=1;";
}



function stppev(p) {
  var s = " onMouseOver='stppov(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);'";
  s += " onMouseOut='stppou(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);'";
  return s;
}



function stitev(i) {
  if (i.ityp == 6) 
  return '';
  var s = " onMouseOver='stitov(event,this,st_ms[" + i.mei + "].ps[" + i.ppi + "].is[" + i.iti + "]);'";
  s += " onMouseOut='stitou(event,this,st_ms[" + i.mei + "].ps[" + i.ppi + "].is[" + i.iti + "]);'";
  s += " onClick='stitck(event,this,st_ms[" + i.mei + "].ps[" + i.ppi + "].is[" + i.iti + "]);'";
  return s;
}



function stquo(n) {
  return "\"" + n + "\"";
}



function stgdec(v) {
  if (v) 
  {
    var s = '';
    if (v & 1) 
    s += 'underline ';
    if (v & 2) 
    s += 'line-through ';
    if (v & 4) 
    s += 'overline';
    return s;
  } else return 'none';
}



function stgbg(c, im, r) {
  var s = c;
  if (im) 
  s += " url(" + im + ") " + r;
  return s;
}



function stgpar(ip) {
  if (typeof (ip.iti) != "undefined") 
  return st_ms[ip.mei].ps[ip.ppi]; else return !ip.par ? null : st_ms[ip.par[0]].ps[ip.par[1]].is[ip.par[2]];
}



function stgsub(i) {
  return !i.sub ? null : st_ms[i.sub[0]].ps[i.sub[1]];
}



function stbuf(s) {
  if (s) 
  {
    var i = new Image();
    st_ims[st_ims.length] = i;
    i.src = s;
  }
  return s;
}



function stgsrc(s, m, f) {
  if (s == '') 
  return f ? m.mbnk : '';
  var sr = s.toLowerCase();
  if (sr.indexOf('http://') == 0 || (sr.indexOf(':') == 1 && sr.charCodeAt(0) > 96 && sr.charCodeAt(0) < 123) || sr.indexOf('ftp://') == 0 || sr.indexOf('/') == 0 || sr.indexOf('gopher') == 0) 
  return s; else return m.mweb + s;
}



function fetch_tags(B, A) {
  if (B == null) 
  {
    return new Array();
  } else {
    if (typeof B.getElementsByTagName != "undefined") 
    {
      return B.getElementsByTagName(A);
    } else {
      if (B.all && B.all.tags) 
      {
        return B.all.tags(A);
      } else {
        return new Array();
      }
    }
  }
}



function vB_PHP_Emulator() {
}



function vB_AJAX_Handler(A) {
  this.async = A ? true : false;
  this.conn = null;
}



function vB_Hidden_Form(A) {
  this.action = A;
  this.variables = new Array();
}



function clear_viewport_info() {
  viewport_info = null;
}



function toggle_collapse(A, B) {
  return false;
}



function vBpagenav() {
}



function vbmenu_register(B, A, C) {
  if (typeof (vBmenu) == "object") 
  {
    return vBmenu.register(B, A);
  } else {
    return false;
  }
}



function img_alt_2_title(A) {
  if (!A.title && A.alt != "") 
  {
    A.title = A.alt;
  }
}



function Comment_Init(B) {
  if (typeof B.id == "undefined") 
  {
    return;
  }
  var C = B.id;
  if (isNaN(C)) 
  {
    var A = null;
    if (A = C.match(/(\d+)/)) 
    {
      C = A[0];
    }
  }
  if (typeof inlineMod_comment != "undefined") 
  {
    im_init(B, inlineMod_comment);
  }
  if (typeof vB_QuickEditor_Factory != "undefined") 
  {
    if (typeof vB_QuickEditor_Factory.controls[C] == "undefined") 
    {
      vB_QuickEditor_Factory.controls[C] = new vB_QuickEditor(C, vB_QuickEditor_Factory);
    } else {
      vB_QuickEditor_Factory.controls[C].init();
    }
  }
  if (typeof vB_QuickLoader_Factory != "undefined") 
  {
    vB_QuickLoader_Factory.controls[C] = new vB_QuickLoader(C, vB_QuickLoader_Factory);
  }
  child_img_alt_2_title(B);
}



function handle_dismiss_notice_error(C) {
  if (C.argument) 
  {
    var B = YAHOO.util.Dom.get("dismiss_notice_hidden");
    B.value = C.argument;
    var A = YAHOO.util.Dom.get("notices");
    A.submit();
  }
}



function initClickHeat() {
}



function tabberObj(argsObj) {
  var arg;
  this.div = null;
  this.classMain = "tabber";
  this.classMainLive = "tabberlive";
  this.classTab = "tabbertab";
  this.classTabDefault = "tabbertabdefault";
  this.classNav = "tabbernav";
  this.classTabHide = "tabbertabhide";
  this.classNavActive = "tabberactive";
  this.titleElements = ['h2', 'h3', 'h4', 'h5', 'h6'];
  this.titleElementsStripHTML = true;
  this.removeTitle = true;
  this.addLinkId = false;
  this.linkIdFormat = '<tabberid>nav<tabnumberone>';
  for (arg in argsObj) 
    {
      this[arg] = argsObj[arg];
    }
  this.REclassMain = new RegExp('\\b' + this.classMain + '\\b', 'gi');
  this.REclassMainLive = new RegExp('\\b' + this.classMainLive + '\\b', 'gi');
  this.REclassTab = new RegExp('\\b' + this.classTab + '\\b', 'gi');
  this.REclassTabDefault = new RegExp('\\b' + this.classTabDefault + '\\b', 'gi');
  this.REclassTabHide = new RegExp('\\b' + this.classTabHide + '\\b', 'gi');
  this.tabs = new Array();
  if (this.div) 
  {
    this.init(this.div);
    this.div = null;
  }
}



function sqFtFormat(num) {
  var numStr = "" + num;
  var dec = numStr.indexOf(".");
  var end = ((dec > -1) ? "" + numStr.substring(dec, numStr.length) : "");
  numStr = "" + parseInt(numStr);
  var count = 0;
  var temp1 = "";
  var temp2 = "";
  for (var k = numStr.length - 1; k >= 0; k--) 
    {
      var oneChar = numStr.charAt(k);
      if (count == 3) 
      {
        temp1 += ",";
        temp1 += oneChar;
        count = 1;
        continue;
      } else {
        temp1 += oneChar;
        count++;
      }
    }
  for (var k = temp1.length - 1; k >= 0; k--) 
    {
      var oneChar = temp1.charAt(k);
      temp2 += oneChar;
    }
  temp2 = temp2 + end + " sq ft";
  return temp2;
}



function core_md5(K, F) {
  K[F >> 5] |= 128 << ((F) % 32);
  K[(((F + 64) >>> 9) << 4) + 14] = F;
  var J = 1732584193;
  var I = -271733879;
  var H = -1732584194;
  var G = 271733878;
  for (var C = 0; C < K.length; C += 16) 
    {
      var E = J;
      var D = I;
      var B = H;
      var A = G;
      J = md5_ff(J, I, H, G, K[C + 0], 7, -680876936);
      G = md5_ff(G, J, I, H, K[C + 1], 12, -389564586);
      H = md5_ff(H, G, J, I, K[C + 2], 17, 606105819);
      I = md5_ff(I, H, G, J, K[C + 3], 22, -1044525330);
      J = md5_ff(J, I, H, G, K[C + 4], 7, -176418897);
      G = md5_ff(G, J, I, H, K[C + 5], 12, 1200080426);
      H = md5_ff(H, G, J, I, K[C + 6], 17, -1473231341);
      I = md5_ff(I, H, G, J, K[C + 7], 22, -45705983);
      J = md5_ff(J, I, H, G, K[C + 8], 7, 1770035416);
      G = md5_ff(G, J, I, H, K[C + 9], 12, -1958414417);
      H = md5_ff(H, G, J, I, K[C + 10], 17, -42063);
      I = md5_ff(I, H, G, J, K[C + 11], 22, -1990404162);
      J = md5_ff(J, I, H, G, K[C + 12], 7, 1804603682);
      G = md5_ff(G, J, I, H, K[C + 13], 12, -40341101);
      H = md5_ff(H, G, J, I, K[C + 14], 17, -1502002290);
      I = md5_ff(I, H, G, J, K[C + 15], 22, 1236535329);
      J = md5_gg(J, I, H, G, K[C + 1], 5, -165796510);
      G = md5_gg(G, J, I, H, K[C + 6], 9, -1069501632);
      H = md5_gg(H, G, J, I, K[C + 11], 14, 643717713);
      I = md5_gg(I, H, G, J, K[C + 0], 20, -373897302);
      J = md5_gg(J, I, H, G, K[C + 5], 5, -701558691);
      G = md5_gg(G, J, I, H, K[C + 10], 9, 38016083);
      H = md5_gg(H, G, J, I, K[C + 15], 14, -660478335);
      I = md5_gg(I, H, G, J, K[C + 4], 20, -405537848);
      J = md5_gg(J, I, H, G, K[C + 9], 5, 568446438);
      G = md5_gg(G, J, I, H, K[C + 14], 9, -1019803690);
      H = md5_gg(H, G, J, I, K[C + 3], 14, -187363961);
      I = md5_gg(I, H, G, J, K[C + 8], 20, 1163531501);
      J = md5_gg(J, I, H, G, K[C + 13], 5, -1444681467);
      G = md5_gg(G, J, I, H, K[C + 2], 9, -51403784);
      H = md5_gg(H, G, J, I, K[C + 7], 14, 1735328473);
      I = md5_gg(I, H, G, J, K[C + 12], 20, -1926607734);
      J = md5_hh(J, I, H, G, K[C + 5], 4, -378558);
      G = md5_hh(G, J, I, H, K[C + 8], 11, -2022574463);
      H = md5_hh(H, G, J, I, K[C + 11], 16, 1839030562);
      I = md5_hh(I, H, G, J, K[C + 14], 23, -35309556);
      J = md5_hh(J, I, H, G, K[C + 1], 4, -1530992060);
      G = md5_hh(G, J, I, H, K[C + 4], 11, 1272893353);
      H = md5_hh(H, G, J, I, K[C + 7], 16, -155497632);
      I = md5_hh(I, H, G, J, K[C + 10], 23, -1094730640);
      J = md5_hh(J, I, H, G, K[C + 13], 4, 681279174);
      G = md5_hh(G, J, I, H, K[C + 0], 11, -358537222);
      H = md5_hh(H, G, J, I, K[C + 3], 16, -722521979);
      I = md5_hh(I, H, G, J, K[C + 6], 23, 76029189);
      J = md5_hh(J, I, H, G, K[C + 9], 4, -640364487);
      G = md5_hh(G, J, I, H, K[C + 12], 11, -421815835);
      H = md5_hh(H, G, J, I, K[C + 15], 16, 530742520);
      I = md5_hh(I, H, G, J, K[C + 2], 23, -995338651);
      J = md5_ii(J, I, H, G, K[C + 0], 6, -198630844);
      G = md5_ii(G, J, I, H, K[C + 7], 10, 1126891415);
      H = md5_ii(H, G, J, I, K[C + 14], 15, -1416354905);
      I = md5_ii(I, H, G, J, K[C + 5], 21, -57434055);
      J = md5_ii(J, I, H, G, K[C + 12], 6, 1700485571);
      G = md5_ii(G, J, I, H, K[C + 3], 10, -1894986606);
      H = md5_ii(H, G, J, I, K[C + 10], 15, -1051523);
      I = md5_ii(I, H, G, J, K[C + 1], 21, -2054922799);
      J = md5_ii(J, I, H, G, K[C + 8], 6, 1873313359);
      G = md5_ii(G, J, I, H, K[C + 15], 10, -30611744);
      H = md5_ii(H, G, J, I, K[C + 6], 15, -1560198380);
      I = md5_ii(I, H, G, J, K[C + 13], 21, 1309151649);
      J = md5_ii(J, I, H, G, K[C + 4], 6, -145523070);
      G = md5_ii(G, J, I, H, K[C + 11], 10, -1120210379);
      H = md5_ii(H, G, J, I, K[C + 2], 15, 718787259);
      I = md5_ii(I, H, G, J, K[C + 9], 21, -343485551);
      J = safe_add(J, E);
      I = safe_add(I, D);
      H = safe_add(H, B);
      G = safe_add(G, A);
    }
  return Array(J, I, H, G);
}



function safe_add(A, D) {
  var C = (A & 65535) + (D & 65535);
  var B = (A >> 16) + (D >> 16) + (C >> 16);
  return (B << 16) | (C & 65535);
}



function bit_rol(A, B) {
  return (A << B) | (A >>> (32 - B));
}



function binl2b64(D) {
  var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var F = "";
  for (var B = 0; B < D.length * 4; B += 3) 
    {
      var E = (((D[B >> 2] >> 8 * (B % 4)) & 255) << 16) | (((D[B + 1 >> 2] >> 8 * ((B + 1) % 4)) & 255) << 8) | ((D[B + 2 >> 2] >> 8 * ((B + 2) % 4)) & 255);
      for (var A = 0; A < 4; A++) 
        {
          if (B * 8 + A * 6 > D.length * 32) 
          {
            F += b64pad;
          } else {
            F += C.charAt((E >> 6 * (3 - A)) & 63);
          }
        }
    }
  return F;
}



function str_to_ent(D) {
  var A = "";
  var C;
  for (C = 0; C < D.length; C++) 
    {
      var E = D.charCodeAt(C);
      var B = "";
      if (E > 255) 
      {
        while (E >= 1) 
          {
            B = "0123456789".charAt(E % 10) + B;
            E = E / 10;
          }
        if (B == "") 
        {
          B = "0";
        }
        B = "#" + B;
        B = "&" + B;
        B = B + ";";
        A += B;
      } else {
        A += D.charAt(C);
      }
    }
  return A;
}



function trim(A) {
  while (A.substring(0, 1) == " ") 
    {
      A = A.substring(1, A.length);
    }
  while (A.substring(A.length - 1, A.length) == " ") 
    {
      A = A.substring(0, A.length - 1);
    }
  return A;
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function formatString() {
  var num = arguments.length;
  var oStr = arguments[0];
  for (var i = 1; i < num; i++) 
    {
      var pattern = "\\{" + (i - 1) + "\\}";
      var re = new RegExp(pattern, "g");
      oStr = oStr.replace(re, arguments[i]);
    }
  return oStr;
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function HoverMenuLink(div, n) {
  if (!div) 
  return;
  div.className = (n) ? 'dlinkover' : 'dlink';
}



function rowHover(row, n) {
  if (row.xclass == null) 
  row.xclass = row.className;
  row.className = row.xclass + ((n) ? 'over' : '');
}



function ltrim(s) {
  return s.replace(/^\s*/, "");
}



function _j(m) {
  var n = new Date();
  n = n.getTime() + m;
  if (m == 0) 
  return n;
  if (m > 15) 
  {
    while (true) 
      {
        m = new Date();
        if (m.getTime() > n) 
        return;
      }
  } else {
    n += "";
    return n.substring(n.length - m, n.length);
  }
}



function isLeapYear(yrStr) {
  var leapYear = false;
  var year = parseInt(yrStr, 10);
  if (year % 4 == 0) 
  {
    leapYear = true;
    if (year % 100 == 0) 
    {
      leapYear = false;
      if (year % 400 == 0) 
      {
        leapYear = true;
      }
    }
  }
  return leapYear;
}



function getDaysInMonth(mthIdx, YrStr) {
  var maxDays = 31;
  if (mthIdx == 1) 
  {
    if (isLeapYear(YrStr)) 
    {
      maxDays = 29;
    } else {
      maxDays = 28;
    }
  }
  if (mthIdx == 3 || mthIdx == 5 || mthIdx == 8 || mthIdx == 10) 
  {
    maxDays = 30;
  }
  return maxDays;
}



function getYear(mthIdx) {
  var today = new Date();
  var theYear = parseInt(today.getYear(), 10);
  if (mthIdx < today.getMonth()) 
  {
    theYear = (parseInt(today.getYear(), 10) + 1);
  }
  if (theYear < 100) 
  {
    theYear = "19" + theYear;
  } else {
    if ((theYear - 100) < 10) 
    {
      theYear = "0" + (theYear - 100);
    } else {
      theYear = (theYear - 100) + "";
    }
    theYear = "20" + theYear;
  }
  return theYear;
}



function cm_mout(name, cl) {
  if (!name && cl && !this.isover) 
  {
    this.isclicked = 0;
    this.hideSubs(1, 0, 0, 0, 1);
    this.aobj[0] = -1;
    return;
  }
  if (!name) 
  return;
  var l = this.m[name].l;
  if ((this.m[name].subs.length == 0 || !this.loaded) || (this.useclick && !this.isclicked)) 
  {
    if ((this.aobj[l + 1] == -1 || l >= this.l.length - 1) && this.aobj[l] != -1) 
    {
      this.aobj[l].setactive(0, 0, 1);
      this.aobj[l] = -1;
    }
  }
  if (this.m[name].mout != "") 
  eval(this.m[name].mout);
  if (this.useclick) 
  {
    this.isover = 0;
    return;
  }
    clearTimeout(this.tim);
  if (!(!bw.ie && this.useframes && l == 0 && this.aobj1)) 
  {
    this.isover = 0;
    this.aobj1 = 0;
    this.tim = setTimeout(this.name + ".hideSubs(1,0,0,0,1)", this.wait);
  }
}



function cm_check_error(e) {
  e = e.toLowerCase();
  if (e.indexOf("access") > -1 || e.indexOf("permission") > -1) 
  {
    coolFrameError = 1;
    return true;
  } else return false;
}



function to_em(n, o) {
  return Math.round((n / (16 * parseInt(o.fontsize) / 100)) * 1000) / 1000;
}



function tb_parseQuery(query) {
  var Params = {};
  if (!query) 
  {
    return Params;
  }
  var Pairs = query.split(/[;&]/);
  for (var i = 0; i < Pairs.length; i++) 
    {
      var KeyVal = Pairs[i].split('=');
      if (!KeyVal || KeyVal.length != 2) 
      {
        continue;
      }
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
    }
  return Params;
}



function json_search_result_html(result_data, keywords) {
  var html = '<p id="search_notice" style="text-align:left;">\u203b\u30b9\u30da\u30fc\u30b9\u3067AND\u691c\u7d22\u304c\u51fa\u6765\u307e\u3059\u3002<br />\u691c\u7d22\u7d50\u679c\uff08' + result_data.length + '\u4ef6\u30d2\u30c3\u30c8 \uff09</p><div class="module-content"><ul>';
  for (var i = 0; i < result_data.length; i++) 
    {
      html += '<li><a href="' + result_data[i].link + '#search_word=' + json_search_keyword + '" target="_blank">' + result_data[i].title + '</a></li>';
    }
  html += '</ul></div><p class="search_hide"><a class="imgbutton" href="javascript:void(0)" style="font-weight:bold;" onclick="clear_block(\'#search-content\')"><span>&raquo; CLOSE</span></a></p>';
  return html;
}



function core_sha1(x, len) {
  x[len >> 5] |= 80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;
  var w = Array(80);
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  var e = -1009589776;
  for (var i = 0; i < x.length; i += 16) 
    {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      var olde = e;
      for (var j = 0; j < 80; j++) 
        {
          if (j < 16) 
          w[j] = x[i + j]; else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
          var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
          e = d;
          d = c;
          c = rol(b, 30);
          b = a;
          a = t;
        }
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
      e = safe_add(e, olde);
    }
  return Array(a, b, c, d, e);
}



function sha1_kt(t) {
  return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function redirect(url) {
  location = url;
}



function WithoutContent(ss) {
  if (ss.length > 0) 
  return false;
  return true;
}



function NoneWithContent(ss) {
  for (var i = 0; i < ss.length; i++) 
    {
      if (ss[i].value.length > 0) 
      return false;
    }
  return true;
}



function NoneWithCheck(ss) {
  for (var i = 0; i < ss.length; i++) 
    {
      if (ss[i].checked) 
      return false;
    }
  return true;
}



function WithoutCheck(ss) {
  if (ss.checked) 
  return false;
  return true;
}



function WithoutSelectionValue(ss) {
  for (var i = 0; i < ss.length; i++) 
    {
      if (ss[i].selected) 
      {
        if (ss[i].value.length) 
        return false;
      }
    }
  return true;
}



function validEmail(email) {
  s = email;
  if (s != "") 
  {
    if ((pos = s.indexOf("@")) == -1) 
    return false; else {
      newS = s.substr(pos + 1);
      if ((pos = newS.indexOf(".")) == -1) 
      return false; else if (newS.charAt(pos + 1) == "") 
      return false;
    }
  }
  return true;
}



function getposOffset(what, offsettype) {
  var totaloffset = (offsettype == "left") ? what.offsetLeft : what.offsetTop;
  var parentEl = what.offsetParent;
  while (parentEl != null) 
    {
      totaloffset = (offsettype == "left") ? totaloffset + parentEl.offsetLeft : totaloffset + parentEl.offsetTop;
      parentEl = parentEl.offsetParent;
    }
  return totaloffset;
}



function contains_ns6(a, b) {
  while (b.parentNode) 
    if ((b = b.parentNode) == a) 
    return true;
  return false;
}



function hidemenu(e) {
  if (typeof dropmenuobj != "undefined") 
  {
    if (ie4 || ns6) 
    dropmenuobj.style.visibility = "hidden";
  }
}



function clearhidemenu() {
  if (typeof delayhide != "undefined") 
  clearTimeout(delayhide);
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function addEvent(object, type, handler) {
  if (object.addEventListener) 
  {
    object.addEventListener(type, handler, false);
  } else if (object.attachEvent) 
  {
    object.attachEvent(['on', type].join(''), handler);
  } else {
    object[['on', type].join('')] = handler;
  }
}



function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0) 
  date.setTime(date.getTime() - skew);
}



function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0) 
  date.setTime(date.getTime() - skew);
}



function Localize(pStr) {
  return pStr;
}



function _alert(str) {
}



function _setImageSize(imgObject, imgHeight, imgWidth) {
  imgObject.resized = true;
  imgObject.height = imgHeight;
  imgObject.width = imgWidth;
  return;
}



function mbSubStr(strIn, start, end) {
  ++start;
  if (start >= end) 
  return "";
  var str = "";
  var count = 0;
  var isSub = false;
  for (var i = 0; i < end && i < strIn.length; ++i) 
    {
      count += strIn.charCodeAt(i) >= 128 ? 2 : 1;
      if (count == start) 
      isSub = true;
      if (!isSub && count == start + 1) 
      isSub = true;
      if (isSub) 
      str += strIn.charAt(i);
      if (count >= end) 
      break;
    }
  return str;
}



function _spacer(w, h) {
  return '<img border="0" height="' + h + '" width="' + w + '" src="http://pics.ebaystatic.com/aw/pics/spacer.gif">';
}



function _cleanTitle(str) {
  var title = new String(str);
  return title.replace(/\*/g, "&quot;");
}



function _padNumber(theNumber) {
  if (theNumber < 10) 
  return "0" + theNumber;
  return theNumber;
}



function _j(m) {
  var n = new Date();
  n = n.getTime() + m;
  if (m == 0) 
  return n;
  if (m > 15) 
  {
    while (true) 
      {
        m = new Date();
        if (m.getTime() > n) 
        return;
      }
  } else {
    n += "";
    return n.substring(n.length - m, n.length);
  }
}



function fetch_tags(B, A) {
  if (B == null) 
  {
    return new Array();
  } else {
    if (typeof B.getElementsByTagName != "undefined") 
    {
      return B.getElementsByTagName(A);
    } else {
      if (B.all && B.all.tags) 
      {
        return B.all.tags(A);
      } else {
        return new Array();
      }
    }
  }
}



function vB_PHP_Emulator() {
}



function vB_AJAX_Handler(A) {
  this.async = A ? true : false;
  this.conn = null;
}



function vB_Hidden_Form(A) {
  this.action = A;
  this.variables = new Array();
}



function clear_viewport_info() {
  viewport_info = null;
}



function vBpagenav() {
}



function vbmenu_register(B, A, C) {
  if (typeof (vBmenu) == "object") 
  {
    return vBmenu.register(B, A);
  } else {
    return false;
  }
}



function img_alt_2_title(A) {
  if (!A.title && A.alt != "") 
  {
    A.title = A.alt;
  }
}



function Comment_Init(B) {
  if (typeof B.id == "undefined") 
  {
    return;
  }
  var C = B.id;
  if (isNaN(C)) 
  {
    var A = null;
    if (A = C.match(/(\d+)/)) 
    {
      C = A[0];
    }
  }
  if (typeof inlineMod_comment != "undefined") 
  {
    im_init(B, inlineMod_comment);
  }
  if (typeof vB_QuickEditor_Factory != "undefined") 
  {
    if (typeof vB_QuickEditor_Factory.controls[C] == "undefined") 
    {
      vB_QuickEditor_Factory.controls[C] = new vB_QuickEditor(C, vB_QuickEditor_Factory);
    } else {
      vB_QuickEditor_Factory.controls[C].init();
    }
  }
  if (typeof vB_QuickLoader_Factory != "undefined") 
  {
    vB_QuickLoader_Factory.controls[C] = new vB_QuickLoader(C, vB_QuickLoader_Factory);
  }
  child_img_alt_2_title(B);
}



function handle_dismiss_notice_error(C) {
  if (C.argument) 
  {
    var B = YAHOO.util.Dom.get("dismiss_notice_hidden");
    B.value = C.argument;
    var A = YAHOO.util.Dom.get("notices");
    A.submit();
  }
}



function IdxSearch() {
}



function URLencode(sStr) {
  return escape(sStr).replace(/\+/g, '%2C').replace(/\"/g, '%22').replace(/\'/g, '%27');
}



function shuffle(a, b) {
  return (Math.round(Math.random()) - 0.5);
}



function core_md5(x, len) {
  x[len >> 5] |= 80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) 
    {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
  return Array(a, b, c, d);
}



function bit_rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}



function binl2hex(binarray) {
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) 
    {
      str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & F) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & F);
    }
  return str;
}



function gdsMakeImgArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) 
    {
      this[i] = 0;
    }
  return this;
}



function __dnn_ClientAPIEnabled() {
  return typeof (dnn) != 'undefined';
}



function __dnncore() {
  this.GetUserVal = 0;
  this.SetUserVal = 1;
}



function core_md5(K, F) {
  K[F >> 5] |= 128 << ((F) % 32);
  K[(((F + 64) >>> 9) << 4) + 14] = F;
  var J = 1732584193;
  var I = -271733879;
  var H = -1732584194;
  var G = 271733878;
  for (var C = 0; C < K.length; C += 16) 
    {
      var E = J;
      var D = I;
      var B = H;
      var A = G;
      J = md5_ff(J, I, H, G, K[C + 0], 7, -680876936);
      G = md5_ff(G, J, I, H, K[C + 1], 12, -389564586);
      H = md5_ff(H, G, J, I, K[C + 2], 17, 606105819);
      I = md5_ff(I, H, G, J, K[C + 3], 22, -1044525330);
      J = md5_ff(J, I, H, G, K[C + 4], 7, -176418897);
      G = md5_ff(G, J, I, H, K[C + 5], 12, 1200080426);
      H = md5_ff(H, G, J, I, K[C + 6], 17, -1473231341);
      I = md5_ff(I, H, G, J, K[C + 7], 22, -45705983);
      J = md5_ff(J, I, H, G, K[C + 8], 7, 1770035416);
      G = md5_ff(G, J, I, H, K[C + 9], 12, -1958414417);
      H = md5_ff(H, G, J, I, K[C + 10], 17, -42063);
      I = md5_ff(I, H, G, J, K[C + 11], 22, -1990404162);
      J = md5_ff(J, I, H, G, K[C + 12], 7, 1804603682);
      G = md5_ff(G, J, I, H, K[C + 13], 12, -40341101);
      H = md5_ff(H, G, J, I, K[C + 14], 17, -1502002290);
      I = md5_ff(I, H, G, J, K[C + 15], 22, 1236535329);
      J = md5_gg(J, I, H, G, K[C + 1], 5, -165796510);
      G = md5_gg(G, J, I, H, K[C + 6], 9, -1069501632);
      H = md5_gg(H, G, J, I, K[C + 11], 14, 643717713);
      I = md5_gg(I, H, G, J, K[C + 0], 20, -373897302);
      J = md5_gg(J, I, H, G, K[C + 5], 5, -701558691);
      G = md5_gg(G, J, I, H, K[C + 10], 9, 38016083);
      H = md5_gg(H, G, J, I, K[C + 15], 14, -660478335);
      I = md5_gg(I, H, G, J, K[C + 4], 20, -405537848);
      J = md5_gg(J, I, H, G, K[C + 9], 5, 568446438);
      G = md5_gg(G, J, I, H, K[C + 14], 9, -1019803690);
      H = md5_gg(H, G, J, I, K[C + 3], 14, -187363961);
      I = md5_gg(I, H, G, J, K[C + 8], 20, 1163531501);
      J = md5_gg(J, I, H, G, K[C + 13], 5, -1444681467);
      G = md5_gg(G, J, I, H, K[C + 2], 9, -51403784);
      H = md5_gg(H, G, J, I, K[C + 7], 14, 1735328473);
      I = md5_gg(I, H, G, J, K[C + 12], 20, -1926607734);
      J = md5_hh(J, I, H, G, K[C + 5], 4, -378558);
      G = md5_hh(G, J, I, H, K[C + 8], 11, -2022574463);
      H = md5_hh(H, G, J, I, K[C + 11], 16, 1839030562);
      I = md5_hh(I, H, G, J, K[C + 14], 23, -35309556);
      J = md5_hh(J, I, H, G, K[C + 1], 4, -1530992060);
      G = md5_hh(G, J, I, H, K[C + 4], 11, 1272893353);
      H = md5_hh(H, G, J, I, K[C + 7], 16, -155497632);
      I = md5_hh(I, H, G, J, K[C + 10], 23, -1094730640);
      J = md5_hh(J, I, H, G, K[C + 13], 4, 681279174);
      G = md5_hh(G, J, I, H, K[C + 0], 11, -358537222);
      H = md5_hh(H, G, J, I, K[C + 3], 16, -722521979);
      I = md5_hh(I, H, G, J, K[C + 6], 23, 76029189);
      J = md5_hh(J, I, H, G, K[C + 9], 4, -640364487);
      G = md5_hh(G, J, I, H, K[C + 12], 11, -421815835);
      H = md5_hh(H, G, J, I, K[C + 15], 16, 530742520);
      I = md5_hh(I, H, G, J, K[C + 2], 23, -995338651);
      J = md5_ii(J, I, H, G, K[C + 0], 6, -198630844);
      G = md5_ii(G, J, I, H, K[C + 7], 10, 1126891415);
      H = md5_ii(H, G, J, I, K[C + 14], 15, -1416354905);
      I = md5_ii(I, H, G, J, K[C + 5], 21, -57434055);
      J = md5_ii(J, I, H, G, K[C + 12], 6, 1700485571);
      G = md5_ii(G, J, I, H, K[C + 3], 10, -1894986606);
      H = md5_ii(H, G, J, I, K[C + 10], 15, -1051523);
      I = md5_ii(I, H, G, J, K[C + 1], 21, -2054922799);
      J = md5_ii(J, I, H, G, K[C + 8], 6, 1873313359);
      G = md5_ii(G, J, I, H, K[C + 15], 10, -30611744);
      H = md5_ii(H, G, J, I, K[C + 6], 15, -1560198380);
      I = md5_ii(I, H, G, J, K[C + 13], 21, 1309151649);
      J = md5_ii(J, I, H, G, K[C + 4], 6, -145523070);
      G = md5_ii(G, J, I, H, K[C + 11], 10, -1120210379);
      H = md5_ii(H, G, J, I, K[C + 2], 15, 718787259);
      I = md5_ii(I, H, G, J, K[C + 9], 21, -343485551);
      J = safe_add(J, E);
      I = safe_add(I, D);
      H = safe_add(H, B);
      G = safe_add(G, A);
    }
  return Array(J, I, H, G);
}



function safe_add(A, D) {
  var C = (A & 65535) + (D & 65535);
  var B = (A >> 16) + (D >> 16) + (C >> 16);
  return (B << 16) | (C & 65535);
}



function bit_rol(A, B) {
  return (A << B) | (A >>> (32 - B));
}



function binl2b64(D) {
  var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var F = "";
  for (var B = 0; B < D.length * 4; B += 3) 
    {
      var E = (((D[B >> 2] >> 8 * (B % 4)) & 255) << 16) | (((D[B + 1 >> 2] >> 8 * ((B + 1) % 4)) & 255) << 8) | ((D[B + 2 >> 2] >> 8 * ((B + 2) % 4)) & 255);
      for (var A = 0; A < 4; A++) 
        {
          if (B * 8 + A * 6 > D.length * 32) 
          {
            F += b64pad;
          } else {
            F += C.charAt((E >> 6 * (3 - A)) & 63);
          }
        }
    }
  return F;
}



function str_to_ent(D) {
  var A = "";
  var C;
  for (C = 0; C < D.length; C++) 
    {
      var E = D.charCodeAt(C);
      var B = "";
      if (E > 255) 
      {
        while (E >= 1) 
          {
            B = "0123456789".charAt(E % 10) + B;
            E = E / 10;
          }
        if (B == "") 
        {
          B = "0";
        }
        B = "#" + B;
        B = "&" + B;
        B = B + ";";
        A += B;
      } else {
        A += D.charAt(C);
      }
    }
  return A;
}



function trim(A) {
  while (A.substring(0, 1) == " ") 
    {
      A = A.substring(1, A.length);
    }
  while (A.substring(A.length - 1, A.length) == " ") 
    {
      A = A.substring(0, A.length - 1);
    }
  return A;
}



function wbpad(number, length) {
  var str = '' + number;
  while (str.length < length) 
    {
      str = '0' + str;
    }
  return str;
}



function getHTTPObject() {
  var xmlhttp;
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') 
  {
    try {
      xmlhttp = new XMLHttpRequest();
    }    catch (e) {
  xmlhttp = false;
}
  }
  return xmlhttp;
}



function Num2Al(src, dig) {
  var dest = '', iX = 0;
  while (iX < dig) 
    {
      dest = String.fromCharCode('a'.charCodeAt(0) + (src % 26)) + dest;
      src = Math.floor(src / 26);
      iX++;
    }
  if (src > 0) 
  return (Num2Al(0, dig));
  return (dest);
}



function Alto10(src) {
  var jX, tmpX;
  var dest = 0;
  for (jX = 0; jX < src.length; jX++) 
    {
      tmpX = src.charCodeAt(jX) - 'a'.charCodeAt(0);
      if (tmpX < 0 || tmpX > 25) 
      return 0;
      dest = dest * 26;
      dest += tmpX;
    }
  return dest;
}



function eraseSharp(s) {
  var a = s.split("#");
  if (a.length == 1) 
  {
    return s;
  } else {
    return a[0];
  }
}



function pause(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) 
    {
      now = new Date();
      if (now.getTime() > exitTime) 
      return;
    }
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
    hideLightbox();
  }
}



function Mint_SI_IO_isLocal(url) {
  return /^([^:]+):\/\/([a-z0-9]+[\._-])*(doubletongued\.org)/i.test(url);
}



function enc(value) {
  if (encodeURIComponent()) 
  {
    return encodeURIComponent(value);
  } else {
    return value;
  }
}



function format(str) {
  for (i = 1; i < arguments.length; i++) 
    {
      str = str.replace('{' + (i - 1) + '}', arguments[i]);
    }
  return str;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function RollingArchives(pagetext) {
  this.pageText = pagetext;
  this.active = false;
}



function cnzz_hf(str) {
  var b = 37851;
  var a = 63689;
  var h = 0;
  var i = 0;
  for (i = 0; i < str.length; i++) 
    {
      var tp = h + (a * (str.charAt(i).charCodeAt())) >> 2;
      if (tp) 
      {
        h = tp;
        a += b;
      }
    }
  return h + '';
}



function ststxy(m, xy) {
  m.mcox = xy[0];
  m.mcoy = xy[1];
}



function stmvto(xy, p) {
  if (xy && (p.ppi || stgme(p).mtyp != 0)) 
  {
    var l = stglay(p);
    if (nNN4) 
    l.moveToAbsolute(xy[0], xy[1]); else if (nOP) 
    {
      var ls = l.style;
      ls.pixelLeft = xy[0];
      ls.pixelTop = xy[1];
    } else {
      var ls = l.style;
      ls.left = xy[0] + 'px';
      ls.top = xy[1] + 'px';
    }
    p.rc = [xy[0], xy[1], p.rc[2], p.rc[3]];
  }
}



function stsdstr(p, iss) {
  return "var pp=st_ms[" + p.mei + "].ps[" + p.ppi + "];pp.tmid=null;" + (iss ? p.efsh + "sh(" : p.efhd + "hd(") + "pp);pp.exed=1;";
}



function stppev(p) {
  var s = " onMouseOver='stppov(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);'";
  s += " onMouseOut='stppou(event,this,st_ms[" + p.mei + "].ps[" + p.ppi + "]);'";
  return s;
}



function stitev(i) {
  if (i.ityp == 6) 
  return '';
  var s = " onMouseOver='stitov(event,this,st_ms[" + i.mei + "].ps[" + i.ppi + "].is[" + i.iti + "]);'";
  s += " onMouseOut='stitou(event,this,st_ms[" + i.mei + "].ps[" + i.ppi + "].is[" + i.iti + "]);'";
  s += " onClick='stitck(event,this,st_ms[" + i.mei + "].ps[" + i.ppi + "].is[" + i.iti + "]);'";
  return s;
}



function stquo(n) {
  return "\"" + n + "\"";
}



function stgdec(v) {
  if (v) 
  {
    var s = '';
    if (v & 1) 
    s += 'underline ';
    if (v & 2) 
    s += 'line-through ';
    if (v & 4) 
    s += 'overline';
    return s;
  } else return 'none';
}



function stgbg(c, im, r) {
  var s = c;
  if (im) 
  s += " url(" + im + ") " + r;
  return s;
}



function stgpar(ip) {
  if (typeof (ip.iti) != "undefined") 
  return st_ms[ip.mei].ps[ip.ppi]; else return !ip.par ? null : st_ms[ip.par[0]].ps[ip.par[1]].is[ip.par[2]];
}



function stgsub(i) {
  return !i.sub ? null : st_ms[i.sub[0]].ps[i.sub[1]];
}



function stbuf(s) {
  if (s) 
  {
    var i = new Image();
    st_ims[st_ims.length] = i;
    i.src = s;
  }
  return s;
}



function stgsrc(s, m, f) {
  if (s == '') 
  return f ? m.mbnk : '';
  var sr = s.toLowerCase();
  if (sr.indexOf('http://') == 0 || (sr.indexOf(':') == 1 && sr.charCodeAt(0) > 96 && sr.charCodeAt(0) < 123) || sr.indexOf('ftp://') == 0 || sr.indexOf('/') == 0 || sr.indexOf('gopher') == 0) 
  return s; else return m.mweb + s;
}



function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0) 
  date.setTime(date.getTime() - skew);
}



function adicionarEvento(objeto, TipoEvento, funcao) {
  if (objeto.addEventListener) 
  {
    objeto.addEventListener(TipoEvento, funcao, false);
    return true;
  } else if (objeto.attachEvent) 
  {
    var r = objeto.attachEvent('on' + TipoEvento, funcao);
    return r;
  } else {
    return false;
  }
}



function changeText(el, newText) {
  if (el.innerText) 
  {
    el.innerText = newText;
  } else if (el.firstChild && el.firstChild.nodeValue) 
  {
    el.firstChild.nodeValue = newText;
  }
}



function escapeQuotesHTML(text) {
  var re = new RegExp('&', "g");
  text = text.replace(re, "&amp;");
  re = new RegExp('"', "g");
  text = text.replace(re, "&quot;");
  re = new RegExp('<', "g");
  text = text.replace(re, "&lt;");
  re = new RegExp('>', "g");
  text = text.replace(re, "&gt;");
  return text;
}



function addCheckboxClickHandlers(inputs, start) {
  if (!start) 
  start = 0;
  var finish = start + 250;
  if (finish > inputs.length) 
  finish = inputs.length;
  for (var i = start; i < finish; i++) 
    {
      var cb = inputs[i];
      if (!cb.type || cb.type.toLowerCase() != 'checkbox') 
      continue;
      var end = checkboxes.length;
      checkboxes[end] = cb;
      cb.index = end;
      cb.onclick = checkboxClickHandler;
    }
  if (finish < inputs.length) 
  {
    setTimeout(function() {
  addCheckboxClickHandlers(inputs, finish);
}, 200);
  }
}



function ts_makeSortable(table) {
  var firstRow;
  if (table.rows && table.rows.length > 0) 
  {
    if (table.tHead && table.tHead.rows.length > 0) 
    {
      firstRow = table.tHead.rows[table.tHead.rows.length - 1];
    } else {
      firstRow = table.rows[0];
    }
  }
  if (!firstRow) 
  return;
  for (var i = 0; i < firstRow.cells.length; i++) 
    {
      var cell = firstRow.cells[i];
      if ((" " + cell.className + " ").indexOf(" unsortable ") == -1) 
      {
        cell.innerHTML += '&nbsp;&nbsp;<a href="#" class="sortheader" onclick="ts_resortTable(this);return false;"><span class="sortarrow"><img src="' + ts_image_path + ts_image_none + '" alt="&darr;"/></span></a>';
      }
    }
  if (ts_alternate_row_colors) 
  {
    ts_alternate(table);
  }
}



function ts_getInnerText(el) {
  if (typeof el == "string") 
  return el;
  if (typeof el == "undefined") 
  {
    return el;
  }
    if (el.textContent) 
  return el.textContent;
  if (el.innerText) 
  return el.innerText;
  var str = "";
  var cs = el.childNodes;
  var l = cs.length;
  for (var i = 0; i < l; i++) 
    {
      switch (cs[i].nodeType) {
        case 1:
          str += ts_getInnerText(cs[i]);
          break;
        case 3:
          str += cs[i].nodeValue;
          break;
      }
    }
  return str;
}



function ts_dateToSortKey(date) {
  if (date.length == 11) 
  {
    switch (date.substr(3, 3).toLowerCase()) {
      case "jan":
        var month = "01";
        break;
      case "feb":
        var month = "02";
        break;
      case "mar":
        var month = "03";
        break;
      case "apr":
        var month = "04";
        break;
      case "may":
        var month = "05";
        break;
      case "jun":
        var month = "06";
        break;
      case "jul":
        var month = "07";
        break;
      case "aug":
        var month = "08";
        break;
      case "sep":
        var month = "09";
        break;
      case "oct":
        var month = "10";
        break;
      case "nov":
        var month = "11";
        break;
      case "dec":
        var month = "12";
        break;
    }
    return date.substr(7, 4) + month + date.substr(0, 2);
  } else if (date.length == 10) 
  {
    if (ts_europeandate == false) 
    {
      return date.substr(6, 4) + date.substr(0, 2) + date.substr(3, 2);
    } else {
      return date.substr(6, 4) + date.substr(3, 2) + date.substr(0, 2);
    }
  } else if (date.length == 8) 
  {
    yr = date.substr(6, 2);
    if (parseInt(yr) < 50) 
    {
      yr = '20' + yr;
    } else {
      yr = '19' + yr;
    }
    if (ts_europeandate == true) 
    {
      return yr + date.substr(3, 2) + date.substr(0, 2);
    } else {
      return yr + date.substr(0, 2) + date.substr(3, 2);
    }
  }
  return "00000000";
}



function ts_parseFloat(num) {
  if (!num) 
  return 0;
  num = parseFloat(num.replace(/,/g, ""));
  return (isNaN(num) ? 0 : num);
}



function ts_sort_default(a, b) {
  return (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : a[2] - b[2]);
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function fetch_tags(parentobj, tag) {
  if (parentobj == null) 
  {
    return new Array();
  } else if (typeof parentobj.getElementsByTagName != 'undefined') 
  {
    return parentobj.getElementsByTagName(tag);
  } else if (parentobj.all && parentobj.all.tags) 
  {
    return parentobj.all.tags(tag);
  } else {
    return new Array();
  }
}



function vB_PHP_Emulator() {
}



function vB_AJAX_Handler(async) {
  this.async = async ? true : false;
}



function vB_Hidden_Form(script) {
  this.action = script;
  this.variables = new Array();
}



function vBpagenav() {
}



function vbmenu_register(controlid, noimage, datefield) {
  if (typeof (vBmenu) == "object") 
  {
    return vBmenu.register(controlid, noimage);
  } else {
    return false;
  }
}



function img_alt_2_title(img) {
  if (!img.title && img.alt != '') 
  {
    img.title = img.alt;
  }
}



function checkNumber(object_value) {
  if (object_value.length == 0) 
  return true;
  var start_format = " .+-0123456789";
  var number_format = " .0123456789";
  var check_char;
  var decimal = false;
  var trailing_blank = false;
  var digits = false;
  check_char = start_format.indexOf(object_value.toString().charAt(0));
  if (check_char == 1) 
  decimal = true; else if (check_char < 1) 
  return false;
  for (var i = 1; i < object_value.length; i++) 
    {
      check_char = number_format.indexOf(object_value.charAt(i));
      if (check_char < 0) 
      return false; else if (check_char == 1) 
      {
        if (decimal) 
        return false; else decimal = true;
      } else if (check_char == 0) 
      {
        if (decimal || digits) 
        trailing_blank = true;
      } else if (trailing_blank) 
      return false; else digits = true;
    }
  return true;
}



function charInString(c, s) {
  for (i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == c) 
      return true;
    }
  return false;
}



function daysInFebruary(year) {
  return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}



function isDigit(c) {
  return ((c >= "0") && (c <= "9"));
}



function isInteger(s) {
  var i;
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (!isDigit(c)) 
      return false;
    }
  return true;
}



function makeArray(n) {
  for (var i = 1; i <= n; i++) 
    {
      this[i] = 0;
    }
  return this;
}



function rTrim(s) {
  var i = s.length - 1;
  while ((i > 0) && charInString(s.charAt(i), whitespace)) 
    i--;
  return s.substring(0, i + 1);
}



function checkPhone(object_value) {
  if (object_value.length == 0) 
  return true;
  if (object_value.length != 8 && object_value.length != 12 && object_value.length != 14) 
  return false;
  object_value = trimString(object_value);
  if (object_value.length == 8) 
  {
    if (object_value.substring(3, 4) != "-") 
    {
      return false;
    }
    var exchange = object_value.substring(0, 3);
    var number = object_value.substring(4, 8);
    if (checkInteger(exchange) && checkInteger(number)) 
    {
      if (!checkRange(exchange, 1, 999) || !checkRange(number, 1, 9999)) 
      {
        return false;
      }
    } else {
      return false;
    }
  } else if (object_value.length == 12) 
  {
    if (object_value.substring(3, 4) != "-" || object_value.substring(7, 8) != "-") 
    {
      return false;
    }
    var areacode = object_value.substring(0, 3);
    var exchange = object_value.substring(4, 7);
    var number = object_value.substring(8, 12);
    if (checkInteger(exchange) && checkInteger(areacode) && checkInteger(number)) 
    {
      if (!checkRange(areacode, 100, 999) || !checkRange(exchange, 1, 999) || !checkRange(number, 1, 9999)) 
      {
        return false;
      }
    } else {
      return false;
    }
  } else if (object_value.length == 14) 
  {
    if (object_value.substring(0, 1) != "(" || object_value.substring(4, 6) != ") " || object_value.substring(9, 10) != "-") 
    {
      return false;
    }
    var areacode = object_value.substring(1, 4);
    var exchange = object_value.substring(6, 9);
    var number = object_value.substring(10, 14);
    if (checkInteger(exchange) && checkInteger(areacode) && checkInteger(number)) 
    {
      if (!checkRange(areacode, 100, 999) || !checkRange(exchange, 1, 999) || !checkRange(number, 1, 9999)) 
      {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
  return true;
}



function checkZip(object_value) {
  if (object_value.length == 0) 
  return true;
  if (object_value.length != 5 && object_value.length != 10) 
  return false;
  if (object_value.charAt(0) == "-" || object_value.charAt(0) == "+") 
  return false;
  if (!checkInteger(object_value.substring(0, 5))) 
  return false;
  if (object_value.length == 5) 
  return true;
  if (object_value.charAt(5) != "-" && object_value.charAt(5) != " ") 
  return false;
  if (object_value.charAt(6) == "-" || object_value.charAt(6) == "+") 
  return false;
  return (checkInteger(object_value.substring(6, 10)));
}



function checkCreditCard(object_value) {
  var white_space = " -";
  var creditcard_string = "";
  var check_char;
  if (object_value.length == 0) 
  return true;
  for (var i = 0; i < object_value.length; i++) 
    {
      check_char = white_space.indexOf(object_value.charAt(i));
      if (check_char < 0) 
      creditcard_string += object_value.substring(i, (i + 1));
    }
  if (creditcard_string.length == 0) 
  return false;
  if (creditcard_string.charAt(0) == "+") 
  return false;
  if (!checkInteger(creditcard_string)) 
  return false;
  var doubledigit = creditcard_string.length % 2 == 1 ? false : true;
  var checkdigit = 0;
  var tempdigit;
  for (var i = 0; i < creditcard_string.length; i++) 
    {
      tempdigit = eval(creditcard_string.charAt(i));
      if (doubledigit) 
      {
        tempdigit *= 2;
        checkdigit += (tempdigit % 10);
        if ((tempdigit / 10) >= 1.0) 
        {
          checkdigit++;
        }
        doubledigit = false;
      } else {
        checkdigit += tempdigit;
        doubledigit = true;
      }
    }
  return (checkdigit % 10) == 0 ? true : false;
}



function checkSSN(object_value) {
  var white_space = " -+.";
  var ssc_string = "";
  var check_char;
  if (object_value.length == 0) 
  return true;
  if (object_value.length != 11 && object_value.length != 9) 
  return false;
  if (object_value.charAt(3) != "-" && object_value.charAt(3) != " ") 
  return false;
  if (object_value.charAt(6) != "-" && object_value.charAt(6) != " ") 
  return false;
  for (var i = 0; i < object_value.length; i++) 
    {
      check_char = white_space.indexOf(object_value.charAt(i));
      if (check_char < 0) 
      ssc_string += object_value.substring(i, (i + 1));
    }
  if (ssc_string.length != 9) 
  return false;
  if (!checkInteger(ssc_string)) 
  return false;
  return true;
}



function trimString(str) {
  var retStr = "";
  for (var i = 0; i < str.length; i++) 
    {
      if (str.substring(i, i + 1) == " ") 
      {
        continue;
      } else {
        str = str.substring(i, str.length);
        break;
      }
    }
  for (i = str.length - 1; i >= 0; i--) 
    {
      if (str.substring(i, i + 1) == " ") 
      {
        continue;
      } else {
        retStr = str.substring(0, i + 1);
        break;
      }
    }
  return retStr;
}



function checkFilterCriteria(str) {
  var badChars = " %";
  var checkedString = "";
  var inStr = "";
  for (var i = 0; i < str.length; i++) 
    {
      inStr = badChars.indexOf(str.charAt(i));
      if (inStr < 0) 
      {
        checkedString += str.charAt(i);
      }
    }
  if (checkedString.length > 0) 
  {
    return true;
  } else {
    return false;
  }
}



function checkEmail(s, required) {
  var i = 1;
  var sLength = s.length;
  if (!required && sLength == 0) 
  return true; else {
    while ((i < sLength) && (s.charAt(i) != "@")) 
      i++;
    if ((i >= sLength) || (s.charAt(i) != "@")) 
    return false; else i += 2;
    while ((i < sLength) && (s.charAt(i) != ".")) 
      i++;
    if ((i >= sLength - 1) || (s.charAt(i) != ".")) 
    return false; else return true;
  }
}



function checkGUID(str) {
  var goodChars = "01234567890ABCDEFabcdef-";
  var inStr = -1;
  var numInChunk = 0;
  var whichChunk = 1;
  if (str.length == 0) 
  {
    return true;
  }
  for (var i = 0; i < str.length; i++) 
    {
      inStr = goodChars.indexOf(str.charAt(i));
      if (inStr < 0) 
      {
        return false;
      }
      if (str.charAt(i) == "-") 
      {
        switch (whichChunk) {
          case 1:
            if (numInChunk != 8) 
            return false;
            break;
          case 2:
          case 3:
          case 4:
            if (numInChunk != 4) 
            return false;
            break;
          case 5:
            if (numInChunk != 12) 
            return false;
            break;
          default:
            return false;
            break;
        }
        whichChunk++;
        numInChunk = 0;
      } else {
        numInChunk++;
      }
    }
  if (whichChunk != 5) 
  return false;
  return true;
}



function isArray(obj) {
  return (typeof (obj.length) == 'undefined') ? false : true;
}



function matchChar(str) {
  var pos = str.charAt(0);
  for (var i = 1; i < str.length; i++) 
    {
      pos = str.charAt(i);
      if (!((pos >= '0' && pos <= '9') || (pos >= 'A' && pos <= 'Z') || (pos >= 'a' && pos <= 'z') || pos == ' ')) 
      return false;
    }
  return true;
}



function dem_getHTTPObject() {
  var xmlhttp;
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') 
  {
    try {
      xmlhttp = new XMLHttpRequest();
    }    catch (e) {
  xmlhttp = false;
}
  }
  return xmlhttp;
}



function os_Timer(id, r, query) {
  this.id = id;
  this.r = r;
  this.query = query;
}



function os_Results(name, formname) {
  this.searchform = formname;
  this.searchbox = name;
  this.container = name + "Suggest";
  this.resultTable = name + "Result";
  this.resultText = name + "ResultText";
  this.toggle = name + "Toggle";
  this.query = null;
  this.results = null;
  this.resultCount = 0;
  this.original = null;
  this.selected = -1;
  this.containerCount = 0;
  this.containerRow = 0;
  this.containerTotal = 0;
  this.visible = false;
}



function os_encodeQuery(value) {
  if (encodeURIComponent) 
  {
    return encodeURIComponent(value);
  }
  if (escape) 
  {
    return escape(value);
  }
  return null;
}



function os_decodeValue(value) {
  if (decodeURIComponent) 
  {
    return decodeURIComponent(value);
  }
  if (unescape) 
  {
    return unescape(value);
  }
  return null;
}



function f_filterResults(n_win, n_docel, n_body) {
  var n_result = n_win ? n_win : 0;
  if (n_docel && (!n_result || (n_result > n_docel))) 
  n_result = n_docel;
  return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
}



function os_eventFocus(e) {
}



function os_eventMousemove(srcId, e) {
  os_mouse_moved = true;
}



function os_isNumber(x) {
  if (x == "" || isNaN(x)) 
  return false;
  for (var i = 0; i < x.length; i++) 
    {
      var c = x.charAt(i);
      if (!(c >= '0' && c <= '9')) 
      return false;
    }
  return true;
}



function findPosY(obj) {
  var curtop = 0;
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curtop += obj.offsetTop;
        obj = obj.offsetParent;
      }
  } else if (obj.y) 
  curtop += obj.y;
  return curtop;
}



function findPosX(obj) {
  var curleft = 0;
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curleft += obj.offsetLeft;
        obj = obj.offsetParent;
      }
  } else if (obj.x) 
  curleft += obj.x;
  return curleft;
}



function isStringV2(strValue) {
  return (typeof strValue == 'string' && strValue != '' && isNaN(strValue));
}



function isNumberV2(strValue) {
  return (!isNaN(strValue) && strValue != '');
}



function isNumberV3(strValue) {
  return (!isNaN(strValue) && strValue != '' && strValue.indexOf('0') != 0);
}



function strip(number) {
  var sOut = '';
  mask = '1234567890';
  for (count = 0; count <= number.length; count++) 
    {
      if (mask.indexOf(number.substring(count, count + 1), 0) != -1) 
      sOut += number.substring(count, count + 1);
    }
  return sOut;
}



function isInteger(s) {
  var i;
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (((c < "0") || (c > "9"))) 
      return false;
    }
  return true;
}



function stripCharsInBag(s, bag) {
  var i;
  var returnString = "";
  for (i = 0; i < s.length; i++) 
    {
      var c = s.charAt(i);
      if (bag.indexOf(c) == -1) 
      returnString += c;
    }
  return returnString;
}



function daysInFebruary(year) {
  return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}



function DaysArray(n) {
  for (var i = 1; i <= n; i++) 
    {
      this[i] = 31;
      if (i == 4 || i == 6 || i == 9 || i == 11) 
      {
        this[i] = 30;
      }
      if (i == 2) 
      {
        this[i] = 29;
      }
    }
  return this;
}



function core_md5(x, len) {
  x[len >> 5] |= 80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) 
    {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
  return Array(a, b, c, d);
}



function BROWSERFireFox() {
  return 0;
}



function BROWSEROpera() {
  return 1;
}



function BROWSERExplorer() {
  return 2;
}



function BROWSERMozilla() {
  return 3;
}



function BROWSERNetscape() {
  return 4;
}



function BROWSERSafari() {
  return 5;
}



function BROWSERKonqueror() {
  return 6;
}



function setcode(target, code) {
  target.innerHTML = code;
}



function arrayRemoveAll(a) {
  if (a == null) 
  return;
  while (a.length) 
    a.pop();
}



function oblog_ChekEmptyCode(html) {
  html = html.replace(/\<[^>]*>/g, "");
  html = html.replace(/&nbsp;/gi, "");
  html = html.replace(/o:/gi, "");
  html = html.replace(/\s/gi, "");
  return html;
}



function preSelectInstance() {
  this.categoryId = -1;
  this.subCategoryId = -1;
  this.productId = -1;
  this.menuItemId = -1;
  this.menuSubItemId = -1;
}



function toAl5(src) {
  return ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(src));
}



function toAl(src, dig) {
  var dest = '';
  var i = 0;
  var Al = 'abcdefghijklmnopqrstuvwxyz';
  var len = Al.length;
  while (i < dig) 
    {
      dest = Al.charAt(src % len) + dest;
      src = Math.floor(src / len);
      i++;
    }
  if (src > 0) 
  return (toAl(0, dig));
  return (dest);
}



function sanitize(text) {
  var replacedText = text.replace(/</g, "%3c");
  replacedText = replacedText.replace(/>/g, "%3e");
  replacedText = replacedText.replace(/\"/g, "%22");
  return replacedText;
}



function SERVICEPRODUCTS() {
  return 0;
}



function SERVICEFREEDESIGNS() {
  return 1;
}



function SERVICECARTMINIGET() {
  return 2;
}



function SERVICECARTMINIADD() {
  return 3;
}



function oblog_getEl(sTag, start) {
  while ((start != null) && (start.tagName != sTag)) 
    start = start.parentElement;
  return start;
}



function TabCheck(word, str) {
  var tp = 0;
  chktp = str.search(word);
  if (chktp != -1) 
  {
    eval("var tp=\"" + str + "\".match(" + word + ").length");
  }
  return tp;
}



function getOffsetTop(elm) {
  var mOffsetTop = elm.offsetTop;
  var mOffsetParent = elm.offsetParent;
  while (mOffsetParent) 
    {
      mOffsetTop += mOffsetParent.offsetTop;
      mOffsetParent = mOffsetParent.offsetParent;
    }
  return mOffsetTop;
}



function getOffsetLeft(elm) {
  var mOffsetLeft = elm.offsetLeft;
  var mOffsetParent = elm.offsetParent;
  while (mOffsetParent) 
    {
      mOffsetLeft += mOffsetParent.offsetLeft;
      mOffsetParent = mOffsetParent.offsetParent;
    }
  return mOffsetLeft;
}



function rand() {
  return parseInt((1000) * Math.random() + 1);
}



function xmlSelectNodes(xmlDoc, xPath) {
  if (!xmlDoc || !xPath || xPath.length == 0) 
  return null;
  if (xPath.charAt(0) == '/') 
  {
    if (xPath.length == 1) 
    return null;
    xPath = xPath.substring(1, xPath.length);
  }
  var index = xPath.indexOf('/');
  var rootName = "";
  if (index == -1) 
  {
    rootName = xPath;
    xPath = "";
  } else if (index == 0) 
  {
    return null;
  } else {
    rootName = xPath.substring(0, index);
    if (index == xPath.length - 1) 
    xPath = ""; else xPath = xPath.substring(index + 1, xPath.length);
  }
  var nodes = xmlDoc.getElementsByTagName(rootName).item(0);
  if (!nodes) 
  return null;
  nodes = nodes.childNodes;
  if (!nodes) 
  return null;
  while (xPath.length > 0) 
    {
      index = xPath.indexOf('/');
      var nextName = "";
      if (index == -1) 
      {
        nextName = xPath;
        xPath = "";
      } else if (index == 0) 
      {
        return null;
      } else {
        nextName = xPath.substring(0, index);
        if (index == xPath.length - 1) 
        xPath = ""; else xPath = xPath.substring(index + 1, xPath.length);
      }
      var found = false;
      for (var i = 0; i < nodes.length; i++) 
        {
          if (nodes[i].tagName == nextName) 
          {
            nodes = nodes[i].childNodes;
            found = true;
            break;
          }
        }
      if (found == false) 
      return null;
    }
  return nodes;
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent('on' + evType, fn);
    return r;
  } else {
    return false;
  }
}



function core_md5(x, len) {
  x[len >> 5] |= 80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) 
    {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
  return Array(a, b, c, d);
}



function recoverCurChannelBg(curChannel, sStyle) {
  curChannel.className = sStyle;
}



function checkFocus(x, y) {
}



function checkFocus(c, f) {
}



function moveIt(e) {
}



function phraseCharte() {
  return "Les informations publi\ufffdes dans le forum ne sont en aucun cas susceptibles de se substituer \ufffd une consultation ou \ufffd un diagnostic d'un professionnel (m\ufffddecin, psychologue, sexologue,\ufffd)";
}



function GetModerationPath() {
  return "/J1LMS6";
}



function TagsBetweenPilerDAndHParch() {
}



function imageQueueInstance() {
  this.queue = new Array();
  return this;
}



function Hashtable() {
  this._hash = new Object();
  this.add = function(key, value) {
  if (typeof (key) != "undefined") 
  {
    if (this.contains(key) == false) 
    {
      this._hash[key] = typeof (value) == "undefined" ? null : value;
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
  this.remove = function(key) {
  delete this._hash[key];
};
  this.count = function() {
  var i = 0;
  for (var k in this._hash) 
    {
      i++;
    }
  return i;
};
  this.items = function(key) {
  return this._hash[key];
};
  this.contains = function(key) {
  return typeof (this._hash[key]) != "undefined";
};
  this.clear = function() {
  for (var k in this._hash) 
    {
      delete this._hash[k];
    }
};
}



function GetNameFromString(str) {
  return str.split('|')[0];
}



function GetIDFromString(str) {
  return str.split('|')[1];
}



function domainForHostname(hostname) {
  var positionOfFirstDot = hostname.indexOf('.');
  var domain = hostname.substr(positionOfFirstDot);
  return domain;
}



function isValidEdition(edition) {
  if (edition == "Domestic") 
  {
    return 1;
  }
  if (edition == "International") 
  {
    return 1;
  }
  return 0;
}



function getCookieValField(offset, stringtot) {
  var endstr = stringtot.indexOf("%", offset);
  if (endstr == -1) 
  endstr = stringtot.length;
  return unescape(stringtot.substring(offset, endstr));
}



function GetCookieField(chp, stringtot) {
  var arg = chp + ":";
  var alen;
  alen = arg.length;
  var clen;
  if (stringtot != null) 
  {
    clen = stringtot.length;
    var i = 0;
    while (i < clen) 
      {
        var j = i + alen;
        if (stringtot.substring(i, j) == arg) 
        return getCookieValField(j, stringtot);
        i = i + 1;
        if (i == 0) 
        break;
      }
  }
  return null;
}



function reverse(arg_str) {
  var inp = arg_str;
  var outp = '';
  for (i = 0; i <= inp.length; i++) 
    {
      outp = inp.charAt(i) + outp;
    }
  return outp;
}



function handleEnter(field, event) {
  var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
  if (keyCode == 13) 
  {
    var i;
    for (i = 0; i < field.form.elements.length; i++) 
      if (field == field.form.elements[i]) 
      break;
    i = (i + 1) % field.form.elements.length;
    field.form.elements[i].focus();
    return false;
  } else return true;
}



function verifyContext(objectText, valueToCompare) {
  if (objectText.value == valueToCompare) 
  {
    objectText.value = "";
    if (valueToCompare == "Password") 
    {
      objectText.type = "password";
    }
  } else {
    if (objectText.value == "") 
    {
      if (valueToCompare == "Password") 
      {
        objectText.type = "Password";
      }
      objectText.value = valueToCompare;
    }
  }
}



function changeColor(objDiv) {
  if (objDiv.className == 'fontMenuOver') 
  {
    objDiv.className = 'fontMenu';
  } else {
    objDiv.className = 'fontMenuOver';
  }
}



function isValue(e, obj, valida) {
  if (e.keyCode < 47 || e.keyCode > 57) 
  {
    if (valida) 
    {
      if (e.keyCode != 44 || obj.value.indexOf(",") != -1) 
      {
        e.returnValue = false;
      }
      return;
    }
    e.returnValue = false;
  }
}



function isValueSpecial(e, obj, valida) {
  if (e.keyCode < 47 || e.keyCode > 57) 
  {
    if (valida) 
    {
      if (e.keyCode != 44) 
      {
        e.returnValue = false;
      }
      return;
    }
    e.returnValue = false;
  }
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function cartMiniInfoInstance() {
  this.callBack = null;
  this.callerContext = null;
  this.productCount = 0;
  this.price = 0;
  this.priceClub = 0;
  this.priceRetail = 0;
  this.weightOunces = 0;
  this.products = new Array();
  return this;
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function pause(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) 
    {
      now = new Date();
      if (now.getTime() > exitTime) 
      return;
    }
}



function cartMiniViewInstance() {
  this.callBack = null;
}



function CheckDomain(String) {
  var Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-.";
  var i;
  var c;
  if (String.charAt(0) == '-') 
  return false;
  if (String.charAt(0) == '.') 
  return false;
  if (String.charAt(String.length - 1) == '-') 
  return false;
  if (String.charAt(String.length - 1) == '.') 
  return false;
  for (i = 0; i < String.length; i++) 
    {
      c = String.charAt(i);
      if (Letters.indexOf(c) < 0) 
      return false;
    }
  return true;
}



function getExpDate(days, hours, minutes) {
  var expDate = new Date();
  if (typeof (days) == "number" && typeof (hours) == "number" && typeof (hours) == "number") 
  {
    expDate.setDate(expDate.getDate() + parseInt(days));
    expDate.setHours(expDate.getHours() + parseInt(hours));
    expDate.setMinutes(expDate.getMinutes() + parseInt(minutes));
    return expDate.toGMTString();
  }
}



function getradiovalue(theRadio) {
  var theRadioLen = theRadio.length;
  var theRadioValue = false;
  if (theRadioLen == undefined) 
  {
    if (theRadio.checked) 
    {
      theRadioValue = theRadio.value;
    }
  } else {
    for (theRadioI = 0; theRadioI < theRadioLen; theRadioI++) 
      {
        if (theRadio[theRadioI].checked) 
        {
          theRadioValue = theRadio[theRadioI].value;
          break;
        }
      }
  }
  return theRadioValue;
}



function imgload(imgID) {
  imgID.src = "inc/authImage.jsp?" + Math.random();
}



function cartMiniListInfoInstance() {
  this.callBack = null;
  this.callerContext = null;
  this.productCount = 0;
  this.price = 0;
  this.priceClub = 0;
  this.priceRetail = 0;
  this.weightOunces = 0;
  this.products = new Array();
  return this;
}



function phraseCharte() {
  return "Les informations publi\ufffdes dans le forum ne sont en aucun cas susceptibles de se substituer \ufffd une consultation ou \ufffd un diagnostic d'un professionnel (m\ufffddecin, psychologue, sexologue,\ufffd)";
}



function GetModerationPath() {
  return "/J1LMS6";
}



function TagsBetweenPilerDAndHParch() {
}



function stripPx(coord) {
  var idx = coord.indexOf('px');
  if (idx > -1) 
  {
    return coord.substring(0, idx);
  } else {
    return coord;
  }
}



function binaryLength_UTF8(str) {
  var bytes, charCode, a, len;
  bytes = 0;
  for (a = 0 , len = str.length; a < len; a++) 
    {
      charCode = str.charCodeAt(a);
      if (charCode < 128) 
      bytes += 1; else if (charCode < 2048) 
      bytes += 2; else if (charCode < 65536) 
      bytes += 3; else bytes += 4;
    }
  return bytes;
}



function justReturn() {
  return;
}



function xoopsInsertText(domobj, text) {
  if (domobj.createTextRange && domobj.caretPos) 
  {
    var caretPos = domobj.caretPos;
    caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
  } else if (domobj.getSelection && domobj.caretPos) 
  {
    var caretPos = domobj.caretPos;
    caretPos.text = caretPos.text.charat(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
  } else {
    domobj.value = domobj.value + text;
  }
}



function __dnn_ClientAPIEnabled() {
  return typeof (dnn) != 'undefined';
}



function cartMiniListViewInstance() {
  this.callBack = null;
  this.visible = false;
}



function AdjustLeftNav(nPixelsPerMenuItem, nLeftNavSize) {
  return;
}



function AdjustTopNav(nPixelsPerMenuItem, nLeftNavSize) {
  return;
}



function SetOnBoardURL() {
  return 'http://www.onboardnavigator.com/webcontent/OBWC_Results.aspx?AID=134-8e8091169b1d';
}



function setChatSession(szChatSession) {
  _ChatSession = szChatSession;
  _SessionID = szChatSession;
}



function setXSDUser(szUser) {
  _LO = szUser;
}



function catalogInfoInstance() {
  this.callBack = null;
  this.callerContext = null;
  this.categoryID = 0;
  this.parentCategoryId = -1;
  this.totalCount = 0;
  this.categories = new Array();
  this.products = new Array();
}



function getCookieValField(offset, stringtot) {
  var endstr = stringtot.indexOf("%", offset);
  if (endstr == -1) 
  endstr = stringtot.length;
  return unescape(stringtot.substring(offset, endstr));
}



function GetCookieField(chp, stringtot) {
  var arg = chp + ":";
  var alen;
  alen = arg.length;
  var clen;
  if (stringtot != null) 
  {
    clen = stringtot.length;
    var i = 0;
    while (i < clen) 
      {
        var j = i + alen;
        if (stringtot.substring(i, j) == arg) 
        return getCookieValField(j, stringtot);
        i = i + 1;
        if (i == 0) 
        break;
      }
  }
  return null;
}



function reverse(arg_str) {
  var inp = arg_str;
  var outp = '';
  for (i = 0; i <= inp.length; i++) 
    {
      outp = inp.charAt(i) + outp;
    }
  return outp;
}



function addItem(o) {
  if (o.checked == false) 
  {
    if (ids.indexOf("," + o.value + ",") != -1) 
    {
      var v = o.value + ",";
      var idst = ids;
      ids = idst.ReplaceAll(v, "");
      saveIds();
    }
  } else {
    var v = o.value;
    if (Math.round(v) == v) 
    {
      ids += o.value + ",";
      saveIds();
    }
  }
}



function hasValue(v) {
  return v != undefined && v != "" && v != null && v != "null";
}



function jsTools_strTrim(str) {
  var i = 0;
  var j = str.length - 1;
  trimstr = "";
  if (j < 0) 
  return trimstr;
  flagbegin = true;
  flagend = true;
  while (flagbegin == true) 
    {
      if (str.charAt(i) == ' ') 
      i++; else flagbegin = false;
    }
  while (flagend == true) 
    {
      if (str.charAt(j) == ' ') 
      j--; else flagend = false;
    }
  if (j < i) 
  return trimstr; else trimstr = str.substring(i, j + 1);
  return trimstr;
}



function ks_button_chgclr(ctrl, action) {
  var st = ctrl.style;
  if (st == null) 
  return;
  switch (action) {
    case 1:
      st.borderLeftColor = "#001B3D";
      st.borderTopColor = "#001B3D";
      st.borderRightColor = "#365B7F";
      st.borderBottomColor = "#365B7F";
      break;
    case 2:
    case 4:
      st.borderLeftColor = "#365B7F";
      st.borderTopColor = "#365B7F";
      st.borderRightColor = "#001B3D";
      st.borderBottomColor = "#001B3D";
      break;
    case 3:
    default:
      break;
  }
}



function jsTools_Left(str, n) {
  if (n <= 0) 
  return ""; else if (n > String(str).length) 
  return str; else return String(str).substring(0, n);
  return "";
}



function jsTools_Right(str, n) {
  if (n <= 0) 
  return ""; else if (n > String(str).length) 
  return str; else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
  return "";
}



function StringBuilder(str) {
  this._buffer = [];
  if (str) 
  {
    this.append(str);
  }
}



function Dictionary() {
  this.buffer = [];
}



function catalogCatalogViewLoadCallback(category) {
  return function() {
  catalogViewLoad(category["id"], __catalogView.flag);
  return true;
};
}



function Collection() {
  this.items = [];
}



function productInfoInstance() {
  this.callBack = 0;
  this.callerContext = 0;
  this.products = new Array();
  this.totalCount = 0;
}



function V2validateData(strValidateStr, objValue, strError) {
  var epos = strValidateStr.search("=");
  var command = "";
  var cmdvalue = "";
  if (epos >= 0) 
  {
    command = strValidateStr.substring(0, epos);
    cmdvalue = strValidateStr.substr(epos + 1);
  } else {
    command = strValidateStr;
  }
  switch (command) {
    case "req":
    case "required":
      {
        if (eval(objValue.value.length) == 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + " : Required Field";
          }
          alert(strError);
          return false;
        }
        break;
      }
    case "maxlength":
    case "maxlen":
      {
        if (eval(objValue.value.length) > eval(cmdvalue)) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + " : " + cmdvalue + " characters maximum ";
          }
          alert(strError + "\n[Current length = " + objValue.value.length + " ]");
          return false;
        }
        break;
      }
    case "minlength":
    case "minlen":
      {
        if (eval(objValue.value.length) < eval(cmdvalue)) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + " : " + cmdvalue + " characters minimum  ";
          }
          alert(strError + "\n[Current length = " + objValue.value.length + " ]");
          return false;
        }
        break;
      }
    case "alnum":
    case "alphanumeric":
      {
        var charpos = objValue.value.search("[^A-Za-z0-9]");
        if (objValue.value.length > 0 && charpos >= 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": Only alpha-numeric characters allowed ";
          }
          alert(strError + "\n [Error character position " + eval(charpos + 1) + "]");
          return false;
        }
        break;
      }
    case "num":
    case "numeric":
      {
        var charpos = objValue.value.search("[^0-9]");
        if (objValue.value.length > 0 && charpos >= 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": Only digits allowed ";
          }
          alert(strError + "\n [Error character position " + eval(charpos + 1) + "]");
          return false;
        }
        break;
      }
    case "phone":
      {
        var charpos = objValue.value.search("[^0-9-]");
        if (objValue.value.length > 0 && charpos >= 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": Only digits allowed ";
          }
          alert(strError + "\n [Error character position " + eval(charpos + 1) + "]");
          return false;
        }
        break;
      }
    case "alphabetic":
    case "alpha":
      {
        var charpos = objValue.value.search("[^A-Za-z]");
        if (objValue.value.length > 0 && charpos >= 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": Only alphabetic characters allowed ";
          }
          alert(strError + "\n [Error character position " + eval(charpos + 1) + "]");
          return false;
        }
        break;
      }
    case "alnumhyphen":
      {
        var charpos = objValue.value.search("[^A-Za-z0-9-_]");
        if (objValue.value.length > 0 && charpos >= 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": characters allowed are A-Z,a-z,0-9,- and _";
          }
          alert(strError + "\n [Error character position " + eval(charpos + 1) + "]");
          return false;
        }
        break;
      }
    case "username":
      {
        var charpos = objValue.value.search("[^A-Za-z0-9_]");
        if (objValue.value.length > 0 && charpos >= 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": characters allowed are A-Z,a-z,0-9 and _";
          }
          alert(strError + "\n [Error character position " + eval(charpos + 1) + "]");
          return false;
        }
        break;
      }
    case "alphaunderscore":
      {
        var charpos = objValue.value.search("[^A-Za-z0-9]");
        if (objValue.value.length > 0 && charpos >= 0) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": characters allowed are A-Z,a-z,0-9 and _";
          }
          alert(strError + "\n [Error character position " + eval(charpos + 1) + "]");
          return false;
        }
        break;
      }
    case "email":
      {
        if (!validateEmailv2(objValue.value)) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": Enter a valid Email address ";
          }
          alert(strError);
          return false;
        }
        break;
      }
    case "lt":
    case "lessthan":
      {
        if (isNaN(objValue.value)) 
        {
          alert(objValue.name + ": Should be a number ");
          return false;
        }
        if (eval(objValue.value) >= eval(cmdvalue)) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + " : value should be less than " + cmdvalue;
          }
          alert(strError);
          return false;
        }
        break;
      }
    case "gt":
    case "greaterthan":
      {
        if (isNaN(objValue.value)) 
        {
          alert(objValue.name + ": Should be a number ");
          return false;
        }
        if (eval(objValue.value) <= eval(cmdvalue)) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + " : value should be greater than " + cmdvalue;
          }
          alert(strError);
          return false;
        }
        break;
      }
    case "regexp":
      {
        if (objValue.value.length > 0) 
        {
          if (!objValue.value.match(cmdvalue)) 
          {
            if (!strError || strError.length == 0) 
            {
              strError = objValue.name + ": Invalid characters found ";
            }
            alert(strError);
            return false;
          }
        }
        break;
      }
    case "dontselect":
      {
        if (objValue.selectedIndex == null) 
        {
          alert("BUG: dontselect command for non-select Item");
          return false;
        }
        if (objValue.selectedIndex == eval(cmdvalue)) 
        {
          if (!strError || strError.length == 0) 
          {
            strError = objValue.name + ": Please Select one option ";
          }
          alert(strError);
          return false;
        }
        break;
      }
  }
  return true;
}



function StranText(txt, toFT, chgTxt) {
  if (txt == "" || txt == null) 
  return "";
  toFT = toFT == null ? BodyIsFt : toFT;
  if (chgTxt) 
  txt = txt.replace((toFT ? "\ufffd\ufffd" : "\ufffd\ufffd"), (toFT ? "\ufffd\ufffd" : "\ufffd\ufffd"));
  if (toFT) 
  {
    return Traditionalized(txt);
  } else {
    return Simplized(txt);
  }
}



function JTPYStr() {
  return '\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xb0\u04f0\u0570\u06b0\u0730\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u02b1\u03f1\u0431\u0571\u07f1\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03b2\u03f2\u0432\u0472\u04b2\u04f2\u0532\u0572\u05b2\u05f2\u07b2\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xb3\u0133\u0173\u01b3\u0373\u03f3\u04b3\u0573\u0673\u06f3\u0733\u0773\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xb4\u01f4\u02b4\u0374\u03f4\u0434\u0474\u04f4\u0534\u0574\u0734\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01b5\u02f5\u0435\u04f5\u0775\u07b5\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0136\u01b6\u0376\u03f6\u0436\u04b6\u04f6\u0536\u05b6\u0676\u06f6\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xf7\u0137\u0277\u03f7\u0477\u05f7\u0637\u0737\u07f7\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xf8\u01b8\u01f8\u0278\u03f8\u0478\u04f8\u0538\u0578\u05b8\u0678\u06b8\u07b8\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01b9\u02f9\u0439\u0639\u06f9\u0779\u07f9\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u04ba\u05fa\u063a\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01bb\u047b\u04fb\u053b\u067b\u07fb\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xfc\u01bc\u01fc\u02bc\u033c\u037c\u043c\u053c\u057c\u05bc\u063c\u06fc\u077c\u07fc\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xbd\xfd\u013d\u017d\u023d\u027d\u02bd\u03bd\u03fd\u057d\u05fd\u06be\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01fe\u027e\u053e\u067e\u077e\ufffd\ufffd\ufffd\ufffd\ufffd\u073d\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u017f\u01ff\u03bf\u047f\u04bf\u067f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xab\xac\xae\xaf\xb0\xb1\xb2\xb3\xb8\xbb\xbc\xbd\xbf\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xe1\xe8\xea\xed\xf3\xf4\xf9\xfb\xfe\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0131\u0136\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0161\u0162\u0165\u0166\u0167\u0168\u0169\u0171\u0175\u0177\u0178\u0179\u017b\u017d\ufffd\ufffd\ufffd\u04f9\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01ad\u01ae\u01b5\u01b6\u01bb\u01be\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u01e3\u01e4\u01e5\u01e6\u01e8\u01e9\u01eb\u01ee\u01ef\u01f1\u01f3\u01f4\u01f5\u01f9\u01fa\u01fd\u01fe\u01ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0223\u0227\u0228\u0230\u0234\u0235\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0261\u0265\u0267\u0268\u026c\u0271\u0274\u0278\u0279\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u02a4\u02a5\u02a6\u02a8\u02aa\u02ab\u02ac\u02b1\u02b4\u02b5\u02b6\u02bb\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u02e7\u02eb\u02ed\u02f0\u02f3\u02f5\u02f6\u02f8\u02ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0321\u0322\u0327\u032f\u0330\u0331\u0332\u0333\u0337\u0338\u033e\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u036d\u0373\u0377\u037c\u037f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03a4\u03a5\u03a7\u03aa\u03ab\u03ac\u03ad\u03b0\u03b1\u03b3\u03bd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u03ee\u03f0\u03f3\u03f7\u03f8\u03fa\u03fd\u03ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0425\u042b\u042d\u042e\u042f\u0432\u0433\u0434\u043a\u043b\u043f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0461\u0462\u0464\u0467\u046b\u046f\u0470\u0471\u0475\u0476\u0477\u0479\u047b\u047c\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u04a1\u04a2\u04a3\u04a4\u04a5\u04a9\u04af\u04b3\u04b5\u04b6\u04bd\u04bf\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u04e3\u04e4\u04e5\u04e6\u04e7\u04e8\u04e9\u04ea\u04eb\u04ec\u04f1\u04f4\u04f5\u04f6\u04f8\u04fb\u04fd\u04ff\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0524\u0526\u0527\u0528\u052f\u0530\u0531\u0532\u0535\u0536\u0538\u053c\u053e\u053f\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0561\u0562\u0569\u056b\u056e\u0571\u0575\u0576\u0577\u0578\u057b\u057d\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u05a1\u05a3\u05a4\u05af\u05b0\u05b4\u05bd\u05bf\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u05e4\u05e8\u05e9\u05ea\u05ec\u05ee\u05ef\u05f0\u05f1\u05f3\u05f4\u05f6\u05f8\u05f9\u05fa\u05fb\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\xf4\u03aa\u05bb\ufffd\ufffd\u05fc\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0439';
}



function FTPYStr() {
  return '\ufffd}\ufffd@\ufffdK\ufffd\ufffd\ufffdO\ufffd\ufffdW\ufffd\ufffd\ufffdT\ufffd[\ufffd\ufffd\ufffdC\ufffdk\ufffdO\ufffd\u037d\ufffd\ufffd^\ufffdr\ufffd\ufffd\uf58c\ufffd\ufffd\ufffd\ufffdU\u0745\u0610\ufffd^\ufffdN\ufffd\ufffdv\ufffd\ufffd\ufffdP\ufffd\ufffd\ufffd\ufffd\ufffd]\u07c5\ufffd\ufffd\ufffdH\u05c3\ufffdq\ufffdp\ufffdT\ufffdl\ufffdI\ufffde\ufffdP\uf793\ufffd\ufffd\ufffd\ufffdK\ufffdg\ufffdN\ufffda\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffdM\ufffdK\ufffdN\ufffdn\u0153\ufffd}\ufffd\ufffd\ufffd\u0203\u051cy\ufffd\ufffd\u050c\ufffdv\ufffd\ufffd\ufffds\ufffd\u05cb\ufffdp\ufffdP\ufffdb\ufffdU\ue748\ufffd\ufffdL\ufffdL\ufffd\ufffd\ufffdc\ufffdS\ufffd\ufffd\ufffdn\u0707\ufffd\u0609m\ufffd\ufffdr\ufffd\u03b7Q\ufffd\ufffd\ufffd\ufffdG\ufffdV\ufffdt\ufffdY\ufffdu\ufffdX\ufffd\ufffd_\ufffdx\ufffd\ufffd\ufffd\ufffd\ufffdP\ufffdI\ufffdI\ufffdh\ufffd\ufffd\ufffdN\ufffdz\ufffdr\ufffdA\ufffd\ufffd\ufffd|\u030e\ufffd\ufffd\ufffd\ufffd\ufffdJ\ufffd\ufffd\ufffdN\ufffd\ufffd\ufffdb\ufffdo\ufffd~\ufffdn\x94\ufffd[\ufffd\ufffd\u0105\ufffd\ufffd\ufffd\ufffdZ\ufffde\ufffd_\ufffd\ufffd\ufffdJ\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0111\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdh\u028e\ufffdn\ufffdv\ufffdu\ufffd\ufffd\ufffd\ufffdI\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdf\ufffd\ufffd\ufffdc\ufffd|\ub29d\ufffd\ufffd\ufffd{\ufffd\ufffd\u0559\ufffdB\ufffd\ufffd\ufffdV\u04c6\ufffd|\ufffd\u04d7\ufffd\ufffd\ufffd\ufffdY\ufffd\u066a\ufffd\ufffdx\u0640\ufffd\u5454\u0f84\ufffd\ufffd\ua80c\ufffd\ufffd\ufffd\ufffdD\ufffdg\ufffdZ\ufffdZ\ufffd~\u04de\ufffd\ufffd\ufffdI\ufffd\ufffd\ufffd\ufffd\ufffdD\ufffdE\ufffdl\ufffdP\ufffdy\ufffdm\ufffd\ufffdC\ufffd\ufffd\ufffd\ufffd\u061c\ufffd\ufffdL\ufffd\ufffd\ufffdw\ufffdU\ufffdM\ufffd\ufffd\ufffd\ufffd\ufffd^\ufffd\ufffd\ufffdS\ufffdS\ufffd\ufffd\ufffdh\ufffdL\ufffd\ufffd\ufffdT\ufffdp\ufffdS\ufffdP\ufffdw\u0757\ufffd\ufffd\ufffdo\ufffdx\ufffd}\u0613\u04c7\ufffdD\ufffd`\u0513\ufffd}\ufffdw\ufffd\ufffd\ufffds\ufffd\ufffd\ufffdM\ufffd\ufffd\u44feV\ufffd\ufffd\ufffdV\u6014R\ufffd\ufffdw\ufffdt\ufffd\ufffd\ufffdo\ufffdm\ufffd\u0615\ufffdh\ufffd\u03d8\ufffd\u064f\ufffd\ufffd\ufffdM\ue644\ufffd\ufffdP\ufffd^\ufffd^\ufffdT\u061e\ufffdV\u048e\ufffd\ufffdw\ufffd\ufffd|\u0709\u050e\ufffd\ufffd\ufffdF\ufffd\ufffd\u0741\ufffdL\u5047\ufffd\ufffd^\ufffd\ufffdn\ufffdh\ufffdu\ufffdQ\ufffdR\ufffdM\ufffdZ\ufffdt\ufffd\ufffd\ufffd\ufffdo\ufffd\ufffd\ufffdW\ufffdA\ufffd\ufffd\ufffd\ufffd\u0512\ufffd\u0449\u011ag\ufffdh\u07c0\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdo\ufffdS\ufffde\ufffd]\ufffdx\ufffd\ufffd\ufffdV\ufffdx\ufffd\ufffd\ufffdZ\ufffd\ufffd\ufffdM\ufffdd\ufffdL\u021d\ufffd\ufffd\u2deb@\u061b\ufffd\ufffd\ufffd\ufffd\ufffdC\ufffde\ufffd\ufffd\ufffdI\ufffdu\ufffd\ufffd\ufffd\ufffd\ufffdO\u074b\ufffd\ufffd\ufffdD\ufffd\ufffd\ufffdE\ufffd\ufffd\ufffd\ufffd\u04cb\u04db\ufffdH\ufffd^\ufffdo\ufffdA\ufffdv\ufffda\ufffdZ\u26c3r\ufffd{\ufffd\ufffd\ufffdO\ufffd\u0539{\ufffdg\ufffdD\ufffd}\ufffdO\ufffdz\ufffdA\ufffd|\ufffd\ufffd\ufffd\uce86\ufffd\ufffd\ufffdp\ufffd]\ufffd\ufffd\ufffdb\ufffd`\ufffdv\u048a\ufffdI\u015e\ufffd\ufffd\ufffdT\ufffdu\ufffdR\ufffd\ufffd\ufffd{\ufffdY\ufffd\ufffd\ufffd\ufffd\ufffdv\ufffdu\ufffdz\ufffd\ufffd\ufffd\u0254\ufffd\ufffdq\ufffdC\ufffde\ufffd_\ufffd\ufffdU\ufffdg\ufffdI\ufffd^\ufffdM\ufffdA\ufffd\ufffd\ufffdo\ufffd@\ufffd\ufffd\ufffdi\ufffdo\ufffdR\ufffd\ufffd\ufffdd\ufffd\ufffd\ufffdQ\ufffdm\ufffd\ufffd\ufffdf\ufffdx\ufffde\ufffd\ufffd\u43d1\u0584\ufffd\ufffdN\ufffd\ufffd\ufffd\u071d\ufffd\ufffdY\ufffd]\ufffd\xfeo\ufffd\ufffdH\u0594\ufffdM\ufffdx\ufffda\ufffdM\ufffd\ufffd\ufffdG\ufffdX\ufffdQ\ufffdE\ufffd^\ufffdx\u070a\ufffdE\ufffd_\ufffdP\ufffdw\ufffd\ufffd\ufffdn\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u045d\ufffdF\ufffdK\ufffd~\ufffd\ufffd\ufffdV\ufffd\ufffdr\u031d\ufffdh\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffdU\ufffd\u03de\ufffdD\ufffdR\ufffd\ufffd\u0647\ufffd{\ufffd\u0694r\ufffd@\ufffd@\ufffdm\ufffd\ufffd\u05ce\ufffd\ufffd\ufffd[\ufffd\ufffd\ufffd|\ufffd\ufffd\ufffdE\ufffd\u0184\u069d\ufffd\ufffd\ufffd\ufffdD\ufffd\ufffd\ue41cI\ufffdh\ufffdx\ufffdY\ufffd\ufffd\ufffdY\ufffd\ufffd[\ufffd\u045er\ufffd`\ufffdz\x93\u024f\ufffdB\u7811z\ufffdi\ufffd\ufffd\ufffd\ufffd\u0118\u6711\u065f\ufffd\ufffd\ufffd\ufffdZ\ufffd\ufffd\ufffd\ufffd\ufffdv\u054f\ufffd\ufffd\ufffd|\u70abC\ufffdR\ufffd\ufffd\ufffd[\ufffdC\ufffdU\ufffdg\u23dcR\ufffd`\ufffdX\ufffdI\ufffds\ufffd\ufffd\ufffd\ufffd@\ufffd\ufffd\ufffd\ufffd\u0154n\ufffd]\ufffd\u01ca\u44e7\ufffdt\ufffdJ\ufffdR\ufffdB\ufffd]\ufffdt\ufffd\ufffd\ufffdu\u0314\ufffd\ufffd\ufffdT\ufffd\ufffd\ufffd\ufffd\ufffdH\ufffd\ufffd\ufffdX\ufffdH\ufffd\u04bf|\ufffd]\ufffdV\ufffdG\ufffdn\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdy\ufffd\ufffd\u0746\ufffd\ufffd\ufffd\ufffd\ufffdS\ufffd]\u0553\ufffd}\ufffd_\u07c9\u833bj\ufffd\ufffdj\ufffd\ufffd\ufffd\ufffd\ufffda\u039b\ufffdR\ufffdR\ufffd\ufffd\ufffdI\ufffd\ufffdu\ufffd~\ufffd}\ufffdm\ufffdz\ufffdU\ufffdM\u0599\u0608\ufffd^\ufffdT\ufffdQ\ufffd\ufffd\ufffdq\ufffd]\ufffdV\ufffdT\ufffd\ufffd\ufffd\ufffd\ufffdi\ufffd\ufffd\ufffdi\ufffd\ufffd\u0492\ufffdd\ufffd\ufffd\ufffdR\ufffd\u7451\ufffd}\ufffdQ\ufffd\u0587\ufffd\ufffd\ufffd\ufffdc\ufffd{\ufffdy\ufffd\ufffd\ufffdX\ufffd\ufffd\ufffd[\ufffdH\u0101\ufffdf\ufffd\ufffd\ufffd\ufffdB\x99\ufffdm\ufffd\u61d9\ufffd\ufffd\ufffd\u5e14Q\ufffd\ufffd\ufffdo\ufffd~\u0113\ufffd\ufffd\ufffdr\ufffd\ufffd\ufffdZ\ufffdW\ufffdt\ufffd\ufffd\ufffdI\ufffda\ufffdP\ufffd\ufffd\ufffd\ufffdr\ufffd\ufffd\ufffdi\ufffd_\ufffdh\ufffdl\u061a\ufffdO\ufffd{\ufffdu\ufffd\ufffd\ufffdH\ufffd\ufffd\u4058\ufffd\ufffdV\u011a\ufffdR\ufffdT\ufffdM\ufffd\ufffd\ufffd\u25c9\u04d9\ufffd\ufffd\ufffdL\ufffdT\ufffdU\ufffdw\ufffd\ufffd\ufffdt\ufffdX\ufffdQ\ufffd\ufffd\ufffd\ufffdl\ufffdq\ufffd\ufffd\ufffd\u0720\ufffd\ufffdN\ufffd\ufffd\ufffd\ufffd\ufffd@\ufffd\ufffd\u0303S\ufffdN\ufffd[\ufffd`\ufffdJ\ufffdH\ufffdp\ufffd\ufffdA\ufffd\u0548\ufffdc\ufffd\ufffd\ufffdF\u0685\ufffd^\ufffd|\ufffd\ufffdx\ufffdE\ufffd\ufffd\ufffd\ufffds\ufffdo\u05cc\ufffd\ufffd\ufffd_\ufffd@\ufffd\ufffd\ufffdg\ufffdJ\ufffdx\ufffds\ufffdq\u071b\ufffdJ\ufffdc\ufffd\ufffd\ufffd\ufffd\ufffd_\ufffdw\u0650\ufffd\ufffd\ufffd\ufffd}\ufffd\u07dd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdY\ufffd\ufffd\ufffdW\ufffd\u0660\ufffd\ufffd\ufffd\ufffd\ufffdp\ufffd\ufffdB\ufffdd\ufffdz\ufffd\ufffd\ufffdO\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdI\ufffdB\x95\ufffdK\ufffd\ufffd\ufffd}\ufffd\ufffd\ufffd{\ufffd\ufffd\u050a\ufffd\u0195r\ufffdg\ufffd\ufffd\ufffdR\ufffd\ufffd\ufffd\ufffd\u0495\u0507\ufffd\u06ebF\ufffd\ufffd\u0754\ufffd\ufffd\ufffdH\ufffd\ufffd\ufffdg\ufffd\ufffd\ufffdQ\ufffd\ufffd\ufffd\ufffd\ufffdp\ufffdl\ufffd\ufffd\ufffd\ufffdf\ufffdT\ufffdq\ufffdz\ufffd\x96\ufffdZ\ufffd\ufffdA\ufffdb\ufffd\ufffdK\ufffdV\ufffdC\ufffdm\ufffd\ufffd\ufffdq\ufffdO\ufffdp\ufffdS\ufffds\ufffd\ufffd\ufffdi\ufffdH\ufffd\ufffdE\ufffd\ufffd\u061d\ufffdc\ufffd\ufffd\ufffd\ufffd\ufffdT\u0544\ufffdU\ufffd\ufffd\ufffdC\ufffd\ufffdl\ufffdv\ufffd`\ufffdR\ufffd}\ufffdw\ufffd\u03d7l\ufffdN\ufffdF\ufffdd\xa0\ufffdN\ufffd~\ufffdy\ufffd^\ufffdD\ufffdT\ufffdF\ufffdj\u0351\xd3\ufffdr\ufffdW\ufffdE\ufffdD\ufffdm\ufffd\ufffd\ufffd\ufffd\ufffdB\ufffdf\ufffdW\ufffdf\ufffd`\ufffd\ufffdH\ufffdS\u0214\ufffd\ufffd\ufffd^\ufffd\ufffd\ufffd^\ufffdl\ufffd\ufffd\x84\ufffdy\ufffd\ufffd\ufffd\ufffd\ufffdY\ufffd\ufffd\u0381\ufffdu\ufffdC\ufffd\ufffd\ufffdu\ufffd\ufffd\ufffd_\ufffdo\u028f\ufffd\u01c9]\ufffdF\ufffd\ufffd\ufffd`\ufffda\ufffd\ufffd\ufffdu\ufffd\ufffd\u3291\ufffd\ufffdr\u0760\ufffd{\ufffdb\ufffdM\ufffdB\ufffdv\ufffdr\ufffdw\ufffdy\ufffdt\ufffd\ufffde\ufffd@\ufffdU\ufffdF\ufffdI\ufffdh\ufffdW\ufffdw\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdl\u0514\ufffd\ufffd\u0292\ufffdN\ufffd\u0507[\u03d0\ufffdf\ufffd\ufffd\ufffdy\ufffd{\ufffdC\ufffd\ufffd\ufffda\ufffdx\ufffd\ufffd\ufffdd\ufffd\ufffd\ufffdn\ufffdC\u0313\ufffdu\ufffd\ufffdS\ufffdw\ufffdm\u070e\ufffd\ufffd\ufffdx\ufffd_\ufffdk\ufffdW\ufffd\ufffd\u0503\ufffd\ufffd\ufffdZ\u04d6\u04cd\ufffdd\ufffd\ufffd\ufffdf\ufffd\ufffd\u04e0\u939f\ufffd\ufffd}\ufffd\ufffd\ufffd\ufffd\ufffdW\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdV\ufffd\ufffd\ufffdP\ufffd\ufffd\ua5b0W\ufffdB\ufffd\u04ec\ufffd\ufffdu\ufffd\ufffd\ufffdb\ufffdG\ufffd{\u02ce\ufffd\ufffd\ud4d8I\ufffd~\ufffdt\ufffd\ufffdU\ufffdz\ufffdx\ufffd\ufffd\u03c1\u02c7\ufffd|\ufffd\ufffd\ufffdx\u0504\ufffdh\ufffdx\ufffdg\ufffd\ufffd\ufffd[\ufffda\ufffd\ufffdy\uf2d9\u044b\ufffd\ufffd\ufffdt\ufffd\ufffd\u039e\ufffdI\ufffd\ufffd\u03c9\ufffdf\ufffd\u0453\ufffd\ufffdb\ufffdx\u0501\ufffd\ufffd\ufffd\ufffd\ufffdn\ufffd]\u266aq\ufffd[\ufffdT\u075b\ufffd~\ufffdO\ufffd\ufffd\ufffdc\ufffdZ\ufffdZ\ufffdn\ufffdR\ufffdz\ufffdu\ufffdA\ufffdS\ufffdx\ufffdY\ufffd@\ufffd@\ufffdT\ufffdA\ufffd\ufffd\ufffdh\ue2bcs\ufffdS\u800e[\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffdy\ufffd\ufffd\ufffdE\ufffd\ufffdN\ufffdj\ufffd\ufffd\ufffd\ufffds\ufffd\ufffd\ufffdd\ufffd\ufffd\ufffd\ufffd\u065d\ufffdE\ufffdv\u83d7\ufffd\ufffd^\u061f\ufffd\ufffdt\ufffd\ufffd\ufffd\u065b\ufffd\ufffd\ufffd\ufffd\u0708\ufffd\ufffdl\ufffdp\ufffdS\ufffd\ufffd\u05b1K\ufffd\ufffd\u075a\ufffd\u45e3\ufffd\ufffd`\ufffd\ufffd\ufffdq\ufffd\ufffd\ufffd~\xdb\ufffdw\ufffdU\ufffdH\ufffdN\ufffd@\u0611\u1602\ufffd\ufffd\ufffd\ua1d2\uac60\ufffdb\ufffd\ufffd\ufffd\ufffd\ufffdC\ufffd\ufffd\x9a\ufffd\u033c\ufffd\ufffd\ufffd\ufffdS\ufffd\ufffd\ufffd|\ufffdR\ufffdK\ufffdN\ufffd[\ufffd\ufffda\ufffdS\ufffd\ufffd\ufffd\ufffd\ufffdE\ufffdi\ufffdT\ufffdD\ufffdT\ufffd\ufffd\ufffd\ufffd\ufffdA\ufffdT\ufffdB\ufffdv\ufffd\ufffd\ufffdu\ufffdD\u064d\ufffd\ufffd\ufffdf\ufffdb\ufffdy\ufffd\u0460\ufffd\ufffdF\u0658\ufffd\ufffd\ufffdY\u0541\ufffd\ufffd\u019d\ufffdY\ufffdn\u06d9\ufffdC\ufffd\ufffd\ufffdv\ufffdu\ufffd{\ufffdM\u837f@\ufffd\ufffdN\ufffd\ufffd\ufffdb\ufffd\ufffd\ufffd\u0286\ufffd\ufffd\ufffde\ufffdZ\ufffdN\u501b\ufffd';
}



function addEvent(obj, event_name, func_name) {
  if (obj.attachEvent) 
  {
    obj.attachEvent("on" + event_name, func_name);
  } else if (obj.addEventListener) 
  {
    obj.addEventListener(event_name, func_name, true);
  } else {
    obj["on" + event_name] = func_name;
  }
}



function removeEvent(obj, event_name, func_name) {
  if (obj.detachEvent) 
  {
    obj.detachEvent("on" + event_name, func_name);
  } else if (obj.removeEventListener) 
  {
    obj.removeEventListener(event_name, func_name, true);
  } else {
    obj["on" + event_name] = null;
  }
}



function stopSelect(obj) {
  if (typeof obj.onselectstart != 'undefined') 
  {
    addEvent(obj, "selectstart", function() {
  return false;
});
  }
}



function curTop(obj) {
  toreturn = 0;
  while (obj) 
    {
      toreturn += obj.offsetTop;
      obj = obj.offsetParent;
    }
  return toreturn;
}



function curLeft(obj) {
  toreturn = 0;
  while (obj) 
    {
      toreturn += obj.offsetLeft;
      obj = obj.offsetParent;
    }
  return toreturn;
}



function isNumber(a) {
  return typeof a == 'number' && isFinite(a);
}



function compareUrlBothVersions(tabUrl, pageUrl) {
  var pageID = pageUrl.match(/http:\/\/.+\/([\w\d]*)\.stm/);
  var tabID = tabUrl.match(/http:\/\/.+\/([\w\d]*)\.stm/);
  var urlPartRegex = new RegExp("http://.+/((sport)*[12]/hi|local)/(world/)*(.+)", "i");
  var pageUrlParts = pageUrl.match(urlPartRegex);
  var tabUrlParts = tabUrl.match(urlPartRegex);
  if (pageUrl == tabUrl) 
  {
    return true;
  } else if (pageID != null && tabID != null) 
  {
    return pageID[1] == tabID[1];
  } else if (pageUrlParts != null && tabUrlParts != null) 
  {
    var lastMatch = pageUrlParts.length - 1;
    return pageUrlParts[lastMatch].split("default.stm")[0] == tabUrlParts[lastMatch].split("default.stm")[0];
  } else {
    return false;
  }
}



function PRODUCTVIEWTABNONE() {
  return -1;
}



function PRODUCTVIEWTABDETAILS() {
  return 0;
}



function PRODUCTVIEWTABIMAGES() {
  return 1;
}



function PRODUCTVIEWTABVIDEOS() {
  return 2;
}



function PRODUCTVIEWTABDOWNLOADS() {
  return 3;
}



function PRODUCTVIEWTABUNKNOWN() {
  return 4;
}



function PRODUCTVIEWCALLERSHOP() {
  return 0;
}



function PRODUCTVIEWCALLERWL() {
  return 1;
}



function CATVIEWDSTTYPEPRODUCT() {
  return 1;
}



function CATVIEWDSTTYPECOLLECTION() {
  return 2;
}



function CATVIEWSORTTYPENAMEASC() {
  return "nameasc";
}



function CATVIEWSORTTYPENAMEDESC() {
  return "namedesc";
}



function CATVIEWSORTTYPEPRICEASC() {
  return "priceasc";
}



function CATVIEWSORTTYPEPRICEDESC() {
  return "pricedesc";
}



function GETROOTURL() {
  return "http://www.annthegran.com";
}



function productViewTabSelect(tab) {
  return function() {
  __productView.selectedTabId = tab;
  productViewDrawTabs();
  productViewDrawTabContent(tab);
  return true;
};
}



function productViewTabDrawNone() {
}



function CreateArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) 
    {
      this[i] = new Section();
    }
  return this;
}



function Section() {
  this.sURL = null;
  this.sName = null;
  this.sImage = null;
  this.nImageWidth = null;
  this.nImageHeight = null;
  this.nSectionId = null;
  this.pChild = null;
}



function productInfoInstance() {
  this.callBack = 0;
  this.callerContext = 0;
  this.products = new Array();
  this.totalCount = 0;
}



function GetText(o) {
  while (o) 
    {
      if (o.nodeType == 3) 
      break;
      o = o.firstChild;
    }
  if (!o) 
  return '';
  return o.data;
}



function Contains(o, Ch) {
  while (Ch && Ch !== o && Ch !== D) 
    Ch = Ch.parentNode;
  return (Ch === o);
}



function PL_BG() {
  try {
    D.execCommand("BackgroundImageCache", false, true);
  }  catch (oError) {
}
}



function _CookieDate(Time) {
  var DT = new Date();
  if (Time != null) 
  {
    End = new Date(Date.UTC(DT.getUTCFullYear(), DT.getUTCMonth(), DT.getUTCDate(), DT.getUTCHours(), DT.getUTCMinutes(), DT.getUTCSeconds()) + Time * 1000);
  } else End = DT;
  return End.toGMTString();
}



function createXMLHttp() {
  if (typeof (XMLHttpRequest) != "undefined") 
  return new XMLHttpRequest();
  var aV = ["MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"];
  for (var i = 0; i < aV.length; i++) 
    {
      try {
        var oXmlHttp = new ActiveXObject(aV[i]);
        return oXmlHttp;
      }      catch (e) {
}
    }
  return false;
}



function PL_AnimGetDiv(Row) {
  if (!Row) 
  return false;
  return Row.cells[5].firstChild;
}



function PL_AnimStart(Block, bOpen) {
  var Delta, RowNum, BlkLen;
  if (!Block) 
  return;
  RowNum = Block.rows.length;
  if (RowNum == 2) 
  {
    Delta = 3;
    BlkLen = 0;
  } else if (RowNum == 3) 
  {
    Delta = 4;
    BlkLen = 1;
  } else {
    Delta = 5;
    BlkLen = 2;
  }
  if (Gec) 
  Delta += 2;
  if (oPL.AnimFix) 
  {
    Delta += oPL.AnimFix;
    if (Delta <= 0) 
    Delta = 1;
  }
  oPLVar.oAnim = {bOpen: bOpen, Block: Block, aRows: Block.rows, RowNum: RowNum, RowNo: (bOpen ? 1 : RowNum - 1), LastRowNo: (bOpen ? RowNum : 0), Dir: (bOpen ? 1 : -1), Delta: Delta, VertPad: (bOpen ? oPL.VertPad : 0) + 'px', PadProp1: (bOpen ? 'paddingTop' : 'paddingBottom'), PadProp2: (!bOpen ? 'paddingTop' : 'paddingBottom'), Correction: 0, BlkLen: BlkLen};
  oPLVar.bAnim = true;
  if (oPL.AnimTimer) 
  clearTimeout(oPL.AnimTimer);
  oPL.AnimTimer = setTimeout("PL_An();", 5000);
  PL_AnimRowInit();
  PL_Animate();
}



function IsUs(c) {
  return (c == '2' || c == '-2');
}



function PL_MakeList(Data, Id) {
  var i, L, Item, aHtml, aValues;
  aItems = Data.split(';');
  L = aItems.length;
  aHtml = [];
  for (i = 0; i < L; i++) 
    {
      Item = aItems[i];
      aValues = Item.split(':');
      aHtml[i] = '<Option Value=' + aValues[0] + '>' + aValues[1];
    }
  return aHtml.join('');
}



function KT_Line(Line) {
  return escape("\n" + Line);
}



function PL_CheckSupAnim() {
  return;
  if (!IEVer && !Gec) 
  return;
  var oCell, Ofs, CId, bUSA, ImgOfs, M, oSupAnim, oSup, SupId, LogoW;
  if (0) 
  {
    SupId = 60;
    LogoW = 79;
  } else {
    var Dr = PL_GetDrug();
    if ((Dr == 'ultram' || Dr == 'tramadol') && (oCell = PL_GetSupplier(17, true))) 
    {
      SupId = 17;
      LogoW = 79;
    }
  }
  if (!SupId) 
  return;
  ImgOfs = 1;
  oSup = oCell.firstChild;
  oSupAnim = {oSup: oSup, oSupSt: oSup.style};
  M = oSupAnim.oSupSt.backgroundPosition.match(/-(\d+)/);
  Ofs = +M[1];
  oSupAnim.aOfs = [-Ofs, -(Ofs + ImgOfs * LogoW)];
  oSupAnim.OfsNo = 0;
  oSupAnim.Pause = 1500;
  oSupAnim.TO = setTimeout("PL_SupAnim()", oSupAnim.Pause - 100);
  if (IEVer) 
  {
    var Filter, ExPar, aF = ['Blinds', 'Strips', 'Fade'];
    Filter = aF[PL_Rnd(aF.length)];
    if (Filter == 'Blinds') 
    {
      oSupAnim.Param = 'direction';
      oSupAnim.aParVal = ['right', 'left'];
      oSupAnim.ValNo = PL_Rnd(2);
      ExPar = ', bands=' + (PL_Rnd(2) == 0 ? '1' : '8');
    } else if (Filter == 'Strips') 
    {
      oSupAnim.Param = 'motion';
      oSupAnim.ValNo = PL_Rnd(2);
      oSupAnim.aParVal = (PL_Rnd(2) == 0 ? ['rightup', 'leftdown'] : ['rightdown', 'leftup']);
    }
    oSupAnim.oSupSt.filter = "progid:DXImageTransform.Microsoft." + Filter + "(duration=0.75" + ExPar + ")";
  }
  oPLVar.oSupAnim = oSupAnim;
}



function PL_Rnd(i) {
  return Math.floor(Math.random() * i);
}



function fetch_tags(B, A) {
  if (B == null) 
  {
    return new Array();
  } else {
    if (typeof B.getElementsByTagName != "undefined") 
    {
      return B.getElementsByTagName(A);
    } else {
      if (B.all && B.all.tags) 
      {
        return B.all.tags(A);
      } else {
        return new Array();
      }
    }
  }
}



function vB_PHP_Emulator() {
}



function vB_AJAX_Handler(A) {
  this.async = A ? true : false;
  this.conn = null;
}



function vB_Hidden_Form(A) {
  this.action = A;
  this.variables = new Array();
}



function clear_viewport_info() {
  viewport_info = null;
}



function toggle_collapse(A, B) {
  return false;
}



function vBpagenav() {
}



function vbmenu_register(B, A, C) {
  if (typeof (vBmenu) == "object") 
  {
    return vBmenu.register(B, A);
  } else {
    return false;
  }
}



function img_alt_2_title(A) {
  if (!A.title && A.alt != "") 
  {
    A.title = A.alt;
  }
}



function Comment_Init(B) {
  if (typeof B.id == "undefined") 
  {
    return;
  }
  var C = B.id;
  if (isNaN(C)) 
  {
    var A = null;
    if (A = C.match(/(\d+)/)) 
    {
      C = A[0];
    }
  }
  if (typeof inlineMod_comment != "undefined") 
  {
    im_init(B, inlineMod_comment);
  }
  if (typeof vB_QuickEditor_Factory != "undefined") 
  {
    if (typeof vB_QuickEditor_Factory.controls[C] == "undefined") 
    {
      vB_QuickEditor_Factory.controls[C] = new vB_QuickEditor(C, vB_QuickEditor_Factory);
    } else {
      vB_QuickEditor_Factory.controls[C].init();
    }
  }
  if (typeof vB_QuickLoader_Factory != "undefined") 
  {
    vB_QuickLoader_Factory.controls[C] = new vB_QuickLoader(C, vB_QuickLoader_Factory);
  }
  child_img_alt_2_title(B);
}



function handle_dismiss_notice_error(C) {
  if (C.argument) 
  {
    var B = YAHOO.util.Dom.get("dismiss_notice_hidden");
    B.value = C.argument;
    var A = YAHOO.util.Dom.get("notices");
    A.submit();
  }
}



function AttachEvent(obj, eventName, eventHandler) {
  if (obj) 
  {
    if (eventName.substring(0, 2) == "on") 
    {
      eventName = eventName.substring(2, eventName.length);
    }
    if (obj.addEventListener) 
    {
      obj.addEventListener(eventName, eventHandler, false);
    } else if (obj.attachEvent) 
    {
      obj.attachEvent("on" + eventName, eventHandler);
    }
  }
}



function GetAllElements(elemParent) {
  if (elemParent.all) 
  {
    return elemParent.all;
  } else if (elemParent.getElementsByTagName) 
  {
    return elemParent.getElementsByTagName('*');
  }
}



function BeforeStart() {
  return;
}



function AfterBuild() {
  return;
}



function BeforeFirstOpen() {
  return;
}



function AfterCloseAll() {
  return;
}



function Wrap(msg) {
  var xml = '<Message><Body>' + msg + '</Body></Message>';
  xml = escape(xml);
  return xml;
}



function replaceAll(str, look, replace) {
  while (str.indexOf(look) != -1) 
    str = str.replace(look, replace);
  return str;
}



function DoLogout() {
}



function core_md5(K, F) {
  K[F >> 5] |= 128 << ((F) % 32);
  K[(((F + 64) >>> 9) << 4) + 14] = F;
  var J = 1732584193;
  var I = -271733879;
  var H = -1732584194;
  var G = 271733878;
  for (var C = 0; C < K.length; C += 16) 
    {
      var E = J;
      var D = I;
      var B = H;
      var A = G;
      J = md5_ff(J, I, H, G, K[C + 0], 7, -680876936);
      G = md5_ff(G, J, I, H, K[C + 1], 12, -389564586);
      H = md5_ff(H, G, J, I, K[C + 2], 17, 606105819);
      I = md5_ff(I, H, G, J, K[C + 3], 22, -1044525330);
      J = md5_ff(J, I, H, G, K[C + 4], 7, -176418897);
      G = md5_ff(G, J, I, H, K[C + 5], 12, 1200080426);
      H = md5_ff(H, G, J, I, K[C + 6], 17, -1473231341);
      I = md5_ff(I, H, G, J, K[C + 7], 22, -45705983);
      J = md5_ff(J, I, H, G, K[C + 8], 7, 1770035416);
      G = md5_ff(G, J, I, H, K[C + 9], 12, -1958414417);
      H = md5_ff(H, G, J, I, K[C + 10], 17, -42063);
      I = md5_ff(I, H, G, J, K[C + 11], 22, -1990404162);
      J = md5_ff(J, I, H, G, K[C + 12], 7, 1804603682);
      G = md5_ff(G, J, I, H, K[C + 13], 12, -40341101);
      H = md5_ff(H, G, J, I, K[C + 14], 17, -1502002290);
      I = md5_ff(I, H, G, J, K[C + 15], 22, 1236535329);
      J = md5_gg(J, I, H, G, K[C + 1], 5, -165796510);
      G = md5_gg(G, J, I, H, K[C + 6], 9, -1069501632);
      H = md5_gg(H, G, J, I, K[C + 11], 14, 643717713);
      I = md5_gg(I, H, G, J, K[C + 0], 20, -373897302);
      J = md5_gg(J, I, H, G, K[C + 5], 5, -701558691);
      G = md5_gg(G, J, I, H, K[C + 10], 9, 38016083);
      H = md5_gg(H, G, J, I, K[C + 15], 14, -660478335);
      I = md5_gg(I, H, G, J, K[C + 4], 20, -405537848);
      J = md5_gg(J, I, H, G, K[C + 9], 5, 568446438);
      G = md5_gg(G, J, I, H, K[C + 14], 9, -1019803690);
      H = md5_gg(H, G, J, I, K[C + 3], 14, -187363961);
      I = md5_gg(I, H, G, J, K[C + 8], 20, 1163531501);
      J = md5_gg(J, I, H, G, K[C + 13], 5, -1444681467);
      G = md5_gg(G, J, I, H, K[C + 2], 9, -51403784);
      H = md5_gg(H, G, J, I, K[C + 7], 14, 1735328473);
      I = md5_gg(I, H, G, J, K[C + 12], 20, -1926607734);
      J = md5_hh(J, I, H, G, K[C + 5], 4, -378558);
      G = md5_hh(G, J, I, H, K[C + 8], 11, -2022574463);
      H = md5_hh(H, G, J, I, K[C + 11], 16, 1839030562);
      I = md5_hh(I, H, G, J, K[C + 14], 23, -35309556);
      J = md5_hh(J, I, H, G, K[C + 1], 4, -1530992060);
      G = md5_hh(G, J, I, H, K[C + 4], 11, 1272893353);
      H = md5_hh(H, G, J, I, K[C + 7], 16, -155497632);
      I = md5_hh(I, H, G, J, K[C + 10], 23, -1094730640);
      J = md5_hh(J, I, H, G, K[C + 13], 4, 681279174);
      G = md5_hh(G, J, I, H, K[C + 0], 11, -358537222);
      H = md5_hh(H, G, J, I, K[C + 3], 16, -722521979);
      I = md5_hh(I, H, G, J, K[C + 6], 23, 76029189);
      J = md5_hh(J, I, H, G, K[C + 9], 4, -640364487);
      G = md5_hh(G, J, I, H, K[C + 12], 11, -421815835);
      H = md5_hh(H, G, J, I, K[C + 15], 16, 530742520);
      I = md5_hh(I, H, G, J, K[C + 2], 23, -995338651);
      J = md5_ii(J, I, H, G, K[C + 0], 6, -198630844);
      G = md5_ii(G, J, I, H, K[C + 7], 10, 1126891415);
      H = md5_ii(H, G, J, I, K[C + 14], 15, -1416354905);
      I = md5_ii(I, H, G, J, K[C + 5], 21, -57434055);
      J = md5_ii(J, I, H, G, K[C + 12], 6, 1700485571);
      G = md5_ii(G, J, I, H, K[C + 3], 10, -1894986606);
      H = md5_ii(H, G, J, I, K[C + 10], 15, -1051523);
      I = md5_ii(I, H, G, J, K[C + 1], 21, -2054922799);
      J = md5_ii(J, I, H, G, K[C + 8], 6, 1873313359);
      G = md5_ii(G, J, I, H, K[C + 15], 10, -30611744);
      H = md5_ii(H, G, J, I, K[C + 6], 15, -1560198380);
      I = md5_ii(I, H, G, J, K[C + 13], 21, 1309151649);
      J = md5_ii(J, I, H, G, K[C + 4], 6, -145523070);
      G = md5_ii(G, J, I, H, K[C + 11], 10, -1120210379);
      H = md5_ii(H, G, J, I, K[C + 2], 15, 718787259);
      I = md5_ii(I, H, G, J, K[C + 9], 21, -343485551);
      J = safe_add(J, E);
      I = safe_add(I, D);
      H = safe_add(H, B);
      G = safe_add(G, A);
    }
  return Array(J, I, H, G);
}



function safe_add(A, D) {
  var C = (A & 65535) + (D & 65535);
  var B = (A >> 16) + (D >> 16) + (C >> 16);
  return (B << 16) | (C & 65535);
}



function bit_rol(A, B) {
  return (A << B) | (A >>> (32 - B));
}



function binl2b64(D) {
  var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var F = "";
  for (var B = 0; B < D.length * 4; B += 3) 
    {
      var E = (((D[B >> 2] >> 8 * (B % 4)) & 255) << 16) | (((D[B + 1 >> 2] >> 8 * ((B + 1) % 4)) & 255) << 8) | ((D[B + 2 >> 2] >> 8 * ((B + 2) % 4)) & 255);
      for (var A = 0; A < 4; A++) 
        {
          if (B * 8 + A * 6 > D.length * 32) 
          {
            F += b64pad;
          } else {
            F += C.charAt((E >> 6 * (3 - A)) & 63);
          }
        }
    }
  return F;
}



function str_to_ent(D) {
  var A = "";
  var C;
  for (C = 0; C < D.length; C++) 
    {
      var E = D.charCodeAt(C);
      var B = "";
      if (E > 255) 
      {
        while (E >= 1) 
          {
            B = "0123456789".charAt(E % 10) + B;
            E = E / 10;
          }
        if (B == "") 
        {
          B = "0";
        }
        B = "#" + B;
        B = "&" + B;
        B = B + ";";
        A += B;
      } else {
        A += D.charAt(C);
      }
    }
  return A;
}



function trim(A) {
  while (A.substring(0, 1) == " ") 
    {
      A = A.substring(1, A.length);
    }
  while (A.substring(A.length - 1, A.length) == " ") 
    {
      A = A.substring(0, A.length - 1);
    }
  return A;
}



function wishListInfoInstance() {
  this.callBack = 0;
  this.callerContext = 0;
  this.totalCount = 0;
  this.products = new Array();
}



function Dummy() {
  return;
}



function CnclSlct() {
  return false;
}



function ClearAllChilds(Pntr) {
  var CPCCStyle;
  while (Pntr) 
    {
      if (Pntr.Hilite) 
      {
        Pntr.Hilite = 0;
        if (KeepHilite) 
        LowItem(Pntr);
        if (Pntr.ChildCntnr) 
        {
          CPCCStyle = Nav4 ? Pntr.ChildCntnr : Pntr.ChildCntnr.style;
          CPCCStyle.visibility = M_Hide;
          ClearAllChilds(Pntr.ChildCntnr.FrstMbr);
        }
        break;
      }
      Pntr = Pntr.PrvMbr;
    }
}



function GoTo() {
  if (this.LinkTxt) 
  {
    status = '';
    var HP = Nav4 ? this.LowLyr : this;
    LowItem(HP);
        this.LinkTxt.indexOf('javascript:') != -1 ? eval(this.LinkTxt) : DcLoc.location.href = this.LinkTxt;
  }
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function pause(ms) {
  var date = new Date();
  curDate = null;
do {
    var curDate = new Date();
  } while (curDate - date < ms);
}



function tt_GetDivW(el) {
  return (el ? (el.offsetWidth || el.style.pixelWidth || 0) : 0);
}



function tt_GetDivH(el) {
  return (el ? (el.offsetHeight || el.style.pixelHeight || 0) : 0);
}



function tt_GetEvtX(e) {
  return (e ? ((typeof (e.pageX) != tt_u) ? e.pageX : (e.clientX + tt_scrlX)) : 0);
}



function tt_GetEvtY(e) {
  return (e ? ((typeof (e.pageY) != tt_u) ? e.pageY : (e.clientY + tt_scrlY)) : 0);
}



function tt_AddEvtFnc(el, sEvt, PFnc) {
  if (el) 
  {
    if (el.addEventListener) 
    el.addEventListener(sEvt, PFnc, false); else el.attachEvent("on" + sEvt, PFnc);
  }
}



function tt_RemEvtFnc(el, sEvt, PFnc) {
  if (el) 
  {
    if (el.removeEventListener) 
    el.removeEventListener(sEvt, PFnc, false); else el.detachEvent("on" + sEvt, PFnc);
  }
}



function tt_HideSrcTagsRecurs(dad) {
  var ovr, asT2t;
  var a = dad.childNodes || dad.children || null;
  for (var i = a ? a.length : 0; i; ) 
    {
      --i;
      if (!tt_HideSrcTagsRecurs(a[i])) 
      return false;
      ovr = a[i].getAttribute ? (a[i].getAttribute("onmouseover") || a[i].getAttribute("onclick")) : (typeof a[i].onmouseover == "function") ? (a[i].onmouseover || a[i].onclick) : null;
      if (ovr) 
      {
        asT2t = ovr.toString().match(/TagToTip\s*\(\s*'[^'.]+'\s*[\),]/);
        if (asT2t && asT2t.length) 
        {
          if (!tt_HideSrcTag(asT2t[0])) 
          return false;
        }
      }
    }
  return true;
}



function tt_DeAlt(el) {
  var aKid;
  if (el) 
  {
    if (el.alt) 
    el.alt = "";
    if (el.title) 
    el.title = "";
    aKid = el.childNodes || el.children || null;
    if (aKid) 
    {
      for (var i = aKid.length; i; ) 
        tt_DeAlt(aKid[--i]);
    }
  }
}



function tt_Int(x) {
  var y;
  return (isNaN(y = parseInt(x)) ? 0 : y);
}



function tt_MovDomNode(el, dadFrom, dadTo) {
  if (dadFrom) 
  dadFrom.removeChild(el);
  if (dadTo) 
  dadTo.appendChild(el);
}



function validateZIP(field) {
  var valid = "0123456789-";
  var hyphencount = 0;
  if (field.length != 5 && field.length != 10) 
  {
    return "Please enter your 5 digit or 5 digit+4 zip code.";
  }
  for (var i = 0; i < field.length; i++) 
    {
      temp = "" + field.substring(i, i + 1);
      if (temp == "-") 
      hyphencount++;
      if (valid.indexOf(temp) == "-1") 
      {
        return "Invalid characters in your zip code.  Please try again.";
      }
      if ((hyphencount > 1) || ((field.length == 10) && "" + field.charAt(5) != "-")) 
      {
        return "The hyphen character should be used with a properly formatted 5 digit+four zip code, like '12345-6789'.   Please try again.";
      }
    }
  return "";
}



function check(thing, Prompt) {
  Ctrl = thing;
  if (Ctrl.value == "") 
  {
    validatePrompt(Ctrl, Prompt);
    return (false);
  } else return (true);
}



function HighlightListing(over, div, alt) {
  if (over) 
  {
    if (alt) 
    div.className = 'listingdiv2hover'; else div.className = 'listingdiv1hover';
  } else {
    if (alt) 
    div.className = 'listingdiv2'; else div.className = 'listingdiv1';
  }
}



function _rsiwa(u, n, v) {
  return u + (u.indexOf("?") == -1 ? "?" : "&") + n + "=" + v;
}



function _rsiza(u) {
  var i = u.indexOf('#');
  return (i >= 0) ? u.substr(0, i) : u;
}



function _rsiCa(i) {
  var fb = i.toString(16).toUpperCase();
  return fb.length < 2 ? "0" + fb : fb;
}



function hideEles(eles) {
  for (i = 0; i < eles.length; i++) 
    hideEle(eles[i]);
}



function isArray(testObject) {
  return testObject && !(testObject.propertyIsEnumerable('length')) && typeof testObject === 'object' && typeof testObject.length === 'number';
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function clearOptions(cboDropDown) {
  if (!cboDropDown) 
  {
    return;
  }
  var iCount = cboDropDown.options.length;
  for (iCount = iCount; iCount >= 0; iCount--) 
    {
      cboDropDown.options[iCount] = null;
    }
}



function isLeapYear(numYear) {
  if ((numYear % 4) == 0) 
  {
    return true;
  }
  return false;
}



function getOptionPrice(itemForm, prValue) {
  var optionPrice = 0;
  if (prValue != "") 
  {
    if (itemForm.elements["option_price_" + prValue]) 
    {
      optionPrice = parseFloat(itemForm.elements["option_price_" + prValue].value);
      if (isNaN(optionPrice)) 
      {
        optionPrice = 0;
      }
    }
  }
  return optionPrice;
}



function MSOLayout_SearchArray(SearchArray, Value) {
  for (var index = 0; index < SearchArray.length; index++) 
    {
      if (SearchArray[index] == Value || SearchArray[index] == "#" + Value) 
      return index;
    }
  return -1;
}



function ConvertToAspPartDisplayMode(view) {
  var displayMode;
  switch (view) {
    case '-1':
      displayMode = 'ExtensibleView';
      break;
    case '0':
      displayMode = 'Browse';
      break;
    case '1':
      displayMode = 'Edit';
      break;
    case '2':
      displayMode = 'Catalog';
      break;
    case '3':
      displayMode = 'GallerySearch';
      break;
    case '4':
      displayMode = 'Navigation';
      break;
    case '5':
      displayMode = 'Import';
      break;
    case '6':
      displayMode = 'DownLevelWebPartMenu';
      break;
    case '7':
      displayMode = 'ToolPaneErr';
      break;
  }
  return displayMode;
}



function MSOMode_RemoveMode(newUrl, regExpression) {
  var hashMarkExpression = /\#/;
  var hashMarkIndex = newUrl.search(hashMarkExpression);
  if (hashMarkIndex != -1) 
  {
    newUrl = newUrl.substring(0, hashMarkIndex);
  }
  var questionMarkExpression = /\?/;
  var questionMarkIndex = newUrl.search(questionMarkExpression);
  if (questionMarkIndex != -1) 
  {
    var pathString = newUrl.substring(0, questionMarkIndex);
    var queryString = newUrl.substring(questionMarkIndex, newUrl.length);
    queryString = queryString.replace(regExpression, '');
    if (queryString.length != 0 && queryString.charAt(0) != '?') 
    {
      queryString = "?" + queryString;
    }
    newUrl = pathString + queryString;
  }
  return newUrl;
}



function MSOMode_AddMode(newUrl, regExpression, stringToAdd) {
  var hashMarkExpression = /\#/;
  var hashMarkIndex = newUrl.search(hashMarkExpression);
  if (hashMarkIndex != -1) 
  {
    newUrl = newUrl.substring(0, hashMarkIndex);
  }
  var questionMarkExpression = /\?/;
  var questionMarkIndex = newUrl.search(questionMarkExpression);
  if (questionMarkIndex == -1) 
  {
    newUrl += '?' + stringToAdd;
  } else {
    var queryString = newUrl.substring(questionMarkIndex, newUrl.length);
    if (queryString.search(regExpression) == -1) 
    {
      newUrl += '&' + stringToAdd;
    }
  }
  return newUrl;
}



function MSOMenu_KeyboardClick(widget) {
  for (var index = 1; index < arguments.length; index++) 
    {
      if (event.keyCode == arguments[index]) 
      {
        widget.click();
        event.returnValue = false;
        return;
      }
    }
}



function CambioImagen(x, y) {
  x.src = y.src;
}



function addCssClassToObject(objThis, strClass) {
  objThis.className += new String(" " + strClass);
}



function removeCssClassFromObject(objThis, strClass) {
  var strCurClass = new String(objThis.className);
  objThis.className = strCurClass.replace(strClass, '');
}



function getParentElement(objThis, strElement) {
  if (objThis == null) 
  {
    return null;
  }
  if (objThis.parentNode != null) 
  {
    while (objThis.parentNode.tagName != strElement) 
      {
        if (objThis.parentNode != null) 
        {
          objThis = objThis.parentNode;
        } else {
          return null;
        }
      }
    return objThis.parentNode;
  } else {
    return null;
  }
}



function pausecomp() {
  nt = 1000;
  var sl = true;
  var now = new Date();
  var al;
  var sMS = now.getTime();
  while (sl) 
    {
      al = new Date();
      aMS = al.getTime();
      if (aMS - sMS > nt) 
      {
        sl = false;
      }
    }
}



function NombreMes(iMes) {
  NombresMeses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
  return NombresMeses[iMes];
}



function NombreDia(iDia) {
  NombresDias = new Array("Domingo", "Lunes", "Martes", "Mi\ufffdrcoles", "Jueves", "Viernes", "S\ufffdbado");
  return NombresDias[iDia];
}



function GetCookieExpireTime() {
  var ce = new Date();
  var m = ce.getMonth();
  if (m == 11) 
  {
    ce.setMonth(0);
    ce.setYear(ce.getYear() + 1);
  } else {
    ce.setMonth(m + 1);
  }
  return ce.toGMTString();
}



function _ppsi(lid, fieldID) {
  return lid + fieldID;
}



function XmlEscape(text) {
  return (text) ? text.replace('&', '&amp;').replace('>', '&gt;').replace('<', '&lt;') : '';
}



function QuitaEspacios(sValor) {
  for (iFin = 0; iFin < sValor.length; iFin++) 
    {
      sAux = sValor.substring(iFin, iFin + 1);
      if (sAux != " ") 
      break;
    }
  sValor = sValor.slice(iFin);
  return sValor;
}



function findPosX(obj, addWidth) {
  var curleft = 0;
  if (addWidth) 
  {
    curleft += obj.offsetWidth;
  }
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curleft += obj.offsetLeft;
        obj = obj.offsetParent;
      }
  } else if (obj.x) 
  curleft += obj.x;
  return curleft;
}



function findPosY(obj, addHeight) {
  var curtop = 0;
  if (addHeight) 
  {
    curtop += obj.offsetHeight;
  }
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curtop += obj.offsetTop;
        obj = obj.offsetParent;
      }
  } else if (obj.y) 
  {
    curtop += obj.y;
  }
  return curtop;
}



function toValueString(ValueString) {
  var i;
  if (ValueString.length > 0) 
  ValueString = TrimAll(ValueString);
  for (i = 0; i < ValueString.length; i++) 
    {
      if (ValueString.charAt(i) != '0') 
      return ValueString.substring(i);
    }
  return ValueString;
}



function isDate(dateStr, dimChar) {
  var DateArray;
  var tmpY, tmpM, tmpD;
  var isBissextile;
  var Num = "[^0-9]";
  var NumRule = new RegExp(Num);
  isBissextile = 0;
  if (dateStr == null || dateStr == "") 
  return false;
  if (dateStr.length > 10) 
  {
    return false;
  } else {
    if (dimChar == null || dimChar == "") 
    dimChar = "-";
    DateArray = dateStr.split(dimChar);
    if (DateArray.length != 3) 
    return false; else {
      if (DateArray[0].length == 4) 
      {
        tmpY = toValueString(DateArray[0]);
        tmpD = toValueString(DateArray[2]);
      } else {
        tmpY = toValueString(DateArray[2]);
        tmpD = toValueString(DateArray[0]);
      }
      tmpM = toValueString(DateArray[1]);
      if (tmpY.length > 4 || tmpM.length > 2 || tmpD.length > 2) 
      return false; else {
        if (tmpY.search(NumRule) != -1 || tmpM.search(NumRule) != -1 || tmpD.search(NumRule) != -1) 
        return false;
        if (parseInt(tmpY) < 0 || parseInt(tmpM) > 12 || parseInt(tmpM) < 1 || parseInt(tmpD) > 31 || parseInt(tmpD) < 1) 
        return false;
        if ((parseInt(tmpY) % 100 == 0 && parseInt(tmpY) % 400 == 0) || (parseInt(tmpY) % 100 != 0 && parseInt(tmpY) % 10 == 0 && parseInt(tmpY) % 40 == 0) || (parseInt(tmpY) % 100 != 0 && parseInt(tmpY) % 10 != 0 && parseInt(tmpY) % 4 == 0)) 
        isBissextile = 1;
        if (tmpM == "1" || tmpM == "3" || tmpM == "5" || tmpM == "7" || tmpM == "8" || tmpM == "10" || tmpM == "12") 
        {
          if (parseInt(tmpD) > 31) 
          return false;
        } else {
          if (tmpM == "2") 
          {
            if (parseInt(tmpD) > 28 + isBissextile) 
            return false;
          } else {
            if (parseInt(tmpD) > 30) 
            return false;
          }
        }
      }
    }
  }
  return true;
}



function isInt(Str) {
  var RInt = "[^0-9]";
  var fLetter = /^[1-9]/;
  var NumRule = new RegExp(RInt);
  if (Str == null || Str == "") 
  return false;
  if (Str.search(NumRule) != -1 || !fLetter.test(Str)) 
  return false; else return true;
}



function isNumStr(Str) {
  var RNumStr = "[^0-9]";
  var NumRule = new RegExp(RNumStr);
  if (Str == null || Str == "") 
  return false;
  if (Str.search(NumRule) != -1) 
  return false; else return true;
}



function isCodeStr(Str) {
  var CodeStr = new RegExp("[^a-z_.0-9A-Z]");
  var fLetter = new RegExp("^([_a-zA-Z0-9])");
  if (Str == null || Str == "") 
  return false;
  if (!CodeStr.test(Str) && fLetter.test(Str)) 
  return true; else return false;
}



function isVariable(Str) {
  var RNameOfEn = /[^_0-9a-zA-Z]/;
  if (Str == null || Str == "") 
  return false;
  if (Str.search(RNameOfEn) != -1) 
  return false; else return true;
}



function isName(Str) {
  var RNameOfEn = /[^_0-9a-zA-Z]/;
  if (Str == null || Str == "") 
  return false;
  if (Str.search(RNameOfEn) != -1) 
  return false; else return true;
}



function isDBChar(Str) {
  var i;
  if (Str == null || Str == "") 
  return false;
  for (i = 0; i < Str.length; i++) 
    {
      if (s.charCodeAt(i) < 256) 
      return false;
    }
  return true;
}



function isValidName(Str) {
  var sChar = /[^_a-zA-Z]/;
  var nReg = /[^0-9]/;
  var i;
  if (Str == null || Str == "") 
  return false;
  sCharRule = new RegExp(sChar);
  nRegRule = new RegExp(nReg);
  for (i = 0; i < Str.length; i++) 
    {
      if (Str.charCodeAt(i) < 255) 
      {
        if (sChar.test(Str.charAt(i)) && nReg.test(Str.charAt(i))) 
        return false;
      }
    }
  return true;
}



function getByteLength(Str) {
  var len;
  var i;
  len = 0;
  if (Str == null || Str == "") 
  {
    len = 0;
  } else {
    for (i = 0; i < Str.length; i++) 
      {
        len++;
        if (Str.charCodeAt(i) > 255) 
        len++;
      }
  }
  return len;
}



function ToPage(Str) {
  var curChar;
  var newStr;
  var i;
  newStr = "";
  if (Str != null && Str != "") 
  {
    for (i = 0; i < Str.length; i++) 
      {
        switch (Str.charAt(i)) {
          case ' ':
            curChar = "&nbsp;";
            break;
          case '\r':
            curChar = "<br>";
            break;
          case '\n':
            curChar = "";
            break;
          case '<':
            curChar = "&lt;";
            break;
          case '>':
            curChar = "&gt;";
            break;
          case '\\\'':
            curChar = "&acute;";
            break;
          case '\\"':
            curChar = "&quot;";
            break;
          default:
            curChar = Str.charAt(i);
            break;
        }
        newStr = newStr + curChar;
      }
  }
  return newStr;
}



function ToForm(Str) {
  var curChar;
  var newStr;
  var i;
  newStr = "";
  if (Str != null && Str != "") 
  {
    for (i = 0; i < Str.length; i++) 
      {
        switch (Str.charAt(i)) {
          case '\\\'':
            curChar = "&acute;";
            break;
          case '\\"':
            curChar = "&quot;";
            break;
          default:
            curChar = Str.charAt(i);
            break;
        }
        newStr = newStr + curChar;
      }
  }
  return newStr;
}



function ToScript(Str) {
  var curChar;
  var newStr;
  var i;
  Str = Str.replace(/&acute;/g, "\\'");
  Str = Str.replace(/&quot;/g, "\\\"");
  Str = Str.replace(/&nbsp;/g, " ");
  Str = Str.replace(/&gt;/g, ">");
  Str = Str.replace(/&lt;/g, "<");
  Str = Str.replace(/<br>/g, "\r\n");
  newStr = Str;
  return newStr;
}



function isCorBirth(IdNumber, Birthday) {
  var corBirth;
  if ((IdNumber.length != 15 && IdNumber.length != 18) || !isDate(Birthday)) 
  return false;
  if (IdNumber.length == 15) 
  corBirth = '19' + IdNumber.substring(6, 8) + '-' + IdNumber.substring(8, 10) + '-' + IdNumber.substring(10, 12); else corBirth = IdNumber.substring(6, 10) + '-' + IdNumber.substring(10, 12) + '-' + IdNumber.substring(12, 14);
  if (Birthday == corBirth) 
  return true; else return false;
}



function get_unique() {
  var date = new Date();
  return date.getTime();
}



function x26(val) {
  if (val == null) 
  return 0;
  return val;
}



function x27(obj) {
  var offy = 0;
  var offx = 0;
do {
    offy += obj.offsetTop;
    offx += obj.offsetLeft;
  } while ((obj = obj.offsetParent));
  return new Array(offx, offy);
}



function x28(pname, dto, index) {
  if ((rval = dto[pname + index]) != null) 
  return rval; else return dto[pname];
}



function EnhancedLinksPlugin() {
  this._settings = {expandText: '&raquo;', contractText: '&laquo;', leafText: '-', expandImage: '', contractImage: '', leafImage: '', buttonColor: '#CC0000', buttonWidth: '10px', buttonMargin: '0 5px 0 0', isButtonAfter: false};
}



function SamePWD(objField1, objField2) {
  if (objField1.value != objField2.value) 
  {
    alert("Password was not confirmed");
    return false;
  }
  return true;
}



function ConvertToDate(datDateIn) {
  var datDates = datDateIn.split("/");
  var datDateOut = new Date(datDates[2], datDates[0] - 1, datDates[1]);
  return datDateOut;
}



function IsValid(objListIn) {
  if (objListIn.value != "") 
  return true; else return false;
}



function JumpToURL(strURL) {
  if (strURL != 0) 
  {
    location.href = strURL;
  }
}



function _j(m) {
  var n = new Date();
  n = n.getTime() + m;
  if (m == 0) 
  return n;
  if (m > 15) 
  {
    while (true) 
      {
        m = new Date();
        if (m.getTime() > n) 
        return;
      }
  } else {
    n += "";
    return n.substring(n.length - m, n.length);
  }
}



function nav_DoFSCommand(command, args) {
  if (command == "showMenu") 
  {
    hideCur();
    Menus[args].show();
  }
}



function EsNumeroEntero(sNumero) {
  var iLongitud = sNumero.length, iAscii;
  iAscii = sNumero.charCodeAt(0);
  if (!(((iAscii > 47) && (iAscii < 58)) || (iAscii == 43) || (iAscii == 45))) 
  return false;
  for (i = 1; i < iLongitud; i++) 
    {
      iAscii = sNumero.charCodeAt(i);
      if (!(((iAscii > 47) && (iAscii < 58)))) 
      return false;
    }
  return true;
}



function ContrImagen(sImagen) {
  var iLongitud = sImagen.length;
  var sExtension = sImagen.substring(iLongitud - 4, iLongitud);
  sExtension = sExtension.toLowerCase();
  if ((sExtension != ".gif") && (sExtension != ".jpg")) 
  return 1; else return 0;
}



function ContrImagenJPG(sImagen) {
  var iLongitud = sImagen.length;
  var sExtension = sImagen.substring(iLongitud - 4, iLongitud);
  sExtension = sExtension.toLowerCase();
  if (sExtension != ".jpg") 
  return 1; else return 0;
}



function nav_DoFSCommand(command, args) {
  if (command == "showMenu") 
  {
    hideCur();
    Menus[args].show();
  }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function cleanurl(url) {
  var start = new RegExp("http(s)?://[^/]+");
  url = url.replace(start, "");
  var unwanted = new RegExp("[&/.+%?:=]+", "g");
  url = url.replace(unwanted, "");
  return url;
}



function parseTokens(pf, ar) {
  var v, i, mode = -1, par = (pf != 'ol_'), fnMark = (par && !ar.length ? 1 : 0);
  for (i = 0; i < ar.length; i++) 
    {
      if (mode < 0) 
      {
        if (typeof ar[i] == 'number' && ar[i] > pmStart && ar[i] < pmUpper) 
        {
          fnMark = (par ? 1 : 0);
          i--;
        } else {
          switch (pf) {
            case 'ol_':
              ol_text = ar[i].toString();
              break;
            default:
              o3_text = ar[i].toString();
          }
        }
        mode = 0;
      } else {
        if (ar[i] >= pmCount || ar[i] == DONOTHING) 
        {
          continue;
        }
        if (ar[i] == INARRAY) 
        {
          fnMark = 0;
          eval(pf + 'text=ol_texts[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == CAPARRAY) 
        {
          eval(pf + 'cap=ol_caps[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == STICKY) 
        {
          if (pf != 'ol_') 
          eval(pf + 'sticky=1');
          continue;
        }
        if (ar[i] == BACKGROUND) 
        {
          eval(pf + 'background="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == NOCLOSE) 
        {
          if (pf != 'ol_') 
          opt_NOCLOSE();
          continue;
        }
        if (ar[i] == CAPTION) 
        {
          eval(pf + "cap='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CENTER || ar[i] == LEFT || ar[i] == RIGHT) 
        {
          eval(pf + 'hpos=' + ar[i]);
          if (pf != 'ol_') 
          olHautoFlag = 1;
          continue;
        }
        if (ar[i] == OFFSETX) 
        {
          eval(pf + 'offsetx=' + ar[++i]);
          continue;
        }
        if (ar[i] == OFFSETY) 
        {
          eval(pf + 'offsety=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGCOLOR) 
        {
          eval(pf + 'fgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCOLOR) 
        {
          eval(pf + 'bgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTCOLOR) 
        {
          eval(pf + 'textcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPCOLOR) 
        {
          eval(pf + 'capcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSECOLOR) 
        {
          eval(pf + 'closecolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == WIDTH) 
        {
          eval(pf + 'width=' + ar[++i]);
          continue;
        }
        if (ar[i] == BORDER) 
        {
          eval(pf + 'border=' + ar[++i]);
          continue;
        }
        if (ar[i] == CELLPAD) 
        {
          i = opt_MULTIPLEARGS(++i, ar, (pf + 'cellpad'));
          continue;
        }
        if (ar[i] == STATUS) 
        {
          eval(pf + "status='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == AUTOSTATUS) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus==1)?0:1');
          continue;
        }
        if (ar[i] == AUTOSTATUSCAP) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus==2)?0:2');
          continue;
        }
        if (ar[i] == HEIGHT) 
        {
          eval(pf + 'height=' + pf + 'aboveheight=' + ar[++i]);
          continue;
        }
        if (ar[i] == CLOSETEXT) 
        {
          eval(pf + "close='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == SNAPX) 
        {
          eval(pf + 'snapx=' + ar[++i]);
          continue;
        }
        if (ar[i] == SNAPY) 
        {
          eval(pf + 'snapy=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXX) 
        {
          eval(pf + 'fixx=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXY) 
        {
          eval(pf + 'fixy=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELX) 
        {
          eval(pf + 'relx=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELY) 
        {
          eval(pf + 'rely=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGBACKGROUND) 
        {
          eval(pf + 'fgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGBACKGROUND) 
        {
          eval(pf + 'bgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == PADX) 
        {
          eval(pf + 'padxl=' + ar[++i]);
          eval(pf + 'padxr=' + ar[++i]);
          continue;
        }
        if (ar[i] == PADY) 
        {
          eval(pf + 'padyt=' + ar[++i]);
          eval(pf + 'padyb=' + ar[++i]);
          continue;
        }
        if (ar[i] == FULLHTML) 
        {
          if (pf != 'ol_') 
          eval(pf + 'fullhtml=1');
          continue;
        }
        if (ar[i] == BELOW || ar[i] == ABOVE) 
        {
          eval(pf + 'vpos=' + ar[i]);
          if (pf != 'ol_') 
          olVautoFlag = 1;
          continue;
        }
        if (ar[i] == CAPICON) 
        {
          eval(pf + 'capicon="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONT) 
        {
          eval(pf + "textfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CAPTIONFONT) 
        {
          eval(pf + "captionfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CLOSEFONT) 
        {
          eval(pf + "closefont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == TEXTSIZE) 
        {
          eval(pf + 'textsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONSIZE) 
        {
          eval(pf + 'captionsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSESIZE) 
        {
          eval(pf + 'closesize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TIMEOUT) 
        {
          eval(pf + 'timeout=' + ar[++i]);
          continue;
        }
        if (ar[i] == FUNCTION) 
        {
          if (pf == 'ol_') 
          {
            if (typeof ar[i + 1] != 'number') 
            {
              v = ar[++i];
              ol_function = (typeof v == 'function' ? v : null);
            }
          } else {
            fnMark = 0;
            v = null;
            if (typeof ar[i + 1] != 'number') 
            v = ar[++i];
            opt_FUNCTION(v);
          }
          continue;
        }
        if (ar[i] == DELAY) 
        {
          eval(pf + 'delay=' + ar[++i]);
          continue;
        }
        if (ar[i] == HAUTO) 
        {
          eval(pf + 'hauto=(' + pf + 'hauto==0)?1:0');
          continue;
        }
        if (ar[i] == VAUTO) 
        {
          eval(pf + 'vauto=(' + pf + 'vauto==0)?1:0');
          continue;
        }
        if (ar[i] == CLOSECLICK) 
        {
          eval(pf + 'closeclick=(' + pf + 'closeclick==0)?1:0');
          continue;
        }
        if (ar[i] == WRAP) 
        {
          eval(pf + 'wrap=(' + pf + 'wrap==0)?1:0');
          continue;
        }
        if (ar[i] == FOLLOWMOUSE) 
        {
          eval(pf + 'followmouse=(' + pf + 'followmouse==1)?0:1');
          continue;
        }
        if (ar[i] == MOUSEOFF) 
        {
          eval(pf + 'mouseoff=(' + pf + 'mouseoff==0)?1:0');
          v = ar[i + 1];
          if (pf != 'ol_' && eval(pf + 'mouseoff') && typeof v == 'number' && (v < pmStart || v > pmUpper)) 
          olHideDelay = ar[++i];
          continue;
        }
        if (ar[i] == CLOSETITLE) 
        {
          eval(pf + "closetitle='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CSSOFF || ar[i] == CSSCLASS) 
        {
          eval(pf + 'css=' + ar[i]);
          continue;
        }
        if (ar[i] == COMPATMODE) 
        {
          eval(pf + 'compatmode=(' + pf + 'compatmode==0)?1:0');
          continue;
        }
        if (ar[i] == FGCLASS) 
        {
          eval(pf + 'fgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCLASS) 
        {
          eval(pf + 'bgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONTCLASS) 
        {
          eval(pf + 'textfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONFONTCLASS) 
        {
          eval(pf + 'captionfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSEFONTCLASS) 
        {
          eval(pf + 'closefontclass="' + ar[++i] + '"');
          continue;
        }
        i = parseCmdLine(pf, i, ar);
      }
    }
  if (fnMark && o3_function) 
  o3_text = o3_function();
  if ((pf == 'o3_') && o3_wrap) 
  {
    o3_width = 0;
    var tReg = /<.*\n*>/ig;
    if (!tReg.test(o3_text)) 
    o3_text = o3_text.replace(/[ ]+/g, '&nbsp;');
    if (!tReg.test(o3_cap)) 
    o3_cap = o3_cap.replace(/[ ]+/g, '&nbsp;');
  }
  if ((pf == 'o3_') && o3_sticky) 
  {
    if (!o3_close && (o3_frame != ol_frame)) 
    o3_close = ol_close;
    if (o3_mouseoff && (o3_frame == ol_frame)) 
    opt_NOCLOSE(' ');
  }
}



function opt_FUNCTION(callme) {
  o3_text = (callme ? (typeof callme == 'string' ? (/.+\(.*\)/.test(callme) ? eval(callme) : callme) : callme()) : (o3_function ? o3_function() : 'No Function'));
  return 0;
}



function escSglQuote(str) {
  return str.toString().replace(/'/g, "\\'");
}



function isExclusive(args) {
  return false;
}



function setCellPadStr(parameter) {
  var Str = '', j = 0, ary = new Array(), top, bottom, left, right;
  Str += 'padding: ';
  ary = parameter.replace(/\s+/g, '').split(',');
  switch (ary.length) {
    case 2:
      top = bottom = ary[j];
      left = right = ary[++j];
      break;
    case 3:
      top = ary[j];
      left = right = ary[++j];
      bottom = ary[++j];
      break;
    case 4:
      top = ary[j];
      right = ary[++j];
      bottom = ary[++j];
      left = ary[++j];
      break;
  }
  Str += ((ary.length == 1) ? ary[0] + 'px;' : top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px;');
  return Str;
}



function hideDelay(time) {
  if (time && !o3_delay) 
  {
    if (o3_timerid > 0) 
    clearTimeout(o3_timerid);
    o3_timerid = setTimeout("cClick()", (o3_timeout = time));
  }
}



function isFunction(fnRef) {
  var rtn = true;
  if (typeof fnRef == 'object') 
  {
    for (var i = 0; i < fnRef.length; i++) 
      {
        if (typeof fnRef[i] == 'function') 
        continue;
        rtn = false;
        break;
      }
  } else if (typeof fnRef != 'function') 
  {
    rtn = false;
  }
  return rtn;
}



function argToString(array, strtInd, argName) {
  var jS = strtInd, aS = '', ar = array;
  argName = (argName ? argName : 'ar');
  if (ar.length > jS) 
  {
    for (var k = jS; k < ar.length; k++) 
      aS += argName + '[' + k + '], ';
    aS = aS.substring(0, aS.length - 2);
  }
  return aS;
}



function reOrder(hookPt, fnRef, order) {
  var newPt = new Array(), match, i, j;
  if (!order || typeof order == 'undefined' || typeof order == 'number') 
  return hookPt;
  if (typeof order == 'function') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (i = 0; i < hookPt.length; i++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[i] == fnRef) 
        {
          continue;
        } else {
          for (j = 0; j < fnRef.length; j++) 
            if (hookPt[i] == fnRef[j]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[i];
      }
    newPt[newPt.length++] = order;
  } else if (typeof order == 'object') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[j] == fnRef) 
        {
          continue;
        } else {
          for (i = 0; i < fnRef.length; i++) 
            if (hookPt[j] == fnRef[i]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    for (i = 0; i < newPt.length; i++) 
      hookPt[i] = newPt[i];
    newPt.length = 0;
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        for (i = 0; i < order.length; i++) 
          {
            if (hookPt[j] == order[i]) 
            {
              match = true;
              break;
            }
          }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    newPt = newPt.concat(order);
  }
  hookPt = newPt;
  return hookPt;
}



function setRunTimeVariables() {
  if (typeof runTime != 'undefined' && runTime.length) 
  {
    for (var k = 0; k < runTime.length; k++) 
      {
        runTime[k]();
      }
  }
}



function parseCmdLine(pf, i, args) {
  if (typeof cmdLine != 'undefined' && cmdLine.length) 
  {
    for (var k = 0; k < cmdLine.length; k++) 
      {
        var j = cmdLine[k](pf, i, args);
        if (j > -1) 
        {
          i = j;
          break;
        }
      }
  }
  return i;
}



function postParseChecks(pf, args) {
  if (typeof postParse != 'undefined' && postParse.length) 
  {
    for (var k = 0; k < postParse.length; k++) 
      {
        if (postParse[k](pf, args)) 
        continue;
        return false;
      }
  }
  return true;
}



function registerCommands(cmdStr) {
  if (typeof cmdStr != 'string') 
  return;
  var pM = cmdStr.split(',');
  pms = pms.concat(pM);
  for (var i = 0; i < pM.length; i++) 
    {
      eval(pM[i].toUpperCase() + '=' + pmCount++);
    }
}



function registerNoParameterCommands(cmdStr) {
  if (!cmdStr && typeof cmdStr != 'string') 
  return;
  pmt = (!pmt) ? cmdStr : pmt + ',' + cmdStr;
}



function Left(str, n) {
  if (n <= 0) 
  return ""; else if (n > String(str).length) 
  return str; else return String(str).substring(0, n);
}



function Right(str, n) {
  if (n <= 0) 
  return ""; else if (n > String(str).length) 
  return str; else {
    var iLen = String(str).length;
    return String(str).substring(iLen, iLen - n);
  }
}



function True() {
  return true;
}



function False() {
  return false;
}



function keys(hash) {
  var tmp = [];
  for (var key in hash) 
    {
      tmp.push(key);
    }
  return tmp;
}



function each(obj, callback) {
  for (var i in obj) 
    {
      callback(obj[i], i);
    }
}



function foreach(array, callback) {
  var len = array.length;
  for (var i = 0; i < len; i++) 
    {
      callback(array[i], i, array);
    }
}



function Arg(n) {
  return function() {
  return arguments[n];
};
}



function This() {
  return function() {
  return this;
};
}



function alias(method) {
  return function() {
  return this[method].apply(this, arguments);
};
}



function sender(method) {
  var args = Array.slice(arguments, 1);
  return function(self) {
  var ex_args = Array.from(arguments);
  return send(self, method, args.concat(ex_args));
};
}



function delegator(key, method) {
  return function() {
  var self = this[key];
  return self[method].apply(self, arguments);
};
}



function getter(attr) {
  return function(self) {
  return self[attr];
};
}



function isString(obj) {
  return (typeof obj == "string" || obj instanceof String) ? true : false;
}



function isNumber(obj) {
  return (typeof obj == "number" || obj instanceof Number) ? true : false;
}



function isElement(obj) {
  return obj.nodeType ? true : false;
}



function isFunction(obj) {
  return typeof obj == "function";
}



function isArray(obj) {
  return obj instanceof Array;
}



function isRegExp(obj) {
  return obj instanceof RegExp;
}



function parent(obj, method, args) {
  var p = obj.parent;
  while (p) 
    {
      send(p, method, args);
      p = obj.parent;
    }
}



function invoke(obj, method, args) {
  var o = obj.parent;
  for (; typeof (o) != 'undefined'; o = o.parent) 
    {
      if (typeof (o[method]) == 'function') 
      {
        return o[method].apply(obj, args);
      }
    }
  return false;
}



function html_filter(string) {
  return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;');
}



function GetRandom(max) {
  return (Math.floor(Math.random() * max)) + 1;
}



function replaceClassName(el, oldClassName, newClassName) {
  if (oldClassName == newClassName) 
  return false;
  var classNames = el.className.split(' ');
  var newClassNames = new Array();
  var hasOld = false;
  for (var i = 0; i < classNames.length; i++) 
    {
      if (classNames[i] == oldClassName) 
      {
        newClassNames.push(newClassName);
        hasOld = true;
      } else newClassNames.push(classNames[i]);
    }
  if (!hasOld) 
  newClassNames.push(newClassName);
  el.className = newClassNames.join(' ');
}



function P(obj) {
  var dump = [];
  for (var i in obj) 
    {
      dump.push(i + " = " + obj[i]);
    }
  return dump.join("\n");
}



function a0() {
  this.b2 = 0;
  this.b3 = 0;
  this.b4 = 0;
  this.b5 = 0;
  this.b8 = 0;
  this.b9 = 0;
  this.b7 = 0;
  this.b6 = 0;
  this.hideselect = false;
  this.hideobject = false;
}



function subMenu() {
  var i, p, v, obj, args = subMenu.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v = 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function hrefRename(oControl) {
  if (oControl.innerText == 'Open All') 
  {
    oControl.innerText = 'Close All';
  } else {
    oControl.innerText = 'Open All';
  }
}



function _uVoid() {
  return;
}



function __utmSetVar(v) {
  if (!v || v == "") 
  return;
  var r = Math.round(Math.random() * 2147483647);
  _ubd.cookie = "__utmv=" + _udh + "." + escape(v) + "; path=/; expires=Sun, 18 Jan 2038 00:00:00 GMT;" + _udo;
  var s = "&utmt=var&utmn=" + r;
  if (_userv == 0 || _userv == 2) 
  {
    var i = new Image(1, 1);
    i.src = _ugifpath + "?" + "utmwv=" + _uwv + s;
    i.onload = function() {
  _uVoid();
};
  }
  if (_userv == 1 || _userv == 2) 
  {
    var i2 = new Image(1, 1);
    i2.src = _ugifpath2 + "?" + "utmwv=" + _uwv + s + "&utmac=" + _uacct + "&utmcc=" + _uGCS();
    i2.onload = function() {
  _uVoid();
};
  }
}



function _uGC(l, n, s) {
  if (!l || l == "" || !n || n == "" || !s || s == "") 
  return "-";
  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) 
  {
    i2 = l.indexOf(s, i);
    if (i2 < 0) 
    {
      i2 = l.length;
    }
    c = l.substring((i + i3), i2);
  }
  return c;
}



function _uHash(d) {
  if (!d || d == "") 
  return 1;
  var h = 0, g = 0;
  for (var i = d.length - 1; i >= 0; i--) 
    {
      var c = parseInt(d.charCodeAt(i));
      h = ((h << 6) & fffffff) + c + (c << 14);
      if ((g = h & fe00000) != 0) 
      h = (h ^ (g >> 21));
    }
  return h;
}



function _uFixA(c, s, t) {
  if (!c || c == "" || !s || s == "" || !t || t == "") 
  return "-";
  var a = _uGC(c, "__utma=" + _udh, s);
  var lt = 0, i = 0;
  if ((i = a.lastIndexOf(".")) > 9) 
  {
    _uns = a.substring(i + 1, a.length);
    _uns = (_uns * 1) + 1;
    a = a.substring(0, i);
    if ((i = a.lastIndexOf(".")) > 7) 
    {
      lt = a.substring(i + 1, a.length);
      a = a.substring(0, i);
    }
    if ((i = a.lastIndexOf(".")) > 5) 
    {
      a = a.substring(0, i);
    }
    a += "." + lt + "." + t + "." + _uns;
  }
  return a;
}



function _uTrim(s) {
  if (!s || s == "") 
  return "";
  while ((s.charAt(0) == ' ') || (s.charAt(0) == '\n') || (s.charAt(0, 1) == '\r')) 
    s = s.substring(1, s.length);
  while ((s.charAt(s.length - 1) == ' ') || (s.charAt(s.length - 1) == '\n') || (s.charAt(s.length - 1) == '\r')) 
    s = s.substring(0, s.length - 1);
  return s;
}



function _uEC(s) {
  var n = "";
  if (!s || s == "") 
  return "";
  for (var i = 0; i < s.length; i++) 
    {
      if (s.charAt(i) == " ") 
      n += "+"; else n += s.charAt(i);
    }
  return n;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function clearBox(box) {
  if (box.value == box.defaultValue) 
  {
    box.value = "";
  }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function utf8encode(txt) {
  txt = txt.replace(/\r\n/g, "\n");
  var utf8txt = "";
  for (var i = 0; i < txt.length; i++) 
    {
      var uc = txt.charCodeAt(i);
      if (uc < 128) 
      {
        utf8txt += String.fromCharCode(uc);
      } else if ((uc > 127) && (uc < 2048)) 
      {
        utf8txt += String.fromCharCode((uc >> 6) | 192);
        utf8txt += String.fromCharCode((uc & 63) | 128);
      } else {
        utf8txt += String.fromCharCode((uc >> 12) | 224);
        utf8txt += String.fromCharCode(((uc >> 6) & 63) | 128);
        utf8txt += String.fromCharCode((uc & 63) | 128);
      }
    }
  return utf8txt;
}



function makeInt(B) {
  var D = new RegExp("([0-9]*)");
  var C = 0;
  if (isNaN(B)) 
  {
    var A = D.exec(B);
    if (!isNaN(parseInt(A[1]))) 
    {
      C = A[1];
    }
  } else {
    C = B;
  }
  return C;
}



function right(B, A) {
  return B.substr(B.length - A);
}



function left(B, A) {
  return B.substr(0, A);
}



function reverse(C) {
  var B = "";
  var A = C.length;
  while (A > 0) 
    {
      B += C.substring(A - 1, A);
      A--;
    }
  return B;
}



function replace(B, A, C) {
  return B.replace(A, C);
}



function replaceall(C, B, A) {
  while (C.indexOf(B) != -1) 
    {
      C = C.replace(B, A);
    }
  return C;
}



function middle(C, B, A) {
  return C.substring(B - 1, A);
}



function chopleft(C, B) {
  var A = "";
  if (C.search(B) < 0) 
  {
    A = C;
  } else {
    A = C.substring(C.search(B));
  }
  return A;
}



function chopright(C, B) {
  var A = "";
  if (C.search(B) < 0) 
  {
    A = C;
  } else {
    A = C.substring(0, C.search(B));
  }
  return A;
}



function MakeHex(A) {
  if ((A >= 0) && (A <= 9)) 
  {
    return A;
  } else {
    switch (A) {
      case 10:
        return "A";
      case 11:
        return "B";
      case 12:
        return "C";
      case 13:
        return "D";
      case 14:
        return "E";
      case 15:
        return "F";
    }
  }
}



function pixelFraction(H, G, A) {
  var C = 0;
  var B = new Array(1);
  var F = new Array(1);
  var I = 0;
  var D = "";
  var E = Math.sqrt((Math.pow(A, 2) - Math.pow(H, 2)));
  if ((E >= G) && (E < (G + 1))) 
  {
    D = "Left";
    B[I] = 0;
    F[I] = E - G;
    I = I + 1;
  }
  var E = Math.sqrt((Math.pow(A, 2) - Math.pow(G + 1, 2)));
  if ((E >= H) && (E < (H + 1))) 
  {
    D = D + "Top";
    B[I] = E - H;
    F[I] = 1;
    I = I + 1;
  }
  var E = Math.sqrt((Math.pow(A, 2) - Math.pow(H + 1, 2)));
  if ((E >= G) && (E < (G + 1))) 
  {
    D = D + "Right";
    B[I] = 1;
    F[I] = E - G;
    I = I + 1;
  }
  var E = Math.sqrt((Math.pow(A, 2) - Math.pow(G, 2)));
  if ((E >= H) && (E < (H + 1))) 
  {
    D = D + "Bottom";
    B[I] = E - H;
    F[I] = 0;
  }
  switch (D) {
    case "LeftRight":
      C = Math.min(F[0], F[1]) + ((Math.max(F[0], F[1]) - Math.min(F[0], F[1])) / 2);
      break;
    case "TopRight":
      C = 1 - (((1 - B[0]) * (1 - F[1])) / 2);
      break;
    case "TopBottom":
      C = Math.min(B[0], B[1]) + ((Math.max(B[0], B[1]) - Math.min(B[0], B[1])) / 2);
      break;
    case "LeftBottom":
      C = (F[0] * B[1]) / 2;
      break;
    default:
      C = 1;
  }
  return C;
}



function rgb2Array(A) {
  var C = A.substring(4, A.indexOf(")"));
  var B = C.split(", ");
  return B;
}



function inArray(C, B) {
  for (var A = 0; A < C.length; A++) 
    {
      if (C[A] === B) 
      {
        return A;
      }
    }
  return false;
}



function inArrayKey(B, A) {
  for (key in B) 
    {
      if (key === A) 
      {
        return true;
      }
    }
  return false;
}



function format_colour(B) {
  var A = "#ffffff";
  if (B != "" && B != "transparent") 
  {
    if (B.substr(0, 3) == "rgb") 
    {
      A = rgb2Hex(B);
    } else {
      if (B.length == 4) 
      {
        A = "#" + B.substring(1, 2) + B.substring(1, 2) + B.substring(2, 3) + B.substring(2, 3) + B.substring(3, 4) + B.substring(3, 4);
      } else {
        A = B;
      }
    }
  }
  return A;
}



function newCurvyError(A) {
  return new Error("curvyCorners Error:\n" + A);
}



function onEnter(event, doit) {
  if (event.keyCode == 13) 
  {
    event.preventDefault();
    doit(event.srcElement);
  }
}



function onTab(event, doit) {
  if (event.keyCode == 9) 
  {
    event.preventDefault();
    doit(event.srcElement);
  }
}



function SetText(obj1, obj2) {
  obj2.value = obj1.value;
}



function SetObject(obj1, obj2) {
  if (obj1.checked) 
  obj2.value = "True"; else obj2.value = "False";
}



function checkBoxChanged(obj1, obj2) {
  if (obj1.checked) 
  obj2.disabled = false; else obj2.disabled = true;
}



function checkClearCombo(obj1, obj2, obj3) {
  if (!obj1.checked) 
  {
    obj2.value = "";
    obj3.value = "";
  }
}



function isBreedSet(strBreed) {
  if (strBreed == "S") 
  return 0;
  if (strBreed == "H") 
  return 1;
  return 2;
}



function checkCC(s) {
  if (s == "4111111111111111") 
  {
    return true;
  }
  var i, n, c, r, t;
  r = "";
  for (i = 0; i < s.length; i++) 
    {
      c = parseInt(s.charAt(i), 10);
      if (c >= 0 && c <= 9) 
      r = c + r;
    }
  if (r.length <= 1) 
  return false;
  t = "";
  for (i = 0; i < r.length; i++) 
    {
      c = parseInt(r.charAt(i), 10);
      if (i % 2 != 0) 
      c *= 2;
      t = t + c;
    }
  n = 0;
  for (i = 0; i < t.length; i++) 
    {
      c = parseInt(t.charAt(i), 10);
      n = n + c;
    }
  if (n != 0 && n % 10 == 0) 
  return true; else return false;
}



function isBreed(objBreed) {
  if (objBreed.value == "") 
  {
    return 2;
  } else if (objBreed.value == "S") 
  {
    return 0;
  }
  return 1;
}



function isYearling3(objAge) {
  if (objAge.value == "") 
  {
    return 2;
  } else if (objAge.value == "Y") 
  {
    return 0;
  }
  return 1;
}



function MM_showHideLayers() {
  var i, p, v, obj, args = MM_showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = MM_findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'show') ? 'visible' : (v == 'hide') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function flSetFlookie(hash) {
  try {
    var hA = new Array();
    for (var n in hash) 
      {
        if (flIsValidInputParam(n)) 
        {
          hA[hA.length + 1] = n + "=" + escape(hash[n]);
          flCheckFlookie.set(n, escape(hash[n]));
        }
      }
  }  catch (err) {
}
}



function flGetFlookie() {
  try {
    flCheckFlookie = new Flookie('flCheck');
    var flCheck = GetCookie("flCheck");
    if (flCheck == "") 
    {
      var listenerObj = new Object();
      listenerObj.ready = function() {
  if (flCheckFlookie.exists()) 
  {
    var opt_in = flCheckFlookie.get('in_optin');
    if (opt_in == "true") 
    {
      var myHash = new Object();
      myHash = flCheckFlookie.getAll();
      flGotVals(myHash);
    }
  }
};
      Flookie.addListener(listenerObj);
    } else {
      if (flCheckFlookie.ready()) 
      {
        flProcessGotVals();
      } else {
        var listenerObj = new Object();
        listenerObj.ready = function() {
  flProcessGotVals();
};
        Flookie.addListener(listenerObj);
      }
    }
  }  catch (err) {
}
}



function flDelFlookie() {
  try {
    if (flCheckFlookie.exists()) 
    {
      flCheckFlookie.destroy();
    }
  }  catch (err) {
}
}



function flSetVals(status, message) {
  if (status != 1) 
  {
  }
}



function flDelVals(status, message) {
  if (status != 1) 
  {
  }
}



function getKey(e) {
  if (e == null) 
  {
    keycode = event.keyCode;
  } else {
    keycode = e.which;
  }
  key = String.fromCharCode(keycode).toLowerCase();
  if (key == 'x') 
  {
  }
}



function pause(ms) {
  var date = new Date();
  curDate = null;
do {
    var curDate = new Date();
  } while (curDate - date < ms);
}



function collect(a, f) {
  var n = [];
  for (var i = 0; i < a.length; i++) 
    {
      var v = f(a[i]);
      if (v != null) 
      n.push(v);
    }
  return n;
}



function _rsiwa(u, n, v) {
  return u + (u.indexOf("?") == -1 ? "?" : "&") + n + "=" + v;
}



function _rsiza(u) {
  var i = u.indexOf('#');
  return (i >= 0) ? u.substr(0, i) : u;
}



function _rsiCa(i) {
  var fb = i.toString(16).toUpperCase();
  return fb.length < 2 ? "0" + fb : fb;
}



function strip_tags(testo) {
  tags = testo;
  stripped = tags.replace(/[\<\>]/gi, "");
  return stripped;
}



function StripSpaces(s) {
  while (s.indexOf(' ') == 0) 
    {
      s = s.substr(1);
    }
  return s;
}



function iD(s, a) {
  var x = s + 'x';
  x.toLowerCase();
  var c = 0;
  var z = '';
  for (var i = 0; i < a.length; i++) 
    {
      z = a[i];
      z.toLowerCase();
      if (x.search(z) == -1) 
      c++;
    }
  if (a.length == c) 
  return 1;
  return 0;
}



function tsc_gct() {
  var tsc_mcts;
  tsc_mcts = new Date();
  return tsc_mcts.getTime();
}



function qa(a, b) {
  return String.fromCharCode(a.charCodeAt(0) - (b - (parseInt(b / 2) * 2)));
}



function qm_kille(e) {
  if (!e) 
  e = event;
  e.cancelBubble = true;
  if (e.stopPropagation && !(qm_s && e.type == "click")) 
  e.stopPropagation();
}



function qm_image_split_ext_name(s) {
  var ext = s.split(".");
  ext = ext[ext.length - 1];
  var fn = s.substring(0, s.length - (ext.length + 1));
  return new Array(fn, ext);
}



function parseTokens(pf, ar) {
  var v, i, mode = -1, par = (pf != 'ol_'), fnMark = (par && !ar.length ? 1 : 0);
  for (i = 0; i < ar.length; i++) 
    {
      if (mode < 0) 
      {
        if (typeof ar[i] == 'number' && ar[i] > pmStart && ar[i] < pmUpper) 
        {
          fnMark = (par ? 1 : 0);
          i--;
        } else {
          switch (pf) {
            case 'ol_':
              ol_text = ar[i].toString();
              break;
            default:
              o3_text = ar[i].toString();
          }
        }
        mode = 0;
      } else {
        if (ar[i] >= pmCount || ar[i] == DONOTHING) 
        {
          continue;
        }
        if (ar[i] == INARRAY) 
        {
          fnMark = 0;
          eval(pf + 'text=ol_texts[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == CAPARRAY) 
        {
          eval(pf + 'cap=ol_caps[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == STICKY) 
        {
          if (pf != 'ol_') 
          eval(pf + 'sticky=1');
          continue;
        }
        if (ar[i] == BACKGROUND) 
        {
          eval(pf + 'background="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == NOCLOSE) 
        {
          if (pf != 'ol_') 
          opt_NOCLOSE();
          continue;
        }
        if (ar[i] == CAPTION) 
        {
          eval(pf + "cap='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CENTER || ar[i] == LEFT || ar[i] == RIGHT) 
        {
          eval(pf + 'hpos=' + ar[i]);
          if (pf != 'ol_') 
          olHautoFlag = 1;
          continue;
        }
        if (ar[i] == OFFSETX) 
        {
          eval(pf + 'offsetx=' + ar[++i]);
          continue;
        }
        if (ar[i] == OFFSETY) 
        {
          eval(pf + 'offsety=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGCOLOR) 
        {
          eval(pf + 'fgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCOLOR) 
        {
          eval(pf + 'bgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTCOLOR) 
        {
          eval(pf + 'textcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPCOLOR) 
        {
          eval(pf + 'capcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSECOLOR) 
        {
          eval(pf + 'closecolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == WIDTH) 
        {
          eval(pf + 'width=' + ar[++i]);
          continue;
        }
        if (ar[i] == BORDER) 
        {
          eval(pf + 'border=' + ar[++i]);
          continue;
        }
        if (ar[i] == CELLPAD) 
        {
          i = opt_MULTIPLEARGS(++i, ar, (pf + 'cellpad'));
          continue;
        }
        if (ar[i] == STATUS) 
        {
          eval(pf + "status='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == AUTOSTATUS) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus==1)?0:1');
          continue;
        }
        if (ar[i] == AUTOSTATUSCAP) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus==2)?0:2');
          continue;
        }
        if (ar[i] == HEIGHT) 
        {
          eval(pf + 'height=' + pf + 'aboveheight=' + ar[++i]);
          continue;
        }
        if (ar[i] == CLOSETEXT) 
        {
          eval(pf + "close='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == SNAPX) 
        {
          eval(pf + 'snapx=' + ar[++i]);
          continue;
        }
        if (ar[i] == SNAPY) 
        {
          eval(pf + 'snapy=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXX) 
        {
          eval(pf + 'fixx=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXY) 
        {
          eval(pf + 'fixy=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELX) 
        {
          eval(pf + 'relx=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELY) 
        {
          eval(pf + 'rely=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGBACKGROUND) 
        {
          eval(pf + 'fgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGBACKGROUND) 
        {
          eval(pf + 'bgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == PADX) 
        {
          eval(pf + 'padxl=' + ar[++i]);
          eval(pf + 'padxr=' + ar[++i]);
          continue;
        }
        if (ar[i] == PADY) 
        {
          eval(pf + 'padyt=' + ar[++i]);
          eval(pf + 'padyb=' + ar[++i]);
          continue;
        }
        if (ar[i] == FULLHTML) 
        {
          if (pf != 'ol_') 
          eval(pf + 'fullhtml=1');
          continue;
        }
        if (ar[i] == BELOW || ar[i] == ABOVE) 
        {
          eval(pf + 'vpos=' + ar[i]);
          if (pf != 'ol_') 
          olVautoFlag = 1;
          continue;
        }
        if (ar[i] == CAPICON) 
        {
          eval(pf + 'capicon="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONT) 
        {
          eval(pf + "textfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CAPTIONFONT) 
        {
          eval(pf + "captionfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CLOSEFONT) 
        {
          eval(pf + "closefont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == TEXTSIZE) 
        {
          eval(pf + 'textsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONSIZE) 
        {
          eval(pf + 'captionsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSESIZE) 
        {
          eval(pf + 'closesize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TIMEOUT) 
        {
          eval(pf + 'timeout=' + ar[++i]);
          continue;
        }
        if (ar[i] == FUNCTION) 
        {
          if (pf == 'ol_') 
          {
            if (typeof ar[i + 1] != 'number') 
            {
              v = ar[++i];
              ol_function = (typeof v == 'function' ? v : null);
            }
          } else {
            fnMark = 0;
            v = null;
            if (typeof ar[i + 1] != 'number') 
            v = ar[++i];
            opt_FUNCTION(v);
          }
          continue;
        }
        if (ar[i] == DELAY) 
        {
          eval(pf + 'delay=' + ar[++i]);
          continue;
        }
        if (ar[i] == HAUTO) 
        {
          eval(pf + 'hauto=(' + pf + 'hauto==0)?1:0');
          continue;
        }
        if (ar[i] == VAUTO) 
        {
          eval(pf + 'vauto=(' + pf + 'vauto==0)?1:0');
          continue;
        }
        if (ar[i] == CLOSECLICK) 
        {
          eval(pf + 'closeclick=(' + pf + 'closeclick==0)?1:0');
          continue;
        }
        if (ar[i] == WRAP) 
        {
          eval(pf + 'wrap=(' + pf + 'wrap==0)?1:0');
          continue;
        }
        if (ar[i] == FOLLOWMOUSE) 
        {
          eval(pf + 'followmouse=(' + pf + 'followmouse==1)?0:1');
          continue;
        }
        if (ar[i] == MOUSEOFF) 
        {
          eval(pf + 'mouseoff=(' + pf + 'mouseoff==0)?1:0');
          v = ar[i + 1];
          if (pf != 'ol_' && eval(pf + 'mouseoff') && typeof v == 'number' && (v < pmStart || v > pmUpper)) 
          olHideDelay = ar[++i];
          continue;
        }
        if (ar[i] == CLOSETITLE) 
        {
          eval(pf + "closetitle='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CSSOFF || ar[i] == CSSCLASS) 
        {
          eval(pf + 'css=' + ar[i]);
          continue;
        }
        if (ar[i] == COMPATMODE) 
        {
          eval(pf + 'compatmode=(' + pf + 'compatmode==0)?1:0');
          continue;
        }
        if (ar[i] == FGCLASS) 
        {
          eval(pf + 'fgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCLASS) 
        {
          eval(pf + 'bgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONTCLASS) 
        {
          eval(pf + 'textfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONFONTCLASS) 
        {
          eval(pf + 'captionfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSEFONTCLASS) 
        {
          eval(pf + 'closefontclass="' + ar[++i] + '"');
          continue;
        }
        i = parseCmdLine(pf, i, ar);
      }
    }
  if (fnMark && o3_function) 
  o3_text = o3_function();
  if ((pf == 'o3_') && o3_wrap) 
  {
    o3_width = 0;
    var tReg = /<.*\n*>/ig;
    if (!tReg.test(o3_text)) 
    o3_text = o3_text.replace(/[ ]+/g, '&nbsp;');
    if (!tReg.test(o3_cap)) 
    o3_cap = o3_cap.replace(/[ ]+/g, '&nbsp;');
  }
  if ((pf == 'o3_') && o3_sticky) 
  {
    if (!o3_close && (o3_frame != ol_frame)) 
    o3_close = ol_close;
    if (o3_mouseoff && (o3_frame == ol_frame)) 
    opt_NOCLOSE(' ');
  }
}



function opt_FUNCTION(callme) {
  o3_text = (callme ? (typeof callme == 'string' ? (/.+\(.*\)/.test(callme) ? eval(callme) : callme) : callme()) : (o3_function ? o3_function() : 'No Function'));
  return 0;
}



function escSglQuote(str) {
  return str.toString().replace(/'/g, "\\'");
}



function isExclusive(args) {
  return false;
}



function setCellPadStr(parameter) {
  var Str = '', j = 0, ary = new Array(), top, bottom, left, right;
  Str += 'padding: ';
  ary = parameter.replace(/\s+/g, '').split(',');
  switch (ary.length) {
    case 2:
      top = bottom = ary[j];
      left = right = ary[++j];
      break;
    case 3:
      top = ary[j];
      left = right = ary[++j];
      bottom = ary[++j];
      break;
    case 4:
      top = ary[j];
      right = ary[++j];
      bottom = ary[++j];
      left = ary[++j];
      break;
  }
  Str += ((ary.length == 1) ? ary[0] + 'px;' : top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px;');
  return Str;
}



function hideDelay(time) {
  if (time && !o3_delay) 
  {
    if (o3_timerid > 0) 
    clearTimeout(o3_timerid);
    o3_timerid = setTimeout("cClick()", (o3_timeout = time));
  }
}



function isFunction(fnRef) {
  var rtn = true;
  if (typeof fnRef == 'object') 
  {
    for (var i = 0; i < fnRef.length; i++) 
      {
        if (typeof fnRef[i] == 'function') 
        continue;
        rtn = false;
        break;
      }
  } else if (typeof fnRef != 'function') 
  {
    rtn = false;
  }
  return rtn;
}



function argToString(array, strtInd, argName) {
  var jS = strtInd, aS = '', ar = array;
  argName = (argName ? argName : 'ar');
  if (ar.length > jS) 
  {
    for (var k = jS; k < ar.length; k++) 
      aS += argName + '[' + k + '], ';
    aS = aS.substring(0, aS.length - 2);
  }
  return aS;
}



function reOrder(hookPt, fnRef, order) {
  var newPt = new Array(), match, i, j;
  if (!order || typeof order == 'undefined' || typeof order == 'number') 
  return hookPt;
  if (typeof order == 'function') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (i = 0; i < hookPt.length; i++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[i] == fnRef) 
        {
          continue;
        } else {
          for (j = 0; j < fnRef.length; j++) 
            if (hookPt[i] == fnRef[j]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[i];
      }
    newPt[newPt.length++] = order;
  } else if (typeof order == 'object') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[j] == fnRef) 
        {
          continue;
        } else {
          for (i = 0; i < fnRef.length; i++) 
            if (hookPt[j] == fnRef[i]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    for (i = 0; i < newPt.length; i++) 
      hookPt[i] = newPt[i];
    newPt.length = 0;
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        for (i = 0; i < order.length; i++) 
          {
            if (hookPt[j] == order[i]) 
            {
              match = true;
              break;
            }
          }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    newPt = newPt.concat(order);
  }
  hookPt = newPt;
  return hookPt;
}



function setRunTimeVariables() {
  if (typeof runTime != 'undefined' && runTime.length) 
  {
    for (var k = 0; k < runTime.length; k++) 
      {
        runTime[k]();
      }
  }
}



function parseCmdLine(pf, i, args) {
  if (typeof cmdLine != 'undefined' && cmdLine.length) 
  {
    for (var k = 0; k < cmdLine.length; k++) 
      {
        var j = cmdLine[k](pf, i, args);
        if (j > -1) 
        {
          i = j;
          break;
        }
      }
  }
  return i;
}



function postParseChecks(pf, args) {
  if (typeof postParse != 'undefined' && postParse.length) 
  {
    for (var k = 0; k < postParse.length; k++) 
      {
        if (postParse[k](pf, args)) 
        continue;
        return false;
      }
  }
  return true;
}



function registerCommands(cmdStr) {
  if (typeof cmdStr != 'string') 
  return;
  var pM = cmdStr.split(',');
  pms = pms.concat(pM);
  for (var i = 0; i < pM.length; i++) 
    {
      eval(pM[i].toUpperCase() + '=' + pmCount++);
    }
}



function registerNoParameterCommands(cmdStr) {
  if (!cmdStr && typeof cmdStr != 'string') 
  return;
  pmt = (!pmt) ? cmdStr : pmt + ',' + cmdStr;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function none() {
}



function nn(val) {
  return val != null;
}



function und(val) {
  return typeof (val) == 'undefined';
}



function MakeHex(x) {
  if ((x >= 0) && (x <= 9)) 
  {
    return x;
  } else {
    switch (x) {
      case 10:
        return "A";
      case 11:
        return "B";
      case 12:
        return "C";
      case 13:
        return "D";
      case 14:
        return "E";
      case 15:
        return "F";
    }
  }
}



function pixelFraction(x, y, r) {
  var pixelfraction = 0;
  var xvalues = new Array(1);
  var yvalues = new Array(1);
  var point = 0;
  var whatsides = "";
  var intersect = Math.sqrt((Math.pow(r, 2) - Math.pow(x, 2)));
  if ((intersect >= y) && (intersect < (y + 1))) 
  {
    whatsides = "Left";
    xvalues[point] = 0;
    yvalues[point] = intersect - y;
    point = point + 1;
  }
  var intersect = Math.sqrt((Math.pow(r, 2) - Math.pow(y + 1, 2)));
  if ((intersect >= x) && (intersect < (x + 1))) 
  {
    whatsides = whatsides + "Top";
    xvalues[point] = intersect - x;
    yvalues[point] = 1;
    point = point + 1;
  }
  var intersect = Math.sqrt((Math.pow(r, 2) - Math.pow(x + 1, 2)));
  if ((intersect >= y) && (intersect < (y + 1))) 
  {
    whatsides = whatsides + "Right";
    xvalues[point] = 1;
    yvalues[point] = intersect - y;
    point = point + 1;
  }
  var intersect = Math.sqrt((Math.pow(r, 2) - Math.pow(y, 2)));
  if ((intersect >= x) && (intersect < (x + 1))) 
  {
    whatsides = whatsides + "Bottom";
    xvalues[point] = intersect - x;
    yvalues[point] = 0;
  }
  switch (whatsides) {
    case "LeftRight":
      pixelfraction = Math.min(yvalues[0], yvalues[1]) + ((Math.max(yvalues[0], yvalues[1]) - Math.min(yvalues[0], yvalues[1])) / 2);
      break;
    case "TopRight":
      pixelfraction = 1 - (((1 - xvalues[0]) * (1 - yvalues[1])) / 2);
      break;
    case "TopBottom":
      pixelfraction = Math.min(xvalues[0], xvalues[1]) + ((Math.max(xvalues[0], xvalues[1]) - Math.min(xvalues[0], xvalues[1])) / 2);
      break;
    case "LeftBottom":
      pixelfraction = (yvalues[0] * xvalues[1]) / 2;
      break;
    default:
      pixelfraction = 1;
  }
  return pixelfraction;
}



function rgb2Array(rgbColour) {
  var rgbValues = rgbColour.substring(4, rgbColour.indexOf(")"));
  var rgbArray = rgbValues.split(", ");
  return rgbArray;
}



function inArray(array, value) {
  for (var i = 0; i < array.length; i++) 
    {
      if (array[i] === value) 
      return i;
    }
  return false;
}



function inArrayKey(array, value) {
  for (key in array) 
    {
      if (key === value) 
      return true;
    }
  return false;
}



function format_colour(colour) {
  var returnColour = "#ffffff";
  if (colour != "" && colour != "transparent") 
  {
    if (colour.substr(0, 3) == "rgb") 
    {
      returnColour = rgb2Hex(colour);
    } else if (colour.length == 4) 
    {
      returnColour = "#" + colour.substring(1, 2) + colour.substring(1, 2) + colour.substring(2, 3) + colour.substring(2, 3) + colour.substring(3, 4) + colour.substring(3, 4);
    } else {
      returnColour = colour;
    }
  }
  return returnColour;
}



function newCurvyError(errorMessage) {
  return new Error("curvyCorners Error:\n" + errorMessage);
}



function bodyOnClickConstructor() {
}



function bodyOnLoadConstructor() {
}



function bodyOnUnloadConstructor() {
}



function bodyOnLoad() {
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function NOF_Menu() {
  return this;
}



function NOF_Menu_Item() {
  this.id = arguments[0];
  this.orientation = arguments[1];
  this.openEffect = arguments[2];
  this.offsetX = arguments[3];
  this.offsetY = arguments[4];
  this.buttons = new Array();
  this.submenuHeight = 0;
  for (var i = 5; i < arguments.length; i++) 
    this.buttons[i - 5] = arguments[i];
  this.getPosition = function() {
  return new Array(this.offsetX, this.offsetY);
};
  this.getOffsetX = function getOffsetX() {
  return this.offsetX;
};
  this.getOffsetY = function getOffsetY() {
  return this.offsetY;
};
  this.getOpenEffect = function getOffsetY() {
  return this.openEffect;
};
  this.getOrientation = function getOrientation() {
  return this.orientation;
};
  return this;
}



function dcsMultiTrack() {
  if (typeof (_tag) != "undefined") 
  {
    return (_tag.dcsMultiTrack());
  }
}



function dcsDebug() {
  if (typeof (_tag) != "undefined") 
  {
    return (_tag.dcsDebug());
  }
}



function checkAll(field) {
  for (i = 0; i < field.length; i++) 
    field[i].checked = true;
}



function uncheckAll(field) {
  for (i = 0; i < field.length; i++) 
    field[i].checked = false;
}



function tabomatic(original, destination) {
  if (original.getAttribute && original.value.length == original.getAttribute("maxlength")) 
  {
    destination.focus();
  }
}



function rmGetSize(size) {
  if (size.indexOf("pop") > -1) 
  return 0; else if (size.indexOf("430x600") > -1) 
  return 53; else if (size.indexOf("300x600") > -1) 
  return 16; else if (size.indexOf("160x600") > -1) 
  return 10; else if (size == "120x600") 
  return 1; else if (size == "300x250") 
  return 2; else if (size == "336x280") 
  return 3; else if (size == "468x60") 
  return 4; else if (size == "550x150") 
  return 5; else if (size.indexOf("728x90") > -1) 
  return 6; else if (size.indexOf("700x300") > -1) 
  return 8; else if (size == "dynamictextlink") 
  return 9; else if (size == "125x125") 
  return 12; else if (size == "234x60") 
  return 13; else if (size == "120x240") 
  return 14; else if (size == "180x150") 
  return 15; else if (size == "100x25") 
  return 17; else if (size == "710x30") 
  return 18; else if (size.indexOf("720x300") > -1) 
  return 19; else if (size == "300x200") 
  return 20; else if (size == "72x50") 
  return 21; else if (size == "125x90") 
  return 22; else if (size == "120x90") 
  return 23; else if (size == "520x31") 
  return 24; else if (size == "300x400") 
  return 25; else if (size == "460x31") 
  return 26; else if (size == "503x140") 
  return 27; else if (size == "250x400") 
  return 28; else if (size == "200x200") 
  return 29; else if (size == "250x250") 
  return 30; else if (size == "468x250") 
  return 31; else if (size == "500x350") 
  return 32; else if (size == "425x600") 
  return 33; else if (size == "140x60") 
  return 34; else if (size == "120x60") 
  return 35; else if (size == "700x700") 
  return 36; else if (size == "140x140") 
  return 37; else if (size == "620x90") 
  return 38; else if (size == "125x300") 
  return 39; else if (size == "420x100") 
  return 40; else if (size == "88x31") 
  return 41; else if (size == "240x400") 
  return 42; else if (size == "120x300") 
  return 43; else if (size == "380x200") 
  return 44; else if (size == "199x70") 
  return 45; else if (size == "199x170") 
  return 46; else if (size == "180x240") 
  return 47; else if (size == "160x90") 
  return 48; else if (size == "230x33") 
  return 49; else if (size == "134x492") 
  return 50; else if (size == "436x600") 
  return 51; else if (size == "600x400") 
  return 52; else if (size == "460x60") 
  return 54; else if (size == "217x126") 
  return 55; else if (size == "260x31") 
  return 56; else if (size == "120x120") 
  return 57; else if (size == "400x600") 
  return 58; else if (size == "278x85") 
  return 59; else if (size == "300x90") 
  return 60; else if (size == "340x30") 
  return 61; else if (size == "768x400") 
  return 62; else if (size == "768x150") 
  return 63; else if (size == "468x400") 
  return 64; else if (size == "180x500") 
  return 65; else if (size == "140x350") 
  return 66; else if (size == "700x600") 
  return 67; else if (size == "209x30") 
  return 68; else if (size == "300x120") 
  return 69; else if (size == "206x278") 
  return 70; else if (size == "110x60") 
  return 71; else if (size == "90x75") 
  return 72; else if (size == "400x400") 
  return 73; else if (size == "129x740") 
  return 74; else if (size == "440x160") 
  return 75; else if (size == "336x250") 
  return 76; else if (size == "160x300") 
  return 77; else if (size == "240x100") 
  return 78; else if (size == "365x100") 
  return 79; else if (size == "728x180") 
  return 80; else if (size == "600x250") 
  return 81; else if (size == "400x300") 
  return 82; else if (size == "240x600") 
  return 83; else if (size == "320x600") 
  return 84; else if (size == "160x120") 
  return 85; else if (size == "184x96") 
  return 86; else if (size == "840x90") 
  return 87; else return -1;
}



function rmReplace(myString, toReplace, replaceBy) {
  return (myString.replace(new RegExp(toReplace, 'gi'), replaceBy));
}



function rmUrlEncode(txt) {
  var SAFECHARS = "0123456789" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "-_.!~*'()";
  var HEX = "0123456789ABCDEF";
  var plaintext = txt;
  var encoded = "";
  for (var i = 0; i < plaintext.length; i++) 
    {
      var ch = plaintext.charAt(i);
      if (ch == " ") 
      {
        encoded += "+";
      } else if (SAFECHARS.indexOf(ch) != -1) 
      {
        encoded += ch;
      } else {
        var charCode = ch.charCodeAt(0);
        if (charCode > 255) 
        {
          encoded += "+";
        } else {
          encoded += "%";
          encoded += HEX.charAt((charCode >> 4) & F);
          encoded += HEX.charAt(charCode & F);
        }
      }
    }
  return encoded;
}



function s_c2fe(f) {
  var x = '', s = 0, e, a, b, c;
  while (1) 
    {
      e = f.indexOf('"', s);
      b = f.indexOf('\\', s);
      c = f.indexOf("\n", s);
      if (e < 0 || (b >= 0 && b < e)) 
      e = b;
      if (e < 0 || (c >= 0 && c < e)) 
      e = c;
      if (e >= 0) 
      {
        x += (e > s ? f.substring(s, e) : '') + (e == c ? '\\n' : '\\' + f.substring(e, e + 1));
        s = e + 1;
      } else return x + f.substring(s);
    }
  return f;
}



function s_c2fa(f) {
  var s = f.indexOf('(') + 1, e = f.indexOf(')'), a = '', c;
  while (s >= 0 && s < e) 
    {
      c = f.substring(s, s + 1);
      if (c == ',') 
      a += '","'; else if (("\n\r\t ").indexOf(c) < 0) 
      a += c;
      s++;
    }
  return a ? '"' + a + '"' : a;
}



function s_c2fe(f) {
  var x = '', s = 0, e, a, b, c;
  while (1) 
    {
      e = f.indexOf('"', s);
      b = f.indexOf('\\', s);
      c = f.indexOf("\n", s);
      if (e < 0 || (b >= 0 && b < e)) 
      e = b;
      if (e < 0 || (c >= 0 && c < e)) 
      e = c;
      if (e >= 0) 
      {
        x += (e > s ? f.substring(s, e) : '') + (e == c ? '\\n' : '\\' + f.substring(e, e + 1));
        s = e + 1;
      } else return x + f.substring(s);
    }
  return f;
}



function s_c2fa(f) {
  var s = f.indexOf('(') + 1, e = f.indexOf(')'), a = '', c;
  while (s >= 0 && s < e) 
    {
      c = f.substring(s, s + 1);
      if (c == ',') 
      a += '","'; else if (("\n\r\t ").indexOf(c) < 0) 
      a += c;
      s++;
    }
  return a ? '"' + a + '"' : a;
}



function sort_rank(ary, counter) {
  var len = ary.length;
  var temp1_array = new Array();
  var temp2_array = new Array();
  var temp3_array = new Array();
  var temp4_array = new Array();
  var tempxxx_array = new Array();
  var tempxxx_array1 = new Array();
  var tempxxx_array2 = new Array();
  var return_com = "";
  var w = 0;
  var t = 0;
  for (var i = 0; i < len; i++) 
    {
      if (ary[i].getAttribute('isFixed') == 'Y') 
      {
        temp1_array[w] = ary[i];
        tempxxx_array1[w] = temp1_array[w].id;
        w++;
      } else {
        temp4_array[t] = ary[i];
        t++;
      }
    }
  for (var i = 0; i < t; i++) 
    {
      var k;
      k = (i + counter) % t;
      temp2_array[k] = temp4_array[i];
      tempxxx_array2[i] = temp2_array[k].id;
    }
  for (var i = 0; i < len; i++) 
    {
      if (ary[i].getAttribute('isFixed') == 'Y') 
      {
        var temp_array = new Array();
        temp_array = temp2_array.splice(i, len - i, ary[i]);
        if (temp_array) 
        temp2_array = temp2_array.concat(temp_array);
        for (var p = 0; p < temp2_array.length; p++) 
          {
            tempxxx_array[p] = temp2_array[p].id;
          }
      }
    }
  for (var i = 0; i < temp2_array.length; i++) 
    {
      temp3_array[i] = temp2_array[i].id;
    }
  for (var i = 0; i < len; i++) 
    {
      var k;
      var newhtml = setouthtml(temp2_array[i].id);
      return_com = return_com + newhtml + '<hr color="#CCCCCC" size="1" width="97%">';
    }
  return (return_com);
}



function ajaxFunction() {
  var xmlHttp;
  var x = new Array();
  x[1] = 'new XMLHttpRequest();';
  x[0] = "new ActiveXObject('Msxml2.XMLHTTP');";
  x[2] = "new ActiveXObject('Microsoft.XMLHTTP');";
  var status = 0;
  var i = 0;
  while (i < x.length) 
    {
      try {
        xmlHttp = eval(x[i]);
        break;
      }      catch (e) {
}
      i++;
    }
  return xmlHttp;
}



function addQStoURL(url, customQS) {
  if (url.indexOf('http://') == -1) 
  {
    return false;
  }
  if (url.indexOf('?') < 0) 
  {
    url = url + '?';
  }
  if (customQS) 
  {
    url = url + customQS;
  } else {
    url = url + getTheQueryString();
  }
  return url;
}



function addToOnload(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {
    return false;
  }
}



function absoluteOffset(elem) {
  return elem.offsetParent && elem.offsetTop + absoluteOffset(elem.offsetParent);
}



function PreviewSetIframeSrc(iframename, iframesrc) {
  if (!iframesrc.match(/^http:\/\//)) 
  {
    return false;
  }
  if (iframename == '') 
  {
    return false;
  }
  if (frames[iframename]) 
  {
    frames[iframename].location.href = iframesrc;
  }
}



function ajaxFunction() {
  var xmlHttp;
  var x = new Array();
  x[1] = 'new XMLHttpRequest();';
  x[0] = "new ActiveXObject('Msxml2.XMLHTTP');";
  x[2] = "new ActiveXObject('Microsoft.XMLHTTP');";
  var status = 0;
  var i = 0;
  while (i < x.length) 
    {
      try {
        xmlHttp = eval(x[i]);
        break;
      }      catch (e) {
}
      i++;
    }
  return xmlHttp;
}



function ql_nt(A) {
  n = new Array();
  qidx = A.indexOf("?");
  if (qidx == -1) 
  {
    return (A);
  }
  p = A.substring(0, qidx);
  s = A.substring(qidx + 1).split("&");
  for (i = 0; i < s.length; ++i) 
    {
      if (!(s[i].indexOf("returnUrl") == 0) && !(s[i].indexOf("SS_CSAT") == 0)) 
      {
        n[n.length] = s[i];
      }
    }
  if (p.indexOf("/process/") != -1) 
  {
    p = "/";
  }
  return (p + (n.length ? "?" : "") + n.join("&"));
}



function ql_csat() {
  var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var B = 30;
  var A = String();
  while (B-- > 0) 
    {
      A += C.charAt(Math.round(Math.random() * 25));
    }
  return (A);
}



function ql_sifs() {
  return ("");
}



function ql_sfs() {
  return ("");
}



function hideObject(A) {
  if (A) 
  {
    A.style.display = "none";
  }
}



function showObject(A) {
  if (A) 
  {
    A.style.display = "";
  }
}



function noop() {
}



function isDefined(v) {
  return (eval("(typeof(" + v + ') != "undefined");'));
}



function isLetter(A) {
  return ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(A) != -1);
}



function isDigit(A) {
  return ("0123456789".indexOf(A) != -1);
}



function convDate(sDate, sSep) {
  var nPos = sDate.indexOf(sSep);
  var nLen = sDate.length;
  var sRet = sDate;
  if ((7 < nLen) && (nLen < 11) && (nPos == 4)) 
  {
    nPos = sRet.indexOf(sSep, 5);
    if (nPos == 6) 
    {
      return nLen == 8 ? sRet.substring(0, 4) + "0" + sRet.substring(5, 6) + "0" + sRet.substring(7, 8) : sRet.substring(0, 4) + "0" + sRet.substring(5, 6) + sRet.substring(7, 9);
    } else if (nPos == 7) 
    {
      return nLen == 9 ? sRet.substring(0, 4) + sRet.substring(5, 7) + "0" + sRet.substring(8, 9) : sRet.substring(0, 4) + sRet.substring(5, 7) + sRet.substring(8, 10);
    }
  }
  return sRet;
}



function getSysDate() {
  var sSep = "/";
  if (arguments.length > 0) 
  {
    sSep = arguments[0];
  }
  var today = new Date();
  var nYear = today.getYear();
  var nMonth = today.getMonth() + 1;
  var nDay = today.getDate();
  var sToday = "";
  if (nYear < 1000) 
  {
    sToday += "" + (1900 + nYear);
  } else {
    sToday += nYear;
  }
  if (nMonth < 10) 
  {
    sToday += sSep + "0" + nMonth;
  } else {
    sToday += sSep + nMonth;
  }
  if (nDay < 10) 
  {
    sToday += sSep + "0" + nDay;
  } else {
    sToday += sSep + nDay;
  }
  return sToday;
}



function formatMsg() {
  if (arguments.length == 0) 
  {
    return "\ufffd\ufffd\ufffdb\ufffdZ\ufffd[\ufffdWID\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0702\ufffd\ufffd\ufffdI";
  }
  var id = arguments[0];
  var cont = "\ufffdG\ufffd\ufffd\ufffd[\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\u0702\ufffd\ufffdB(ID=" + id + ")";
  for (loop = 0; loop < MsgIdList.length; loop++) 
    {
      if (MsgIdList[loop] == id) 
      {
        cont = MsgContList[loop];
        break;
      }
    }
  if (arguments.length > 1) 
  {
    for (idx = 1; idx < arguments.length; idx++) 
      {
        var param = arguments[idx];
        re = new RegExp("\\{" + (idx - 1) + "\\}", "i");
        cont = cont.replace(re, param);
      }
  }
  return cont;
}



function hasFotbiddenHTMLTag(str) {
  allHTML = /<\/?.+>/;
  allowHTML = /<\/?(font|FONT|b|B|strong|STRONG)( .*)?>/;
  var temp = str;
  while (allowHTML.test(temp)) 
    {
      temp = temp.replace(allowHTML, "");
    }
  if (allHTML.test(temp)) 
  {
    return true;
  } else {
    return false;
  }
}



function iframe_include() {
  this.iframe_id = null;
  this.iframe_obj = null;
  this.iframe_add_to_div = null;
  this.iframe_add_to_div_obj = null;
  this.iframe_main_wrapper = null;
  this.iframe_classname = 'GBL-component-iframe';
  this.ok_to_go = 1;
  this.iframe_height = 300;
  this.ajax = '';
}



function lang_build_string() {
  if (!arguments.length || !arguments) 
  {
    return;
  }
  var string = arguments[0];
  for (var i = 1; i < arguments.length; i++) 
    {
      var match = new RegExp('<%' + i + '>', 'gi');
      string = string.replace(match, arguments[i]);
    }
  return string;
}



function check_enter(pages_id, e) {
  var keypress = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
  if (keypress == 13) 
  {
    do_multi_page_jump(pages_id);
  }
}



function ShowHide(id1, id2) {
  if (id1 != '') 
  toggleview(id1);
  if (id2 != '') 
  toggleview(id2);
}



function toggleview(id) {
  if (!id) 
  return;
  if (itm = my_getbyid(id)) 
  {
    if (itm.style.display == "none") 
    {
      my_show_div(itm);
    } else {
      my_hide_div(itm);
    }
  }
}



function my_hide_div(itm) {
  if (!itm) 
  return;
  itm.style.display = "none";
}



function my_show_div(itm) {
  if (!itm) 
  return;
  itm.style.display = "";
}



function stacksize(thearray) {
  for (i = 0; i < thearray.length; i++) 
    {
      if ((thearray[i] == "") || (thearray[i] == null) || (thearray == 'undefined')) 
      {
        return i;
      }
    }
  return thearray.length;
}



function _get_obj_leftpos(obj) {
  var left = obj.offsetLeft;
  while ((obj = obj.offsetParent) != null) 
    {
      left += obj.offsetLeft;
    }
  return left;
}



function _get_obj_toppos(obj) {
  var top = obj.offsetTop;
  while ((obj = obj.offsetParent) != null) 
    {
      top += obj.offsetTop;
    }
  return top;
}



function center_div() {
  this.divname = '';
  this.divobj = '';
  this.shimobj = '';
}



function blurSearch() {
  if (this.value == '') 
  {
    this.value = DEF_VAL;
    this.removeAttribute('class', 'focus');
  }
}



function ips_menu() {
  this.menu_registered = new Array();
  this.menu_openfuncs = new Array();
  this.menu_over_css = new Array();
  this.menu_out_css = new Array();
  this.menu_open_event = new Array();
  this.dynamic_register = new Array();
  this.menu_cur_open = null;
  this.dynamic_html = null;
}



function ips_menu_events() {
}



function addEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {
    return false;
  }
}



function calcAge(datestamp) {
  if (datestamp) 
  {
    var date = new Date(datestamp * 1000);
    var hour = (60 * 60 * 1000);
    var day = hour * 24;
    var month = day * 30;
    var year = month * 12;
    var now = new Date();
    var diff = (now - date);
    var output = '';
    var units;
    var x = 0;
    if (diff < hour) 
    {
      units = 'm';
      x = diff / 60 / 1000;
    } else if (diff < day) 
    {
      units = "h";
      x = diff / hour;
    } else if (diff < month) 
    {
      units = "d";
      x = diff / day;
    } else if (diff < year) 
    {
      units = "mn";
      x = diff / month;
    }
    var xString = x.toString();
    xString = xString.substring(0, xString.indexOf('.'));
    output = ' - ' + xString + ' ' + ((xString != 1) ? answersText[units + 's'] : answersText[units]) + ' ' + answersText.ago;
    return output;
  } else {
    return '';
  }
}



function _get_time_now() {
  var mydate = new Date();
  return mydate.getTime();
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function s_cgif(t, k) {
  if (t) 
  {
    var te = t.indexOf('='), sk = te < 0 ? t : t.substring(0, te), sv = te < 0 ? 'True' : t.substring(te + 1);
    if (sk.toLowerCase() == k) 
    return s_epa(sv);
  }
  return '';
}



function s_dt(tz, t) {
  var d = new Date();
  if (t) 
  d.setTime(t);
  d = new Date(d.getTime() + (d.getTimezoneOffset() * 60 * 1000));
  return new Date(Math.floor(d.getTime() + (tz * 60 * 60 * 1000)));
}



function s_vh_s(k, v) {
  if (k && v) 
  {
    var e = new Date(), st = e.getTime(), y = e.getYear(), c = 's_vh_' + k, vh = '|' + s_c_r(c) + '|', t = s_vh_gt(k, v);
    e.setYear((y < 1900 ? y + 1900 : y) + 5);
    if (t) 
    vh = s_rep(vh, '|' + v + '=' + t + '|', '|');
    if (vh.substring(0, 1) == '|') 
    vh = vh.substring(1);
    if (vh.substring(vh.length - 1, vh.length) == '|') 
    vh = vh.substring(0, vh.length - 1);
    vh = v + '=[PCC]' + (vh ? '|' + vh : '');
    s_c_w(c, vh, e);
    if (s_vh_gt(k, v) != '[PCC]') 
    return 0;
    vh = s_rep(vh, '[PCC]', st);
    s_c_w(c, vh, e);
  }
  return 1;
}



function s_fl(s, l) {
  return s ? (s + '').substring(0, l) : s;
}



function s_co(o) {
  if (!o) 
  return o;
  var n = new Object(), x;
  for (x in o) 
    if (x.indexOf("select") < 0 && x.indexOf("filter") < 0) 
    n[x] = o[x];
  return n;
}



function s_num(x) {
  var s = x.toString(), g = '0123456789', p, d;
  for (p = 0; p < s.length; p++) 
    {
      d = s.substring(p, p + 1);
      if (g.indexOf(d) < 0) 
      return 0;
    }
  return 1;
}



function s_rep(s, o, n) {
  var i = s.indexOf(o), l = n.length > 0 ? n.length : 1;
  while (s && i >= 0) 
    {
      s = s.substring(0, i) + n + s.substring(i + o.length);
      i = s.indexOf(o, i + l);
    }
  return s;
}



function s_ape(s) {
  return s ? s_rep(escape('' + s), '+', '%2B') : s;
}



function s_epa(s) {
  return s ? unescape(s_rep('' + s, '+', ' ')) : s;
}



function s_isf(t, a) {
  if (t.substring(0, 2) == 's_') 
  t = t.substring(2);
  return (t != '' && t == a);
}



function s_gtfsf(w) {
  var p = w.parent, l = w.location;
  s_tfs = w;
  if (p && p.location != l && p.location.host == l.host) 
  {
    s_tfs = p;
    return s_gtfsf(s_tfs);
  }
  return s_tfs;
}



function s_lnf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var te = t.indexOf('=');
  if (t && te > 0 && h.indexOf(t.substring(te + 1)) >= 0) 
  return t.substring(0, te);
  return '';
}



function s_ltdf(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  var qi = h.indexOf('?');
  h = qi >= 0 ? h.substring(0, qi) : h;
  if (t && h.substring(h.length - (t.length + 1)) == '.' + t) 
  return 1;
  return 0;
}



function s_ltef(t, h) {
  t = t ? t.toLowerCase() : '';
  h = h ? h.toLowerCase() : '';
  if (t && h.indexOf(t) >= 0) 
  return 1;
  return 0;
}



function s_ot(o) {
  var a = o.type, b = o.tagName;
  return (a && a.toUpperCase ? a : b && b.toUpperCase ? b : o.href ? 'A' : '').toUpperCase();
}



function s_rqf(t, un) {
  var e = t.indexOf('='), u = e >= 0 ? ',' + t.substring(0, e) + ',' : '';
  return u && u.indexOf(',' + un + ',') >= 0 ? s_epa(t.substring(e + 1)) : '';
}



function lpFixProtocol(str) {
  if ((str != null) && (str.indexOf("http:") == 0) && (lpfcProtocol == "https")) 
  return lpfcProtocol + str.substring(4);
  return str;
}



function hcDate() {
  var d = new Date();
  return d.getTime();
}



function hcPlaceLayersIE() {
}



function hcPlaceLayersNS() {
}



function hcHandlePopup(w, h) {
}



function lpIsNumber(a) {
  return typeof a == 'number' && isFinite(a);
}



function hcFloatIconLoaded() {
  hcImageFetched = true;
}



function inviteShown(channel) {
  hcCmd = "inviteShown" + ((typeof (lpInviteTimeout) != "undefined") && (lpInviteTimeout != "") && (lpInviteTimeout > 0) ? ("&scripttimeout=" + lpInviteTimeout) : "");
  hcCmd += "&channel=" + channel;
  hcCounter = 0;
}



function hcLegalPage() {
  return true;
}



function lhb_getEscapedHeaderHTML() {
  return "%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20hdrBr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22hdrBr%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20hdrBrBck%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22hdrBrBck%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20hdrBrBck%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20genHdr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22genHdr%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20general%20lnks%20--%3E%3Cdiv%20id%3D%22genLnks%22%3E%3Ca%20href%3D%22http%3A%2F%2Fwww.lycos.com%2F%22%20target%3D%22_top%22%3ELycos%20Home%3C%2Fa%3E%26nbsp%3B%26nbsp%3B%3Cspan%20class%3D%22vert%22%3E%7C%3C%2Fspan%3E%26nbsp%3B%26nbsp%3B%3Cimg%20src%3D%22http%3A%2F%2Fly.lygo.com%2Fly%2Fhb%2Fimg%2Fmail.gif%22%20width%3D%2214%22%20height%3D%229%22%20alt%3D%22Lycos%20Mail%22%20class%3D%22mailImg%22%2F%3E%26nbsp%3B%26nbsp%3B%3Ca%20href%3D%22http%3A%2F%2Fmail.lycos.com%2F%22%20class%3D%22mail%22%20target%3D%22_top%22%3ELycos%20Mail%3C%2Fa%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20general%20lnks%20--%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20tR%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22tR%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20srchFrm%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cform%20id%3D%22srchFrm%22%20action%3D%22http%3A%2F%2Fsearch.lycos.com%2Findex.php%22%20target%3D%22_top%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20srch%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22srch%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchRow1Ctnt%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchLab%22%3E%3Cdiv%20id%3D%22labImg%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchTxt%22%3ESearch%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchField%22%3E%3Cinput%20type%3D%22text%22%20name%3D%22query%22%20class%3D%22fld%22%20value%3D%22%22%2F%3E%3Cinput%20type%3D%22hidden%22%20name%3D%22src%22%20value%3D%22hb7%22%20%2F%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchBtn%22%3E%3Cinput%20type%3D%22image%22%20class%3D%22srchImg%22%20src%3D%22http%3A%2F%2Fc.lygo.com%2Fs.gif%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22srchRow1Shdw%22%3E%3Cimg%20src%3D%22http%3A%2F%2Fc.lygo.com%2Fs.gif%22%20width%3D%221%22%20height%3D%221%22%20border%3D%220%22%20alt%3D%22%22%20%2F%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20srch%20--%3E%3C%2Fform%3E%3C%21--END%20srchFrm%20--%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20tR%20--%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20genHdr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20END%20hdrBr%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20BEGIN%20setup%20space%20--%3E%3Cdiv%20id%3D%22spc%22%3E%3C%2Fdiv%3E%3C%21--%20END%20setup%20space%20--%3E";
}



function lhb_handleCanada() {
  return false;
}



function lhb_getEscapedFooterHTML() {
  return "%3C%21--%20BEGIN%20footer%20--%3E%0A%3Cdiv%20id%3D%22lyFtr%22%3E%0A%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2F%22%3EAbout%20Lycos%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2Fprivacy.php%22%3EPrivacy%20Policy%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2Ftos.php%22%3ETerms%20of%20Service%20%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Finfo.lycos.com%2Fjobs.php%22%3ECareers%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Fadvertising.lycos.com%2Fcontactus.html%22%3EAdvertise%20With%20Us%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Fwww.lycos.com%2Fretriever.html%22%3ERetriever%3C%2Fa%3E%26%23160%3B%26%23160%3B%7C%26%23160%3B%26%23160%3B%3Ca%20href%3D%22http%3A%2F%2Fwww.help.lycos.com%22%3EHelp%3C%2Fa%3E%0A%3Cbr%2F%3ECopyright%20%26%23169%3B%202012%20Lycos%20Inc.%20All%20Rights%20Reserved.%3Cbr%2F%3E%3C%2Fdiv%3E%0A%3C%21--%20END%20footer%20--%3E";
}



function FCSS(t, d) {
  var a = t.split("|");
  var i;
  var s;
  for (i = 0; i < a.length; i++) 
    {
      if (a[i].length >= 5) 
      {
        if (s == null) 
        {
          s = a[i];
        } else {
          s += d + a[i];
        }
      }
    }
  if (s == null) 
  {
    return '';
  }
  return s;
}



function parse_url(theurl) {
  var lead_slashes = theurl.indexOf("/");
  var domain_start = lead_slashes + 1;
  var without_resource = theurl.substring(domain_start, theurl.length);
  var next_slash = without_resource.indexOf("/");
  var firstdir = without_resource.substring(0, next_slash);
  var rm_dir = firstdir.length + 1;
  var seconddirtemp = without_resource.substring(rm_dir, without_resource.length);
  var next_slash = seconddirtemp.indexOf("/");
  var seconddir = seconddirtemp.substring(0, next_slash);
  if (firstdir == "dynamic") 
  {
    var theurl2 = theurl.replace("/dynamic", "");
    var lead_slashes = theurl2.indexOf("/");
    var domain_start = lead_slashes + 1;
    var without_resource = theurl2.substring(domain_start, theurl2.length);
    var next_slash = without_resource.indexOf("/");
    var firstdir = without_resource.substring(0, next_slash);
    var rm_dir = firstdir.length + 1;
    var seconddirtemp = without_resource.substring(rm_dir, without_resource.length);
    var next_slash = seconddirtemp.indexOf("/");
    var seconddir = seconddirtemp.substring(0, next_slash);
    if (firstdir == "news-articles") 
    {
      firstdir = "news";
    } else if (firstdir == "articles") 
    {
      firstdir = "lifestyle";
    } else if (firstdir == "music-articles") 
    {
      firstdir = "music";
    } else if (firstdir == "artist-articles") 
    {
      firstdir = "artists";
    } else if (firstdir == "industry-articles") 
    {
      firstdir = "industry";
    } else if (firstdir == "giveaways") 
    {
      firstdir = "interact";
    } else if (firstdir == "emailafriend") 
    {
      firstdir = "interact";
    }
    if (theurl2 == "/newsfeeds") 
    {
      firstdir = "news";
      seconddir = "christian";
    }
  }
  if (seconddir.indexOf("feature") != -1) 
  {
    seconddir = "features";
  }
  if (seconddir.indexOf("conferences") != -1) 
  {
    seconddir = "events";
  }
  var parsed = Array(firstdir, seconddir.replace("-", "_"));
  return parsed;
}



function getExpireDate() {
  var expires = new Date();
  expires.setTime((new Date().getTime()) + 1000 * 60 * 60 * 24 * 365);
  return expires;
}



function LR_mouseMove(e) {
  if (e.button == 0 && is_ie && LR_current != null) 
  LR_mouseBlur();
}



function LR_updateRatingCookie(docid, numStars) {
  if (numStars < 1 || numStars > 5) 
  return;
  maxLen = 1000;
  cookieVal = LR_fetchCookie(LyRatingsCookieName);
  mark = '|' + escape(docid) + ':';
  old = cookieVal.indexOf(mark);
  if (old == -1) 
  {
    if (cookieVal == '|') 
    cookieVal = '';
    cookieVal += '|' + escape(docid) + ':' + numStars;
    len = cookieVal.length;
    if (len > maxLen) 
    {
      start = cookieVal.indexOf('|', len - maxLen);
      cookieVal = cookieVal.substring(start, len);
    }
  } else {
    old += mark.length;
    cookieVal = cookieVal.substring(0, old) + numStars + cookieVal.substring(old + 1, cookieVal.length);
  }
  if (cookieVal) 
  LR_setCookie(LyRatingsCookieName, cookieVal);
}



function clearStuff(objecttoclear) {
  objecttoclear.value = '';
  objecttoclear.onclick = null;
}



function isNull(val) {
  return (val == null);
}



function left(str, n) {
  if (n <= 0) 
  {
    return "";
  } else if (n > String(str).length) 
  {
    return str;
  } else {
    return String(str).substring(0, n);
  }
}



function findPosX(obj) {
  var curleft = 0;
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curleft += obj.offsetLeft;
        obj = obj.offsetParent;
      }
  } else if (obj.x) 
  curleft += obj.x;
  return curleft;
}



function findPosY(obj) {
  var curtop = 0;
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curtop += obj.offsetTop;
        obj = obj.offsetParent;
      }
  } else if (obj.y) 
  curtop += obj.y;
  return curtop;
}



function highlightHeading(a) {
  if (a.className == "tabHeadingTD") 
  {
    a.className = "tabHeadingTDOver";
    a.style.cursor = "pointer";
  }
}



function unHighlightHeading(a) {
  if (a.className == "tabHeadingTDOver") 
  {
    a.className = "tabHeadingTD";
    a.style.cursor = "default";
  }
}



function cur(a) {
  if (a.className == "ratingTDSelected") 
  {
    return;
  }
  a.className = "ratingTDUnselected";
}



function noop() {
}



function valid_email(s) {
  var strOk = "@_.ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var strValor = s.toUpperCase();
  var i = 0;
  var arrobas = 0;
  for (i = 0; i < strValor.length; i++) 
    {
      if (strOk.indexOf(strValor.charAt(i)) == -1) 
      {
        return false;
        break;
      }
      if (strValor.charAt(i) == "@") 
      {
        if (i < 1 || i == strValor.length - 1) 
        {
          return false;
        }
        if (strValor.charAt(i - 1) == ".") 
        {
          return false;
        }
        arrobas++;
      }
      if (strValor.charAt(i) == ".") 
      {
        if (i < 1 || i == strValor.length - 1) 
        {
          return false;
        }
        if (strValor.charAt(i - 1) == "." || strValor.charAt(i - 1) == "@") 
        {
          return false;
        }
      }
    }
  if (arrobas != 1) 
  {
    return false;
  }
  return true;
}



function trim(strTxt) {
  var pos1 = 0;
  var pos2 = strTxt.length - 1;
  var i;
  for (i = 0; i < strTxt.length; i++) 
    {
      if (strTxt.charAt(i) == ' ') 
      pos1 = pos1 + 1; else break;
    }
  if (pos1 != (pos2 + 1)) 
  for (i = strTxt.length - 1; i > 0; i--) 
    {
      if (strTxt.charAt(i) == ' ') 
      pos2 = pos2 - 1; else break;
    }
  return strTxt.substring(pos1, pos2 + 1);
}



function isinsideDropDown(elem) {
  var n = elem;
  while (n) 
    {
      if (n.className == 'dropdown') 
      {
        return true;
      }
      n = n.parentNode;
    }
  return false;
}



function moveRows(s, d) {
  var a = new Array();
  for (var o in s.selectedElements) 
    {
      a.push(s.selectedElements[o]);
    }
  for (var o in a) 
    {
      var elm = a[o];
      var tds = elm.getElementsByTagName('td');
      for (var i in tds) 
        {
          if (tds[i].headers) 
          tds[i].headers = d.table.id + '' + tds[i].headers.substr(d.table.id.length);
        }
      d.body.appendChild(a[o]);
      d.deselect(a[o]);
      d.init(d.table);
      d.sort();
      s.deselect(a[o]);
      s.init(s.table);
    }
}



function removeEvent(obj, type, fn) {
  if (obj.removeEventListener) 
  obj.removeEventListener(type, fn, false); else if (obj.detachEvent) 
  {
    obj.detachEvent("on" + type, obj[type + fn]);
    obj[type + fn] = null;
    obj["e" + type + fn] = null;
  }
}



function M_hideLayer() {
}



function _oTree() {
}



function mmMouseMove() {
}



function _TtM() {
}



function _IdM() {
}



function _ocURL() {
}



function mmClick() {
}



function autoOT() {
}



function _iF0C() {
}



function showtip() {
}



function isEditMode() {
}



function hidetip() {
}



function mmVisFunction() {
}



function doMenuResize() {
}



function _tMR() {
}



function _maxm() {
}



function _p8(a, d) {
  var t = [];
  for (_a = 0; _a < a.length; _a++) 
    {
      if (a[_a] != d) 
      {
        t[t.length] = a[_a];
      }
    }
  return t;
}



function copyOf(w) {
  for (_cO in w) 
    {
      this[_cO] = w[_cO];
    }
}



function Dummy() {
  return;
}



function CnclSlct() {
  return false;
}



function ClearAllChilds(Pntr) {
  var CPCCStyle;
  while (Pntr) 
    {
      if (Pntr.Hilite) 
      {
        Pntr.Hilite = 0;
        if (KeepHilite) 
        LowItem(Pntr);
        if (Pntr.ChildCntnr) 
        {
          CPCCStyle = Nav4 ? Pntr.ChildCntnr : Pntr.ChildCntnr.style;
          CPCCStyle.visibility = M_Hide;
          ClearAllChilds(Pntr.ChildCntnr.FrstMbr);
        }
        break;
      }
      Pntr = Pntr.PrvMbr;
    }
}



function GoTo() {
  if (this.LinkTxt) 
  {
    status = '';
    var HP = Nav4 ? this.LowLyr : this;
    LowItem(HP);
        this.LinkTxt.indexOf('javascript:') != -1 ? eval(this.LinkTxt) : DcLoc.location.href = this.LinkTxt;
  }
}



function _colD() {
}



function _p4(V, n) {
  var S, m;
  S = [];
  if (isNaN(V[n]) && V[n].indexOf("offset=") == 0) 
  {
    S[0] = V[n].substr(7, 99);
    m = S[0].indexOf(";minimum=");
    if (m > -1) 
    {
      S[1] = S[0].substr(m + 9, 99);
      S[0] = S[0].substr(0, m);
    }
    V[n] = _n;
  }
  return S;
}



function isUndefined(v) {
  var undef;
  return v === undef;
}



function valButton(btn) {
  var cnt = -1;
  for (var i = btn.length - 1; i > -1; i--) 
    {
      if (btn[i].checked) 
      {
        cnt = i;
        i = -1;
      }
    }
  if (cnt > -1) 
  return btn[cnt].value; else return null;
}



function isSpecialKey(strValue) {
  var reKeyboardChars = /[\x00\x03\x08\x0D\x16\x18\x1A]/;
  return reKeyboardChars.test(strValue);
}



function _mPLF(i) {
  try {
    for (var x = 0; x < _mIms.length; x++) 
      {
        if (i == _mIms[x]) 
        return;
        x++;
      }
    _mIms[_mIms.length] = i;
  }  catch (err) {
}
}



function mmPLIs(i, n) {
  try {
    if (n) 
    {
      _mIms2[i] = new Image();
      if (_mIms[i]) 
      _mIms2[i].src = _mIms[i];
    }
    if (!_mIms2[i].complete) 
    {
      _StO("mmPLIs(" + (i) + ",0)", 5);
      return;
    }
    if (i < _mIms.length) 
    _StO("mmPLIs(" + (i + 1) + ",1)", 20);
  }  catch (err) {
}
}



function mmenuPreLoadImages() {
  try {
    for (var x = 0; x < _mi.length; x++) 
      {
        var I = _mi[x];
        if (I[24]) 
        _mPLF(I[24]);
        if (I[29]) 
        _mPLF(I[29]);
        if (I[32]) 
        _mPLF(I[32]);
        if (I[46]) 
        _mPLF(I[46]);
        if (I[47]) 
        _mPLF(I[47]);
        if (I[48]) 
        _mPLF(I[48]);
        if (I[56]) 
        _mPLF(I[56]);
        if (I[69]) 
        _mPLF(I[69]);
        if (I[71]) 
        _mPLF(I[71]);
        if (I[73]) 
        _mPLF(I[73]);
        if (I[79]) 
        _mPLF(I[79]);
        if (I[82]) 
        _mPLF(I[82]);
        if (I[83]) 
        _mPLF(I[83]);
        if (I[85]) 
        _mPLF(I[85]);
        if (I[88]) 
        _mPLF(I[88]);
        if (I[90]) 
        _mPLF(I[90]);
        if (I[91]) 
        _mPLF(I[91]);
        if (I[92]) 
        _mPLF(I[92]);
      }
    mmPLIs(0, 1);
  }  catch (err) {
}
}



function NOF_Menu() {
  return this;
}



function NOF_Menu_Item() {
  this.id = arguments[0];
  this.orientation = arguments[1];
  this.openEffect = arguments[2];
  this.offsetX = arguments[3];
  this.offsetY = arguments[4];
  this.buttons = new Array();
  this.submenuHeight = 0;
  for (var i = 5; i < arguments.length; i++) 
    this.buttons[i - 5] = arguments[i];
  this.getPosition = function() {
  return new Array(this.offsetX, this.offsetY);
};
  this.getOffsetX = function getOffsetX() {
  return this.offsetX;
};
  this.getOffsetY = function getOffsetY() {
  return this.offsetY;
};
  this.getOpenEffect = function getOffsetY() {
  return this.openEffect;
};
  this.getOrientation = function getOrientation() {
  return this.orientation;
};
  return this;
}



function jaAddEvent(obj, evType, fn) {
  if (obj.addEventListener) 
  {
    obj.addEventListener(evType, fn, false);
    return true;
  } else if (obj.attachEvent) 
  {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {
    return false;
  }
}



function instr(str, item) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] == item) 
      return true;
    }
  return false;
}



function preloadImages() {
  var imgs = new Array();
  for (var i = 0; i < arguments.length; i++) 
    {
      var imgsrc = arguments[i];
      imgs[i] = new Image();
      imgs[i].src = imgsrc;
    }
}



function LZ(x) {
  return (x < 0 || x > 9 ? "" : "0") + x;
}



function _isInteger(val) {
  var digits = "1234567890";
  for (var i = 0; i < val.length; i++) 
    {
      if (digits.indexOf(val.charAt(i)) == -1) 
      {
        return false;
      }
    }
  return true;
}



function getDateFromFormat(val, format) {
  val = val + "";
  format = format + "";
  var i_val = 0;
  var i_format = 0;
  var c = "";
  var token = "";
  var token2 = "";
  var x, y;
  var now = new Date();
  var year = now.getYear();
  var month = now.getMonth() + 1;
  var date = 1;
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();
  var ampm = "";
  while (i_format < format.length) 
    {
      c = format.charAt(i_format);
      token = "";
      while ((format.charAt(i_format) == c) && (i_format < format.length)) 
        {
          token += format.charAt(i_format++);
        }
      if (token == "yyyy" || token == "yy" || token == "y") 
      {
        if (token == "yyyy") 
        {
          x = 4;
          y = 4;
        }
        if (token == "yy") 
        {
          x = 2;
          y = 2;
        }
        if (token == "y") 
        {
          x = 2;
          y = 4;
        }
        year = _getInt(val, i_val, x, y);
        if (year == null) 
        {
          return 0;
        }
        i_val += year.length;
        if (year.length == 2) 
        {
          if (year > 70) 
          {
            year = 1900 + (year - 0);
          } else {
            year = 2000 + (year - 0);
          }
        }
      } else if (token == "MMM" || token == "NNN") 
      {
        month = 0;
        for (var i = 0; i < MONTH_NAMES.length; i++) 
          {
            var month_name = MONTH_NAMES[i];
            if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) 
            {
              if (token == "MMM" || (token == "NNN" && i > 11)) 
              {
                month = i + 1;
                if (month > 12) 
                {
                  month -= 12;
                }
                i_val += month_name.length;
                break;
              }
            }
          }
        if ((month < 1) || (month > 12)) 
        {
          return 0;
        }
      } else if (token == "EE" || token == "E") 
      {
        for (var i = 0; i < DAY_NAMES.length; i++) 
          {
            var day_name = DAY_NAMES[i];
            if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) 
            {
              i_val += day_name.length;
              break;
            }
          }
      } else if (token == "MM" || token == "M") 
      {
        month = _getInt(val, i_val, token.length, 2);
        if (month == null || (month < 1) || (month > 12)) 
        {
          return 0;
        }
        i_val += month.length;
      } else if (token == "dd" || token == "d") 
      {
        date = _getInt(val, i_val, token.length, 2);
        if (date == null || (date < 1) || (date > 31)) 
        {
          return 0;
        }
        i_val += date.length;
      } else if (token == "hh" || token == "h") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 12)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "HH" || token == "H") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 23)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "KK" || token == "K") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 0) || (hh > 11)) 
        {
          return 0;
        }
        i_val += hh.length;
      } else if (token == "kk" || token == "k") 
      {
        hh = _getInt(val, i_val, token.length, 2);
        if (hh == null || (hh < 1) || (hh > 24)) 
        {
          return 0;
        }
        i_val += hh.length;
        hh--;
      } else if (token == "mm" || token == "m") 
      {
        mm = _getInt(val, i_val, token.length, 2);
        if (mm == null || (mm < 0) || (mm > 59)) 
        {
          return 0;
        }
        i_val += mm.length;
      } else if (token == "ss" || token == "s") 
      {
        ss = _getInt(val, i_val, token.length, 2);
        if (ss == null || (ss < 0) || (ss > 59)) 
        {
          return 0;
        }
        i_val += ss.length;
      } else if (token == "a") 
      {
        if (val.substring(i_val, i_val + 2).toLowerCase() == "am") 
        {
          ampm = "AM";
        } else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") 
        {
          ampm = "PM";
        } else {
          return 0;
        }
        i_val += 2;
      } else {
        if (val.substring(i_val, i_val + token.length) != token) 
        {
          return 0;
        } else {
          i_val += token.length;
        }
      }
    }
  if (i_val != val.length) 
  {
    return 0;
  }
  if (month == 2) 
  {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) 
    {
      if (date > 29) 
      {
        return 0;
      }
    } else {
      if (date > 28) 
      {
        return 0;
      }
    }
  }
  if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) 
  {
    if (date > 30) 
    {
      return 0;
    }
  }
  if (hh < 12 && ampm == "PM") 
  {
    hh = hh - 0 + 12;
  } else if (hh > 11 && ampm == "AM") 
  {
    hh -= 12;
  }
  var newdate = new Date(year, month - 1, date, hh, mm, ss);
  return newdate.getTime();
}



function isSSN(ssn) {
  if (ssn.length == 0) 
  return true;
  ssn = ssn.replace(/-/g, "");
  ssn = ssn.replace(/\s/g, "");
  ssn = ssn.replace(/\//g, "");
  if (ssn.length != 9 || !isInt(ssn)) 
  return false;
  return true;
}



function isEmail(e) {
  if (e.length == 0) 
  return true;
  if (e.indexOf('@') == -1) 
  return false;
  if (e.indexOf(' ') != -1) 
  return false;
  return true;
}



function isURL(u) {
  if (u.length == 0) 
  return true;
  if (u.substring(0, 7) != 'http://') 
  return false;
  if (u.indexOf(' ') != -1) 
  return false;
  return true;
}



function isTime(t) {
  c = t.indexOf(":");
  if (t.indexOf(" ") != -1 || c == -1 || t.indexOf("-") != -1) 
  return false;
  hrs = t.substring(0, c);
  mins = t.slice(c + 1);
  if (!isInt(hrs) || !isInRange(hrs, 0, 23) || hrs.lenght > 2 || mins.length > 2 || !isInt(mins) || !isInRange(mins, 0, 59)) 
  return false;
  return true;
}



function isInt(n) {
  if (n.indexOf(' ') != -1) 
  return false;
  if (isNaN(n)) 
  return false;
  if (n.indexOf('.') != -1) 
  return false;
  return true;
}



function isFloat(n) {
  if (n.indexOf(' ') != -1) 
  return false;
  if (isNaN(n)) 
  return false;
  return true;
}



function isInRange(n, mn, mx) {
  if (n < mn || n > mx) 
  return false;
  return true;
}



function isDate(d) {
  if (d.length == 0) 
  return true;
  m = d.indexOf('/');
  if (m == -1) 
  return false;
  y = d.indexOf('/', (m + 1));
  if (y == -1) 
  return false;
  month = d.substring(0, (m));
  day = d.substring((m + 1), (y));
  year = d.substr(y + 1);
  d30 = '4,6,9,11';
  d30 = d30.split(",");
  d31 = '1,3,5,7,8,10,12';
  d31 = d31.split(",");
  if (!isInt(day)) 
  return false;
  if (!isInt(month)) 
  return false;
  if (!isInt(year)) 
  return false;
  if (day < 1) 
  return false;
  if (month < 1 || month > 12) 
  return false;
  for (q = 0; q < d30.length; q++) 
    {
      if (d30[q] == month) 
      {
        if (day > 30) 
        return false;
      }
    }
  for (q = 0; q < d31.length; q++) 
    {
      if (d31[q] == month) 
      {
        if (day > 31) 
        return false;
      }
    }
  if (month == 2 && year % 4 != 0 && (day > 28)) 
  return false;
  if (month == 2 && year % 4 == 0 && (day > 29)) 
  return false;
  if (year.length != 4) 
  return false;
  if (year < 1753) 
  {
    alert('You cannot enter dates before Jan 1, 1753');
    return false;
  }
  return true;
}



function isEmpty(a) {
  a = a.replace(/ /g, '');
  if (a.length == 0) 
  return true;
  return false;
}



function isSelected(v, ind) {
  if (v.selectedIndex > ind) 
  return true;
  return false;
}



function tLX(str) {
  return String(str).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#27;").replace(/\"/g, "&#22;");
}



function tLY(str) {
  return String(str).replace(/\%/g, "%25").replace(/\#/g, "%23").replace(/\&/g, "%26").replace(/\?/g, "%3f").replace(/\+/g, "%2b").replace(/\=/g, "%3d").replace(/\ /g, "+").replace(/\%/g, "%25");
}



function tL1C(s, q, l) {
  var a = s.split(".");
  if (a.length < 2) 
  {
    return "";
  }
    var tLZ = tLyC + q + "/" + l + "/" + a[a.length - 1];
  for (var lIndex = a.length - 2; lIndex >= 0; lIndex--) 
    {
      tLZ = tLZ + "/" + a[lIndex].substr(0, 2) + "/" + a[lIndex];
    }
  tLZ = tLZ + "/" + s + "." + q + "." + l + ".gif";
  tLZ = tLZ.toLowerCase();
  return tLZ;
}



function tL0C(tLZ, tLb) {
  if (!tLZ) 
  return false;
  if (tLZ == true) 
  {
    tLZ = "small";
  }
  if (tLZ == "small" || tLZ == "large") 
  {
    tLZ = tL1C(host, tLb, tLZ);
  }
  return tLZ;
}



function tL9C(e, xy) {
  if (e && xy) 
  {
    xy[0] = xy[0] + e.offsetLeft;
    xy[1] = xy[1] + e.offsetTop;
    if (e.offsetParent) 
    {
      xy[0] = xy[0] - e.scrollLeft;
      xy[1] = xy[1] - e.scrollTop;
      tL9C(e.offsetParent, xy);
    }
  }
}



function tLsC(sty) {
  if (sty.display == "none") 
  return false;
  if (sty.visibility == "hidden") 
  return false;
  if (sty.visibility == "visible") 
  return true;
  return true;
}



function blockError() {
  return true;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function MoveAreaUp(move) {
  if (this.y < 0) 
  {
    this.MoveArea(0, this.y - move);
    if (loop) 
    setTimeout(this.obj + ".up(" + move + ")", speed);
  }
}



function showHideLayers() {
  var i, v, obj, args = showHideLayers.arguments;
  for (i = 0; i < (args.length - 2); i += 3) 
    if ((obj = findObj(args[i])) != null) 
    {
      v = args[i + 2];
      if (obj.style) 
      {
        obj = obj.style;
        v = (v == 'si') ? 'visible' : (v == 'no') ? 'hidden' : v;
      }
      obj.visibility = v;
    }
}



function get_form_element_value(form, name) {
  var element = form[name];
  if (!element) 
  {
    return null;
  }
  if (element.tagName) 
  {
    return element.value;
  }
  for (var j = 0; j < element.length; j++) 
    {
      var el = element[j];
      if (el.checked) 
      {
        return el.value;
      }
    }
  return null;
}



function set_form_element_disabled(form, name, disabled) {
  var element = form[name];
  if (!element) 
  {
    return;
  }
  if (element.tagName) 
  {
    element.disabled = disabled;
  }
  for (var j = 0; j < element.length; j++) 
    {
      var el = element[j];
      el.disabled = disabled;
    }
}



function set_form_element_hidden(form, name, hidden) {
  var element = form[name];
  if (!element) 
  {
    return;
  }
  if (element.tagName) 
  {
    var el = findParentNode(element, 'DIV', 'fitem', false);
    if (el != null) 
    {
      el.style.display = hidden ? 'none' : '';
      el.style.visibility = hidden ? 'hidden' : '';
    }
  }
  for (var j = 0; j < element.length; j++) 
    {
      var el = findParentNode(element[j], 'DIV', 'fitem', false);
      if (el != null) 
      {
        el.style.display = hidden ? 'none' : '';
        el.style.visibility = hidden ? 'hidden' : '';
      }
    }
}



function confirm_if(expr, message) {
  if (!expr) 
  {
    return true;
  }
  return confirm(message);
}



function elementShowAdvanced(elements, show) {
  for (var elementIndex in elements) 
    {
      element = elements[elementIndex];
      element.className = element.className.replace(new RegExp(' ?hide'), '');
      if (!show) 
      {
        element.className += ' hide';
      }
    }
}



function filterByParent(elCollection, parentFinder) {
  var filteredCollection = [];
  for (var i = 0; i < elCollection.length; ++i) 
    {
      var findParent = parentFinder(elCollection[i]);
      if (findParent.nodeName != 'BODY') 
      {
        filteredCollection.push(elCollection[i]);
      }
    }
  return filteredCollection;
}



function MGD03483(str, MGD03) {
  var word = new Array();
  var i;
  var ret = '';
  word = str.split(" ");
  for (i = 0; i < word.length; i++) 
    {
      if (word[i].length > MGD03 && word[i].search(/&\w+;/) < 0) 
      ret += word[i].substr(0, MGD03) + ' ' + word[i].substr(MGD03) + ' '; else ret += word[i] + ' ';
    }
  return ret;
}



function MGD04483(str, MGD03) {
  if (str.length <= MGD03) 
  return str;
  var word = new Array();
  word = str.split(" ");
  var ret = word[0] + ' ';
  var test;
  for (i = 1; i < word.length; i++) 
    {
      test = ret + word[i];
      if (test.length > MGD03) 
      return ret + '...'; else ret += word[i] + ' ';
    }
  return str;
}



function MGD07483(desc) {
  return desc;
}



function parseTokens(pf, ar) {
  var v, i, mode = -1, par = (pf != 'ol_');
  var fnMark = (par && !ar.length ? 1 : 0);
  for (i = 0; i < ar.length; i++) 
    {
      if (mode < 0) 
      {
        if (typeof ar[i] == 'number' && ar[i] > pmStart && ar[i] < pmUpper) 
        {
          fnMark = (par ? 1 : 0);
          i--;
        } else {
          switch (pf) {
            case 'ol_':
              ol_text = ar[i].toString();
              break;
            default:
              o3_text = ar[i].toString();
          }
        }
        mode = 0;
      } else {
        if (ar[i] >= pmCount || ar[i] == DONOTHING) 
        {
          continue;
        }
        if (ar[i] == INARRAY) 
        {
          fnMark = 0;
          eval(pf + 'text=ol_texts[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == CAPARRAY) 
        {
          eval(pf + 'cap=ol_caps[' + ar[++i] + '].toString()');
          continue;
        }
        if (ar[i] == STICKY) 
        {
          if (pf != 'ol_') 
          eval(pf + 'sticky=1');
          continue;
        }
        if (ar[i] == BACKGROUND) 
        {
          eval(pf + 'background="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == NOCLOSE) 
        {
          if (pf != 'ol_') 
          opt_NOCLOSE();
          continue;
        }
        if (ar[i] == CAPTION) 
        {
          eval(pf + "cap='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CENTER || ar[i] == LEFT || ar[i] == RIGHT) 
        {
          eval(pf + 'hpos=' + ar[i]);
          if (pf != 'ol_') 
          olHautoFlag = 1;
          continue;
        }
        if (ar[i] == OFFSETX) 
        {
          eval(pf + 'offsetx=' + ar[++i]);
          continue;
        }
        if (ar[i] == OFFSETY) 
        {
          eval(pf + 'offsety=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGCOLOR) 
        {
          eval(pf + 'fgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCOLOR) 
        {
          eval(pf + 'bgcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTCOLOR) 
        {
          eval(pf + 'textcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPCOLOR) 
        {
          eval(pf + 'capcolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSECOLOR) 
        {
          eval(pf + 'closecolor="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == WIDTH) 
        {
          eval(pf + 'width=' + ar[++i]);
          continue;
        }
        if (ar[i] == BORDER) 
        {
          eval(pf + 'border=' + ar[++i]);
          continue;
        }
        if (ar[i] == CELLPAD) 
        {
          i = opt_MULTIPLEARGS(++i, ar, (pf + 'cellpad'));
          continue;
        }
        if (ar[i] == STATUS) 
        {
          eval(pf + "status='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == AUTOSTATUS) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus == 1) ? 0 : 1');
          continue;
        }
        if (ar[i] == AUTOSTATUSCAP) 
        {
          eval(pf + 'autostatus=(' + pf + 'autostatus == 2) ? 0 : 2');
          continue;
        }
        if (ar[i] == HEIGHT) 
        {
          eval(pf + 'height=' + pf + 'aboveheight=' + ar[++i]);
          continue;
        }
        if (ar[i] == CLOSETEXT) 
        {
          eval(pf + "close='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == SNAPX) 
        {
          eval(pf + 'snapx=' + ar[++i]);
          continue;
        }
        if (ar[i] == SNAPY) 
        {
          eval(pf + 'snapy=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXX) 
        {
          eval(pf + 'fixx=' + ar[++i]);
          continue;
        }
        if (ar[i] == FIXY) 
        {
          eval(pf + 'fixy=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELX) 
        {
          eval(pf + 'relx=' + ar[++i]);
          continue;
        }
        if (ar[i] == RELY) 
        {
          eval(pf + 'rely=' + ar[++i]);
          continue;
        }
        if (ar[i] == FGBACKGROUND) 
        {
          eval(pf + 'fgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGBACKGROUND) 
        {
          eval(pf + 'bgbackground="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == PADX) 
        {
          eval(pf + 'padxl=' + ar[++i]);
          eval(pf + 'padxr=' + ar[++i]);
          continue;
        }
        if (ar[i] == PADY) 
        {
          eval(pf + 'padyt=' + ar[++i]);
          eval(pf + 'padyb=' + ar[++i]);
          continue;
        }
        if (ar[i] == FULLHTML) 
        {
          if (pf != 'ol_') 
          eval(pf + 'fullhtml=1');
          continue;
        }
        if (ar[i] == BELOW || ar[i] == ABOVE) 
        {
          eval(pf + 'vpos=' + ar[i]);
          if (pf != 'ol_') 
          olVautoFlag = 1;
          continue;
        }
        if (ar[i] == CAPICON) 
        {
          eval(pf + 'capicon="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONT) 
        {
          eval(pf + "textfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CAPTIONFONT) 
        {
          eval(pf + "captionfont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CLOSEFONT) 
        {
          eval(pf + "closefont='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == TEXTSIZE) 
        {
          eval(pf + 'textsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONSIZE) 
        {
          eval(pf + 'captionsize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSESIZE) 
        {
          eval(pf + 'closesize="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TIMEOUT) 
        {
          eval(pf + 'timeout=' + ar[++i]);
          continue;
        }
        if (ar[i] == FUNCTION) 
        {
          if (pf == 'ol_') 
          {
            if (typeof ar[i + 1] != 'number') 
            {
              v = ar[++i];
              ol_function = (typeof v == 'function' ? v : null);
            }
          } else {
            fnMark = 0;
            v = null;
            if (typeof ar[i + 1] != 'number') 
            v = ar[++i];
            opt_FUNCTION(v);
          }
          continue;
        }
        if (ar[i] == DELAY) 
        {
          eval(pf + 'delay=' + ar[++i]);
          continue;
        }
        if (ar[i] == HAUTO) 
        {
          eval(pf + 'hauto=(' + pf + 'hauto == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == VAUTO) 
        {
          eval(pf + 'vauto=(' + pf + 'vauto == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == CLOSECLICK) 
        {
          eval(pf + 'closeclick=(' + pf + 'closeclick == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == WRAP) 
        {
          eval(pf + 'wrap=(' + pf + 'wrap == 0) ? 1 : 0');
          continue;
        }
        if (ar[i] == FOLLOWMOUSE) 
        {
          eval(pf + 'followmouse=(' + pf + 'followmouse == 1) ? 0 : 1');
          continue;
        }
        if (ar[i] == MOUSEOFF) 
        {
          eval(pf + 'mouseoff=(' + pf + 'mouseoff==0) ? 1 : 0');
          v = ar[i + 1];
          if (pf != 'ol_' && eval(pf + 'mouseoff') && typeof v == 'number' && (v < pmStart || v > pmUpper)) 
          olHideDelay = ar[++i];
          continue;
        }
        if (ar[i] == CLOSETITLE) 
        {
          eval(pf + "closetitle='" + escSglQuote(ar[++i]) + "'");
          continue;
        }
        if (ar[i] == CSSOFF || ar[i] == CSSCLASS) 
        {
          eval(pf + 'css=' + ar[i]);
          continue;
        }
        if (ar[i] == COMPATMODE) 
        {
          eval(pf + 'compatmode=(' + pf + 'compatmode==0) ? 1 : 0');
          continue;
        }
        if (ar[i] == FGCLASS) 
        {
          eval(pf + 'fgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == BGCLASS) 
        {
          eval(pf + 'bgclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == TEXTFONTCLASS) 
        {
          eval(pf + 'textfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CAPTIONFONTCLASS) 
        {
          eval(pf + 'captionfontclass="' + ar[++i] + '"');
          continue;
        }
        if (ar[i] == CLOSEFONTCLASS) 
        {
          eval(pf + 'closefontclass="' + ar[++i] + '"');
          continue;
        }
        i = parseCmdLine(pf, i, ar);
      }
    }
  if (fnMark && o3_function) 
  o3_text = o3_function();
  if ((pf == 'o3_') && o3_wrap) 
  {
    o3_width = 0;
    var tReg = /<.*\n*>/ig;
    if (!tReg.test(o3_text)) 
    o3_text = o3_text.replace(/[ ]+/g, '&nbsp;');
    if (!tReg.test(o3_cap)) 
    o3_cap = o3_cap.replace(/[ ]+/g, '&nbsp;');
  }
  if ((pf == 'o3_') && o3_sticky) 
  {
    if (!o3_close && (o3_frame != ol_frame)) 
    o3_close = ol_close;
    if (o3_mouseoff && (o3_frame == ol_frame)) 
    opt_NOCLOSE(' ');
  }
}



function opt_FUNCTION(callme) {
  o3_text = (callme ? (typeof callme == 'string' ? (/.+\(.*\)/.test(callme) ? eval(callme) : callme) : callme()) : (o3_function ? o3_function() : 'No Function'));
  return 0;
}



function escSglQuote(str) {
  return str.toString().replace(/'/g, "\\'");
}



function isExclusive(args) {
  return false;
}



function setCellPadStr(parameter) {
  var Str = '', j = 0, ary = new Array(), top, bottom, left, right;
  Str += 'padding: ';
  ary = parameter.replace(/\s+/g, '').split(',');
  switch (ary.length) {
    case 2:
      top = bottom = ary[j];
      left = right = ary[++j];
      break;
    case 3:
      top = ary[j];
      left = right = ary[++j];
      bottom = ary[++j];
      break;
    case 4:
      top = ary[j];
      right = ary[++j];
      bottom = ary[++j];
      left = ary[++j];
      break;
  }
  Str += ((ary.length == 1) ? ary[0] + 'px;' : top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px;');
  return Str;
}



function hideDelay(time) {
  if (time && !o3_delay) 
  {
    if (o3_timerid > 0) 
    clearTimeout(o3_timerid);
    o3_timerid = setTimeout("cClick()", (o3_timeout = time));
  }
}



function isFunction(fnRef) {
  var rtn = true;
  if (typeof fnRef == 'object') 
  {
    for (var i = 0; i < fnRef.length; i++) 
      {
        if (typeof fnRef[i] == 'function') 
        continue;
        rtn = false;
        break;
      }
  } else if (typeof fnRef != 'function') 
  {
    rtn = false;
  }
  return rtn;
}



function argToString(array, strtInd, argName) {
  var jS = strtInd, aS = '', ar = array;
  argName = (argName ? argName : 'ar');
  if (ar.length > jS) 
  {
    for (var k = jS; k < ar.length; k++) 
      aS += argName + '[' + k + '], ';
    aS = aS.substring(0, aS.length - 2);
  }
  return aS;
}



function reOrder(hookPt, fnRef, order) {
  var newPt = new Array(), match, i, j;
  if (!order || typeof order == 'undefined' || typeof order == 'number') 
  return hookPt;
  if (typeof order == 'function') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (i = 0; i < hookPt.length; i++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[i] == fnRef) 
        {
          continue;
        } else {
          for (j = 0; j < fnRef.length; j++) 
            if (hookPt[i] == fnRef[j]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[i];
      }
    newPt[newPt.length++] = order;
  } else if (typeof order == 'object') 
  {
    if (typeof fnRef == 'object') 
    {
      newPt = newPt.concat(fnRef);
    } else {
      newPt[newPt.length++] = fnRef;
    }
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        if (typeof fnRef == 'function' && hookPt[j] == fnRef) 
        {
          continue;
        } else {
          for (i = 0; i < fnRef.length; i++) 
            if (hookPt[j] == fnRef[i]) 
            {
              match = true;
              break;
            }
        }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    for (i = 0; i < newPt.length; i++) 
      hookPt[i] = newPt[i];
    newPt.length = 0;
    for (j = 0; j < hookPt.length; j++) 
      {
        match = false;
        for (i = 0; i < order.length; i++) 
          {
            if (hookPt[j] == order[i]) 
            {
              match = true;
              break;
            }
          }
        if (!match) 
        newPt[newPt.length++] = hookPt[j];
      }
    newPt = newPt.concat(order);
  }
  hookPt = newPt;
  return hookPt;
}



function setRunTimeVariables() {
  if (typeof runTime != 'undefined' && runTime.length) 
  {
    for (var k = 0; k < runTime.length; k++) 
      {
        runTime[k]();
      }
  }
}



function parseCmdLine(pf, i, args) {
  if (typeof cmdLine != 'undefined' && cmdLine.length) 
  {
    for (var k = 0; k < cmdLine.length; k++) 
      {
        var j = cmdLine[k](pf, i, args);
        if (j > -1) 
        {
          i = j;
          break;
        }
      }
  }
  return i;
}



function postParseChecks(pf, args) {
  if (typeof postParse != 'undefined' && postParse.length) 
  {
    for (var k = 0; k < postParse.length; k++) 
      {
        if (postParse[k](pf, args)) 
        continue;
        return false;
      }
  }
  return true;
}



function registerCommands(cmdStr) {
  if (typeof cmdStr != 'string') 
  return;
  var pM = cmdStr.split(',');
  pms = pms.concat(pM);
  for (var i = 0; i < pM.length; i++) 
    {
      eval(pM[i].toUpperCase() + '=' + pmCount++);
    }
}



function registerNoParameterCommands(cmdStr) {
  if (!cmdStr && typeof cmdStr != 'string') 
  return;
  pmt = (!pmt) ? cmdStr : pmt + ',' + cmdStr;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function selectClicked() {
  this.changed = true;
}



function selectKeyed(e) {
  var theEvent;
  var keyCodeTab = "9";
  var keyCodeEnter = "13";
  var keyCodeEsc = "27";
  if (e) 
  {
    theEvent = e;
  } else {
    theEvent = event;
  }
  if ((theEvent.keyCode == keyCodeEnter || theEvent.keyCode == keyCodeTab) && this.value != this.initValue) 
  {
    this.changed = true;
    selectChanged(this);
  } else if (theEvent.keyCode == keyCodeEsc) 
  {
    this.value = this.initValue;
  } else {
    this.changed = false;
  }
  return true;
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function validateemail_required(email) {
  if ((email.indexOf('.') != -1 && email.lastIndexOf('.') > email.indexOf('@')) && email.indexOf('@') > 0) 
  {
    return true;
  } else {
    return false;
  }
}



