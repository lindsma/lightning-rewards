import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  login(user: any): Observable<any> {
    return this.http.post('http://lightningrewards.azurewebsites.net/api/Authentication', user).do(res => {
      console.log(res);
    })
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
