import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { ProductState } from '../state/products.state';

export const selectProductState =
  createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectProductById = (productId: number) =>
  createSelector(selectAllProducts, (products: Product[]) =>
    products.find((product) => product.id === productId),
  );
