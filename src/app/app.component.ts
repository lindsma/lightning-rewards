import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  welcomed = false;

  constructor( public usersService: UsersService, private router: Router ) { }

  ngOnInit() {
  }

  login() {
    
  console.log('true');
    const headers = {
      'Content-Type': 'application/json',
    };

    const user = {
      email: 'ladams@reliaslearning.com',
      password: 'training'
    };

    this.usersService.login(user, headers).subscribe(res => {
      console.log(res);
      this.welcomed = true;
      this.router.navigate(['/dashboard']);

    });
  }

  logout() {
    this.welcomed = false;
  }

}
