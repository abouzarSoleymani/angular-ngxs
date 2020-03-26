import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ProductsComponent} from './products/products.component';
import {SingleProductComponent} from './products/single-product/single-product.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {ShopState} from './store';
import {ProductsService} from './services/products.service';
import {CreateProductComponent} from './products/create-product/create-product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShopContainerComponent } from './shop-container/shop-container.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: ShopContainerComponent,
    children: [
      {
        path: 'cart',
        component: CartComponent
        // canActivate: [AuthGuard]
      },
      {
        path: 'products',
        component: ProductsComponent
        // canActivate: [AuthGuard]
      },
      {
        path: 'products/:id',
        component: SingleProductComponent
        // canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature(ShopState)
  ],
  providers: [ProductsService],
  declarations: [
    CartComponent,
    ProductsComponent,
    SingleProductComponent,
    CreateProductComponent,
    ShopContainerComponent
  ],
  entryComponents: [CreateProductComponent]
})
export class ShopModule {}
