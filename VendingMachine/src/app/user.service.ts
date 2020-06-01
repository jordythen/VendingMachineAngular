import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { User } from './classes/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private encHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private loggedPerson;

  constructor(private http: HttpClient, private urlService: UrlService) { }

  loginUser(username: string, password: string): Observable<User> {
    if (username && password){ // if function was called with username and password
      const body = `user=${username}&pass=${password}`;
      return this.http.post(this.urlService.getUrl() + 'login', body, {headers: this.encHeaders, withCredentials: true}).pipe(
        map(this.getRespToUser) // Same thing as resp => resp, but instead it's resp => user
      );
    }else{ // check log in
      return this.http.get(this.urlService.getUrl() + 'login', {withCredentials: true}).pipe(
        map(this.getRespToUser)
      );
    }
  }

  logoutUser(): Observable<object>{
    return this.http.delete(this.urlService.getUrl() + 'login', {withCredentials: true}).pipe();
  }

  getLoggedUser(): User{
    return this.loggedPerson;
  }

  getRespToUser(resp): User {
    const user = resp as User;
    if (user) {
      // works kind of like session, but stored locally in angular...
      this.loggedPerson = user;
    }
    return user;
  }
}
