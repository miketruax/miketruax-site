import {
  Action,
} from '@ngrx/store';
import {Injectable} from "@angular/core";


@Injectable()
export class MovieActions {
  static UPDATE_MOVIES = '[Movies] Update Movies';
  addMovies(data): Action {
    return {
      type: MovieActions.UPDATE_MOVIES,
      payload: data
    };
  }

  static CLEAR_MOVIES = '[Movies] Clear Movies';
  clearMovies(): Action {
    return {
      type: MovieActions.CLEAR_MOVIES,
      payload: {}
    }
  }


}
