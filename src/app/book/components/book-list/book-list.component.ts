import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BookModel } from '../../models/book/book.model';
import * as actions from '../../book.actions'
import * as fromBook from '../../book.reducer';
import { AuthorModel } from '../../models/author/author.model';

@Component({
  selector: 'app-book-list',
  template: `
    <button type="button" (click)="createBook()">Create book</button>
  `,
  styles: []
})
export class BookListComponent implements OnInit {

  books: Observable<BookModel[]>;

  constructor(private store: Store<fromBook.State>) { }

  ngOnInit() {
    this.books = this.store.select(fromBook.selectAll);

    this.books.subscribe(console.log);
  }

  createBook() {
    const book: BookModel = new BookModel(
      'Secrets of JavasScript', [
        new AuthorModel('Evgeny', 'Glukhov')
      ],
      200
    );

    this.store.dispatch( new actions.Create(book) );
  }

}
