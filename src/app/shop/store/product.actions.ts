import { Product } from '../models/product.model';

export class AddProduct {
  static type = '[Products] Add Product';
  constructor(public readonly payload: Product) {}
}

export class LoadProducts {
  static type = '[Products] Load Products';
}

export type ProductsActions = LoadProducts | AddProduct;
