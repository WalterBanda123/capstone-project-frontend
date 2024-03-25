import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { FeaturesTemplateComponent } from './pages/features-template/features-template.component';
import { RegisterPropertyComponent } from './pages/register-property/register-property.component';
import { SmartContractsComponent } from './pages/smart-contracts/smart-contracts.component';
import { ConflictResolutionComponent } from './pages/conflict-resolution/conflict-resolution.component';
import { TransferPropertyComponent } from './pages/transfer-property/transfer-property.component';
import { VerificationValidationComponent } from './pages/verification-validation/verification-validation.component';


const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: 'full' },
  { path: "landing-page", component: LandingPageComponent },
  { path: "get-started", component: GetStartedComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', redirectTo: 'dashboard/overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      {
        path: 'features', component: FeaturesTemplateComponent, children: [
          { path: 'register-property', component: RegisterPropertyComponent },
          { path: 'smart-contracts', component: SmartContractsComponent },
          { path: 'conflict-resolution', component: ConflictResolutionComponent },
          { path: 'transfer-property', component: TransferPropertyComponent },
          { path: 'verification-validation', component: VerificationValidationComponent },
        ]
      },
      { path: 'contracts', component: ContractsComponent },
      { path: 'properties', component: PropertiesComponent }
    ]
  },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
