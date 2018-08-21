import { AuthorModel } from './author.model';

describe('Author', () => {
  let author;

  it('should create an instance', () => {
    expect(new AuthorModel()).toBeTruthy();
  });

  describe('when we initialize Author', () => {
    beforeEach(() => {
      author = new AuthorModel('John', 'Smith');
    });

    it('should have correct fullname', () => {
      expect(author.fullname).toBe('John Smith');
    });
  });
});
