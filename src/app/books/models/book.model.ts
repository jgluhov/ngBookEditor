import { UUID } from 'angular2-uuid';
import { AuthorModel } from './author.model';
import { Deserializable } from './deserialize.model';

export class BookModel implements Deserializable {
  id = UUID.UUID();
  publisher: string;
  year: Date;
  releaseDate: Date;
  isbn: string;
  imageUrl: string;

  constructor(
    public title: string = '',
    public authors: AuthorModel[] = [],
    public pageCount: number = 0
  ) {}

  deserialize(input: object): this {
    Object.assign(this, input);
    return this;
  }
}
