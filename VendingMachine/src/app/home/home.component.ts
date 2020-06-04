import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedUser: User;

  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.loginUser(null, null).subscribe(
      resp => {
        this.loggedUser = resp.body;
        console.log("FROM HOME COMP :" + resp.body);
      }
    );
  }

}
