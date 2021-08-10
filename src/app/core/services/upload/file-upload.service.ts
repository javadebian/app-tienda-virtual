import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private http: HttpClient
  ) { }

  fileUpload(file: File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('archivo', file);

    return this.http.post<any>(`${environment.url_api}/upload/`,formData,{
      reportProgress: true,
      responseType: 'json'
    });
  }
}
