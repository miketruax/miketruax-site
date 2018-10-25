import { Action } from '@ngrx/store';
import  * as SelectedMovieActions  from '../actions/selectedMovies.actions';

export type SelectedMovieState = Object

const initialState: SelectedMovieState = {};

export function selectedMovieReducer(state: Object = initialState, action: SelectedMovieActions.SelectedMovieActions){

  switch (action.type) {
    case SelectedMovieActions.SELECT_MOVIE:
      return action.payload;

    case SelectedMovieActions.CLEAR_SELECTED_MOVIE:
      return {};

    default:
      return state;
  }
}

export const getMovie = (state: SelectedMovieState) => state;