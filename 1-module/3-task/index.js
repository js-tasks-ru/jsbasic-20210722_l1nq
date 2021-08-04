function ucFirst(str) {
  let firstLetter = str.charAt(0).toUpperCase();
  let answer = firstLetter + str.slice(1, str.lentgh);
  return answer;
}
