import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './features/product/product.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtModule } from '@auth0/angular-jwt';
import { sharedReducers } from './shared/store/shared.reducers';
import {
  LAZYLOAD_IMAGE_HOOKS,
  LazyLoadImageModule,
  ScrollHooks,
} from 'ng-lazyload-image';

@NgModule({
  declarations: [AppComponent],
  // ProductModule'i sadece ve sadece ihtiyaç duyduğumda yükle..
  // Products ile ilgili bir sayfaya girdiğinde
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    TranslateModule.forRoot({
      defaultLanguage: 'tr',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => {
          return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(sharedReducers),
    StoreDevtoolsModule.instrument(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      },
    }),
    LazyLoadImageModule,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  bootstrap: [AppComponent],
})
export class AppModule {}
