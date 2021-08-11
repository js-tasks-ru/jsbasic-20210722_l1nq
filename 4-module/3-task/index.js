function highlight(table) {
  let table1 = table.querySelector("tbody").children;
  for (let elem of table1) {
    if (elem.children[3].getAttribute("data-available")) {
      let elemNew = elem.children[3].getAttribute("data-available");
      if (elemNew == "true") {
        elem.classList.add("available");
      } else if ( elemNew == "false") {
        elem.classList.add("unavailable");
      }
    } else {
      elem.setAttribute("hidden", "true");
    }
    let elemGender = elem.children[2].innerHTML;
    if (elemGender == "m") {
      elem.classList.add("male");
    } else {
      elem.classList.add("female");
    }
    let elemAge = elem.children[1].innerHTML;
    if (elemAge < 18) {
      elem.style.textDecoration = "line-through";
    } 
  }
}
