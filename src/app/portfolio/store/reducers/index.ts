import * as fromMovies from './movies.reducer';
import * as fromActors from './actors.reducer';
import * as fromSelectedMovie from './selectedMovies.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface PortfolioState {
  movies: fromMovies.MovieState,
  actors: fromActors.ActorState,
  selectedMovie: fromSelectedMovie.SelectedMovieState
}

export const reducers: ActionReducerMap<PortfolioState> = {
  movies: fromMovies.moviesReducer,
  actors: fromActors.actorReducer,
  selectedMovie: fromSelectedMovie.selectedMovieReducer
};


export const getMoviesState = createFeatureSelector<PortfolioState>('movies');
  
export const getSelectedMovieState = createFeatureSelector<PortfolioState>('selectedMovie');
export const getActorsState = createFeatureSelector<PortfolioState>('actors');
