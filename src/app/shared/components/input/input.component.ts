import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div [formGroup]="controlGroup" class="form__group">
      <label class="form__label">{{label}}<span *ngIf="isRequired()" class="form__label--required"></span></label>
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

  constructor() { }

  ngOnInit() {
  }

  get dirty() {
    return this.controlGroup.controls[this.controlName].dirty;
  }

  get errors() {
    return this.controlGroup.controls[this.controlName].errors;
  }

  isRequired() {
    return this.errors && this.errors.required;
  }

  exceedMaxLength() {
    return this.errors && this.errors.maxlength;
  }

  showRequiredMsg() {
    return this.dirty && this.isRequired();
  }

  showMaxLengthMsg() {
    return this.dirty && this.exceedMaxLength();
  }

}
