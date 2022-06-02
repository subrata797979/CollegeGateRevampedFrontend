import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = { 'content-type': 'application/json'}

  constructor(private http: HttpClient, private router: Router) { }

  createUser(data:any) {
    this.http
      .post<any>('http://localhost:8000/api/users', data, {'headers':this.headers})
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }

  checkCredentials(data:any) {
    this.http
      .post<any>('http://localhost:8000/api/users/checkByEmail', data, {'headers':this.headers})
      .subscribe((data) => {
        if(data!=null) {
          // route to dashboard else show error after this function in call
          localStorage.setItem("email", data[0].email);
          this.router.navigate(["/dashboard/user"]);
        }
        else {
          console.log("Not Found");
        }
      });
      // .subscribe({
      //   next: (response) => console.log(response),
      //   error: (error) => console.log(error),
      // });

  }
}

