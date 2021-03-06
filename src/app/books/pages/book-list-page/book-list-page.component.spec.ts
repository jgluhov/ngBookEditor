import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { reducers, metaReducers } from '@reducers';
import { BookService } from '@books/services/book.service';
import { AuthorsPipe } from '@books/pipes/authors.pipe';
import { SharedModule } from '@app/shared/shared.module';
import { BookListPageComponent } from './book-list-page.component';
import {
  BookDashboardComponent,
  BookCardComponent,
  BookDetailsComponent
} from '@books/components';
import { BookModel } from '@books/models/book.model';

describe('BookListPageComponent', () => {
  let component: BookListPageComponent;
  let fixture: ComponentFixture<BookListPageComponent>;
  let bookServiceMock;

  beforeEach(async(() => {
    bookServiceMock = {
      books$: of([new BookModel()]),
      getDashboardState: () => of({})
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        SharedModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: BookService, useValue: bookServiceMock
        }
      ],
      declarations: [
        BookListPageComponent,
        BookCardComponent,
        BookDetailsComponent,
        BookDashboardComponent,
        AuthorsPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
