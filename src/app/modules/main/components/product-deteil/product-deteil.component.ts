import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../services/cart.service';
import { ProductApiService } from '../../../services/product-api.service';
import { CartApiService } from '../../../services/cart-api.service';

@Component({
  selector: 'app-product-deteil',
  templateUrl: './product-deteil.component.html',
  styleUrl: './product-deteil.component.scss',
})
export class ProductDeteilComponent {
  private productService = inject(ProductService);
  private cartApiService = inject(CartApiService);
  private route = inject(ActivatedRoute);
  private subscription = new Subscription();
  id: number;
  product: Product;
  popularProduct: Product[];
  isProduct: boolean = false;
  token: string = localStorage.getItem('auth-token');

  ngOnInit(): void {
    this.popularProduct = this.productService.getPopularProduct();

    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id) this.product = this.productService.getProduct(this.id);
      if (this.product) this.isProduct = true;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(product: Product) {
    this.cartApiService.addCartApi(product.id).subscribe();
  }
}
