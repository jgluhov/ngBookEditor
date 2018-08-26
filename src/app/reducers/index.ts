import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromBooks from '../books/book.reducer';

type ReducerState = fromBooks.State;

export const reducers: ActionReducerMap<any> = {
  books: fromBooks.bookReducer
};

const localStorageSyncReducer = (
  reducer: ActionReducer<ReducerState>
): ActionReducer<ReducerState> => {
  return localStorageSync({
    keys: ['books'],
    rehydrate: true
  })(reducer);
};

export const metaReducers: Array<MetaReducer<ReducerState, Action>> = [
  localStorageSyncReducer
];

