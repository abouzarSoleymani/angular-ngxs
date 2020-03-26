import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {AuthModule} from './auth/auth.module';
import {AppStates} from './core/store';
import {environment} from '../environments/environment';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsRouterPluginModule, RouterStateSerializer} from '@ngxs/router-plugin';
import {CoreModule} from './core/core.module';
import { AppComponent } from './core/containers/app.component';
import {CustomRouterStateSerializer} from './auth/store/router/router-state.serializer';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppData} from './prods/app-data';
@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        // NgxsModule.forRoot([
        //     TodoState
        // ]),
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        CommonModule,
        AuthModule.forRoot(),

        NgxsModule.forRoot(AppStates, {
            developmentMode: !environment.production,
        }),
        NgxsStoragePluginModule.forRoot({
            key: ['auth.status', 'books', 'todos', 'products', 'cart', 'productState'],
        }),
        NgxsRouterPluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot({
            name: 'Ngxs Book Store DevTools',
        }),
        NgxsLoggerPluginModule.forRoot({
            disabled: environment.production,
        }),
      //  InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),  //products
        CoreModule.forRoot(),
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
