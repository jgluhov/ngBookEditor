import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '@books/services/book.service';
import { debounceTime, distinctUntilChanged, filter, take } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-book-dashboard',
  template: `
    <form [formGroup]="dashboardForm" class="dashboard" novalidate>
      <app-input
        type="text"
        [controlGroup]="dashboardForm"
        controlName="searchTerm"
        placeholder="Search book"
        class="dashboard__serach">
      </app-input>
      <div class="dashboard__sort">
        <span class="sort__by">
          Title<app-sort-icon (clicked)="handleTitleSort($event)"></app-sort-icon>
        </span>
        <span class="sort__by">
          Year <app-sort-icon (clicked)="handleYearSort($event)"></app-sort-icon>
        </span>
      </div>
      <div class="dashboard__actions">
        <a class="icon icon__download" (click)="handleDownload()"></a>
        <a class="icon icon__bin" (click)="handleClear()"></a>
      </div>
      <app-button type="button" [routerLink]="['/books/create']">+</app-button>
    </form>
  `,
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  dashboardForm = this.fb.group({
    searchTerm: ['', Validators.required],
    titleSorting: [''],
    yearSorting: ['']
  });

  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.dashboardForm.get('searchTerm').valueChanges
      .pipe(
        debounceTime(50),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        this.bookService.searchBook(searchTerm);
      });

    this.bookService.getDashboardState()
      .pipe(take(1))
      .subscribe(state => this.dashboardForm.patchValue(state));
  }

  handleDownload() {
    this.bookService.loadBooks();
  }

  handleClear() {
    this.bookService.removeBooks();
  }

  handleTitleSort(direction) {
    this.bookService.sortBooksByTitle(direction);
  }

  handleYearSort(direction) {
    this.bookService.sortBooksByYear(direction);
  }
}
