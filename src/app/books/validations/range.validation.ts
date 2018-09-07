import { AbstractControl } from '@angular/forms';

export function ValidateRange(start: number, end: number) {
  return function (control: AbstractControl) {
    const invalid = isNaN(+control.value);
    const invalidState = {
      validRange: true,
      rangeStart: start,
      rangeEnd: end
    };

    if (invalid) {
      return invalidState;
    }

    if (control.value < start || control.value > end) {
      return invalidState;
    }
  };
}
