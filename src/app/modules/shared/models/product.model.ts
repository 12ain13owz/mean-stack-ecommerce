import { FormControl, FormGroup } from '@angular/forms';

export interface Product {
  id: number;
  name: string;
  image: string;
  category?: string;
  newPrice: number;
  oldPrice: number;
}

export interface ProductForm
  extends FormGroup<{
    name: FormControl<string>;
    image: FormControl<File>;
    category: FormControl<string>;
    newPrice: FormControl<number>;
    oldPrice: FormControl<number>;
  }> {}
