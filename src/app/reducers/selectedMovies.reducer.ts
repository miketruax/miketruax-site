import { Action } from '@ngrx/store';
import  * as SelectedMovieActions  from '../actions/selectedMovies.actions';

export type State = Object

const initialState: State = {};

export function selectedMoviesReducer(state: Object = initialState, action: SelectedMovieActions.Actions){

  switch (action.type) {
    case SelectedMovieActions.SELECT_MOVIE:
      return action.payload;

    case SelectedMovieActions.CLEAR_SELECTED_MOVIE:
      return {};

    default:
      return state;
  }
}

