import { AuthorModel } from './author.model';
import { BaseModel } from './base.model';
import { Deserializable } from './deserialize.model';

export class BookModel extends BaseModel implements Deserializable {
  publisher: string;
  year: number;
  releaseDate: Date;
  isbn: string;
  imageUrl: string;

  constructor(
    public title: string = '',
    public authors: AuthorModel[] = [],
    public pageCount: number = 0
  ) {
    super();
  }

  deserialize(input: object): this {
    Object.assign(this, input);
    return this;
  }
}
