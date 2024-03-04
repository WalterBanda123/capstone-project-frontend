import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    DashMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
