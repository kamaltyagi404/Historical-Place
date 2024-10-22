import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { About, visitedCountryList } from '../shared/constStatic-constant';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductDetailsService } from '../product-details/product-details.service';
import { MenuList } from '../shared/enum-static';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductLIstComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() searchValue: any;
  lengthColl: any;
  updatedList: any = [];
  defaultRecords: any = 9;
  previousPageIndex: any;
  pageIndex: number = 0;
  rangeList: any = []
  selectedCategory: any;
  categoryCount: any;
  countryList: any;
  visitedCountryList: any[] = visitedCountryList;
  allCountrylistOnline: any[] = [];

  constructor(private activateRoute: ActivatedRoute, private router: Router, private productDetailsService: ProductDetailsService) {
    
  }

  ngOnInit() {
    this.productDetailsService.getCountryList().subscribe((res: any) => {
      this.allCountrylistOnline = res.data;
      this.updatedList = res.data;
      this.rangeList = res.data;
      this.lengthColl = res.data.length;
      this.filterMethod()
    })

  }

  ngOnChanges() { }

  ngAfterViewInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.selectedCategory = +params['categoryId'];
      this.categoryCountValue(this.selectedCategory);
    });
  }

  setVisited(list: any, flag: any) {
    let newData: any = {};
    if (flag.target.checked) {
      newData.countryName = list.name;
      newData.id = list.iso3;
      this.visitedCountryList.push(newData)
    } else {
      this.visitedCountryList = this.visitedCountryList.filter((ele: any) => {
        if (ele.id != list.iso3) {
          return ele;
        }
      })
    }
    this.filterMethod()
  }

  filterMethod() {
    this.updatedList.filter((ele: any) => {
      ele.visited = false;
      ele.review = [];
      ele.about = About
      this.visitedCountryList.filter((el: any) => {
        if (ele.iso3 == el.id) {
          ele.visited = true;
        }
      })
    })
    let notVisited = this.allCountrylistOnline.length - this.visitedCountryList.length
    this.productDetailsService.visitedLength(this.allCountrylistOnline.length, this.visitedCountryList, notVisited);
  }

  categoryCountValue(cat: any) {
    console.log("this.visitedCountryList", this.visitedCountryList)
    let catList: any[] = [...this.allCountrylistOnline];
    console.log("catList", catList)
    if (cat == MenuList.visited) {
      let list: any[] = []
      catList.filter((ele: any) => {
        this.visitedCountryList.filter((el: any) => {
          if (el.id == ele.iso3) {
            list.push(ele)
          }
        })
      })
      this.updatedList = list;
    } else if(cat == MenuList.notVisited){
      this.updatedList = catList.reduce((acc, curr) => {
        if (!curr.visited) {
          acc.push(curr)
        }
        return acc
      }, []);
    } else {
      this.updatedList = this.allCountrylistOnline

    }
    this.pageIndex = 0;
    this.rangeList = this.updatedList;
    this.lengthColl = this.rangeList.length;
    this.updatedList = this.updatedList.slice(0, this.defaultRecords);
  }

  onPaginateChange(data: any) {
    this.previousPageIndex = data.previousPageIndex;
    this.pageIndex = data.pageIndex
    if (this.rangeList.length > 0) {
      if (this.previousPageIndex < data.pageIndex) {
        this.updatedList = this.rangeList.slice(this.previousPageIndex * this.defaultRecords + this.defaultRecords, this.pageIndex * this.defaultRecords + this.defaultRecords);
      } else {
        this.updatedList = this.rangeList.slice(this.pageIndex * this.defaultRecords, this.previousPageIndex * this.defaultRecords);
      }
    } else {
      if (this.previousPageIndex < this.pageIndex) {
        this.updatedList = this.updatedList.slice(this.previousPageIndex * this.defaultRecords + this.defaultRecords, this.pageIndex * this.defaultRecords + this.defaultRecords);
      } else {
        this.updatedList = this.updatedList.slice(this.pageIndex * this.defaultRecords, this.previousPageIndex * this.defaultRecords);
      }
    }
  }

    menuClicked(data: any) {
    sessionStorage.setItem("productDetails", JSON.stringify(data))
    this.router.navigate(['products/product-details'], { queryParams: { productid: data.productId } });
  }

}