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
  
  constructor(private http: HttpClient, private urlService: UrlService) { }

  // getOffersForMySnacks():Offer[]{
  //   let offers:Offer[]
  //    //offers: Offer[]; not done yet
  //   return offers;
  // }

  add(o:Offer):Observable<Offer>{
    return this.http.post(this.urlService.getUrl()+'offer', o,{withCredentials: true}).pipe(
      map(resp=>resp as Offer))
  }

  getAll():Observable<Offer[]>{
    return this.http.get(this.urlService.getUrl()+'offer', {withCredentials: true}).pipe(
      map(resp=>resp as Offer[]))
  }

  getById(id:number):Observable<Offer>{
    return this.http.get(this.urlService.getUrl()+'offer/'+id, {withCredentials: true}).pipe(
      map(resp=>resp as Offer))
  }

  update(o:Offer):Observable<Offer>{
    return this.http.put(this.urlService.getUrl()+'offer',o, {withCredentials: true}).pipe(
      map(resp=>resp as Offer))
  }

  delete(id:number):Observable<Object>{
    return this.http.delete(this.urlService.getUrl()+'offer/'+id, {withCredentials: true}).pipe()
      
  }

  getOtherUsersOffersForMySnacks():Observable<Offer[]>{
    return this.http.get(this.urlService.getUrl()+'offer/otherusersoffers', {withCredentials: true}).pipe(
      map(resp=>resp as Offer[]))
  }

  acceptOffer(offer:Offer){}

  
}
