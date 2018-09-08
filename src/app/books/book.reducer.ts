import { BookActionTypes, BookActions } from './book.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { BookModel } from './models/book.model';

export const bookAdapter = createEntityAdapter<BookModel>();
export interface State extends EntityState<BookModel> {
  selectedId: string | null;
  searchTerm: string;
  titleSorting: string;
  yearSorting: string;
}

const defaultBook = {
  selectedId: null,
  searchTerm: '',
  titleSorting: '',
  yearSorting: '',
  ids: [],
  entities: {}
};

export const initialState: State = bookAdapter.getInitialState(defaultBook);

export function bookReducer (
  state: State = initialState,
  action: BookActions
) {

  switch (action.type) {

    case BookActionTypes.ADD_ONE:
      return bookAdapter.addOne(action.book, state);

    case BookActionTypes.UPDATE_ONE:
      return bookAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case BookActionTypes.DELETE_ONE:
      return bookAdapter.removeOne(action.id, state);

    case BookActionTypes.REMOVE_ALL:
      return bookAdapter.removeAll({
        ...state,
        selectedId: null,
        searchTerm: ''
      });

    case BookActionTypes.ADD_ALL:
      return bookAdapter.addAll(action.books, state);

    case BookActionTypes.ADD_MANY:
      return bookAdapter.addMany(action.books, state);

    case BookActionTypes.SELECT_ONE:
      return {
        ...state,
        selectedId: action.id,
      };

    case BookActionTypes.SEARCH_BOOK:
      return {
        ...state,
        searchTerm: action.searchTerm
      };

    case BookActionTypes.SORT_BY_TITLE:
      return {
        ...state,
        titleSorting: action.direction,
      };

    case BookActionTypes.SORT_BY_YEAR:
      return {
        ...state,
        yearSorting: action.direction,
      };

    default:
      return state;
  }

}
