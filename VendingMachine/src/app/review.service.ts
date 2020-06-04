import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from './classes/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  addReview(review: Review): Observable<Review> {
    return this.http.post(this.urlService.getUrl() + 'review/submit', review, {withCredentials: true}).pipe(
      map(resp=>resp as Review)
    )
  }

  getByMachineId(id: number): Observable<Review[]>{
    return this.http.get(this.urlService.getUrl() + 'review/machine/' + id, {withCredentials: true}).pipe(
      map(resp => resp as Review[])
    );
  }

}
