import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main/home/home.component";
import {SignupComponent} from "./main/login/signup/signup.component";
import {SigninComponent} from "./main/login/signin/signin.component";
import {AboutComponent} from "./main/about/about.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: SignupComponent},
  { path: 'login', component: SigninComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
