import { Product } from "./product.model";

export class CartItem {
  productId: Product["id"];
  quantity: number;
  total: number;
  id?: number;
  emoji?: string;
  name?: string;
  price?: number;
}

export function createCartItem(params: Partial<CartItem>) {
  return {
    total: 0,
    quantity: 1,
    ...params
  } as CartItem;
}
