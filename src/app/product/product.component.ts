import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ProductDetailsService } from '../product-details/product-details.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {
  minValue: number = 20;
  maxValue: number = 80;
  countValue: any;
  suggestedKeywordsList: any;
  visitedCountry: any[] = [];
  notVisitedCountry: any;

  constructor(private changeDetectorRef: ChangeDetectorRef, private productDetailsService: ProductDetailsService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.productDetailsService.countryDetails.subscribe(users => {
      console.log("users from serviecs", users)
      if(users.visited){ 
        this.visitedCountry = users.visited;
        this.notVisitedCountry = users.total - users.visited.length;
      }
    })
  }

  suggestedKeyword(data: any) {
    var arrList = [];
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        arrList.push({
          'key': prop,
          'value': data[prop]
        });
      }
    }
    arrList.sort((a: any, b: any) => b.value - a.value);
    this.suggestedKeywordsList = arrList
    this.changeDetectorRef.detectChanges();
  }

  searchProduct(data: any) {
  }

}