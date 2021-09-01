import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: user;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  public navigateToUser(id: number): void {
    this.router.navigate(["admin/user", id])
  }
}
