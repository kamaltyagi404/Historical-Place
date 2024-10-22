import { Component, Input, OnInit } from '@angular/core';
import { ErrorValidationService } from './error-validation.service';

@Component({
  selector: 'app-error-validatoin',
  templateUrl: './error-validatoin.component.html',
  styleUrls: ['./error-validatoin.component.scss']
})
export class ErrorValidatoinComponent implements OnInit {

  @Input() errorControlName: any;
  @Input() errorControl: any;

  constructor() { }

  ngOnInit(): void { }

  get errorMsg() {
    for (let errorType in this.errorControl.errors) {
      if (this.errorControl.touched) {
        return ErrorValidationService.getValidatorErrorMessage(errorType, this.errorControl.errors[errorType]);
      }
    }
    return null;
  }

}