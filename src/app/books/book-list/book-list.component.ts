import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BookModel } from '../models/book.model';
import { Store } from '@ngrx/store';
import * as fromBook from '../book.reducer';
import * as bookActions from '../book.actions';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-book-list',
  template: `
    <div class="book-list__cards">
      <app-book-card [book]="book" *ngFor="let book of books | async; let i=index" (selected)="selectCard(i)"></app-book-card>
    </div>
    <div class="book-list__details"></div>
  `,
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @ViewChildren(BookCardComponent) cards: QueryList<BookCardComponent>;
  books: Observable<BookModel[]>;

  constructor(
    private bookService: BookService,
    private store: Store<fromBook.State>
  ) { }

  selectCard(index: number) {
    this.cards.forEach(card => card.active = false);
    this.cards.toArray()[index].active = true;
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((books: BookModel[]) => {
        this.store.dispatch( new bookActions.AddAll(books) );
      });

    this.books = this.store.select(fromBook.selectAll);
  }
}
