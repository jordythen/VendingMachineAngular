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
  myOffersMade: Offer[];
  offersForMySnacks: Offer[];
  first: String;
  second: String;
  OFMS: String;
  SMO: String;
  // id:Number;

  constructor(private userService: UserService, private offerService: OfferService) { }

  ngOnInit(): void {
    this.OFMS ='display:none';
    this.SMO ='display:none';
    this.first ='display:block';
    this.second ='display:none';
    this.userService.loginUser(null, null).subscribe(
      resp => {
        this.loggedUser = resp.body;
       // this.statusCode = resp.status;
        }
    );

    if (!this.loggedUser){

      this.myOffersMade = this.loggedUser.offers;
      this.offersForMySnacks = this.offerService.getOffersForMySnacks();
    }else{
      alert('You are not logged in.');
      // more needed here, redirect to login page
    }
  }

  myOffers(){
    this.first ='display:none';
    this.second ='display:block';
    this.SMO ='display:block';

  }
  offersForMyCandy(){
    this.first ='display:none';
    this.second ='display:block';
    this.OFMS ='display:block';
  }
  acceptOffer(event){
    let id: number;
    id = event.target.attributes.id;
    let offer: Offer;
    for (const o of this.offersForMySnacks ){
      if (id = o.id){
        offer = o;
      }
    }

    this.offerService.acceptOffer(offer);
    alert('Offer accepted');
    window.location.reload();

  }
  rejectOffer(event){
    let id: number;
    id = event.target.attributes.id;
    let offer: Offer;
    for (const o of this.offersForMySnacks ){
      if (id = o.id){
        offer = o;
      }
    }
    this.offerService.rejectOffer(offer);
    alert('Offer rejected');
    window.location.reload();
  }
  back(){
    window.location.reload();
  }
}
