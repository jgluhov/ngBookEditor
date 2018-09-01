import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  template: `
    <div class="form-page">
      <div class="form-page__actions">
        <a class="icon icon__back" (click)="goBack()"></a>
      </div>
      <div class="form-page__content">
        <form [formGroup]="bookForm">
          <div class="form__group">
            <label class="form__label">
              Title:
            </label>
            <input type="text" formControlName="title" class="form__control" />
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./book-form-page.component.scss']
})
export class BookFormPageComponent implements OnInit {
  bookForm = this.fb.group({
    title: ['']
  });

  constructor(private fb: FormBuilder, private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
