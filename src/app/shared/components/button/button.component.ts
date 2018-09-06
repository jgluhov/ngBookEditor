import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="type" class="button" (click)="clicked.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type = 'button';
  @Output() clicked = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit() {
  }

}
