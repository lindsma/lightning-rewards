import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  login(user: any, headersSend: any): Observable<any> {
    return this.http.post('http://lightningrewards.azurewebsites.net/api/Authentication',
      user,
      new RequestOptions({ headers: headersSend }));
  }

  getAllManagers(): Observable<any> {
    return this.http.get('http://lightningrewards.azurewebsites.net/api/Users/Managers').do(res => {
      console.log(res);
    })
  }

  getUsersFromAutocompleteQuery(): Observable<any> {
    return this.http.get('http://lightningrewards.azurewebsites.net/api/Users/Autocomplete').do(res => {
      console.log(res);
    })
  }

}
