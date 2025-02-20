import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;

  constructor() {
  }
  sum: number = 0;

  cart: ProductType[] = [];

  addToCart(item: ProductType) {
    this.cart.push(item);
    this.sum = (this.cart.reduce((item, i) => item = item + i.price, 0));
  }

}
