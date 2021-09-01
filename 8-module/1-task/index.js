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
    let initialTopCoord = "";
    if (initialTopCoord) {
      initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;
    }
    if (this.elem.offsetWidth) {
      if (window.pageYOffset > initialTopCoord && document.body.clientWidth > 767) {
        document.querySelector(".cart-icon").style.position = "fixed";
        document.querySelector(".cart-icon").style.zIndex = "1000";
        document.querySelector(".cart-icon").style.marginRight = "";
        if (document.querySelector(".container").children[0].getBoundingClientRect().right + this.elem.getBoundingClientRect().width + 30 < document.body.clientWidth) {
          this.elem.style.left = document.querySelector(".container").children[0].getBoundingClientRect().right + 20 + "px";
        } else {
          this.elem.style.left = document.body.clientWidth - this.elem.getBoundingClientRect().width + 6 + "px";
        }
      } else {
        document.querySelector(".cart-icon").style.position = "";
        document.querySelector(".cart-icon").style.zIndex = "";
        document.querySelector(".cart-icon").style.marginRight = "";
        document.querySelector(".cart-icon").style.left = "";
      }
    }
  }
}