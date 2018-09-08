import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="type" class="button" (click)="clicked.emit($event)" [tabindex]="tabIndex">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type = 'button';
  @Input() tabIndex = 0;
  @Output() clicked = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit() {
  }

}
