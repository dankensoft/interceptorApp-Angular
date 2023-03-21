import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Danniels Castillo');

    const headers = new HttpHeaders({
      'token-usuario': 'ABC1290381902ALKSDJ1902'
    });

    return this.http.get(`https://reqres.in/api/user`, {
      params,
      headers
    }).pipe(
      map(resp => Object(resp).data), // si se desea colocar así: resp['data] el strict del tsconfig.json cambiarlo a false
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedió ERROR!!');
    console.warn(error);
    return throwError('Error Personalizado!!');
  }
}
