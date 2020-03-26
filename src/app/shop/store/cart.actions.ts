import { Product } from '../models/product.model';

export class AddProductToCart {
  static type = '[Products] Add To Cart';
  constructor(public readonly payload: Product['id']) {}
}

export class LoadCartItems {
  static type = '[Cart] Load Cart Items';
}

export type CartActions = AddProductToCart | LoadCartItems;
