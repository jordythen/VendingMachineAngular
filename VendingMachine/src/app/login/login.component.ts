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
  // @Output() logIn: EventEmitter<any> = new EventEmitter();
  loggedUser: User;
  username: string;
  password: string;
  isMobile: boolean;
  statusCode: number;

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
        this.loggedUser = resp.body;
        this.statusCode = resp.status;
        if (this.loggedUser){
          console.log('User is logged in! <- login.component.ts');
        }else if (!this.loggedUser){
          console.log('User is NOT logged in.  <- login.component.ts');
        }
      }
    );
  }


  login() {
    this.userService.loginUser(this.username, this.password).subscribe(
      resp => {
        this.loggedUser = resp.body;
        this.statusCode = resp.status;
        if(this.statusCode !== 200){
          alert(' WRONG USERNAME/PASSWORD ');
        }else{ // its good to go

          window.location.href = 'home';
        }
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
