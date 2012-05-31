function isLeapYear(numYear) {
  if ((numYear % 4) == 0)
  {
    return true;
  }
  return false;
}

function isLeapYear(Year) {
  if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0))
  {
    return (true);
  } else {
    return (false);
  }
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
