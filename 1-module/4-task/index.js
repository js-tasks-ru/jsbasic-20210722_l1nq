function checkSpam(str) {
  if (str.toLowerCase().includes("1xbet")) {
    return true;
  } else if (str.toLowerCase().includes("xxx")) { 
    return true;
  } else {
    return false;
  }
}
