import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
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
  statusCode: Response;

  constructor(private http: HttpClient, private urlService: UrlService) { }

  createAccount(firstName: string,
                lastName: string,
                username: string,
                password: string,
                email: string,
                balance: number): Observable<HttpResponse<User>>{
                  return this.http.post(this.urlService.getUrl() + 'login/register',
                  {firstName, lastName, username, email, password, balance}, {observe: 'response'})
                  .pipe( map(resp => resp as HttpResponse<User>) );
                }


  loginUser(username: string, password: string): Observable<HttpResponse<User>> {
    if (username && password){ // if function was called with username and password
      const body = `user=${username}&pass=${password}`;
      // tslint:disable-next-line: max-line-length
      return this.http.post(this.urlService.getUrl() + 'login', body, {headers: this.encHeaders, observe: 'response', withCredentials: true}).pipe(
        map(resp => resp as HttpResponse<User>) // Same thing as resp => resp, but instead it's resp => user
      );
    }else{ // check log in
      return this.http.get(this.urlService.getUrl() + 'login', {observe: 'response', withCredentials: true}).pipe(
        map(resp => resp as HttpResponse<User>)
      );
    }
  }

  logoutUser(): Observable<object>{
    return this.http.delete(this.urlService.getUrl() + 'login', {withCredentials: true}).pipe();
  }

  getLoggedUser(): User{
    return this.loggedPerson;
  }
  // takes a json response and parse it into a User ts class object
  // getRespToUser(resp): User {
  //   const user = resp.body as User;
  //   this.statusCode = resp.status;
  //   if (user) {
  //     // works kind of like session, but stored locally in angular...
  //     this.loggedPerson = user;
  //   }
  //   return user;
  // }
}

