import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from './book.reducer';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookService } from './services/book.service';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthorsPipe } from './pipes/authors.pipe';
import { SharedModule } from '../shared/shared.module';
import { BookFormPageComponent } from './pages/book-form-page/book-form-page.component';
import { BookEffects } from './book.effects';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookDashboardComponent } from './components/book-dashboard/book-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', bookReducer),
    BooksRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([BookEffects])
  ],
  providers: [
    BookService
  ],
  declarations: [
    BookListPageComponent,
    BookCardComponent,
    BookDetailsComponent,
    AuthorsPipe,
    BookFormPageComponent,
    BookFormComponent,
    BookDashboardComponent
  ]
})
export class BooksModule { }
