import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/models/cart.model';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart[] = [];
  cart$ = new BehaviorSubject<Cart[]>([]);

  constructor() {}

  getCarts() {
    return [...this.cart];
  }

  getCart(id: number) {
    return this.cart.find((cart) => cart.id === id);
  }

  addToCart(product: Product) {
    const index = this.cart.findIndex((cart) => cart.id === product.id);

    if (index !== -1) {
      this.cart[index].quantity++;
      this.cart$.next([...this.cart]);
    } else {
      this.cart.push({ ...product, quantity: 1 });
      this.cart$.next([...this.cart]);
    }
  }

  // updateCart(cart: Cart) {
  //   const id = cart.id;
  //   const index = this.cart.findIndex((cart) => cart.id === id);

  //   if (index !== -1) {
  //     this.cart[index] = cart;
  //     this.cart$.next([...this.cart]);
  //   }
  // }

  deleteCart(id: number) {
    const index = this.cart.findIndex((cart) => cart.id === id);

    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cart$.next([...this.cart]);
    }
  }
}
