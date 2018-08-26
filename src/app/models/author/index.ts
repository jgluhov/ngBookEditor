import { Base } from '@models';

export class Author extends Base {
  constructor(
    public name: string = '',
  ) {
    super();
  }
}
