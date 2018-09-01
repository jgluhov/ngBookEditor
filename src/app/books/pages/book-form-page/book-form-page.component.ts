import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import * as fromBook from '@books/book.reducer';
import { Store } from '@ngrx/store';
import * as BookActions from '@books/book.actions';
import { BookModel } from '../../models/book.model';

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
            <label class="form__label">Title:</label>
            <input type="text" formControlName="title" class="form__control" />
          </div>
          <div class="form__group">
            <label class="form__label">Pages:</label>
            <input type="text" formControlName="pageCount" class="form__control" />
          </div>
          <div class="form__group">
            <label class="form__label">Publisher:</label>
            <input type="text" formControlName="publisher" class="form__control" />
          </div>
          <div class="form__group">
            <label class="form__label">Year:</label>
            <input type="number" formControlName="year" class="form__control" />
          </div>
          <div class="form__group">
            <label class="form__label">Release date:</label>
            <input type="date" formControlName="releaseDate" class="form__control" />
          </div>

          <div formArrayName="authors">
            <div *ngFor="let author of authors.controls; index as i">
              <div [formGroupName]="i">
                <div class="form__group">
                  <label class="form__label">First name:</label>
                  <input type="text" formControlName="firstName" class="form__control" />
                </div>
                <div class="form__group">
                  <label class="form__label">Last name:</label>
                  <input type="text" formControlName="lastName" class="form__control" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./book-form-page.component.scss']
})
export class BookFormPageComponent implements OnInit, OnDestroy {
  sub: Subscription;
  editingBook$: Observable<BookModel>;
  bookForm = this.fb.group({
    title: [''],
    authors: this.fb.array([ this.createAuthor() ]),
    pageCount: [''],
    publisher: [''],
    year: [''],
    releaseDate: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location,
    private store: Store<fromBook.State>
  ) { }

  ngOnInit() {
    this.sub = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        // TODO: Refactor
        this.store.dispatch( new BookActions.EditOne( params.get('id') ) );
      })
    ).subscribe();

    this.editingBook$ = this.store
      .select(fromBook.getEditingBook);

    this.editingBook$.subscribe((book: BookModel) => {
      this.bookForm.patchValue(book);
    });
  }

  goBack() {
    this.location.back();
  }

  createAuthor() {
    return this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
