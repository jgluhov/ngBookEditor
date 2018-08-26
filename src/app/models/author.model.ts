import { Base } from '@models/base.model';

export class Author extends Base {
  constructor(
    public name: string = '',
  ) {
    super();
  }
}
