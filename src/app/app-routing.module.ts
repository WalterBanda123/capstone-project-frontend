import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';


const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: 'full' },
  { path: "landing-page", component: LandingPageComponent },
  { path: "get-started", component: GetStartedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
