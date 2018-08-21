import { Book } from './book.model';
import { Author } from '../author/author.model';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book('', [ new Author() ], 0)).toBeTruthy();
  });
});
