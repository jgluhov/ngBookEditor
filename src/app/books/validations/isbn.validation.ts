

import { AbstractControl } from '@angular/forms';

export function ValidateISBN(control: AbstractControl) {
  const isValidISBN = /^ISBN(?:-13)?:?\x20*(?=.{17}$)97(?:8|9)([ -])\d{1,5}\1\d{1,7}\1\d{1,6}\1\d$/.test(control.value);

  const invalidState = {
    validISBN: true
  };

  if (!control.value) {
    return null;
  }

  if (!isValidISBN) {
    return invalidState;
  }
}
