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
import { SectionOneComponent } from './components/registration-sections/section-one/section-one.component';
import { AdditionalDocumentationComponent } from './components/registration-sections/additional-documentation/additional-documentation.component';
import { LegalRegulatoryComponent } from './components/registration-sections/legal-regulatory/legal-regulatory.component';
import { OwnershipDetailsComponent } from './components/registration-sections/ownership-details/ownership-details.component';
import { PropertyFeaturesComponent } from './components/registration-sections/property-features/property-features.component';
import { PurchasePriceComponent } from './components/registration-sections/purchase-price/purchase-price.component';
import { ReviewSubmitComponent } from './components/registration-sections/review-submit/review-submit.component';
import { PropertyInformationComponent } from './components/transfer-sections/property-information/property-information.component';
import { TransferDetailsComponent } from './components/transfer-sections/transfer-details/transfer-details.component';
import { DocumentationComponent } from './components/transfer-sections/documentation/documentation.component';
import { AdditionalNotesComponent } from './components/transfer-sections/additional-notes/additional-notes.component';
import { ReviewSubmitTransferComponent } from './components/transfer-sections/review-submit-transfer/review-submit-transfer.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { PropertyDetailsComponent } from './components/transactions-sections/property-details/property-details.component';
import { TransactionTermsComponent } from './components/transactions-sections/transaction-terms/transaction-terms.component';
import { BuyerInformationComponent } from './components/transactions-sections/buyer-information/buyer-information.component';
import { PaymentsComponent } from './components/transactions-sections/payments/payments.component';
import { ReviewPaymentsComponent } from './components/transactions-sections/review-payments/review-payments.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';


const routes: Routes = [
  { path: "", redirectTo: "landing-page", pathMatch: 'full' },
  { path: "landing-page", component: LandingPageComponent },
  { path: "get-started", component: GetStartedComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      {
        path: 'features', component: FeaturesTemplateComponent, children: [
          {
            path: 'register-property', component: RegisterPropertyComponent, children: [
              { path: "", redirectTo: 'section-one', pathMatch: 'full' },
              { path: 'section-one', component: SectionOneComponent },
              { path: 'additional-documentation', component: AdditionalDocumentationComponent },
              { path: 'legal-regulatory', component: LegalRegulatoryComponent },
              { path: 'ownership-details', component: OwnershipDetailsComponent },
              { path: 'property-features', component: PropertyFeaturesComponent },
              { path: 'purchase-price', component: PurchasePriceComponent },
              { path: 'review-submit', component: ReviewSubmitTransferComponent },
            ]
          },
          { path: 'smart-contracts', component: SmartContractsComponent },
          { path: 'conflict-resolution', component: ConflictResolutionComponent },
          {
            path: 'transfer-property', component: TransferPropertyComponent, children: [
              { path: '', redirectTo: 'property-information', pathMatch: 'full' },
              { path: 'property-information', component: PropertyInformationComponent },
              { path: 'transfer-details', component: TransferDetailsComponent },
              { path: 'documentation', component: DocumentationComponent },
              { path: 'additional-notes', component: AdditionalNotesComponent },
              { path: 'review-submit', component: ReviewSubmitTransferComponent },
            ]
          },
          { path: 'verification-validation', component: VerificationValidationComponent },
          {
            path: 'transactions', component: TransactionsComponent, children: [
              { path: '', redirectTo: 'property-details', pathMatch: 'full' },
              { path: 'property-details', component: PropertyDetailsComponent },
              { path: 'transaction-terms', component: TransactionTermsComponent },
              { path: 'buyer-information', component: BuyerInformationComponent },
              { path: 'payments', component: PaymentsComponent },
              { path: 'review-submit', component: ReviewPaymentsComponent },
            ]
          },
          { path: 'advanced-search', component: AdvancedSearchComponent }
        ]
      },
      { path: 'contracts', component: ContractsComponent },
      { path: 'properties', component: PropertiesComponent },

    ]
  },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
