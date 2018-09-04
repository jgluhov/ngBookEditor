import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '@books/services/book.service';

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
    searchTerm: [''],
    titleSorting: [''],
    yearSorting: ['']
  });

  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    // this.dashboardForm.valueChanges.subscribe(value => {
    //   this.bookService.searchBook(value.searchTerm);
    // });

    this.bookService.getDashboardState()
      .subscribe(state => {
        // debugger;
        // this.dashboardForm.patchValue(state);
      });
  }

  handleDownload() {
    this.bookService.loadBooks();
  }

  handleClear() {
    this.bookService.removeBooks();
  }

  handleTitleSort(direction) {
    console.log('title', direction);
  }

  handleYearSort(direction) {
    console.log('year', direction);
  }
}
