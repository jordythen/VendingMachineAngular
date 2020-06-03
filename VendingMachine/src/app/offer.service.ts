import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Offer } from './classes/offer';
@Injectable({
  providedIn: 'root'
})
export class OfferService {
  offers:Offer[];
  constructor(private http: HttpClient, private urlService: UrlService) { }

  getOffersForMySnacks():Offer[]{
    
     //offers: Offer[];
    return this.offers;
  }

  acceptOffer(offer:Offer){}

  rejectOffer(offer:Offer){}
}
