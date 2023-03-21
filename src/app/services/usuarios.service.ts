import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(){
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Danniels Castillo');

    return this.http.get(`https://reqres.in/api/user`, {
      params
    }).pipe(
      map(resp => Object(resp).data), // si se desea colocar así: resp['data] el strict del tsconfig.json cambiarlo a false
    );
  }
}
