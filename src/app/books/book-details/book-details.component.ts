import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookModel } from '../models/book.model';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-book-details',
  template: `
    <div class="details" *ngIf="book">
      <img src="{{baseUrl}}{{book.imageUrl}}" class="details__image" />
      <ul class="details__list">
        <li><span class="details__term">Title:</span>{{book.title}}</li>
        <li><span class="details__term">Pages:</span>{{book.pageCount}}</li>
        <li><span class="details__term">Year:</span>{{book.year}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  @Input() book: BookModel;
  baseUrl = environment.baseUrl;
}
