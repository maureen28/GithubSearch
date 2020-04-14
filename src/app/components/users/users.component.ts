import { ApiUser } from './../user.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userInterface: ApiUser;
  users: string;
  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get<ApiUser>('https://api.github.com/search/users?q=' + this.users + '')
      .toPromise()
      .then((data) => {
        console.log(data);
        this.userInterface = data;
      });
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
