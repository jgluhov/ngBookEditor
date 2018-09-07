import { AbstractControl } from '@angular/forms';

export function ValidateGreaterThanDate(boundaryDate: Date) {
  return function (control: AbstractControl) {
    const date: Date = control.value;

    const invalidState = {
      validGreaterThanDate: true,
      greaterThenBoundaryDate: [
        boundaryDate.getDate(),
        boundaryDate.getMonth() + 1,
        boundaryDate.getFullYear()
      ].join('/')
    };

    if (!date) {
      return invalidState;
    }

    if (new Date(date).getTime() < boundaryDate.getTime()) {
      return invalidState;
    }
  };
}
