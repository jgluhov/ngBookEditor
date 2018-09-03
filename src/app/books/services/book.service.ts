import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
import { environment } from '@environments/environment';
import * as fromBook from '@books/book.reducer';
import { Store } from '@ngrx/store';
import * as bookActions from '@books/book.actions';

@Injectable()
export class BookService {
  selectedBook$: Observable<BookModel>;
  books$: Observable<BookModel[]>;

  constructor(private http: HttpClient, private store: Store<fromBook.State>) {
    this.selectedBook$ = this.store.select(fromBook.getSelectedBook);
    this.books$ = combineLatest(
      this.store.select(fromBook.selectAll),
      this.store.select(fromBook.getSearchTerm), (books, searchTerm) => {
        return books.filter((book: BookModel) => {
          return book.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    });
  }

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
    this.store.dispatch( new bookActions.UpdateOne(book.id, book) );
  }

  selectBook(book: BookModel) {
    this.store.dispatch( new bookActions.SelectOne(book.id) );
  }

  searchBook(searchTerm: string) {
    this.store.dispatch( new bookActions.SearchBook(searchTerm) );
  }
}
