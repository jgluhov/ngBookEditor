import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  template: `
    <app-button class="form-array__add" (clicked)="added.emit()">+</app-button>
    <ng-content></ng-content>
    <div class="form__validation">
      <div *ngIf="exceedMinLength()" class="validation__message">Add more fields</div>
    </div>
  `,
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  @Input() controlName;
  @Input() controlGroup;
  @Output() added = new EventEmitter();

  private control: FormControl;

  constructor() { }

  ngOnInit() {
    this.control = this.controlGroup.controls[this.controlName];
  }

  exceedMinLength() {
    return this.control.hasError('minlength');
  }

  showMaxLengthMsg() {
    return this.control.dirty && this.control.hasError('minlength');
  }
}
