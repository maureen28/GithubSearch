import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUsers } from './../repo.interface';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  apiKey: 'c60346d07270b3041fc1ef3140e1ba566e6';
  userInterface: ApiUsers;
  username = 'maureen28';
  constructor(private http: HttpClient) {}

  getRepo() {
    this.http
      .get<ApiUsers>(
        'http://api.github.com/users/repos' +
          this.username +
          '?access_token=' +
          this.apiKey
      )
      .toPromise()
      .then((data) => {
        this.userInterface.repos = data;
        console.log(this.userInterface);
      });
  }
  ngOnInit(): void {
    this.getRepo();
  }
}
