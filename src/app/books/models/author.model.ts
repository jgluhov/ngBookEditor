import { UUID } from 'angular2-uuid';

export class Author {
  id = UUID.UUID();

  constructor(
    public firstName: string = '',
    public lastName: string = ''
  ) {}
}
