import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ProdsContainerComponent } from './prods-container/prods-container.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProdsRoutingModule} from './prods-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import { productsState} from './store/features';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';

@NgModule({
  imports: [
    HttpClientModule,
    ProdsRoutingModule,
    NgxsModule.forFeature(productsState),
  ],
  declarations: [
      WelcomeComponent,
      ProdsContainerComponent,
      PageNotFoundComponent
  ],
  providers: [],
})
export class ProdsModule {}
