import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private productService = inject(ProductService);

  popular: Product[];
  newProduct: Product[];

  ngOnInit(): void {
    this.subscription = this.productService
      .getProductListener()
      .subscribe(() => {
        this.popular = this.productService.getPopularProduct();
        this.newProduct = this.productService.getNewProduct();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
