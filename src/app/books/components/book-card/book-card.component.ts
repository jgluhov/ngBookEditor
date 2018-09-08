import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BookModel } from '@books/models/book.model';

@Component({
  selector: 'app-book-card',
  template: `
    <div class="book-card" (click)="selected.emit()" [ngClass]="handleActiveClass()">
      <div class="book-card__title">{{book.title}}</div>
      <div class="book-card__description">
        <span class="description__term">Written by </span>
        <span class="description__authors">{{ book.authors | authors : 1 }}</span>
        <span class="description__term"> in </span> {{ book.year }}
      </div>
    </div>
  `,
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  @Input() active: boolean;
  @Input() book: BookModel;
  @Output() selected = new EventEmitter<void>();

  handleActiveClass() {
    if (this.active) {
      return 'book-card--active';
    }
  }
}
