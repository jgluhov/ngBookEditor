import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, from } from 'rxjs';
import { map, filter, toArray, switchMap } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
import { SortDirectionEnum } from '@shared/enums/sort-direction.enum';
import * as fromBook from '@books/book.reducer';
import * as bookSelectors from '@books/book.selectors';
import * as bookActions from '@books/book.actions';
import { environment } from '@environments/environment';

@Injectable()
export class BookService {
  selectedBook$: Observable<BookModel>;
  books$: Observable<BookModel[]>;

  constructor(private http: HttpClient, private store: Store<fromBook.State>) {
    this.selectedBook$ = this.store.select(bookSelectors.getSelectedBook);

    this.books$ = combineLatest(
      this.store.select(bookSelectors.selectAll),
      this.store.select(bookSelectors.getSearchTerm),
      this.store.select(bookSelectors.getTitleSorting),
      this.store.select(bookSelectors.getYearSorting))
    .pipe(
      switchMap(([books, searchTerm, titleDir, yearDir]) => {
        return from(books)
            .pipe(
              filter((book: BookModel) => this.isSuitable(book, searchTerm)),
              toArray(),
              map(elems => titleDir ? elems.sort(this.sortBy('title', titleDir)) : elems),
              map(elems => yearDir ? elems.sort(this.sortBy('year', yearDir)) : elems)
            );
      }));
  }

  getBooks(): Observable<BookModel[]> {
    return this.http.get(environment.booksUrl)
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
    return this.store.select(bookSelectors.getBookById(id));
  }

  getDashboardState(): Observable<object> {
    return this.store.select(bookSelectors.getDasboardState);
  }

  sortBooksByTitle(direction) {
    this.store.dispatch( new bookActions.SortByTitle(direction) );
  }

  sortBooksByYear(direction) {
    this.store.dispatch( new bookActions.SortByYear(direction) );
  }

  loadBooks() {
    this.store.dispatch( new bookActions.GetAll() );
  }

  removeBooks() {
    this.store.dispatch( new bookActions.RemoveAll() );
  }

  isSuitable(book: BookModel, searchTerm: string) {
    const title = book.title.toLowerCase();
    const year = book.year.toString();
    const authors = book.authors
      .map(author => `${author.firstName}${author.lastName}`.toLowerCase()).join('');
    const term = searchTerm.toLowerCase();

    return title.includes(term) || year.includes(term) || authors.includes(term);
  }

  sortBy(key: string, direction: string) {
    return (bookA: BookModel, bookB: BookModel): number => {
      const keyA = bookA[key];
      const keyB = bookB[key];

      if (!keyA || !keyB || direction === SortDirectionEnum.NONE) {
        return 0;
      }

      const comp1 = direction === SortDirectionEnum.ASC ? 1 : -1;
      const comp2 = direction === SortDirectionEnum.ASC ? -1 : 1;

      if (keyA > keyB) {
        return comp1;
      } else if (keyA < keyB) {
        return comp2;
      } else {
        return 0;
      }
    };
  }
}
