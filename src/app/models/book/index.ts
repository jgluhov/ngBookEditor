import { Author } from '@models/author';
import { Base } from '@models';

export class Book extends Base {
  publisherName: string;
  publicationDate: Date;
  releaseDate: Date;
  isbn: string;

  constructor(
    public title: string,
    public authors: Author[],
    public pages: number
  ) {
    super();
  }
}
