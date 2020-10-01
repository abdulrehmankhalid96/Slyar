import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {
  constructor(public service: DataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.service.isLoading = true;

    this.service.isLoadingObs.next(this.service.isLoading);
    return next.handle(request).pipe(
      finalize(() => {
        this.service.isLoading = false;
        this.service.isLoadingObs.next(this.service.isLoading);
      })
    );
  }
}

export const InterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true },
];
