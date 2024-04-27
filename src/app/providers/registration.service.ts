import { Injectable } from '@angular/core';
import { AppDataService } from './app-data.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  sectionOneData: any = {}
  sectionTwoData: any = {}
  sectionThreeData: any = {}
  sectionFourData: any = {}
  sectionFiveData: any = {}
  selectedSixData: any = {}


  updateSectionOneData(data: any): void {
    this.sectionOneData = { ...this.sectionOneData, ...data }
    console.log(this.sectionOneData, ': Section One Data');
  }

  updateSectionTwoData(data: any): void {
    this.sectionTwoData = { ...this.sectionTwoData, ...data }
    console.log(this.sectionTwoData, ': Section Two Data');

  }

  updateSectionThreeData(data: any): void {
    this.sectionThreeData = { ...this.sectionThreeData, ...data }
    console.log(this.sectionThreeData, ': Section Two Data');

  }

  updateSectionForthData(data: any): void {
    this.sectionFourData = { ...this.sectionFourData, ...data }
    console.log(this.sectionFourData, ': Section Four Data');

  }
  updateSectionFifthData(data: any): void {
    this.sectionFiveData = { ...this.sectionFiveData, ...data }
    console.log(this.sectionFiveData, ': Section five Data');

  }

  updateSectionSixData(data: any): void {
    this.selectedSixData = { ...this.selectedSixData, ...data }
    console.log(this.selectedSixData, ': Section Six Data');

  }


  getFormData(): any {
    return {
      ...this.sectionOneData,
      ...this.sectionTwoData,
      ...this.sectionThreeData,
      ...this.sectionFourData,
      ...this.sectionFiveData,
      ...this.selectedSixData
    }
  }

}
