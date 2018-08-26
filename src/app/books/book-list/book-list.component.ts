import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Store } from '@ngrx/store';
import * as fromBook from '../book.reducer';
import * as bookActions from '../book.actions';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  template: `
    it works
  `,
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private store: Store<fromBook.State>
  ) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((books: BookModel[]) => {
        this.store.dispatch( new bookActions.AddAll(books) );
      });
  }
}
