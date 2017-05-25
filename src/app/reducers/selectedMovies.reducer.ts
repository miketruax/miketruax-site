import { Action } from '@ngrx/store';
import  {SelectedMovieActions}  from '../actions/selectedMovies.actions';

export type State = Object

const initialState: State = {};

export function selectedMoviesReducer(state = initialState, action: Action): any{

  switch (action.type) {
    case SelectedMovieActions.SELECT_MOVIE:
      return action.payload;

    case SelectedMovieActions.CLEAR_SELECTED_MOVIE:
      return {};

    default:
      return state;
  }
}

export const getSelectedMovie = (state: State) => state;
