import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  balance: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
