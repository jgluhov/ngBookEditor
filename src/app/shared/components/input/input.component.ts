import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div [formGroup]="controlGroup">
      <label class="form__label">{{label}}</label>
      <input [type]="type" formControlName="{{controlName}}" class="form__control" />
    </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type;
  @Input() label;
  @Input() controlName;
  @Input() controlGroup;

  constructor() { }

  ngOnInit() {
  }



}
