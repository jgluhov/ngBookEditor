import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <div [formGroup]="controlGroup" class="form__group">
      <label class="form__label">{{label}}<span *ngIf="hasSign" class="form__label--required"></span></label>
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
            The number shod be between {{errors.rangeStart}} and {{errors.rangeEnd}}
          </span>
        </div>
    </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type;
  @Input() label;
  @Input() controlName;
  @Input() controlGroup;
  @Input() placeholder = '';

  hasSign;

  ngOnInit() {
    this.hasSign = this.formControl.hasError('required');
  }

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

  get errors() {
    return this.formControl.errors || {};
  }

  get formControl() {
    return this.controlGroup.controls[this.controlName];
  }

}
