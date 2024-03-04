import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';

const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: 'full' },
  { path: "landing-page", component: LandingPageComponent },
  { path: "login", component: LoginComponent },
  { path: "get-started", component: GetStartedComponent },
  { path: "dashboard", component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
