import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Login} from "../../models/login.model";

export const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf8'
});
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) {}

  loginAdmin(data: Login): Observable<any>{
     return this.http.post<any>(`${environment.url_api}/usuario/login`,data,{headers});
  }
}
