import { Action } from '@ngrx/store';
import { BookModel } from './models/book.model';

export enum BookActionTypes {
  ADD_ONE = '[Books] Add one',
  UPDATE_ONE = '[Books] Update one',
  DELETE_ONE = '[Books] Delete one',
  ADD_ALL = '[Books] Add all',
  SELECT_ONE = '[Books] Select one',
  GET_ALL = '[Books] Get all'
}

export class AddOne implements Action {
  readonly type = BookActionTypes.ADD_ONE;

  constructor(public book: BookModel) {
  }
}

export class UpdateOne implements Action {
  readonly type = BookActionTypes.UPDATE_ONE;

  constructor(
    public id: string,
    public changes: Partial<BookModel>
  ) {
  }
}

export class DeleteOne implements Action {
  readonly type = BookActionTypes.DELETE_ONE;

  constructor(public id: string) {
  }
}

export class AddAll implements Action {
  readonly type = BookActionTypes.ADD_ALL;

  constructor(public books: BookModel[]) {}
}

export class SelectOne implements Action {
  readonly type = BookActionTypes.SELECT_ONE;

  constructor(public id: string) {}
}

export class GetAll implements Action {
  readonly type = BookActionTypes.GET_ALL;
}

export type BookActions =
  AddOne |
  UpdateOne |
  DeleteOne |
  AddAll |
  SelectOne |
  GetAll;
