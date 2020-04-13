import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUsers } from '../user-profile.interface';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  userInterface: ApiUsers;
  username = 'maureen28';
  apiKey: 'c906d80d83d4c2523603cb2e6b9133eb5';

  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get<ApiUsers>('http://api.github.com/users/' + this.username + '?access_token=' + this.apiKey).toPromise().then((data) => {
      this.userInterface = data;
      console.log(data);
      // tslint:disable-next-line: no-shadowed-variable
      this.http.get(this.userInterface.repos_url + '?access_token=' + this.apiKey).toPromise().then((data) => {
        this.userInterface.repos =  data;
        console.log(this.userInterface);
      });
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

}
