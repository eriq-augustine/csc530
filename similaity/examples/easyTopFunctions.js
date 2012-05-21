function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}


function stopError() {
  return true;
}



function Exception(name, message) {
  if (name) 
  this.name = name;
  if (message) 
  this.message = message;
}



function FlashTag(src, width, height) {
  this.src = src;
  this.width = width;
  this.height = height;
  this.version = '7,0,14,0';
  this.flashVars = null;
  this.menu = 'false';
  this.bgcolor = '';
  this.id = "f_" + ((new Date()).getTime()).toString();
  this.salign = null;
  this.scale = null;
  this.wmode = 'transparent';
  this.wmodeFF = null;
}



function FlashSerializer(useCdata) {
  this.useCdata = useCdata;
}



function GetLeap(year) {
  if (year % 400 == 0) 
  return 1; else if (year % 100 == 0) 
  return 0; else if (year % 4 == 0) 
  return 1; else return 0;
}



function stopError() {
  return true;
}



function button10_onclick(aa) {
  try {
    var im = new ActiveXObject("HCLogin.DetectHcIM");
    var groupid = aa;
    var ret = im.join_qun(groupid);
  }  catch (e) {
  return false;
}
  return true;
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



function searchLabelRestore(obj) {
  if (obj.value == "") 
  obj.value = searchTerm;
}



function preloadImages() {
  var imgArray = new Array();
  for (var i = 0; i < arguments.length; i++) 
    {
      imgArray[i] = new Image();
      imgArray[i].src = arguments[i];
    }
  return imgArray;
}



function wf_rfs_loop(wd) {
  var d = wd.parent, w = wd.location;
  WS_rfs = wd;
  if (d && d.location != w && d.location.host == w.host) 
  {
    WS_rfs = d;
    return wf_rfs_loop(WS_rfs);
  }
  return WS_rfs;
}



function makeArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) 
    {
      this[i] = 0;
    }
  return this;
}



function isInt(elm) {
  var elmstr = "" + elm;
  if (elmstr == "") 
  return false;
  for (var i = 0; i < elmstr.length; i++) 
    {
      if (elmstr.charAt(i) < "0" || elmstr.charAt(i) > "9") 
      {
        return false;
      }
    }
  return true;
}



function RoundQty(elm) {
  var elmstr = "" + elm;
  if (elmstr == "") 
  return 0;
  DotExist = 0;
  DigitAfterDecimal = 0;
  for (var i = 0; i < elmstr.length; i++) 
    {
      if (elmstr.charAt(i) < "0" || elmstr.charAt(i) > "9") 
      {
        if ((elmstr.charAt(i) == ".") && (DotExist == 0)) 
        DotExist = 1; else return 0;
      } else if (DotExist == 1) 
      {
        if (DigitAfterDecimal < 2) 
        DigitAfterDecimal = DigitAfterDecimal + 1; else {
          if (elmstr.charAt(i) >= "5") 
          {
            var sTmp100 = elmstr.substring(0, i - 3) + elmstr.substring(i - 2, i);
            nTmp = Number(sTmp100);
            nTmp = nTmp + 1;
            var sTmp = "" + nTmp;
            if (sTmp.length < 2) 
            sTmp = sTmp.substring(0, sTmp.length - 2) + ".0" + sTmp.substring(sTmp.length - 2, sTmp.length); else sTmp = sTmp.substring(0, sTmp.length - 2) + "." + sTmp.substring(sTmp.length - 2, sTmp.length);
            return sTmp;
          } else return Number(elmstr.substring(0, i));
        }
      }
    }
  return elm;
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



function disableselect(e) {
  return false;
}



function reEnable() {
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



function getInnerText(el) {
  if (typeof el == 'string') 
  {
    return el;
  }
  if (typeof el == 'undefined') 
  {
    return el;
  }
  if (el.textContent) 
  {
    return el.textContent;
  }
  if (el.innerText) 
  {
    return el.innerText;
  }
  var str = '';
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



function akeytt(doId) {
}



function addCheckboxClickHandlers(inputs, start) {
  if (!start) 
  {
    start = 0;
  }
  var finish = start + 250;
  if (finish > inputs.length) 
  {
    finish = inputs.length;
  }
  for (var i = start; i < finish; i++) 
    {
      var cb = inputs[i];
      if (!cb.type || cb.type.toLowerCase() != 'checkbox') 
      {
        continue;
      }
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
  {
    return;
  }
  for (var i = 0; i < firstRow.cells.length; i++) 
    {
      var cell = firstRow.cells[i];
      if ((' ' + cell.className + ' ').indexOf(' unsortable ') == -1) 
      {
        cell.innerHTML += '<a href="#" class="sortheader" ' + 'onclick="ts_resortTable(this);return false;">' + '<span class="sortarrow">' + '<img src="' + ts_image_path + ts_image_none + '" alt="&darr;"/></span></a>';
      }
    }
  if (ts_alternate_row_colors) 
  {
    ts_alternate(table);
  }
}



function ts_toLowerCase(s) {
  return s.toLowerCase();
}



function ts_dateToSortKey(date) {
  if (date.length == 11) 
  {
    switch (date.substr(3, 3).toLowerCase()) {
      case 'jan':
        var month = '01';
        break;
      case 'feb':
        var month = '02';
        break;
      case 'mar':
        var month = '03';
        break;
      case 'apr':
        var month = '04';
        break;
      case 'may':
        var month = '05';
        break;
      case 'jun':
        var month = '06';
        break;
      case 'jul':
        var month = '07';
        break;
      case 'aug':
        var month = '08';
        break;
      case 'sep':
        var month = '09';
        break;
      case 'oct':
        var month = '10';
        break;
      case 'nov':
        var month = '11';
        break;
      case 'dec':
        var month = '12';
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
  return '00000000';
}



function ts_parseFloat(s) {
  if (!s) 
  {
    return 0;
  }
  if (ts_number_transform_table != false) 
  {
    var newNum = '', c;
    for (var p = 0; p < s.length; p++) 
      {
        c = s.charAt(p);
        if (c in ts_number_transform_table) 
        {
          newNum += ts_number_transform_table[c];
        } else {
          newNum += c;
        }
      }
    s = newNum;
  }
  num = parseFloat(s.replace(/[, ]/g, '').replace("\u2212", '-'));
  return (isNaN(num) ? -Infinity : num);
}



function ts_sort_generic(a, b) {
  return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : a[2] - b[2];
}



function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) 
  return src.replace(/\?/, ext + '?'); else return src + ext;
}



function findPosLeft(obj) {
  var curleft = 0;
  if (obj.offsetParent) 
  {
    while (obj.offsetParent) 
      {
        curleft += obj.offsetLeft;
        obj = obj.offsetParent;
      }
  } else if (obj.x) 
  {
    curleft += obj.x;
  }
  return curleft;
}



function findPosTop(obj) {
  var curtop = 0;
  var printstring = '';
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


