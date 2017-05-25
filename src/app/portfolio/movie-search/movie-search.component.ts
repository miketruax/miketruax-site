import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import * as fromRoot from '../../reducers'
import {MovieActions} from '../../actions/movies.actions'
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {MovieService} from "../../services/movie.service";
import {SelectedMovieActions} from "../../actions/selectedMovies.actions";

@Component({
  selector: 'movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movieSearch: string = '';
  yearSearch: number = null;
  movieSearchInfo: Observable<Object>;
  activeMovie: Observable<Object>;
  moreInfo: boolean = false;
  loading: boolean = false;
  currentPage: number = 1;


  constructor(private movieService: MovieService, private store: Store<fromRoot.State>) {
    this.movieSearchInfo = store.select(fromRoot.getMoviesState);
    this.activeMovie = store.select(fromRoot.getSelectedMoviesState);

  };
  closeMore(e){
    this.moreInfo = false;
  }

  searchMovies(idx) {
    this.loading = true;
    this.currentPage = idx;
    this.store.dispatch({type: MovieActions.CLEAR_MOVIES});
    this.movieService.searchMovies(this.movieSearch, this.yearSearch, idx)
      .subscribe(()=>{this.loading = false;});

  }

  //title is clicked hides search results and shows more info
  showMore(id) {
    this.store.dispatch({type: SelectedMovieActions.CLEAR_SELECTED_MOVIE});
    this.moreInfo = true;
    this.loading = true;
    this.movieService.movieById(id)
      .subscribe(()=>{this.loading = false;});

  };





  ngOnInit() {
  }

}

