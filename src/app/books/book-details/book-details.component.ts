import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book-details',
  template: `
    <div #container></div>
    <ng-template #bookDetailsTemplate let-book="book">
      <div class="details">
        <img [src]="book?.imageUrl" class="details__image" />
        <ul class="details__list">
          <li class="list__item"><span class="details__term">Title:</span>{{book?.title}}</li>
          <li class="list__item"><span class="details__term">Pages:</span>{{book?.pageCount}}</li>
        </ul>
      </div>

    </ng-template>
  `,
  styleUrls: ['./book-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  @Input() set book(book: BookModel) {
    if (!book) {
      return;
    }

    this.container.clear();
    this.container.createEmbeddedView(this.bookDetailsTemplate, { book });
  }

  @ViewChild('bookDetailsTemplate') bookDetailsTemplate;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
