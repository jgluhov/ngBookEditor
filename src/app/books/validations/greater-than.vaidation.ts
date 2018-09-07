import { AbstractControl } from '@angular/forms';

export function ValidateGreaterThan(boundary: number) {
  return function (control: AbstractControl) {
    const invalid = isNaN(+control.value);
    const invalidState = {
      validGreaterThan: true,
      greaterThenBoundary: boundary
    };

    if (invalid) {
      return invalidState;
    }

    if (control.value < boundary) {
      return invalidState;
    }
  };
}
