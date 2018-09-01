import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromBook from '@books/book.reducer';
import * as bookActions from '@books/book.actions';
import { BookService } from '@books/services/book.service';
import { BookModel } from '@books/models/book.model';

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
        <app-book-details [book]="activeBook"></app-book-details>
      </div>
    </div>
  `,
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit {
  books$: Observable<BookModel[]>;
  activeBook$: Observable<BookModel>;
  activeBook: BookModel;

  constructor(
    private bookService: BookService,
    private store: Store<fromBook.State>
  ) { }

  handleSelect(book: BookModel) {
    this.store.dispatch( new bookActions.ActivateOne(book.id) );
  }

  isActive(book: BookModel) {
    return this.activeBook === book;
  }

  ngOnInit() {
    this.books$ = this.store.select(fromBook.selectAll);
    this.activeBook$ = this.store.select(fromBook.getActiveBook);

    this.activeBook$.subscribe(
      (book: BookModel) => {
        this.activeBook = book;
      }
    );

    this.activeBook$.subscribe(console.log);

    // TODO: add effects for it

    // this.bookService.getBooks()
    //   .subscribe((books: BookModel[]) => {
    //     this.store.dispatch( new bookActions.AddAll(books) );
    //   });

    this.store.dispatch( new bookActions.GetAll() );
  }
}
