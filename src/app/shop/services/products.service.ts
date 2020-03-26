import { Product } from "../models/product.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { delay } from "rxjs/operators";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Product[]>(`/api/products`).pipe(delay(1000));
  }

  //   getProduct(id: ID) {
  //     const request = this.http.get<Product>(`/api/products/${id}`).pipe(
  //       tap(response => {
  //         this.productsStore.add(response);
  //       })
  //     );
  //     return this.productsQuery.isPristine ? request : noop();
  //   }

  create(product: Product) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers };
    return this.http
      .post<Product>(`/api/products`, product, options)
      .pipe(delay(750));
  }
}
