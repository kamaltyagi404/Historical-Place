import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorValidationService {

  constructor() { }

  static getValidatorErrorMessage(errorType: string, errorNameType: any) {
    let config: Object = {
      required: 'This field is mendatory',
      minlength: `Minimum length should be more than ${errorNameType.requiredLength} character`,
      alphabetOnly: 'Only alphabets values are allowed',
      email: 'Use correct email id'
    }
    return config[errorType as keyof Object];
  }

  static alphabetOnly(data: any) {
    const condition = /^[a-zA-Z ]*$/;
    if (condition.test(data.value)) {
      return null;
    }
    return { alphabetOnly: true };
  }

  static email(data: any) {
    const val = data.value;
    if (val) {
      const atposition = val.indexOf("@");
      const dotposition = val.lastIndexOf(".");
      const spacebtenchar = val.indexOf(" ");
      if (atposition < 3 || dotposition < atposition + 2 || dotposition + 2 >= val.length || spacebtenchar >= 0) {
        return { email: true }
      }
      const condition = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (condition.test(val)) {
        return null;
      }
    }
    return { email: true };
  }

}