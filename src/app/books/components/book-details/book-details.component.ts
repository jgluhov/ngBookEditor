import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookModel } from '@books/models/book.model';

@Component({
  selector: 'app-book-details',
  template: `
    <div class="details" *ngIf="book">
      <div class="details__image">
        <app-image [src]="book.imageUrl"></app-image>
      </div>
      <ul class="details__list">
        <li><span class="details__term">Title:</span>{{book.title}}</li>
        <li><span class="details__term">Pages:</span>{{book.pageCount}}</li>
        <li><span class="details__term">Year:</span>{{book.year}}</li>
      </ul>
      <div class="details__actions">
        <a [routerLink]="['/', 'books', book.id, 'edit']" class="icon icon__edit"></a>
      </div>
    </div>
  `,
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  @Input() book: BookModel;
}
