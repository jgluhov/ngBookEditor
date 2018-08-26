import * as actions from './book.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Book } from '@models/book.model';

export const bookAdapter = createEntityAdapter<Book>();
export interface State extends EntityState<Book> {}

const defaultBook = {
  ids: [],
  entities: {}
};

export const initialState: State = bookAdapter.getInitialState(defaultBook);

export const bookReducer = (
  state: State = initialState,
  action: actions.BookActions
) => {

  switch (action.type) {

    case actions.CREATE:
      return bookAdapter.addOne(action.book, state);

    case actions.UPDATE:
      return bookAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE:
      return bookAdapter.removeOne(action.id, state);

    default:
      return state;
  }

};

export const getBookState = createFeatureSelector<State>('book');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = bookAdapter.getSelectors(getBookState);
