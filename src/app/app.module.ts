
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAuth, getAuth } from "@angular/fire/auth"
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"

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


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GetStartedComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
