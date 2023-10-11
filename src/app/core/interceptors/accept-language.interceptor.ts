import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AcceptLanguageInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const translateService = inject(TranslateService);

    const selectedLanguage =
      translateService.currentLang || translateService.defaultLang || 'tr';

    let newRequest = request.clone({
      setHeaders: {
        'Accept-Language': selectedLanguage,
      },
    });

    return next.handle(newRequest);
  }
}
