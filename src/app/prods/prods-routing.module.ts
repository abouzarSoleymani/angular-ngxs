import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdsContainerComponent} from './prods-container/prods-container.component';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './page-not-found.component';

export const routes: Routes = [
    { path: '', component: ProdsContainerComponent, children: [
            { path: 'welcome', component: WelcomeComponent },
            {
                path: 'products', loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
            },
            { path: '**', component: PageNotFoundComponent }
        ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdsRoutingModule {}
