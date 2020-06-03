import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { OfferService } from '../offer.service';
import { User } from '../classes/user';
import { Offer } from '../classes/offer';
import {Snack} from '../classes/snack';
import {VendingMachine} from '../classes/vendingmachine';

@Component({
  selector: 'app-makeoffer',
  templateUrl: './makeoffer.component.html',
  styleUrls: ['./makeoffer.component.css']
})
export class MakeofferComponent implements OnInit {
  loggedUser: User;
  //snack of interest is attribute used to import the snack the offer is being made on
  @Input() snackOfInterest: Snack;
  userSnacks: Snack[];

  constructor(private userService:UserService, private offerService:OfferService) { }

  ngOnInit(): void {
    this.userService.loginUser(null,null).subscribe(
      resp => {
        this.loggedUser = resp.body;
       // this.statusCode = resp.status;
        }
    );

    this.userSnacks=this.loggedUser.vendingmachine.snacks;
  }

  makeOffer(event){
    let id:number;
    id=event.target.attributes.id;
    let offer: Offer;
    let snackOfferred:Snack;

    for (let s2 of this.userSnacks){
      if (s2.id==id){
        snackOfferred=s2;
      }
    }
    offer.snacksOfInterest=[this.snackOfInterest];
    offer.snacksToOffer=[snackOfferred];

    this.offerService.add(offer);
    
    alert("Offer made");
    window.location.reload()
  };

  cancel(){
    window.location.reload()
  }
}
