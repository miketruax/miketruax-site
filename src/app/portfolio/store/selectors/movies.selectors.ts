import * as fromMovies from '../reducers/movies.reducer'
import * as fromRoot from '../reducers'
import { createSelector } from '@ngrx/store';

export const getMovies = createSelector(fromRoot.getMoviesState, (state: fromRoot.PortfolioState) => state.movies);