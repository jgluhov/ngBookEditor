import { BookActionTypes, BookActions } from './book.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { BookModel } from './models/book.model';

export const bookAdapter = createEntityAdapter<BookModel>();
export interface State extends EntityState<BookModel> {}

const defaultBook = {
  ids: [],
  entities: {}
};

export const initialState: State = bookAdapter.getInitialState(defaultBook);

export const bookReducer = (
  state: State = initialState,
  action: BookActions
) => {

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

    case BookActionTypes.ADD_ALL:
      return bookAdapter.addAll(action.books, state);

    default:
      return state;
  }

};

export const getBooksState = createFeatureSelector<State>('books');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = bookAdapter.getSelectors(getBooksState);
