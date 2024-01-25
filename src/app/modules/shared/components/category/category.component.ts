import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  @Input() category: string;
  private productService = inject(ProductService);

  pathImage: string = '';
  products: Product[];

  ngOnInit(): void {
    this.products = this.productService
      .getAllProduct()
      .filter((product) => product.category === this.category);

    if (this.category === 'men') this.pathImage = 'assets/banner_mens.png';
    if (this.category === 'women') this.pathImage = 'assets/banner_womens.png';
    if (this.category === 'kid') this.pathImage = 'assets/banner_kids.png';
  }
}
