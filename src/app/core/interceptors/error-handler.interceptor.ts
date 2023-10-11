import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, catchError, finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse) => {
        // işleme
        if (errorResponse instanceof HttpErrorResponse) {
          if (errorResponse.status == HttpStatusCode.Unauthorized) {
            this.handleUnauthorizedException(errorResponse);
            throw errorResponse;
          }

          switch (errorResponse.error.type) {
            case 'ValidationException':
              this.handleValidationException(errorResponse);
              break;
            case 'BusinessException':
              this.handleBusinessException(errorResponse);
              break;
            default:
              this.toastrService.error('Beklenmedik hata..');
          }
        }
        throw errorResponse;
      })
    );
  }

  private handleUnauthorizedException(exception: HttpErrorResponse) {
    // Refresh token implementasyonu
    this.toastrService.error(
      'Oturumunuzun süresi dolmuştur lütfen yeniden giriş yapınız..'
    );
    this.router.navigateByUrl('/login');
  }

  private handleValidationException(exception: HttpErrorResponse) {
    Object.keys(exception.error.detail).forEach((key) => {
      this.toastrService.error(key + ' ' + exception.error.detail[key]);
    });
  }
  private handleBusinessException(exception: HttpErrorResponse) {
    this.toastrService.error(exception.error.detail);
  }
}
