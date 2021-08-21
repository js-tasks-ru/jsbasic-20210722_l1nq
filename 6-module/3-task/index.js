import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.createElem(slides);
    this.createArrows();
    this.initCarousel(slides);
  }

  createElem(slides) {
    this.elem = createElement("<div class='carousel'> <div class='carousel__inner'> </div> </div>");
    for (let product of slides) {
      let tablePart = `
        <div class="carousel__slide" data-id=${product.id}>
          <img src="/assets/images/carousel/${product.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${product.price.toFixed(2)}</span>
            <div class="carousel__title">${product.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div> 
      `;
      this.elem.querySelector("div.carousel__inner").innerHTML += tablePart;
    }
  }

  createArrows() {
    let arrows = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `;
    this.elem.insertAdjacentHTML("afterbegin", arrows);
  }

  initCarousel(slides) {
    this.elem.querySelector(".carousel__arrow_left").style.display = "none";
    let trnslt = 0;
    this.elem.addEventListener("click", (event)=> {
      if (event.target.closest(".carousel__arrow_right")) {
        trnslt -= this.elem.querySelector("div.carousel__inner").offsetWidth;
      } else if (event.target.closest(".carousel__arrow_left")) {
        trnslt += this.elem.querySelector("div.carousel__inner").offsetWidth;
      } else if (event.target.closest(".carousel__button")) {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: event.target.closest(".carousel__slide").dataset.id,
          bubbles: true
        }));
      }
      this.elem.querySelector("div.carousel__inner").style.transform = 'translateX(' + trnslt + 'px)';
  
      if (trnslt == this.elem.querySelector(".carousel__inner").offsetWidth * -1 * (slides.length - 1)) {
        this.elem.querySelector(".carousel__arrow_right").style.display = "none";
      } else if (trnslt == 0) {
        this.elem.querySelector(".carousel__arrow_left").style.display = "none";
      } else {
        this.elem.querySelector(".carousel__arrow_left").style.display = "";
        this.elem.querySelector(".carousel__arrow_right").style.display = "";
      }
    });
  }
}
