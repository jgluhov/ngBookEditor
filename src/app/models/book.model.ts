import { UUID } from 'angular2-uuid';
import { Author } from '@models/author.model';

export class Book {
  id = UUID.UUID();
  publisherName: string;
  publicationDate: Date;
  releaseDate: Date;
  isbn: string;
  imageUrl: string;

  constructor(
    public title: string,
    public authors: Author[],
    public pages: number
  ) {}
}
