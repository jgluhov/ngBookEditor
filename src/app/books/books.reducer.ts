import * as actions from './books.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Book } from './models/book.model';

export const booksAdapter = createEntityAdapter<Book>();
export interface State extends EntityState<Book> {}

const defaultBook = {
  ids: [],
  entities: {}
};

export const initialState: State = booksAdapter.getInitialState(defaultBook);

export const booksReducer = (
  state: State = initialState,
  action: actions.BookActions
) => {

  switch (action.type) {

    case actions.CREATE:
      return booksAdapter.addOne(action.book, state);

    case actions.UPDATE:
      return booksAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE:
      return booksAdapter.removeOne(action.id, state);

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
} = booksAdapter.getSelectors(getBooksState);
