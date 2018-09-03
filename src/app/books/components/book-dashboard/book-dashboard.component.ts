import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as fromBook from '@books/book.reducer';
import { Store } from '@ngrx/store';
import * as bookActions from '@books/book.actions';

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
      <app-button type="button">+</app-button>
    </form>
  `,
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  dashboardForm = this.fb.group({
    searchTerm: ['']
  });

  constructor(private fb: FormBuilder, private store: Store<fromBook.State>) { }

  ngOnInit() {
    this.dashboardForm.valueChanges.subscribe(value => {
      this.store.dispatch( new bookActions.SearchBook(value.searchTerm) );
    });
  }

}
