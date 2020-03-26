import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Store, Select } from '@ngxs/store';
import { CartState } from '../store/cart.state';

@Component({
  selector: 'app-cart',
   templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cart$: Observable<(CartItem & Product)[]>;
  // total$: Observable<number>;

  @Select(CartState.cartItems)
  cart$: Observable<(CartItem & Product)[]>;

  @Select(CartState.cartTotal)
  total$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    // this.cart$ = this.store.dispatch(new LoadCartItems());

    // this.cart$ = this.cartQuery.selectItems$;
    // this.total$ = this.cartQuery.selectTotal$;
  }

  onDelete({ productId }: CartItem) {
    // this.cartService.remove(productId);
  }
}
