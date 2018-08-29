import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Store } from '@ngrx/store';
import * as fromBook from '../book.reducer';
import * as bookActions from '../book.actions';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="book-list">
      <div class="book-list__cards">
        <app-book-card *ngFor="let book of books$ | async; let i=index"
          [active]="isActive(book)"
          [book]="book"
          (selected)="handleSelect(book)">
        </app-book-card>
      </div>
      <div class="book-list__details">
        <app-book-details [book]="selectedBook"></app-book-details>
      </div>
    </div>
  `,
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<BookModel[]>;
  selectedBook$: Observable<BookModel>;
  selectedBook: BookModel;

  constructor(
    private bookService: BookService,
    private store: Store<fromBook.State>
  ) { }

  handleSelect(book: BookModel) {
    this.store.dispatch( new bookActions.SelectOne(book.id) );
  }

  isActive(book: BookModel) {
    return this.selectedBook === book;
  }

  ngOnInit() {
    this.books$ = this.store.select(fromBook.selectAll);
    this.selectedBook$ = this.store.select(fromBook.getSelectedBook);

    this.selectedBook$.subscribe(
      (book: BookModel) => {
        this.selectedBook = book;
      }
    );

    this.selectedBook$.subscribe(console.log);

    // this.bookService.getBooks()
    //   .subscribe((books: BookModel[]) => {
    //     this.store.dispatch( new bookActions.AddAll(books) );
    //   });
  }
}
