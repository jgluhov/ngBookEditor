import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardComponent } from './book-card.component';
import { BookModel } from '@books/models/book.model';
import { BookService } from '@books/services/book.service';
import { bookServiceMock } from '@books/services/book.service.mock';
import { AuthorsPipe } from '@books/pipes/authors.pipe';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardComponent, AuthorsPipe ],
      providers: [
        {
          provide: BookService, useValue: bookServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = new BookModel();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
