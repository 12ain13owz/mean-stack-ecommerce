import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  productService = inject(ProductService);

  popular: Product[];
  newProduct: Product[];

  ngOnInit(): void {
    this.popular = this.productService.getPopularProduct();
    this.newProduct = this.productService.getNewProduct();
  }
}
