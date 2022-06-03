import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { SignupComponent } from './main/login/signup/signup.component';
import { SigninComponent } from './main/login/signin/signin.component';
import { AboutComponent } from './main/about/about.component';
import {NgxHideOnScrollModule} from "ngx-hide-on-scroll";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
// import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
// import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AboutComponent,
    // UserDashboardComponent,
    // AdminDashboardComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxHideOnScrollModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
