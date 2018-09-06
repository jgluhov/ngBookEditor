import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  private control: FormControl;

  constructor() { }

  ngOnInit() {
    this.control = this.controlGroup.controls[this.controlName];
  }

  isRequired() {
    return this.control.hasError('required');
  }

  exceedMaxLength() {
    return this.control.hasError('maxlength');
  }

  showRequiredMsg() {
    return this.control.dirty && this.isRequired();
  }

  showMaxLengthMsg() {
    return this.control.dirty && this.exceedMaxLength();
  }

}
