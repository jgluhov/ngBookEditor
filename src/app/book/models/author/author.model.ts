import { BaseModel } from '../base.model';

export class AuthorModel extends BaseModel {
  constructor(
    public name: string = '',
    public surename: string = ''
  ) {
    super()
  }

  get fullname() {
    return `${this.name} ${this.surename}`;
  }
}
