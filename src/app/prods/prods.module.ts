import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ProdsContainerComponent } from './prods-container/prods-container.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProdsRoutingModule} from './prods-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {AppState} from './store/root.state';
import {environment} from '../../environments/environment';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {AppData} from './app-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ProdsRoutingModule,
  ],
  declarations: [
      WelcomeComponent,
      ProdsContainerComponent,
      PageNotFoundComponent
  ],
  providers: [],
})
export class ProdsModule {}
