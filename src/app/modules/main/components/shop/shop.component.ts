import { Component } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import data_product from '../../../../../assets/data';
import new_collections from '../../../../../assets/new_collections';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  populars: Product[] = data_product;
  newCollectins: Product[] = new_collections;
}
