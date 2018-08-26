import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { BookListComponent } from './book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '@reducers';
import { BookService } from '../services/book.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookDetailsComponent } from '../book-details/book-details.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let bookService;
  beforeEach(async(() => {
    bookService = {
      getBooks: () => of([])
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      providers: [
        {
          provide: BookService, useValue: bookService
        }
      ],
      declarations: [ BookListComponent, BookCardComponent, BookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
