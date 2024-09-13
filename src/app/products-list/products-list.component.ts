import { Component } from '@angular/core';
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
  constructor(private store: Store) {
    // Using selector to get all products
    this.products$ = this.store.select(selectAllProducts);
  }

  // dispatching action to add product
  addProduct(name: string, price: any) {
    Number(price);
    const product: Product = { id: Date.now(), name, price };
    this.store.dispatch(addProduct({ product }));
  }

  // Dispatching action to remove product
  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }
}
