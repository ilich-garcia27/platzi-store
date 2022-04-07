import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private shoppingCart: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.shoppingCart.push(product);
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0); // Reduces an array to a single value.
  }
}
