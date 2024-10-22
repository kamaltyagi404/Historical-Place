import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Number } from '../shared/enum-static';
import { ErrorValidationService } from '../error-validatoin/error-validation.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  filterPrice: any;
  image: any;
  productCode: any;
  about: any;
  reviewForm: any = FormGroup;
  givenRating: number = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor( private fb: FormBuilder, private snackBar: MatSnackBar) {
    
    this.reviewForm = this.fb.group({
      remarks: new FormControl('', [Validators.required, Validators.minLength(Number.twenty)]),
      name: new FormControl('', [Validators.required, ErrorValidationService.alphabetOnly]),
      email: new FormControl('', [Validators.required, ErrorValidationService.email])
    });
  }

  ngOnInit() {
    this.productDetails = sessionStorage.getItem("productDetails");
    this.productDetails = JSON.parse(this.productDetails);
    this.about = this.productDetails.about.substring(0, 275) + " . . .";
    this.image = this.productDetails.flag;
  }

  submitFinalAmount() {
    let reviewObj = {
      name: this.reviewForm.value.name,
      email: this.reviewForm.value.email,
      rating: this.givenRating,
      remark: this.reviewForm.value.remarks
    }
    this.productDetails.review.push(reviewObj)
    this.snackBar.open('Your review has been submit.', 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3500,
      panelClass: ['snackbarSuccess']
    });
    this.reviewForm.reset();
  }

  getSubProducts(data: any) {
    const filterData = this.productDetails.details.filter((res: any) => res.detailsId == data.detailsId)[0];
    this.image = filterData.img;
    this.filterPrice = filterData.newPrice;
    this.productCode = filterData.detailsId
  }

  closePrice() {
    this.filterPrice = null;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

}