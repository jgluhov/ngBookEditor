import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
import { AuthorModel } from '../models/author.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookModel[]> {
    return this.http.get(`${environment.baseUrl}/assets/books.json`)
      .pipe(
        map((books: Partial<BookModel[]>) => books
          .map((book: Partial<BookModel>) => {
            return new BookModel().deserialize(book);
          })
        )
      );
  }

  formatAuthors(authors: AuthorModel[]) {
    return authors.map(author => `${author.firstName} ${author.lastName}`.trim()).join(', ');
  }
}
