import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from '@reducers';
import { StoreModule } from '@ngrx/store';
import { BookModel } from '@books/models/book.model';
import { SortDirectionEnum } from '@shared/enums/sort-direction.enum';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers)
      ],
      providers: [BookService]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  describe('#sortBy()', () => {
    let service;
    beforeEach(inject([BookService], (bookService: BookService) => {
      service = bookService;
    }));

    let sortedBooks;
    const book1: Partial<BookModel> = {
      title: 'Zorba the Greek',
      year: 1946
    };
    const book2: Partial<BookModel> = {
      'title': 'Odyssey',
      'year': 800
    };
    const book3: Partial<BookModel> = {
      title: 'Great Expectations',
      year: 1861
    };
    const book4: Partial<BookModel> = {
      title: 'The Idiot',
      year: 1869
    };
    const books = [book1, book4, book2, book3];

    describe('when one pass icorrect key', () => {
      it('should have same order as books', () => {
        sortedBooks = books.slice().sort(service.sortBy('some', SortDirectionEnum.NONE));
        expect(sortedBooks).toEqual(books);
      });
    });

    describe('when we pass empty direction', () => {
      it('should have same order as books', () => {
        sortedBooks = books.slice().sort(service.sortBy('title', SortDirectionEnum.NONE));
        expect(sortedBooks).toEqual(books);
      });
    });

    describe('when we pass ASC direction', () => {
      it('should be sorted correctly', () => {
        sortedBooks = books.slice().sort(service.sortBy('title', SortDirectionEnum.ASC));
        expect(sortedBooks).toEqual([book3, book2, book4, book1]);
      });
    });

    describe('when we pass DESC direction', () => {
      it('should be sorted correctly', () => {
        sortedBooks = books.slice().sort(service.sortBy('title', SortDirectionEnum.DESC));
        expect(sortedBooks).toEqual([book1, book4, book2, book3]);
      });
    });
  });
});
