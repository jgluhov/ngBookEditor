import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-form',
  template: `
    <div class="form-page">
      <div class="form__actions">
        <a class="icon icon__back" (click)="goBack()"></a>
      </div>
      <div class="form-controls"></div>
    </div>
  `,
  styleUrls: ['./book-form-page.component.scss']
})
export class BookFormPageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
