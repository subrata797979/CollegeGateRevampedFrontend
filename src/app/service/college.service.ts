import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  API_URL = environment.apiUrl;
  headers = { 'content-type': 'application/json'}

  constructor(private http: HttpClient) { }

  getCollegeList(dataJson: string) {
    const model: Subject<any> = new Subject<any>();
    this.http.post(this.API_URL + "/cs/searchByMarks",dataJson,{'headers':this.headers}).subscribe((res) => {
      // model.next({ data: res });
      console.log(res);
    });
    // return model;
  }

}
