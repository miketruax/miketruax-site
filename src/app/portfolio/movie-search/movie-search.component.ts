import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MovieSearchService} from "./services/movie-search.service";
import { Observable, fromEvent } from 'rxjs';
import { PortfolioStoreFacade } from '../store';
import { MovieAboutComponent } from './about/movie-about.component';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movieSearch: string = '';
  movieSearchInfo: Observable<Object>;
  loading: boolean = false;
  currentPage: number = 1;
  autoSearch: any;


  constructor(private movieService: MovieSearchService, private portfolioStore: PortfolioStoreFacade, private dialog: MatDialog) {
    this.movieSearchInfo = this.portfolioStore.movies$;

  };


  searchMovies(idx, searchQuery = this.movieSearch) {
    this.loading = true;
    this.currentPage = idx;
    this.portfolioStore.clearMovies()
    this.movieService.searchMovies(searchQuery, idx)
      .subscribe(val=>{
        this.portfolioStore.updateMovies(val);
        this.loading = false;
      });

  }

  //title is clicked hides search results and shows more info
  showMore(id) {
    this.portfolioStore.clearSelectedMovie();
    this.movieService.movieById(id)
      .subscribe(val=>{
        this.portfolioStore.selectMovie(val)
        this.dialog.open(MovieAboutComponent, {width: '75%', panelClass: 'about-modal'})
      });

  };





  ngOnInit() {
    this.autoSearch = fromEvent(document.getElementById("movieSearch"), 'input').pipe(
      map((e: KeyboardEvent) => e.target['value'].trim()),
      filter(text => text.length > 3),
      debounceTime(500),
      distinctUntilChanged()
  );
  this.autoSearch.subscribe(val => this.searchMovies(1, val));
  }

}

