import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import * as fromBook from '@books/book.reducer';
import { Store } from '@ngrx/store';

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
  sub: Subscription;
  selectedBook$: Observable<string>;
  bookForm = this.fb.group({
    title: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location,
    private store: Store<fromBook.State>
  ) { }

  ngOnInit() {
    this.selectedBook$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap((id: string) => this.store.select())
    );
  }

  goBack() {
    this.location.back();
  }

}
