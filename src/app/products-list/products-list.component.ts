import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Necessary imports for Reactive Forms
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../products/models/product.model';
import { addProduct, removeProduct } from '../products/store/actions/products.actions';
import { selectAllProducts } from '../products/store/selectors/products.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products$: Observable<Product[]>;
  productForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    // Using the selector to get all products
    this.products$ = this.store.select(selectAllProducts);

    // Initialize the reactive form
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]
    });
  }

  // Method to add a product using Reactive Form
  addProduct() {
    if (this.productForm.valid) {
      const product: Product = {
        id: Date.now(),
        name: this.productForm.value.name,
        price: Number(this.productForm.value.price)
      };

      this.store.dispatch(addProduct({ product }));
      this.productForm.reset();
    } else {
      console.log('Invalid Form');
    }
  }

  // Dispatch action to remove product
  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }
}
