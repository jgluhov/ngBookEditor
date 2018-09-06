import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  template: `
    <div (click)="handleClick()" [ngSwitch]="direction" class="sort-icon__container">
      <span *ngSwitchCase="SortDirectionEnum.NONE" class="icon icon__sort"></span>
      <span *ngSwitchCase="SortDirectionEnum.DESC" class="icon icon__sort-down"></span>
      <span *ngSwitchCase="SortDirectionEnum.ASC" class="icon icon__sort-up"></span>
    </div>
  `,
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent implements OnInit {
  directions = [
    this.SortDirectionEnum.NONE,
    this.SortDirectionEnum.DESC,
    this.SortDirectionEnum.ASC
  ];
  direction: string;
  indx = 0;
  @Input() controlName;
  @Input() controlGroup;
  constructor(@Inject('SortDirectionEnum') public SortDirectionEnum) {
  }

  ngOnInit() {
    this.indx = this.directions
      .findIndex((direction: string) => direction === this.controlGroup.controls[this.controlName].value);

    this.direction = this.directions[this.indx];
  }

  handleClick() {
    this.indx++;
    this.indx %= 3;
    this.direction = this.directions[this.indx];

    this.controlGroup.patchValue({
      [this.controlName]: this.direction
    });
  }
}
