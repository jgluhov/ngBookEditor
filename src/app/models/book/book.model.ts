import { Author } from '../author/author.model';

export class Book {
  publisherName: string;
  publicationDate: Date;
  releaseDate: Date;
  isbn: string;

  constructor(
    public title: string,
    public authors: Author[],
    public pageCount: number
  ) {}
}
