
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAuth, getAuth } from "@angular/fire/auth"
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatTableModule } from '@angular/material/table'
import { MatRippleModule } from "@angular/material/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http"



import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from "./pages/landing-page/landing-page.component"
import { GetStartedComponent } from "./pages/get-started/get-started.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { environment } from "src/environments/environment";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FeaturesComponent } from './components/features/features.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { TitleDeedComponent } from './components/title-deed/title-deed.component';
import { OwnerProfileComponent } from './components/owner-profile/owner-profile.component';
import { RequestDeedComponent } from './components/request-deed/request-deed.component';
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { FeaturesTemplateComponent } from './pages/features-template/features-template.component';
import { RegisterPropertyComponent } from './pages/register-property/register-property.component';
import { SmartContractsComponent } from './pages/smart-contracts/smart-contracts.component';
import { ConflictResolutionComponent } from './pages/conflict-resolution/conflict-resolution.component';
import { TransferPropertyComponent } from './pages/transfer-property/transfer-property.component';
import { VerificationValidationComponent } from './pages/verification-validation/verification-validation.component';
import { QuickOverviewComponent } from './components/quick-overview/quick-overview.component';
import { RecentActivitiesComponent } from './components/recent-activities/recent-activities.component';
import { SectionOneComponent } from './components/registration-sections/section-one/section-one.component';
import { OwnershipDetailsComponent } from './components/registration-sections/ownership-details/ownership-details.component';
import { PropertyFeaturesComponent } from './components/registration-sections/property-features/property-features.component';
import { LegalRegulatoryComponent } from './components/registration-sections/legal-regulatory/legal-regulatory.component';
import { AdditionalDocumentationComponent } from './components/registration-sections/additional-documentation/additional-documentation.component';
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
import { RecentSearchedTitleComponent } from './components/recent-searched-title/recent-searched-title.component';
import { MapDisplayComponent } from './components/map-display/map-display.component';
import { PropertyOverviewComponent } from './components/property-overview/property-overview.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
// import { ConfirmDelitionComponent } from 'confirm-delition/confirm-delition.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { CreateConflictCaseComponent } from './pages/create-conflict-case/create-conflict-case.component';
import { SectionTwoComponent } from './components/conflict-case-sections/section-two/section-two.component';
import { SectionThreeComponent } from './components/conflict-case-sections/section-three/section-three.component';
import { SectionFourComponent } from './components/conflict-case-sections/section-four/section-four.component';
import { SectionFiveComponent } from './components/conflict-case-sections/section-five/section-five.component';
import { SectionOneConflictComponent } from './components/conflict-case-sections/section-one-conflict/section-one-conflict.component';
import { ContractViewComponent } from './components/contract-view/contract-view.component';
import { ConflictCaseComponent } from './components/conflict-case/conflict-case.component';
import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PropertyViewComponent } from './components/property-view/property-view.component';
import { PropertiesOverviewComponent } from './components/properties-overview/properties-overview.component';
import { MainSectionComponent } from './components/verification-pages/main-section/main-section.component';
import { SurveyPlansComponent } from './components/verification-pages/survey-plans/survey-plans.component';
import { DeedsComponent } from './components/verification-pages/deeds/deeds.component';
import { TaxAssessmentsComponent } from './components/verification-pages/tax-assessments/tax-assessments.component';
import { IdentificationsComponent } from './components/verification-pages/identifications/identifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GetStartedComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RegistrationComponent,
    FeaturesComponent,
    OverviewComponent,
    TitleDeedComponent,
    OwnerProfileComponent,
    RequestDeedComponent,
    MenuPanelComponent,
    ContractsComponent,
    PropertiesComponent,
    FeaturesTemplateComponent,
    RegisterPropertyComponent,
    SmartContractsComponent,
    ConflictResolutionComponent,
    TransferPropertyComponent,
    VerificationValidationComponent,
    QuickOverviewComponent,
    RecentActivitiesComponent,
    SectionOneComponent,
    OwnershipDetailsComponent,
    PropertyFeaturesComponent,
    LegalRegulatoryComponent,
    AdditionalDocumentationComponent,
    PurchasePriceComponent,
    ReviewSubmitComponent,
    PropertyInformationComponent,
    TransferDetailsComponent,
    DocumentationComponent,
    AdditionalNotesComponent,
    ReviewSubmitTransferComponent,
    TransactionsComponent,
    PropertyDetailsComponent,
    TransactionTermsComponent,
    BuyerInformationComponent,
    PaymentsComponent,
    ReviewPaymentsComponent,
    AdvancedSearchComponent,
    RecentSearchedTitleComponent,
    MapDisplayComponent,
    PropertyOverviewComponent,
    QuickActionsComponent,
    // ConfirmDelitionComponent,
    ToastMessageComponent,
    CreateConflictCaseComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionOneConflictComponent,
    ContractViewComponent,
    ConflictCaseComponent,
    TransactionViewComponent,
    NotificationsComponent,
    PropertyViewComponent,
    PropertiesOverviewComponent,
    MainSectionComponent,
    SurveyPlansComponent,
    DeedsComponent,
    TaxAssessmentsComponent,
    IdentificationsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatRippleModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5500 } }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
