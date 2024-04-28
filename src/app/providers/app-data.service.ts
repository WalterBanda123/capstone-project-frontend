import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { TRANSFERS } from '../mock/Transfers';


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
    return this.http.post<any>(`${this.serverURL}/dbApi/register-land-property`, { ...property, owner: '660c514071968999ed98c12c', id: '2', verified: false })
  }

  updatePropertiesCount(): void {
    this.getAllProperties().subscribe({
      next: (records) => {
        this.totalPropertiesCount.next(records.length)
      }
    })
  }

  calculateTotalPrice(items: any): number {

    return items.reduce((total: number, item: any) => {
      if (typeof item.marketValue === 'number') {
        return total + item.marketValue
      }
      return total
    }, 0);
  }
  calculateTotalArea(items: any): number {
    return items.reduce((total: number, item: any) => total + item.landSize, 0);
  }

  updatePropertiesMarketValue(): void {
    this.getAllProperties().subscribe({
      next: (records) => {
        const count = this.calculateTotalPrice(records)
        this.totalPropertyValue.next(count)
      }
    })
  }

  updateTotalArea(): void {
    this.getAllProperties().subscribe({
      next: (records) => {
        const count = this.calculateTotalArea(records)
        this.totalArea.next(count)
      }
    })
  }

  getSearchedProperties(text: string): Observable<any> {
    return this.http.get(`${this.serverURL}/dbApi/search-properties?searched=${text} `)
  }

  getAllProperties(): Observable<any> {
    return this.http.get<any>(`${this.serverURL}/dbApi/land-properties`)
  }


  createUserProfile(user: any): Observable<any> {
    const uid = JSON.parse(localStorage.getItem('user')!)
    console.log('Walter: ', user);
    return this.http.post<any>(`${this.serverURL}/dbApi/create-user`, { ...user, uid, profileURL: this.authService.authenticatedUser?.photoURL })
    return of({})
  }

  createTransferTransaction(transaction: any): Observable<any> {
    const transactionObject = { ...transaction }
    this.authService.userProfile$.subscribe(profile => {
      // if (profile) {
      //   transactionObject.createdBy = profile._id
      //   transactionObject.finalised = false;
      //   transactionObject.transID = 'helper _function to generate random ids'
      // }
      transactionObject.createdBy = profile?._id ?? 'id not available right now'
      transactionObject.finalised = false;
      transactionObject.transID = 'helper _function to generate random ids'
    })

    // return this.http.post<any>(`${this.serverURL}/`, transactionObject)
    return of(transactionObject)
  }


  createTransferRequest(request: any): Observable<any> {
    TRANSFERS.push({ ...request, createdAt: new Date(), transaction: 'Transaction ' + TRANSFERS.length + 1, status: "Pending" })
    return of(TRANSFERS);
  }

}
