import { AuthorModel } from '../author/author.model';
import { BaseModel } from '../base.model';

export class BookModel extends BaseModel {
  publisherName: string;
  publicationDate: Date;
  releaseDate: Date;
  isbn: string;

  constructor(
    public title: string,
    public authors: AuthorModel[],
    public pageCount: number
  ) {
    super();
  }
}
