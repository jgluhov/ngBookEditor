import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './books.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', booksReducer)
  ]
})
export class BooksModule { }
