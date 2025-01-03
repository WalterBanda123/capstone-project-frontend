import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private http: HttpClient, private authService: AuthService) {

    this.updatePropertiesCount()
    this.updatePropertiesMarketValue()
    this.updateTotalArea()
  }

  private totalPropertiesCount = new BehaviorSubject<number>(0)
  numberOfProperties$ = this.totalPropertiesCount.asObservable()

  private totalPropertyValue = new BehaviorSubject<number>(0)
  propertiesMarketValue$ = this.totalPropertyValue.asObservable()

  private totalArea = new BehaviorSubject<number>(0)
  totalPropertyArea$ = this.totalArea.asObservable()

  serverURL: string = environment.server_url

  registerLandProperty(property: any): Observable<any> {
    const profile = JSON.parse(localStorage.getItem('profile')!)
    return this.http.post<any>(`${this.serverURL}/dbApi/register-land-property`, { ...property, owner: profile._id, id: '2', verified: false })
  }

  updatePropertiesCount(): void {
    // this.getAllProperties().subscribe({
    //   next: (records) => {
    //     this.totalPropertiesCount.next(records.length)
    //   }
    // })
    this.totalPropertiesCount.next(6)
  }

  calculateTotalPrice(items: any[]): number {

    return items.reduce((total: number, item: any) => {
      if (typeof item.marketValue === 'number') {
        return total + item.marketValue
      }
      return total
    }, 0);
  }
  calculateTotalArea(items: any[]): number {
    return items.reduce((total: number, item: any) => total + item.landSize, 0);
  }

  updatePropertiesMarketValue(): void {
    this.getAllProperties().subscribe({
      next: (records) => {
        const count = this.calculateTotalPrice(records.properties)
        this.totalPropertyValue.next(count)
      }
    })
    // this.totalPropertyValue.next(2)
  }

  updateTotalArea(): void {
    this.getAllProperties().subscribe({
      next: (records) => {
        const count = this.calculateTotalArea(records.properties)
        this.totalArea.next(count)
      }
    })
    // this.totalArea.next(7)

  }

  getSearchedProperties(text: string): Observable<any> {
    return this.http.get(`${this.serverURL}/dbApi/search-properties?searched=${text} `)
  }

  getAllProperties(): Observable<any> {
    return this.authService.userProfile$.pipe(
      switchMap(profile => {
        if (profile) {
          console.log('Profile', profile);
          return this.http.get<any>(`${this.serverURL}/dbApi/properties/user/${profile._id}`);
        } else {
          return of(null);
        }
      })
    )
    // return this.http.get<any>(`${this.serverURL}/dbApi/properties/user/`)
  }


  createUserProfile(user: any): Observable<any> {
    const userObject = JSON.parse(localStorage.getItem('user')!)
    return this.http.post<any>(`${this.serverURL}/dbApi/create-user`, { ...user, uid: userObject.uid, profileURL: this.authService.authenticatedUser?.photoURL })
  }

  createTransferTransaction(transaction: any): Observable<any> {
    const transactionObject = { ...transaction }
    return this.authService.userProfile$.pipe(
      switchMap(
        profile => {
          if (profile) {
            transactionObject.createdBy = profile._id
            transactionObject.finalised = false;
            transactionObject.transactionID = profile._id.slice(5) + new Date().getSeconds()
            transactionObject.status = 'Pending'
            transactionObject.amountPayed = 0;
            return this.http.post<any>(`${this.serverURL}/dbApi/transactions`, transactionObject)
          }
          else {
            return of(null)
          }
        })
    )
    // return this.http.post<any>(`${this.serverURL}/`, transactionObject)
  }

  getTransactions(): Observable<any> {
    return this.authService.userProfile$.pipe(
      switchMap(profile => {
        if (profile) {
          return this.http.get<any>(`${this.serverURL}/dbApi/transactions?email=${profile.email}&id=${profile._id}`)
        }
        else {
          return of(null)
        }
      })
    )
  }

  createTransferRequest(request: any): Observable<any> {
    return this.authService.userProfile$.pipe(
      switchMap(profile => {
        if (profile) {
          const transferRequest = { ...request, createdAt: new Date(), status: 'Pending', modifiedAt: new Date(), previousOwner: profile._id, }
          console.log(transferRequest);
          return this.http.post<any>(`${this.serverURL}/dbApi/transfers`, transferRequest)
        }
        else {
          return of(null)
        }
      })
    )

  }


  getTransferRequest(): Observable<any> {
    return this.authService.userProfile$.pipe(
      switchMap(
        profile => {
          if (profile) {
            return this.http.get<any>(`${this.serverURL}/dbApi//transfers/previous-owner/${profile._id}`)
          }
          else {
            return of(null)
          }
        }
      )
    )
  }

  createDeedsRequest(request: any): Observable<any> {
    console.log(request);
    return this.http.post<any>(`${this.serverURL}/`, request)
  }


  // getAllTitleRequest()

}
