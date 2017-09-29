import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = {
    email: '',
    password: 'training'
  }

  welcomed: boolean

  headers = {
    'Content-Type': 'application/json',
  }

  constructor( public usersService: UsersService, private router: Router ) { }

  ngOnInit() {
    if (!localStorage.getItem('loggedIn')) {
      this.welcomed = false;
      this.router.navigate(['/']);
    } else {
      this.welcomed = true;
      if (this.router.url === '/') {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  login() {

    this.usersService.login(this.user, this.headers).subscribe(res => {
      this.welcomed = true;
      localStorage.setItem('loggedIn', JSON.stringify(res.Id));
      this.router.navigate(['/dashboard']);
    });
  }

  logout() {
    this.welcomed = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }

}
