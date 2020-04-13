import { Repository } from './../repo';
import { User } from './../user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GprofileService {

private username: string;
private clientId: '0ae4c8853c92e70867a5';
private clientSecret: '7716f03d7070910448a899b72d01336d866a86e1';
  user: any;

  constructor(private http: HttpClient) {
    this.username = 'maureen28';
  }
getProfileInfo(): Observable<User[]> {
return this.http.get<User[]>('https://api.github.com/users/' + this.username + '?client_id=' +
this.clientId + '&client_secret= ' + this.clientSecret).pipe(map(res => res));
}

updateProfile(username: string) {
    this.username = username;
  }
}