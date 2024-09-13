import { createReducer, on } from '@ngrx/store';
import { addProduct, loadProducts, removeProduct, updateProduct } from '../actions/products.actions';
import { initialState } from '../state/products.state';

export const productReducer = createReducer(
  initialState,

  on(loadProducts, (state) => {
    return { ...state };
  }),

  on(addProduct, (state, { product }) => {
    return { ...state, products: [...state.products, product] };
  }),

  on(removeProduct, (state, { id }) => {
    return { ...state, products: state.products.filter(product => product.id !== id) };
  }),

  on(updateProduct, (state, { id, changes }) => {
    return { ...state, products: state.products.map(product => product.id === id ? { ...product, ...changes } : product) };
  })
);
