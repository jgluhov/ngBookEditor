import { Author } from '@models/author.model';
import { Base } from '@models/base.model';

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
