import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../services/cart.service';
import { Subscription } from 'rxjs';
import { Cart } from '../../../shared/models/cart.model';
import { CartApiService } from '../../../services/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private cartService = inject(CartService);
  private cartApiService = inject(CartApiService);
  carts: Cart[] = [];
  subTotal: number = 0;
  total: number = 0;
  discount: number = 0;

  ngOnInit(): void {
    this.subscription = this.cartService
      .getCartListener()
      .subscribe((carts) => {
        if (carts.length <= 0) {
          this.carts = [];
          return;
        }

        this.carts = carts;
        this.subTotal = carts
          .map((cart) => cart.newPrice * cart.quantity)
          .reduce((sum, cart) => sum + cart);
        this.total = this.subTotal - this.discount;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeCart(product: Product) {
    this.cartApiService.removeCartApi(product.id).subscribe();
  }
}
