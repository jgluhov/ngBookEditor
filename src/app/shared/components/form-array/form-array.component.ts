import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-array',
  template: `
    <div class="form-array__header">
      <div class="header__label">{{label}}</div>
      <app-button (clicked)="added.emit()">+</app-button>
    </div>
    <ng-content></ng-content>
    <div class="form__validation">
      <div *ngIf="exceedMinLength()" class="validation__message">Add more fields</div>
    </div>
  `,
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {
  @Input() label;
  @Input() controlName;
  @Input() controlGroup;
  @Output() added = new EventEmitter();

  get formControl() {
    return this.controlGroup.controls[this.controlName];
  }

  exceedMinLength() {
    return this.formControl.hasError('minlength');
  }

  showMaxLengthMsg() {
    return this.formControl.dirty && this.formControl.hasError('minlength');
  }
}
