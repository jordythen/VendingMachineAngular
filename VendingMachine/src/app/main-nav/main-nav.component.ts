import { Component, ViewChild, ViewEncapsulation, OnInit, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material';
import { UserService } from '../user.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavComponent implements OnInit, OnChanges {

  constructor(private userService: UserService,
              private breakpointObserver: BreakpointObserver,
              private router: Router) {}
  loggedUser: User;
  account: string;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  ngOnInit(): void {
    this.userService.loginUser(null, null).subscribe(
      resp => {
        console.log(resp);
        this.loggedUser = resp;
        if (this.loggedUser){
          console.log('User is logged in!');
          console.log('User\'s first name: ' + this.loggedUser.firstName);
          this.account = `${this.loggedUser.firstName} ${this.loggedUser.lastName}`;
        }else if (!this.loggedUser){
          console.log('User is NOT logged in.');
        }
      }
    );
  }

  ngOnChanges(){
    this.userService.loginUser(null, null).subscribe(
      resp => {
        this.loggedUser = resp;
        if (this.loggedUser != null){
          console.log('User is logged in!');
          console.log('On changes: ' + this.loggedUser);
        }else if (this.loggedUser == null){
          console.log('User is NOT logged in.');
        }
      }
    );
  }

  logout(){
    this.userService.logoutUser().subscribe(
      resp => {
        this.router.navigate(['home']);
        this.loggedUser = null;
      }
    );
  }

  someMethod() {
    this.trigger.openMenu();
  }

  }

