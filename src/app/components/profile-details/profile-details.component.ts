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
  apiKey: 'de0e11d358b385271a6bd345d3ae17fdca76770d';

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
