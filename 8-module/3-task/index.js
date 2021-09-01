export default class Cart {
  cartItems = []; // [product: {...}, count: 

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product != null) {
      if (this.cartItems.length > 0) {
        let end = this.cartItems.length;
        let i = 0;
        while (i < end) {
          if (i != end && this.cartItems[i]["product"] == product) {
            this.cartItems[i].count += 1;
            break;
          } else if (i + 1 == end) {
            this.cartItems.push({"product": product, "count": 1 });
          }
          i++;
        }
      } else {
        this.cartItems.push({"product": product, "count": 1 });
      }
    }
    this.onProductUpdate(this.cartItem); 
  }

  updateProductCount(productId, amount) {
    for (let i of this.cartItems) {
      if (i.product.id == productId) {
        i.count += amount;
        if (i.count == 0) {
          this.cartItems.splice(this.cartItems.indexOf(i), 1);
        }
      }
    }
    this.onProductUpdate(this.cartItem);
  }

  isEmpty() {
    if (this.cartItems.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  getTotalCount() {
    let count = 0;
    for (let i of this.cartItems) {
      count += i.count;
    }
    return count;
  }

  getTotalPrice() {
    let priceAll = 0;
    for (let i of this.cartItems) {
      priceAll += i.count * i.product.price;
    }
    return priceAll;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

