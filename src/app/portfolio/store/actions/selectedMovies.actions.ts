import {
  Action,
} from '@ngrx/store';

export const SELECT_MOVIE = '[Selected Movies] Select Movie';
export const CLEAR_SELECTED_MOVIE = '[Selected Movies] Clear Selected Movies';


export class SelectMovie implements Action {
  readonly type = SELECT_MOVIE;
  constructor(public payload: Object){}
}

export class ClearSelectedMovie implements Action {
  readonly type = CLEAR_SELECTED_MOVIE;
  constructor(public payload: Object = {}){}
}

export type SelectedMovieActions = SelectMovie | ClearSelectedMovie
