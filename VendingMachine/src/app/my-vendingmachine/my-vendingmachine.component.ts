import { Component, OnInit } from '@angular/core';
import {VendingmachineService} from '../vendingmachine.service'
import { User } from '../classes/user';
import { VendingMachine } from '../classes/vendingmachine';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-vendingmachine',
  templateUrl: './my-vendingmachine.component.html',
  styleUrls: ['./my-vendingmachine.component.css']
})
export class MyVendingmachineComponent implements OnInit {
  loggedUser: User;
  userVending: VendingMachine;
  statusCode: number;
  constructor(private userService: UserService, private vendingService: VendingmachineService, private router: Router) { }

  ngOnInit(): void {
    
    this.userService.loginUser(null, null).subscribe(
      resp => {
        console.log(resp);
        console.log(resp.body);
        console.log(resp.status);
        this.loggedUser = resp.body;
        console.log(this.loggedUser.vendingMachine)
        this.userVending = this.loggedUser.vendingMachine;
        console.log(this.userVending.description);
      }
    );
  }
  vendingUpdate() {
    console.log("The button actually works");
    this.vendingService.update(this.userVending).subscribe(
      resp => {
        console.log("WERE RECEIVING THIS BAK " + resp);
        console.log(resp.body);
        console.log(resp.status);
        this.userVending = resp.body;
        this.statusCode = resp.status;
        console.log("HEY THIS IS UPDATED VENDING MACHINE " + this.userVending);
        window.location.reload();
      }
    );
    console.log("The update method ran");
  }
}
