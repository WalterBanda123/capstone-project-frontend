import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private http: HttpClient) { }

  serverURL: string = environment.server_url
  registerLandProperty(property: any): Observable<any> {
    return this.http.post<any>(`${this.serverURL}/dbApi/land-properties`, property)
  }

  getSearchedProperties(text: string): Observable<any> {
    return this.http.get(`${this.serverURL}/dbApi/search-properties?searched=${text} `)
  }
}
