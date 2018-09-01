import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Observable } from 'rxjs';
import * as fromBook from '@books/book.reducer';
import { Store, State } from '@ngrx/store';
import { BookModel } from '@books/models/book.model';
import { getBookById } from '@books/book.reducer';

@Component({
  selector: 'app-book-form-page',
  template: `
    <div class="form-page">
      <div class="form-page__actions">
        <a class="icon icon__back" (click)="goBack()"></a>
      </div>
      <div class="form-page__content">
        <app-book-form [book]="book$ | async"></app-book-form>
      </div>
    </div>
  `,
  styleUrls: ['./book-form-page.component.scss']
})
export class BookFormPageComponent implements OnInit {
  book$: Observable<BookModel>;

  constructor(
    private route: ActivatedRoute,

    private location: Location,
    private store: Store<fromBook.State>
  ) { }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.store.select(fromBook.getBookById(params.get('id')));
      })
    );
  }

  goBack() {
    this.location.back();
  }
}
