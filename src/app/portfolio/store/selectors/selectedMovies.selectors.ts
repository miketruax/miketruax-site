import * as fromSelectedMovies from '../reducers/selectedMovies.reducer'
import * as fromRoot from '../reducers'
import { createSelector } from '@ngrx/store';

export const getSelectedMovie = createSelector(fromRoot.getMoviesState, (state: fromRoot.PortfolioState) => state.selectedMovie);