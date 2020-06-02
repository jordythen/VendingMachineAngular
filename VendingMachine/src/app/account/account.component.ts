import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loggedUser: User;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  money: number;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.firstName = this.loggedUser.firstName;
    this.lastName = this.loggedUser.lastName;
    this.username = this.loggedUser.username;
    this.password = this.loggedUser.password;
    this.email = this.loggedUser.email;
    this.money = this.loggedUser.balance;
  }
}
