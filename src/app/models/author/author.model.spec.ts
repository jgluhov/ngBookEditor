import { Author } from './author.model';

describe('Author', () => {
  let author;

  it('should create an instance', () => {
    expect(new Author()).toBeTruthy();
  });

  describe('when we initialize Author', () => {
    beforeEach(() => {
      author = new Author('John', 'Smith');
    });

    it('should have correct fullname', () => {
      expect(author.fullname).toBe('John Smith');
    });
  });
});
