import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable(); // Hearing changes.

  constructor() { }

  addToCart(product: Product) {
    this.shoppingCart.push(product);
    this.myCart.next(this.shoppingCart); // We're transmiting the products array.
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0); // Reduces an array to a single value.
  }
}
