import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getDashboardInfo(userId: number): Observable<any> {
    return this.http.get(`https://lightningrewards.azurewebsites.net/api/Dashboard?userId=${userId}`)
    .map(res => res.json())
    .catch(e => Observable.throw(e.json().errors));
  }

}
