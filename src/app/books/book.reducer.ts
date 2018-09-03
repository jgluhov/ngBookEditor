import { BookActionTypes, BookActions } from './book.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookModel } from './models/book.model';

export const bookAdapter = createEntityAdapter<BookModel>();
export interface State extends EntityState<BookModel> {
  selectedId: string | null;
  searchTerm: string;
}

const defaultBook = {
  selectedId: null,
  searchTerm: '',
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

    default:
      return state;
  }

};

// Selectors
export const getBooksState = createFeatureSelector<State>('books');

export const getBooksEntitiesState = createSelector(
  getBooksState,
  state => state.entities
);

export const getSearchTerm = createSelector(
  getBooksState,
  state => state.searchTerm
);

export const getSelectedId = createSelector(
  getBooksState,
  state => state.selectedId
);

export const getSelectedBook = createSelector(
  getBooksEntitiesState,
  getSelectedId,
  (entities, id) => entities[id] || null
);

export const getBookById = (id: string) => createSelector(
  getBooksEntitiesState,
  (entities) => entities[id] || null
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = bookAdapter.getSelectors(getBooksState);
