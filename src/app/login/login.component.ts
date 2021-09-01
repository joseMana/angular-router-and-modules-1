import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from './../core/configs/navigation.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public showInvalidLogin = false;
  menuNavigations = navigation;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
    if (this.username === 'admin@magenic.com' && this.password === 'admin') {

      const loggedInUser = {
        id: 1,
        role: 'admin',
        subRole: 'manager'
      };

      localStorage.setItem('userInfo', JSON.stringify(loggedInUser));
      localStorage.setItem('isAuthenticated', 'true');

      this.router.navigate([
        'admin'
      ]);

    }
    else {
      this.showInvalidLogin = true;
    }
  }

  public onRegisterClick(): void {
    this.router.navigate([this.menuNavigations.root.registration.route]);
  }

}
