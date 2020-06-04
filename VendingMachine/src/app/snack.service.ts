import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { Snack } from './classes/snack';
import { map } from 'rxjs/operators';
import { VendingMachine } from './classes/vendingmachine';
@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getAll(): Observable<Snack[]>{               //Get all snacks
    return this.http.get(this.urlService.getUrl()+'snack',{withCredentials: true}).pipe(
      map(resp=>resp as Snack[])
    )
  }

  getById(id:number): Observable<Snack>{               //Get a snack by id
    return this.http.get(this.urlService.getUrl()+'snack/'+id, {withCredentials: true}).pipe(
      map(resp=>resp as Snack)
    )
  }

  addSnack(snack:Snack): Observable<Snack>{
    return this.http.post(this.urlService.getUrl()+'snack', snack,{withCredentials: true}).pipe(
      map(resp=>resp as Snack)
    )
  }

  //id is id of vending machine
  addSnackToVM(snack:Snack, id:number):Observable<HttpResponse<VendingMachine>>{
    return this.http.post(this.urlService.getUrl()+'snack/'+id, snack, {observe: 'response', withCredentials: true}).pipe(
        map(resp=>resp as HttpResponse<VendingMachine>)
    )
  }

  updateSnack(snack:Snack):Observable<Snack>{
    return this.http.put(this.urlService.getUrl()+'snack', snack, {withCredentials: true}).pipe(
      map(resp=> resp as Snack)
    )
  }

  deleteSnack(snack: Snack):Observable<Object>{
    return this.http.delete(this.urlService.getUrl()+'snack/'+snack.id, {withCredentials: true} ).pipe()
  }

  buySnackWithMoney(snack: Snack):Observable<HttpResponse<Object>>{
    return this.http.put(this.urlService.getUrl()+'snack/buywithmoney', snack, {observe: 'response', withCredentials: true} ).pipe(
      map(resp => resp as HttpResponse<Object>)
    );
  }
}
