function getMinMax(str) {
  let lst = str.split(" ").filter((item) => isFinite(item)).map((item) => +item);
  return {min: Math.min(...lst), max: Math.max(...lst)}
}
