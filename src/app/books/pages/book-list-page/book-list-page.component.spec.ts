import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListPageComponent } from './book-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '@reducers';
import { BookService } from '@books/services/book.service';
import { BookCardComponent } from '@books/components/book-card/book-card.component';
import { BookDetailsComponent } from '@books/components/book-details/book-details.component';
import { bookServiceMock } from '@books/services/book.service.mock';
import { AuthorsPipe } from '@books/pipes/authors.pipe';
import { SharedModule } from '@root/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookListComponent', () => {
  let component: BookListPageComponent;
  let fixture: ComponentFixture<BookListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        SharedModule,
        RouterTestingModule
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
