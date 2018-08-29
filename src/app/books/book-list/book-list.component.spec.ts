import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { BookListComponent } from './book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '@reducers';
import { BookService } from '../services/book.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { bookServiceMock } from '../services/book.service.mock';
import { AuthorsPipe } from '../pipes/authors.pipe';
import { SharedModule } from '../../shared/shared.module';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        SharedModule
      ],
      providers: [
        {
          provide: BookService, useValue: bookServiceMock
        }
      ],
      declarations: [ BookListComponent, BookCardComponent, BookDetailsComponent, AuthorsPipe ]
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
