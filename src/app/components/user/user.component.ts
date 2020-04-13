import { HttpClient } from '@angular/common/http';
import { GprofileService } from './../../services/gprofile.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  username: string;

  constructor(private gService: GprofileService) { }

findProfiles() {
  this.gService.updateProfile(this.username);
  this.gService.getProfileInfo().subscribe(user => this.user = user
    );
//   this.githubService.getProfileRepos().subscribe(repo => this.repo = repo);

 }

  ngOnInit(): void {
  }

}
