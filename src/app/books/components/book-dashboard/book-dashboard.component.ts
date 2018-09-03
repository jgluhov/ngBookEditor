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
      <a class="icon icon__download" (click)="handleDownload()"></a>
      <app-button type="button" [routerLink]="['/books/create']">+</app-button>
    </form>
  `,
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  dashboardForm = this.fb.group({
    searchTerm: ['']
  });

  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.dashboardForm.valueChanges.subscribe(value => {
      this.bookService.searchBook(value.searchTerm);
    });
  }

  handleDownload() {
    this.bookService.loadBooks();
  }
}
