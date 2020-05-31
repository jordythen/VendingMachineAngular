import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MobileServiceService } from '../mobile-service.service';
import * as $ from 'jquery';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() logIn: EventEmitter<any> = new EventEmitter();
  loggedUser: User;
  username: string;
  password: string;
  isMobile: boolean;
  constructor(private router: Router,
              private userService: UserService,
              private mobileService: MobileServiceService) { }

  ngOnInit(): void {
    // $('.grid-form').css('width', '100%');
    this.getMobilePerspective();
    this.username = '';
    this.password = '';

    // Check if user is already logged in...
    // sort of rendundant since we're already checking for this in main-nav.ts
    this.userService.loginUser(null, null).subscribe(
      resp => {
        this.loggedUser = resp;
      }
    );
  }


  login() {
    this.userService.loginUser(this.username, this.password).subscribe(
      resp => {
        this.loggedUser = resp;
        this.logIn.emit(null);
        this.router.navigate(['home']);
      }
    );
  }

  getMobilePerspective(){
    this.mobileService.getIsMobile().subscribe(
      resp => {
        this.isMobile = resp;
      }
    );
  }

}
