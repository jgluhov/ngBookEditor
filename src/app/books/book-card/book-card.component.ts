import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-card',
  template: `
    <div class="book-card" (click)="selected.emit()" [ngClass]="handleActiveClass()">
      <div class="book-card__title">{{book.title}}</div>
      <div class="book-card__details">
        <span class="details__term">Written by</span>
        {{ bookService.formatAuthors(book.authors) }}
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
  constructor(public bookService: BookService) { }

  ngOnInit() {
  }

  handleActiveClass() {
    if (this.active) {
      return 'book-card--active';
    }
  }
}
