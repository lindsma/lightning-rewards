import { Component } from '@angular/core';

import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor( public usersService: UsersService) {}

  login() {
    let headers = {
      'Content-Type': 'application/json'
    }

    const user = {
      email: 'ladams@reliaslearning.com',
      password: 'training'
    }

    this.usersService.login(user, headers).subscribe(res => {
      console.log(res);
    });
  };

}
