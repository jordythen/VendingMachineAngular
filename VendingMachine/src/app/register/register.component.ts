import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loggedUser: User;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  balance: number;
  statusCode: number;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.password = '';
    this.email = '';
    this.balance = 100;
  }

  createAccount(){
    this.userService.createAccount(this.firstName, this.lastName, this.username, this.password, this.email, this.balance).subscribe(
      resp => {
        this.loggedUser = resp.body;
        if(this.statusCode === 200){
          alert("You've successfully created your account!");
        }
        if (resp){
          window.location.href = 'home';
        }
      }
    );
  }

}
