export class Author {
  constructor(
    public name: string = '',
    public surename: string = ''
  ) {
  }

  get fullname() {
    return `${this.name} ${this.surename}`;
  }
}
