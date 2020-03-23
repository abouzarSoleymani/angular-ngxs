import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Product } from '../product';
import { Select, Store } from '@ngxs/store';
import { filter, map } from 'rxjs/operators';
import {ProductState} from '../../store/features/product/product.state';
import {ProductCategory} from '../../product-categories/product-category';
import {GetAllProducts, SetSelectedProduct} from '../../store/features/product/product.action';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent implements OnInit {
  @Select(ProductState.productList) products$: Observable<Product[]>;
  @Select(ProductState.categoryList) categories$: Observable<ProductCategory[]>;
  @Select(ProductState.selectedProduct) selectedProduct$: Observable<Product>;
  pageTitle = 'Products';
  errorMessage = '';

  productWithCategory$ = combineLatest([this.products$, this.categories$]).pipe(
    filter(([products, categories]) => (products.length !== 0 && categories.length !== 0)),
    map(([products, categories]) => products.map(product => ({
        ...product,
        price: product.price * 1.5,
        categoryName: categories.find(c => product.categoryId === c.id).name,
        searchKey: [product.productName]
      }) as Product)
    ),
    // tap((products => console.log(products)))
  );
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.store.dispatch(new GetAllProducts());
  }

  onSelected(productId: number): void {
    this.store.dispatch(new SetSelectedProduct({productId}));
  }
}
