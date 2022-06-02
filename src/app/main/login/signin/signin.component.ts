import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userLoginForm: any;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.setUserLoginForm();
    if(localStorage.getItem("email")) {
      this.router.navigate(["/dashboard/user"]);
    }
    else {
      this.router.navigate(["/login"]);
    }
  }

  public setUserLoginForm() {
    this.userLoginForm = new FormGroup({
      email: new FormControl('',null),
      password: new FormControl('',null)
    })
  }

  sendLoginCredentials() {
    console.log("on submit")
    const data = this.userLoginForm.value;
    const dataJson = JSON.stringify(data)
    console.log(dataJson)
    this.service.checkCredentials(dataJson);
  }
}
