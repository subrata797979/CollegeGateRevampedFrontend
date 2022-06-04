import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CollegeService} from "../../service/college.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  subjectForm: any;

  constructor(private service: CollegeService, private router: Router) { }

  ngOnInit(): void {
    this.setsubjectForm();
  }

  public setsubjectForm() {
    this.subjectForm = new FormGroup({
      marks: new FormControl('',null),
      subject: new FormControl('',null)
    })
  }

  sendSubjectDetails() {
    console.log("on submit")
    const data = this.subjectForm.value;
    const dataJson = JSON.stringify(data)
    console.log(dataJson)
    this.service.getCollegeList(dataJson).subscribe((res) => {
      console.log(res.data);
    });
    // this.service.getCollegeList(dataJson);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
