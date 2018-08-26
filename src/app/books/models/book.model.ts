import { UUID } from 'angular2-uuid';
import { Author } from './author.model';

export class Book {
  id = UUID.UUID();
  publisher: string;
  year: Date;
  releaseDate: Date;
  isbn: string;
  imageUrl: string;

  constructor(
    public title: string,
    public authors: Author[],
    public pageCount: number
  ) {}
}
