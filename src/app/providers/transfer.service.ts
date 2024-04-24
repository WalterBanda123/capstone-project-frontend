import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  sectionOneData: any = {}
  sectionTwoData: any = {}
  sectionThreeData: any = {}

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

  getFormData(): any {
    return {
      ...this.sectionOneData,
      ...this.sectionTwoData,
      ...this.sectionThreeData,
    }
  }

  createTransfer(): void {
    const formData = { ...this.getFormData() }
    console.log(formData);

  }
}
