import { Action } from '@ngrx/store';
import  {MovieActions}  from '../actions/movies.actions';

export type State = Object

const initialState: State = {movies: [], totalMovies: null, error: {msg: '', err: false}};


export function moviesReducer(state = initialState, action: Action): any{

  switch (action.type) {

    case MovieActions.UPDATE_MOVIES:
      return action.payload;

    case MovieActions.CLEAR_MOVIES:
      return initialState;

    default:
      return state;
  }
}

export const getMovies = (state: State) => state;
