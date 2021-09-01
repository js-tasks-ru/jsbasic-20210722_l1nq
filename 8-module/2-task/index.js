import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render(this.products);
  }

  render(prod) {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
      </div>
    </div>`);

    for (let i of prod) {
      let productCard = new ProductCard(i);
      this.elem.querySelector(".products-grid__inner").append(productCard.elem);
    }
  }

  updateFilter(filter) {
    Object.assign(this.filters, filter);
    let arr = this.products.slice();
    for (let j of this.products) {
      if (j.spiciness > this.filters.maxSpiciness) {
        if (arr.includes(j)) {
          arr.splice(arr.indexOf(j), 1);
        }
      }

      if (this.filters.noNuts) {
        if (j.hasOwnProperty('nuts')) {
          if (arr.includes(j)) {
            arr.splice(arr.indexOf(j), 1);
          }
        }
      }

      if (this.filters.vegeterianOnly) {
        if (!j.hasOwnProperty("vegeterian")) {
          if (arr.includes(j)) {
            arr.splice(arr.indexOf(j), 1);
          }
        }
      }
      if (this.filters.category) {
        if (this.filters.category != j.category) {
          if (arr.includes(j)) {
            arr.splice(arr.indexOf(j), 1);
          }
        }
      }



    }

    document.querySelector(".products-grid__inner").innerHTML = "";
    for (let i of arr) {
      let productCard = new ProductCard(i);
      document.querySelector(".products-grid__inner").append(productCard.elem);
    }
  }
}