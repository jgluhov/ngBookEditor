import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookModel } from '@books/models/book.model';
import { BookService } from '@books/services/book.service';

@Component({
  selector: 'app-book-form-page',
  template: `
    <div class="form-page">
      <div class="form-page__actions">
        <a class="icon icon__back" (click)="goBack()"></a>
      </div>
      <div class="form-page__content">
        <app-book-form [book]="book$ | async" (submitted)="handleSubmit($event)">
        </app-book-form>
      </div>
    </div>
  `,
  styleUrls: ['./book-form-page.component.scss']
})
export class BookFormPageComponent implements OnInit {
  id: string;
  book$: Observable<BookModel>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.book$ = this.bookService
      .getBookById(this.id)
      .pipe(map((book: BookModel) => book ? book : new BookModel()));
  }

  goBack() {
    this.location.back();
  }

  handleSubmit(book: BookModel) {
    if (this.id) {
      this.bookService.updateBook(book);
    } else {
      this.bookService.createBook(book);
    }

    this.goBack();
  }
}
