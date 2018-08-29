import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './book.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookService } from './services/book.service';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthorsPipe } from './pipes/authors.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', bookReducer),
    BooksRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    BookService
  ],
  declarations: [
    BookListComponent,
    BookCardComponent,
    BookDetailsComponent,
    AuthorsPipe
  ]
})
export class BooksModule { }
