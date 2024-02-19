import { Component, OnInit, ViewChild, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { mimeType } from './mime-type.validator';
import { Product, ProductForm } from '../../../shared/models/product.model';
import { ProductApiService } from '../../../services/product-api.service';
import all_product from '../../../../../assets/all_product';
import { Subject, concatMap, exhaustMap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  @ViewChild('formDirect', { static: false })
  private formDirect: FormGroupDirective;

  imagePreview: string | ArrayBuffer = 'assets/admin/upload_area.svg';
  form: ProductForm;

  productApiService = inject(ProductApiService);
  products = all_product;

  addAllProduct = new Subject<any>();

  saveAllProduct() {
    this.products.map((product) => {
      const imageName =
        'http://localhost:3000/images/' + product.image.split('/').pop();

      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('image', imageName);
      formData.append('category', product.category);
      formData.append('newPrice', product.new_price.toString());
      formData.append('oldPrice', product.old_price.toString());

      // this.addAllProduct.next(formData);
    });
  }

  ngOnInit() {
    this.onInitForm();

    this.addAllProduct
      .pipe(concatMap((data) => this.productApiService.addProduct(data)))
      .subscribe(() => {
        console.log('Products saved successfully.');
      });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('product', this.form.value.image);
    formData.append('category', this.form.value.category);
    formData.append('newPrice', this.form.value.newPrice.toString());
    formData.append('oldPrice', this.form.value.oldPrice.toString());

    this.productApiService.addProduct(formData).subscribe();
  }

  onImagePicked(e: Event) {
    const event = <HTMLInputElement>e.target;
    const file = event.files[0];
    if (!file) return;

    this.form.patchValue({ image: file });
    this.form.controls['image'].updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => (this.imagePreview = reader.result);
    reader.readAsDataURL(file);
  }

  onInitForm() {
    this.form = this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
      category: new FormControl('women', {
        validators: [Validators.required],
      }),
      newPrice: new FormControl(null, {
        validators: [Validators.required],
      }),
      oldPrice: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
}
