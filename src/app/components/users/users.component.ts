import { ApiUsers } from './../user.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  user: string;
  users: ApiUsers;

  constructor(private http: HttpClient) {}

  findProfiles() {
    this.http.get<ApiUsers>('https://api.github.com/search/users?q=' + this.user + '').toPromise()
    .then((data) => {
      console.log(data);
      this.users = data;
    });
  }
  ngOnInit(): void {
    this.findProfiles();
  }
}
