import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;
  userName: string;

    constructor( {
   }

  findProfiles() {

   }
    ngOnInit(): void {
      this.findProfiles();
    }

}
