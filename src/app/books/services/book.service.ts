import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, empty, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
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
        return books.filter((book: BookModel) => this.isSuitable(book, searchTerm));
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

  createBook(book: BookModel) {
    this.store.dispatch( new bookActions.AddOne(book) );
  }

  getBookById(id: string): Observable<BookModel> {
    return this.store.select(fromBook.getBookById(id));
  }

  loadBooks() {
    this.store.dispatch( new bookActions.GetAll() );
  }

  isSuitable(book: BookModel, searchTerm: string) {
    const title = book.title.toLowerCase();
    const year = book.year.toString();
    const term = searchTerm.toLowerCase();

    return title.includes(term) || year.includes(term);
  }
}
