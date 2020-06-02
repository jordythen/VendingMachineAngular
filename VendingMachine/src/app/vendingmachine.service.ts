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

  // -------- temporary test functions -------------------------
  // making sure the serch button gets here correctly
  urlStr = 'http://localhost:8080/VendingMachine/';

  getByName(name: string) {
    alert(this.urlStr + 'name/' + name);
  }

  getById(id: string) {
    alert(this.urlStr + 'id/' + id);
  }

  getByPopularityHighest() {
    alert(this.urlStr + 'popularity/highest');
  }

  getByPopularityLowest() {
    alert(this.urlStr + 'popularity/lowest');
  }

  getByType(type: string) {
    alert(this.urlStr + 'type/' + type);
  }

// -------- work-in-progress on actual functions -------------------------

  getAll(): Observable<VendingMachine[]>{
    return this.http.get(this.urlService.getUrl() + 'vendingMachine', {withCredentials: true}).pipe(
      map(resp => resp as VendingMachine[])
    );
  }



}
