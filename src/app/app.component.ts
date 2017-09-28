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

  welcomed = false;

  constructor( public usersService: UsersService, private router: Router ) { }

  ngOnInit() {
    if (!localStorage.getItem('loggedIn')) {
      this.router.navigate(['/']);
    }
  }

  login() {

    const headers = {
      'Content-Type': 'application/json',
    };

    this.usersService.login(this.user, headers).subscribe(res => {
      this.welcomed = true;
      localStorage.setItem('loggedIn', JSON.stringify(res));
      this.router.navigate(['/dashboard']);
    });
  }

  logout() {
    this.welcomed = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }

}
