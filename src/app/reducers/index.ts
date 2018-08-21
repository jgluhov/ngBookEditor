import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from '../book/book.reducer';

export const reducers: ActionReducerMap<any> = {
  book: bookReducer
};

