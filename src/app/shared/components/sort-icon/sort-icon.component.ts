import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  template: `
    <div (click)="handleClick()" [ngSwitch]="direction" class="sort-icon__container">
      <span *ngSwitchCase="''" class="icon icon__sort"></span>
      <span *ngSwitchCase="'desc'" class="icon icon__sort-down"></span>
      <span *ngSwitchCase="'asc'" class="icon icon__sort-up"></span>
    </div>
  `,
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent implements OnInit {
  directions = ['', 'desc', 'asc'];
  direction: string;
  indx = 0;
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.direction = this.directions[this.indx];
  }

  handleClick() {
    this.indx++;
    this.indx %= 3;
    this.direction = this.directions[this.indx];
    this.clicked.emit(this.direction);
  }

}
