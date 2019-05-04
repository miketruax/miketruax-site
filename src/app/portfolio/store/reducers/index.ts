import * as fromMovies from './movies.reducer';
import * as fromSelectedMovie from './selectedMovies.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface PortfolioState {
  movies: fromMovies.MovieState,
  selectedMovie: fromSelectedMovie.SelectedMovieState
}

export const reducers: ActionReducerMap<PortfolioState> = {
  movies: fromMovies.moviesReducer,
  selectedMovie: fromSelectedMovie.selectedMovieReducer
};


export const getMoviesState = createFeatureSelector<PortfolioState>('portfolio');
export const getSelectedMovieState = createFeatureSelector<PortfolioState>('portfolio');
export const getActorsState = createFeatureSelector<PortfolioState>('portfolio');
