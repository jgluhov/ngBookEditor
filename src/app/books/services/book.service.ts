import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
import * as fromBook from '@books/book.reducer';
import { Store } from '@ngrx/store';
import * as bookActions from '@books/book.actions';
import { SortDirectionEnum } from '@shared/enums/sort-direction.enum';

@Injectable()
export class BookService {
  selectedBook$: Observable<BookModel>;
  books$: Observable<BookModel[]>;

  constructor(private http: HttpClient, private store: Store<fromBook.State>) {
    this.selectedBook$ = this.store.select(fromBook.getSelectedBook);
    this.books$ = combineLatest(
      this.store.select(fromBook.selectAll),
      this.store.select(fromBook.getSearchTerm),
      this.store.select(fromBook.getTitleSorting),
      this.store.select(fromBook.getYearSorting),
      (books, searchTerm, titleSorting, yearSorting) => {
        const suitableBooks = books.filter(
          (book: BookModel) => this.isSuitable(book, searchTerm)
        );

        const titleOrderedBooks = titleSorting ?
          suitableBooks.sort(this.sortBy('title', titleSorting)) : suitableBooks;

        const titleYearOrderedBooks = yearSorting ?
          titleOrderedBooks.sort(this.sortBy('year', yearSorting)) : titleOrderedBooks;

        return titleYearOrderedBooks;
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

  getDashboardState(): Observable<object> {
    return this.store.select(fromBook.getDasboardState);
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
    const term = searchTerm.toLowerCase();

    return title.includes(term) || year.includes(term);
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
