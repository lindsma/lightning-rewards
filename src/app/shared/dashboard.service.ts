import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getDashboardInfo(): Observable<any> {
    return this.http.get('http://lightningrewards.azurewebsites.net/api/Dashboard').do(res => {
      console.log(res);
    })
  }

}
