import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    // console.log('Paso por el Interceptor');
    const headers = new HttpHeaders({
      'token-usuario': 'ABC1290381902ALKSDJ1902'
    });

    const reqClone = req.clone({
      headers
    });
    
    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedió ERROR!!');
    console.warn(error);
    return throwError('Error Personalizado!!');
  }
}
