import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      
      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    if (this.elem.classList.contains("cart-icon_visible") && document.body.clientWidth > 767) {
      if (document.querySelector(".heading.logo").getBoundingClientRect().y < 0) {
        this.elem.style.position = "fixed";
        this.elem.style.zIndex = "1000";
        this.elem.style.marginRight = "";
        console.log(document.body.clientWidth - this.elem.getBoundingClientRect().right);
        if (document.querySelector(".container").children[0].getBoundingClientRect().right + this.elem.getBoundingClientRect().width + 30 < document.body.clientWidth) {
          this.elem.style.left = document.querySelector(".container").children[0].getBoundingClientRect().right + 20 + "px";
        } else {
          this.elem.style.left = document.body.clientWidth - this.elem.getBoundingClientRect().width - 10 + "px";
        }
      } else {
        this.elem.style.position = "";
        this.elem.style.zIndex = "";
        this.elem.style.marginRight = "10px";
        this.elem.style.left = "";
      } 
    } else {
      this.elem.style.marginRight = "";
    }

    // console.log(document.querySelector(".container").children[0].getBoundingClientRect().right + this.elem.getBoundingClientRect.width + 10);

    // if (document.querySelector(".container").children[0].getBoundingClientRect().right + this.elem.getBoundingClientRect().width + 30 < document.body.clientWidth) {
    //   this.elem.style.left = document.querySelector(".container").children[0].getBoundingClientRect().right + 20 + "px";
    // } else {
    //   this.elem.style.left = document.body.clientWidth - this.elem.getBoundingClientRect().width - 10 + "px";
    // }
  }
}