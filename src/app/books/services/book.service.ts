import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
import { environment } from '@environments/environment';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookModel[]> {
    return this.http.get(`${environment.baseUrl}/books`)
      .pipe(
        map((books: Partial<BookModel[]>) => books
          .map((book: Partial<BookModel>) => {
            return new BookModel().deserialize(book);
          })
        )
      );
  }
}
