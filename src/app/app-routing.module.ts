import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard],
  },
  {path: 'todo', loadChildren: () => import('./todo/todos.module').then(m => m.TodosModule)},
  {path: 'prods', loadChildren: () => import('./prods/prods.module').then(m => m.ProdsModule)},
  // { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
