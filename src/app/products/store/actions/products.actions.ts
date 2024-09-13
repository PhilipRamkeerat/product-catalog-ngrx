import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const loadProducts = createAction('[Products] Load Products');
export const addProducts = createAction('[Products] Add Products', props<{ product: Product }>());
export const removeProduct = createAction('[Products] Remove Product', props<{ id: number }>());
export const updateProduct = createAction('[Products] Update Product', props<{ id: number; changes: Partial<Product> }>());
