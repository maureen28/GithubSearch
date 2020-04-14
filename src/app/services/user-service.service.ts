import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  userName: string;
  users: any;

  constructor(private http: HttpClient) {
    this.userName = 'maureen28';
  }

  getProfile(): Observable<User[]> {
    return this.http
      .get<User[]>('https://api.github.com/search/users?q' + this.userName)
      .pipe(map((res) => res));
  }

  updateProfile(userName: string) {
    this.userName = userName;
  }
}
