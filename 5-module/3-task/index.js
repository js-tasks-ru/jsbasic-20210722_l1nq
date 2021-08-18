function initCarousel() {
  document.querySelector(".carousel__arrow_left").style.display = "none";
  let trnslt = 0;
  document.addEventListener("click", (event)=> {
    if (event.target.closest(".carousel__arrow_right")) {
      trnslt -= document.querySelector(".carousel__inner").offsetWidth;
    } else if (event.target.closest(".carousel__arrow_left")) {
      trnslt += document.querySelector(".carousel__inner").offsetWidth;
    }

    document.querySelector(".carousel__inner").style.transform = 'translateX(' + trnslt + 'px)';

    if (trnslt == document.querySelector(".carousel__inner").offsetWidth * -3) {
      document.querySelector(".carousel__arrow_right").style.display = "none";
    } else if (trnslt == 0) {
      document.querySelector(".carousel__arrow_left").style.display = "none";
    } else {
      document.querySelector(".carousel__arrow_left").style.display = "";
      document.querySelector(".carousel__arrow_right").style.display = "";
    }
  });
}