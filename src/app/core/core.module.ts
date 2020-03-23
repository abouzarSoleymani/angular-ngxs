import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';
import { LayoutComponent } from './components/layout.component';
import { NavItemComponent } from './components/nav-item.component';
import { SidenavComponent } from './components/sidenav.component';
import { ToolbarComponent } from './components/toolbar.component';
import { MaterialModule } from '../material';

import { GoogleBooksService } from './services/google-books.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpInterceptorModule} from '../http-interceptor/http-interceptor.module';
import {RouteGuardModule} from '../route-guard/route-guard.module';

const MODULES = [
  HttpClientModule,
  HttpInterceptorModule,
  RouteGuardModule,
  CommonModule,
  RouterModule,
  MaterialModule
];

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: MODULES,
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [GoogleBooksService],
    };
  }
}
