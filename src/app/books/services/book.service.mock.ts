import { of } from 'rxjs';

export const bookServiceMock = {
  getBooks: () => of([]),
  formatAuthors: () => {}
};
