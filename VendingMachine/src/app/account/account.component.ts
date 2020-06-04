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
  statusCode: number
  addedMoney: number;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.loginUser(null, null).subscribe(
      resp => {
        console.log(resp);
        console.log(resp.body);
        console.log(resp.status);
        this.loggedUser = resp.body;
        this.statusCode = resp.status;
      }
    );
  }

  cashUpdate(){
    console.log(this.loggedUser.balance);
    this.loggedUser.balance = this.loggedUser.balance + this.addedMoney;
    console.log(this.addedMoney);
    console.log(this.loggedUser.balance);

    this.userService.updateUser(this.loggedUser).subscribe(
      resp=>{
        console.log("WERE RECEIVING THIS BAK " + resp);
        console.log("HEY THIS IS UPDATED USER " + this.loggedUser);
        window.location.reload();
      }
    );
  }
}
