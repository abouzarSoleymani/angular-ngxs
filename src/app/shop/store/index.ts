import { ProductState } from "./product.state";
import { CartState } from "./cart.state";

export const ShopState = [ProductState, CartState];

export * from "./product.actions";
export * from "./product.state";
export * from "./cart.actions";
export * from "./cart.state";
