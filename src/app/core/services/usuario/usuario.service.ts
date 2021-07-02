import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../../models/login.model";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";

export const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf8'
});

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  listarUsuarios(): Observable<any>{
    return this.http.get<any>(`${environment.url_api}/usuario/all`,{headers});
  }
}
