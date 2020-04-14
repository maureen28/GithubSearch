import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  repos: any;
  username: 'maureen28';

    constructor( private profileService: ProfileService ) {
   }

  findAllProfiles() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(user => this.user = user
      );
    this.profileService.getProfileRepos().subscribe(repos => this.repos = repos);

   }
    ngOnInit(): void {
      this.findAllProfiles();
    }
}
