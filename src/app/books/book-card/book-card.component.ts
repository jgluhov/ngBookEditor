import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../models/book.model';
import { AuthorModel } from '../models/author.model';

@Component({
  selector: 'app-book-card',
  template: `
    <div class="book-card" (click)="selected.emit()" [ngClass]="handleActiveClass()">
      <div class="book-card__title">{{book.title}}</div>
      <div class="book-card__details">
        <span class="details__term">Written by</span> {{ this.formatAuthors(book.authors) }}
        <span class="details__term"> in </span> {{ book.year }}
      </div>
    </div>
  `,
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  active = false;
  @Input() book: BookModel;
  @Output() selected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  formatAuthors(authors: AuthorModel[]) {
    return authors.map(author => `${author.firstName} ${author.lastName}`.trim()).join(', ');
  }

  handleActiveClass() {
    if (this.active) {
      return 'book-card--active';
    }
  }
}
