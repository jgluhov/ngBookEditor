import { AbstractControl } from '@angular/forms';

export function ValidateYear(control: AbstractControl) {
  const isYear = (val: string) => /\d{4}/.test(val);
  const isNumber = (val: string) => !isNaN(+val);
  const isEmpty = (val: string) => val === '';

  const invalidState = {
    validYear: true,
  };

  if (!isEmpty(control.value) && isNumber(control.value) && !isYear(control.value)) {
    return invalidState;
  }

  return null;
}
