import { UUID } from 'angular2-uuid';
import { Deserializable } from './deserialize.model';

export class AuthorModel implements Deserializable {
  id = UUID.UUID();

  constructor(
    public firstName: string = '',
    public lastName: string = ''
  ) {}

  deserialize(input: object): this {
    Object.assign(this, input);
    return this;
  }
}
