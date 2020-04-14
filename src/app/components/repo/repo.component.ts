import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRepos } from './../repo.interface';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  apiKey: 'c60346d07270b3041fc1ef3140e1ba566e6';
  userInterface: ApiRepos;
  repository: string;
  constructor(private http: HttpClient) {}

  getRepo() {
    this.http
      .get<ApiRepos>(
        'https://api.github.com/search/repositories?q=' + this.repository + ''
      )
      .toPromise()
      .then((data) => {
        console.log(data);
        this.userInterface = data;
      });
  }
  ngOnInit(): void {
    this.getRepo();
  }
}
