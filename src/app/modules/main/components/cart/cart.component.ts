import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../services/cart.service';
import { Subscription } from 'rxjs';
import { Cart } from '../../../shared/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private cartService = inject(CartService);
  carts: Cart[] = [];
  subTotal: number = 0;
  total: number = 0;
  discount: number = 0;

  ngOnInit(): void {
    this.subscription = this.cartService.cart$.subscribe((carts) => {
      this.carts = carts;
      this.subTotal = carts
        .map((cart) => cart.new_price * cart.quantity)
        .reduce((sum, cart) => sum + cart);
      this.total = this.subTotal - this.discount;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeCart(product: Product) {
    this.cartService.deleteCart(product.id);
  }
}
