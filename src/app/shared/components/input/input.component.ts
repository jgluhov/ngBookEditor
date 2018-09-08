import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div [formGroup]="controlGroup" class="form__group">
      <label class="form__label" *ngIf="label">
        {{label}}
        <span *ngIf="requiredIcon" class="form__label--required"></span>:
      </label>
      <input [type]="type"
        formControlName="{{controlName}}"
        class="form__control"
        [placeholder]="placeholder"
        spellcheck="false" />

      <div class="form__validation">
        <span *ngIf="showRequiredMsg()" class="validation__message">
          This field is required
        </span>
        <span *ngIf="showMaxLengthMsg()" class="validation__message">
          The text entered exceeds the maximum length
        </span>
        <span *ngIf="showOutRangeMsg()" class="validation__message">
          The number should be between {{errors.rangeStart}} and {{errors.rangeEnd}}
        </span>
        <span *ngIf="showGreaterThanMsg()" class="validation__message">
          The number should be greater than {{errors.greaterThenBoundary}}
        </span>
        <span *ngIf="showGreaterThanDateMsg()" class="validation__message">
          The date should be greater than {{errors.greaterThenBoundaryDate}}
        </span>
        <span *ngIf="showIncorrectISBNMsg()" class="validation__message">
          The ISBN has incorrect format
        </span>
        <span *ngIf="showIncorrectYearMsg()" class="validation__message">
          Incorrect format of entered year
        </span>
      </div>
    </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type;
  @Input() label;
  @Input() controlName;
  @Input() controlGroup;
  @Input() placeholder = '';
  @Input() requiredIcon = false;

  showRequiredMsg() {
    return this.formControl.dirty &&
      this.formControl.hasError('required');
  }

  showMaxLengthMsg() {
    return this.formControl.dirty &&
      this.formControl.hasError('maxlength');
  }

  showOutRangeMsg() {
    return this.formControl.dirty && this.formControl.hasError('validRange');
  }

  showGreaterThanMsg() {
    return this.formControl.dirty && this.formControl.hasError('validGreaterThan');
  }

  showGreaterThanDateMsg() {
    return this.formControl.dirty && this.formControl.hasError('validGreaterThanDate');
  }

  showIncorrectISBNMsg() {
    return this.formControl.dirty && this.formControl.hasError('validISBN');
  }

  showIncorrectYearMsg() {
    return this.formControl.dirty && this.formControl.hasError('validYear');
  }

  get errors() {
    return this.formControl.errors || {};
  }

  get formControl() {
    return this.controlGroup.controls[this.controlName];
  }
}
