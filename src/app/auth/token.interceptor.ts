import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('access_token')
    if(token){
      const tokenJSON = JSON.parse(JSON.stringify(token))
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenJSON}`
        }
      })
    }
    return next.handle(request);
  }
}
