import { Component, OnInit } from '@angular/core';;
import { Observable } from 'rxjs';
import { BookService } from '@books/services/book.service';
import { BookModel } from '@books/models/book.model';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="book-list">
      <div class="book-list__dashboard">
        <app-book-dashboard></app-book-dashboard>
      </div>
      <div class="book-list__cards">
        <app-book-card *ngFor="let book of books$ | async"
          [active]="(selectedBook$ | async) === book"
          [book]="book"
          (selected)="handleSelect(book)">
        </app-book-card>
      </div>
      <div class="book-list__details">
        <app-book-details [book]="selectedBook$ | async"></app-book-details>
      </div>
    </div>
  `,
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit {
  books$: Observable<BookModel[]>;
  selectedBook$: Observable<BookModel>;

  constructor(private bookService: BookService) { }

  handleSelect(book: BookModel) {
    this.bookService.selectBook(book);
  }

  ngOnInit() {
    this.books$ = this.bookService.books$;
    this.selectedBook$ = this.bookService.selectedBook$;
    // this.store.dispatch( new bookActions.GetAll() );
  }
}
