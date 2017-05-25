import {
  Action,
} from '@ngrx/store';
import {Injectable} from "@angular/core";


@Injectable()
export class SelectedMovieActions {
  static SELECT_MOVIE = '[Selected Movies] Select Movie';
  addMovies(movie): Action {
    return {
      type: SelectedMovieActions.SELECT_MOVIE,
      payload: movie
    };
  }

  static CLEAR_SELECTED_MOVIE = '[Selected Movies] Clear Selected Movies';
  clearMovies(): Action {
    return {
      type: SelectedMovieActions.CLEAR_SELECTED_MOVIE,
      payload: {}
    }
  }


}
