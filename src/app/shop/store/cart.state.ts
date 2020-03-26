import { ProductState, ProductStateModel } from "./product.state";
import { CartItem, createCartItem } from "../models/cart-item.model";
import { State, Action, StateContext, Store, Selector } from "@ngxs/store";
import * as cartActions from "./cart.actions";

export interface CartStateModel {
  cartItems: CartItem[];
}

@State<CartStateModel>({
  name: "cart",
  defaults: {
    cartItems: []
  }
})
export class CartState {
  constructor(private store: Store) {}

  @Selector([ProductState])
  static cartItems(state: CartStateModel, productState: ProductStateModel) {
    const { cartItems } = state;
    const products = productState.products;
    return joinItems(cartItems, products);
  }

  @Selector([ProductState])
  static cartTotal(state: CartStateModel, productState: ProductStateModel) {
    const { cartItems } = state;
    const products = productState.products;
    return joinItems(cartItems, products).reduce(
      (total, item) => total + item.total,
      0
    );
  }

  @Action(cartActions.LoadCartItems)
  loadCartItems({ getState }) {
    const { cartItems } = getState();
    const products = this.store.selectSnapshot(ProductState.products);

    return joinItems(cartItems, products);
  }

  @Action(cartActions.AddProductToCart)
  addProductToCart(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: cartActions.AddProductToCart
  ) {
    const cartItems = getState().cartItems;

    const findIndex = cartItems.findIndex(c => payload === c.productId);
    if (findIndex > -1) {
      return patchState({
        cartItems: cartItems.map((i, index) => {
          if (index !== findIndex) {
            return i;
          }
          return {
            ...i,
            quantity: i.quantity + 1
          };
        })
      });
    }

    const item = createCartItem({
      productId: payload
    });

    patchState({
      cartItems: [...getState().cartItems, item]
    });
  }
}

function joinItems(cartItems, products) {
  return cartItems.map(cartItem => {
    const product = products.find(p => p.id === cartItem.productId);
    return {
      ...cartItem,
      ...product,
      total: cartItem.quantity * product.price
    };
  });
}
