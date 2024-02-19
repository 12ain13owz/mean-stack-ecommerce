import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../services/product.service';
import { Subscription } from 'rxjs';
import { ProductApiService } from '../../../services/product-api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent implements OnInit, OnDestroy {
  private productService = inject(ProductService);
  private productApiService = inject(ProductApiService);
  private subscription = new Subscription();

  products: Product[] = [];

  ngOnInit() {
    this.subscription = this.productService
      .getProductListener()
      .subscribe((products: Product[]) => (this.products = products));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeProduct(id: number) {
    if (!id) return;
    this.productApiService.removeProduct(id).subscribe();
  }
}
