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
    password: ''
  }

  welcomed: boolean;

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

    if (this.user.password === 'training') {
      this.usersService.login(this.user, this.headers).subscribe(res => {
        this.welcomed = true;
        const loggedIn = {
          Id: res.Id,
          IsManager: res.IsManager
        }
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
        this.router.navigate(['/dashboard']);
      });
    } else {
      console.log('incorrect password');
    }
    
  }

  logout() {
    this.welcomed = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }

}
