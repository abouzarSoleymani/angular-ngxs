import { ProductState } from '../../store';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';
import { Selector, Store } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  // @Selector(ProductState.selectedProduct)
  product$: Observable<Product>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.product$ = this.store.select(ProductState.selectedProduct);
  }
}
