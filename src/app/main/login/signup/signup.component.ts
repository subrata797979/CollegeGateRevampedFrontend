import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: any;

  constructor(public service: UserService) { }

  ngOnInit(): void {
    this.setUserForm();
  }

  public setUserForm() {
    this.userForm = new FormGroup({
      username: new FormControl('', null),
      email: new FormControl('', null),
      password: new FormControl('', null),
    })
  }

  createUser() {
    if (this.userForm.invalid) {
      return;
    }
    else {
      let data = this.userForm.value;
      const dataJson = JSON.stringify(data)
      // console.log(dataJson)
      this.service.createUser(dataJson);
    }
  }

}
