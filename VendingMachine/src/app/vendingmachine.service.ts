import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { VendingMachine } from './classes/vendingmachine';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendingmachineService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getAll(): Observable<VendingMachine[]>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine', {withCredentials: true}).pipe(
      map(resp => resp as VendingMachine[])
    );
  }

  getByName(name: string): Observable<VendingMachine[]>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine/name/' + name, {withCredentials: true}).pipe(
      map(resp => resp as VendingMachine[])
    );
  }

  getById(id: string): Observable<VendingMachine>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine/id/' + id, {withCredentials: true}).pipe(
      map(resp => resp as VendingMachine)
    );
  }

  getByType(type: string): Observable<VendingMachine[]>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine/type/' + type, {withCredentials: true}).pipe(
      map(resp => resp as VendingMachine[])
    );
  }

  getByPopularityHighest(): Observable<VendingMachine[]>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine/popularity/highest', {withCredentials: true}).pipe(
      map(resp => resp as VendingMachine[])
    );
  }

  getByPopularityLowest(): Observable<VendingMachine[]>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine/popularity/lowest', {withCredentials: true}).pipe(
      map(resp => resp as VendingMachine[])
    );
  }

}
