import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRoutingModule } from './core-routing.module';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AcceptLanguageInterceptor } from './interceptors/accept-language.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AcceptLanguageInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
