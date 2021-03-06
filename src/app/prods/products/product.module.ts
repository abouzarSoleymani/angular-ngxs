import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductShellComponent } from './product-list-alt/product-shell.component';
import { ProductDetailComponent } from './product-list-alt/product-detail.component';

import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from '../store/features/product/product.state';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
      CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':alternate',
        component: ProductShellComponent
      }
    ]),
    NgxsModule.forFeature([ProductState]),

  ],
  declarations: [
    ProductListComponent,
    ProductShellComponent,
    ProductListAltComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
