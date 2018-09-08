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

    const invalidDate = isNaN(Date.parse(new Date(date).toString()));

    if (!date || invalidDate) {
      return null;
    }

    if (new Date(date).getTime() < boundaryDate.getTime()) {
      return invalidState;
    }
  };
}
