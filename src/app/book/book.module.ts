import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './book.reducer';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('book', bookReducer)
  ],
  declarations: [BookListComponent],
  exports: [BookListComponent]
})
export class BookModule { }
