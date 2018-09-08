import { AbstractControl } from '@angular/forms';

export function ValidateGreaterThan(boundary: number) {
  const isYear = (val: string) => /\d{4}/.test(val);
  const isNumber = (val: string) => !isNaN(+val);

  return function (control: AbstractControl) {
    const invalidState = {
      validGreaterThan: true,
      greaterThenBoundary: boundary
    };

    if (!isNumber(control.value) || !isYear(control.value)) {
      return null;
    }

    if (+control.value < boundary) {
      return invalidState;
    }
  };
}
