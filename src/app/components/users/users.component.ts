import { Repository } from './../../repo';
import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;
  userName: string;

    constructor(private userService: UserServiceService) {
   }

  findProfiles() {
    this.userService.updateProfile(this.userName);
    this.userService.getProfileInfo().subscribe(user => this.user = user
      );
  //   this.githubService.getProfileRepos().subscribe(repo => this.repo = repo);

   }
    ngOnInit(): void {
      this.findProfiles();
    }

}
