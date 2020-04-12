import { GprofileService } from './../../services/gprofile.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  username: string;

  constructor(private gprofileService: GprofileService) { }

  ngOnInit(): void {
  }

}
