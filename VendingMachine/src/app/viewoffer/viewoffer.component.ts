import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { OfferService } from '../offer.service';
import { User } from '../classes/user';
import { Offer } from '../classes/offer';
@Component({
  selector: 'app-viewoffer',
  templateUrl: './viewoffer.component.html',
  styleUrls: ['./viewoffer.component.css']
})
export class ViewofferComponent implements OnInit {
  loggedUser: User;
  offerList: Offer[];
  constructor(private userService:UserService, private offerService:OfferService) { }

  ngOnInit(): void {
    this.userService.loginUser(null,null);
  }

}
