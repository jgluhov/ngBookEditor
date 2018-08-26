import { ActionReducerMap, MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromBook from '../book/book.reducer';

type ReducerState = fromBook.State;

export const reducers: ActionReducerMap<any> = {
  book: fromBook.bookReducer
};

const localStorageSyncReducer = (
  reducer: ActionReducer<ReducerState>
): ActionReducer<ReducerState> => {
  return localStorageSync({
    keys: ['books'],
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<ReducerState, Action>> = [
  localStorageSyncReducer
];

