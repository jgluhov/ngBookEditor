import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromBook from '@books/book.reducer';

export const getBooksState = createFeatureSelector<fromBook.State>('books');

export const getBooksEntitiesState = createSelector(
  getBooksState,
  state => state.entities
);

export const getSearchTerm = createSelector(
  getBooksState,
  state => state.searchTerm
);

export const getTitleSorting = createSelector(
  getBooksState,
  state => state.titleSorting
);

export const getYearSorting = createSelector(
  getBooksState,
  state => state.yearSorting
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

export const getDasboardState = createSelector(
  getBooksState,
  ({ searchTerm, titleSorting, yearSorting }) => ({ searchTerm, titleSorting, yearSorting })
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromBook.bookAdapter.getSelectors(getBooksState);
