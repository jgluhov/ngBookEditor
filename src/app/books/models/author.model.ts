import { BaseModel } from './base.model';
import { Deserializable } from './deserialize.model';

export class AuthorModel extends BaseModel implements Deserializable {
  constructor(
    public firstName: string = '',
    public lastName: string = ''
  ) {
    super();
  }

  deserialize(input: object): this {
    Object.assign(this, input);
    return this;
  }
}
