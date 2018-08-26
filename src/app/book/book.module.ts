import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './book.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', bookReducer)
  ],
  declarations: [],
  exports: []
})
export class BookModule { }
