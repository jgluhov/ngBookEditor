import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Store } from '@ngrx/store';
import * as fromBook from '../book.reducer';
import * as bookActions from '../book.actions';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="book-list__cards">
      <app-book-card *ngFor="let book of books$ | async; let i=index"
        [active]="isSelected(book)"
        [book]="book"
        (selected)="handleSelect(book)">
      </app-book-card>
    </div>
    <div class="book-list__details">
      <app-book-details [book]="selectedBook"></app-book-details>
    </div>
  `,
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<BookModel[]>;
  selectedBook: BookModel;

  constructor(
    private bookService: BookService,
    private store: Store<fromBook.State>
  ) { }

  handleSelect(book: BookModel) {
    this.selectedBook = book;
  }

  isSelected(book: BookModel) {
    return this.selectedBook === book;
  }

  handleSelection = (books: BookModel[]) => {
    if (!books.length && this.selectedBook) {
      return;
    }

    this.handleSelect(books[0]);
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((books: BookModel[]) => {
        this.store.dispatch( new bookActions.AddAll(books) );
      });

    this.books$ = this.store.select(fromBook.selectAll);

    this.books$.subscribe(this.handleSelection);
  }
}
