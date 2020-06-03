import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { VendingMachine } from './classes/vendingmachine';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendingmachineService {

  private encHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});

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

  getById(id: number): Observable<HttpResponse<VendingMachine>>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine/id/' + id, {observe: 'response', withCredentials: true}).pipe(
      map(resp => resp as HttpResponse<VendingMachine>)
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

  update(vm: VendingMachine): Observable<VendingMachine>{
    return this.http.put(this.urlService.getUrl() + 'vendingMachine/update', {headers: this.regHeaders, withCredentials: true}).pipe(
      map(resp => resp as VendingMachine)
    );
  }

}
