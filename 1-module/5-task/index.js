function truncate(str, maxlength) {
  let newStr;
  if (str.length > maxlength - 1) {
    newStr = str.slice(0, maxlength - 1) + "…";
  } else {
    newStr = str;
  }
  return newStr;
}
