
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AssetsComponent } from './components/assets/assets.component';
import { MarketPlaceComponent } from './components/market-place/market-place.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashMainComponent } from './components/dash-main/dash-main.component';
import { RegisterPropertyComponent } from './pages/register-property/register-property.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    LoginComponent,
    GetStartedComponent,
    TransactionsComponent,
    AssetsComponent,
    MarketPlaceComponent,
    ProfileComponent,
    DashMainComponent,
    RegisterPropertyComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
