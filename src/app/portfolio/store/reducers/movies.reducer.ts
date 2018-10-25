import { Action } from '@ngrx/store';
import  * as MovieActions  from '../actions/movies.actions';

export type MovieState = Object

const initialState: MovieState = {movies: [], totalMovies: null};


export function moviesReducer(state = initialState, action: MovieActions.MovieActions): MovieState{

  switch (action.type) {

    case MovieActions.UPDATE_MOVIES:
      return action.payload;

    case MovieActions.CLEAR_MOVIES:
      return initialState;

    default:
      return state;
  }
}

export const getMovies = (state: MovieState) => state;
