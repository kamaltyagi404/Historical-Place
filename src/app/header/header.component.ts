import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuList } from '../shared/enum-static';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  homeMenuClass: boolean = true;

  constructor(private router: Router) {
    let splitVal = window.location.href.split('/')
    if (splitVal[splitVal.length - 1] == "" || splitVal[splitVal.length - 1] == 'home') {
      this.homeMenuClass = true;
    } else {
      this.homeMenuClass = false;
    }
  }

  ngOnInit() { }

  menuClicked(menu: any, home?: any) {
    if (home) {
      this.homeMenuClass = home;
      this.router.navigate(['home']);
    } else {
      this.homeMenuClass = false;
      if (menu == MenuList.allCountry || menu == MenuList.visited || menu == MenuList.notVisited) {
        this.router.navigate(['products'], { queryParams: { categoryId: menu } });
      }
    }
  }

}