import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Usuario} from "../../models/usuario.model";
import {Producto} from "../../models/producto.model";

export const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf8'
});

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

  listarProductos(): Observable<any>{
    return this.http.get<any>(`${environment.url_api}/producto/all`,{headers});
  }

  listarProductosUsuario(dni: string): Observable<any>{
    return this.http.get<any>(`${environment.url_api}/producto/usuario/`+ dni,{headers});
  }

  acualizarProducto(producto: Producto): Observable<any>{
    return this.http.put<any>(`${environment.url_api}/producto/update`,producto,{headers});
  }

  nuevoProducto(producto: Producto): Observable<any>{
    return this.http.post<any>(`${environment.url_api}/producto/add`,producto,{headers})
  }
}
