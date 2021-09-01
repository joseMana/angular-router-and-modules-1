import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { navigation } from './../core/configs/navigation.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  public username: string;
  public password: string;

  menuNavigations = navigation;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  register(): void {
    alert('thank you!');

    this.router.navigate([this.menuNavigations.root.login.route]);
  }

}
