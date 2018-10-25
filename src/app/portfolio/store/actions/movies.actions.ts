import {Action} from '@ngrx/store';

export const UPDATE_MOVIES = '[Movies] Update Movies';
export const CLEAR_MOVIES = '[Movies] Clear Movies';



export class UpdateMovies implements Action {
  readonly type = UPDATE_MOVIES;
  constructor(public payload: Object){}
}

export class ClearMovies implements Action {
  readonly type = CLEAR_MOVIES;
  constructor(){}
}

export type MovieActions = UpdateMovies | ClearMovies
