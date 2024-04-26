import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  userID: string = ''
  userEmail: string = ''

  createdUser: any = {}
  createUserProfile(user: any): Observable<any> {
    this.createdUser = user
    return of('Registering user....')
  }

  setUserData(id: string, email: string): void {
    this.userID = id
    this.userEmail = email
  }

}
