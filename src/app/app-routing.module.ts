import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AssetsComponent } from './components/assets/assets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MarketPlaceComponent } from './components/market-place/market-place.component';
import { DashMainComponent } from './components/dash-main/dash-main.component';
import { RegisterPropertyComponent } from './pages/register-property/register-property.component';

const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: 'full' },
  { path: "landing-page", component: LandingPageComponent },
  { path: "login", component: LoginComponent },
  { path: "get-started", component: GetStartedComponent },
  { path: "register-property", component: RegisterPropertyComponent },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: '', redirectTo: 'dash-main', pathMatch: 'full' },
      { path: 'dash-main', component: DashMainComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'assets', component: AssetsComponent },
      { path: 'marketplace', component: MarketPlaceComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
