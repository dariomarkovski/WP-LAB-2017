import {Injectable} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Injectable()
export class ControlValidatorService {

  constructor() {
  }

  moduleValidator(control: AbstractControl) {
    if (control.value === 'KNI' || control.value === 'PET') return null;
    return {module: true};
  }

}
