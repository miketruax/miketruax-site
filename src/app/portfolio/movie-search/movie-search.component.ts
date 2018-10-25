import { Component, OnInit } from '@angular/core';

import {MovieSearchService} from "./services/movie-search.service";
import { Observable } from 'rxjs';
import { PortfolioStoreFacade } from '../store';

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


  constructor(private movieService: MovieSearchService, private portfolioStore: PortfolioStoreFacade) {
    this.movieSearchInfo = this.portfolioStore.movies$;
    this.activeMovie = this.portfolioStore.selectedMovie$;

  };
  closeMore(e){
    this.moreInfo = false;
  }

  searchMovies(idx) {
    this.loading = true;
    this.currentPage = idx;
    this.portfolioStore.clearMovies()
    this.movieService.searchMovies(this.movieSearch, this.yearSearch, idx)
      .subscribe(val=>{
        this.portfolioStore.updateMovies(val);
        this.loading = false;
      });

  }

  //title is clicked hides search results and shows more info
  showMore(id) {
    this.portfolioStore.clearSelectedMovie();
    this.moreInfo = true;
    this.loading = true;
    this.movieService.movieById(id)
      .subscribe(val=>{
        this.portfolioStore.selectMovie(val)
        this.loading = false;
      });

  };





  ngOnInit() {
  }

}

