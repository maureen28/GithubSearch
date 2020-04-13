import { GprofileService } from './../../services/gprofile.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  repo: any;
  username: string;

  constructor(private gprofileService: GprofileService) {}

  findProfiles() {
    this.gprofileService.updateProfile(this.username);
    this.gprofileService.getProfileInfo().subscribe((user) => {
      console.log(user);
      this.user = user;
    });
    this.gprofileService.getProfileRepos().subscribe(repo => {
        console.log(repo);
        this.repo = repo;
      });
  }

  ngOnInit(): void {}
}
