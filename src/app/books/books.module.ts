import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './book.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookService } from './services/book.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', bookReducer),
    BooksRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  declarations: [BookListComponent]
})
export class BooksModule { }
