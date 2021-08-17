function toggleText() {
  document.querySelector("button.toggle-text-button").onclick = function() { 
    document.getElementById("text").hidden = !document.getElementById("text").hidden;
  };
}
