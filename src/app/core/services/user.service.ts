import { delay } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { user } from 'src/app/shared/models/user';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: user[] = [
        {
          id: 1,
          name: "Marvin Dale Baky",
          position: "Developer",
          motto: "Lorem Ipsum"
        },
        {
          id: 2,
          name: "Rolee Lee Jr.",
          position: "Developer",
          motto: "Lorem Ipsum"
        },
        {
          id: 3,
          name: "Eduard Lu",
          position: "Developer",
          motto: "Lorem Ipsum"
        }
      ]

    constructor() { }

    getUsers(): user[] {
        return this.users;
    }

    getUser(id: number): user {
        return this.users[id-1];
    }
}
