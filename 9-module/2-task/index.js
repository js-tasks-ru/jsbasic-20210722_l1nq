import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
    this.carousel = new Carousel(slides);
    this.ribbonMenu = new RibbonMenu(categories);
    this.stepSlider = new StepSlider({steps: 5, value: 3});
    this.cartIcon = new CartIcon();
    this.cart = new Cart(this.cartIcon);
  }

  async render() {
    document.querySelector("div[data-carousel-holder]").append(this.carousel.elem);

    document.querySelector("div[data-ribbon-holder]").append(this.ribbonMenu.elem);

    document.querySelector("div[data-slider-holder]").append(this.stepSlider.elem);

    document.querySelector("div[data-cart-icon-holder]").append(this.cartIcon.elem);
    
    return fetch("products.json")
    .then(result => result.json())
    .then(result => {
      this.productsGrid = new ProductsGrid(result);
      document.querySelector("div[data-products-grid-holder]").innerHTML = "";
      document.querySelector("div[data-products-grid-holder]").append(this.productsGrid.elem);

      this.productsGrid.updateFilter({
        noNuts: document.getElementById('nuts-checkbox').checked,
        vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
        maxSpiciness: this.stepSlider.value,
        category: this.ribbonMenu.value
      });

      document.body.addEventListener("product-add", event => {
        for (let i of result) {
          if (i.id == event.detail) {
            this.cart.addProduct(i);
          }
        }
      });

      document.querySelector("div[data-slider-holder]").addEventListener("slider-change", event =>{
        this.productsGrid.updateFilter({maxSpiciness: event.detail});
      });

      document.querySelector("div[data-ribbon-holder]").addEventListener("ribbon-select", event => {
        this.productsGrid.updateFilter({category: event.detail});
      });

      document.body.addEventListener("change", (event) => {
        if (event.target.id == "nuts-checkbox") {
          this.productsGrid.updateFilter({noNuts: event.target.checked});
        }
        if (event.target.id == "vegeterian-checkbox") {
          this.productsGrid.updateFilter({vegeterianOnly: event.target.checked});
        }
      });
    });
  }
}
