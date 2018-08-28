import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { BookModel } from '../models/book.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-book-details',
  template: `
    <div class="details" *ngIf="book">
      <img src="{{baseUrl}}{{book.imageUrl}}" class="details__image" />
      <ul class="details__list">
        <li class="list__item"><span class="details__term">Title:</span>{{book?.title}}</li>
        <li class="list__item"><span class="details__term">Pages:</span>{{book?.pageCount}}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./book-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {
  @Input() book: BookModel;
  baseUrl = environment.baseUrl;
}
