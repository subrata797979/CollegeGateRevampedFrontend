import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = { 'content-type': 'application/json'}

  constructor(private http: HttpClient) { }

  createUser(data:any) {

    this.http
      .post<any>('http://localhost:8000/api/users', data, {'headers':this.headers})
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}

