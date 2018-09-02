import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
import { environment } from '@environments/environment';
import * as fromBook from '@books/book.reducer';
import { Store } from '@ngrx/store';
import * as bookActions from '@books/book.actions';

@Injectable()
export class BookService {
  constructor(private http: HttpClient, private store: Store<fromBook.State>) {}

  getBooks(): Observable<BookModel[]> {
    return this.http.get('/assets/books.json')
      .pipe(
        map((books: Partial<BookModel[]>) => books
          .map((book: Partial<BookModel>) => {
            return new BookModel().deserialize(book);
          })
        )
      );
  }

  updateBook(book: BookModel) {
    this.store.dispatch( new bookActions.UpdateOne(book.id, { ... book }) );
  }
}
