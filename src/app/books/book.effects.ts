import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BookActionTypes } from './book.actions';
import { BookService } from './services/book.service';
import { BookModel } from '@books/models/book.model';
import * as bookActions from '@books/book.actions';

export class EffectError implements Action {
  readonly type = '[Error] Effect Error';
}

@Injectable()
export class BookEffects {
  @Effect()
  all$: Observable<Action> = this.actions$.pipe(
    ofType(BookActionTypes.GET_ALL),
    switchMap(() => this.bookService.getBooks()),
    map((books: BookModel[]) => new bookActions.AddAll(books)),
    catchError(() => of(new EffectError()))
  );

  constructor(private bookService: BookService, private actions$: Actions) {}
}
