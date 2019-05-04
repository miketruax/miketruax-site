import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromActions from './actions'
import * as fromReducers from './reducers'
import * as fromSelectors from './selectors'

@Injectable()

export class PortfolioStoreFacade{
  selectedMovie$ = this.store.pipe(select(fromSelectors.getSelectedMovie));
  movies$ = this.store.pipe(select(fromSelectors.getMovies));
  constructor(private store: Store<fromReducers.PortfolioState>){

  }


updateMovies(movies: Object){
  this.store.dispatch(new fromActions.UpdateMovies(movies));
}

clearMovies(){
  this.store.dispatch(new fromActions.ClearMovies);
}

selectMovie(movie: Object){
  this.store.dispatch(new fromActions.SelectMovie(movie));
}

clearSelectedMovie(){
  this.store.dispatch(new fromActions.ClearSelectedMovie());
}
  
}