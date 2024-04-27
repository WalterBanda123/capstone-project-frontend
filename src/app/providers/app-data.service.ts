import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  serverURL: string = environment.server_url
  registerLandProperty(property: any): Observable<any> {
    return this.http.post<any>(`${this.serverURL}/dbApi/register-land-property`, { ...property, owner: '660c514071968999ed98c12c', id: '2' })
  }

  getSearchedProperties(text: string): Observable<any> {
    return this.http.get(`${this.serverURL}/dbApi/search-properties?searched=${text} `)
  }
}
