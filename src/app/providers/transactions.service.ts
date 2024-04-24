import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  sectionOneData: any = {}
  sectionTwoData: any = {}
  sectionThreeData: any = {}
  sectionFourData: any = {}

  updateSectionOneData(data: any): void {
    this.sectionOneData = { ...this.sectionOneData, ...data }
    console.log(this.sectionOneData, ': Section ONE Data');
  }
  updateSectionTwoData(data: any): void {
    this.sectionTwoData = { ...this.sectionTwoData, ...data }
    console.log(this.sectionTwoData, ': Section Two Data');
  }
  updateSectionThreeData(data: any): void {
    this.sectionThreeData = { ...this.sectionThreeData, ...data }
    console.log(this.sectionThreeData, ': Section THREE Data');
  }
  updateSectionFourData(data: any): void {
    this.sectionFourData = { ...this.sectionFourData, ...data }
    console.log(this.sectionFourData, ': Section fOUR Data');
  }

  getFormData(): any {
    return {
      ...this.sectionOneData,
      ...this.sectionTwoData,
      ...this.sectionThreeData,
      ...this.sectionFourData,

    }
  }

  createTransaction(): void {
    const formData = { ...this.getFormData() }
    console.log(formData);

  }
}
