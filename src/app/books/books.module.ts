import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './books.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', booksReducer),
    BooksRoutingModule
  ],
  declarations: [BookListComponent]
})
export class BooksModule { }
