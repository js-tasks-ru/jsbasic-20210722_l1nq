function camelize(str) {
  let a = str.split("-") || str;
  let sumLst = "";
  a.forEach((item, index) => {
    if (index > 0) {
      item = item[0].toUpperCase() + item.slice(1,item.length);
    }
    sumLst += item;
  });
  return sumLst;
}
