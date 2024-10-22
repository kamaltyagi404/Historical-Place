import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  countryDetails = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) { }

  getCountryList() {
    let url = "https://countriesnow.space/api/v0.1/countries/flag/images";
    return this.http.get(url);
  }

  visitedLength(tat: any, vis: any, not: any) {
    let obj = {
      total: tat,
      visited: vis,
      notVisited: not
    }
    this.countryDetails.next(obj);
  }

}