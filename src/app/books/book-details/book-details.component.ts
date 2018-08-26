import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book-details',
  template: `
    <div #container></div>
    <ng-template #bookDetailsTemplate let-book="book">
      Hello {{ book?.title }}
    </ng-template>
  `,
  styleUrls: ['./book-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  @Input() set book(book: BookModel) {
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
