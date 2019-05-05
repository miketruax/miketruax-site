import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {MovieSearchService} from "./services/movie-search.service";
import { Observable } from 'rxjs';
import { PortfolioStoreFacade } from '../store';
import { MovieAboutComponent } from './about/movie-about.component';

@Component({
  selector: 'movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movieSearch: string = '';
  yearSearch: number = null;
  movieSearchInfo: Observable<Object>;
  loading: boolean = false;
  currentPage: number = 1;
  snackRef: any;


  constructor(private movieService: MovieSearchService, private portfolioStore: PortfolioStoreFacade, private snackBar: MatSnackBar) {
    this.movieSearchInfo = this.portfolioStore.movies$;
 
  };


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
    this.movieService.movieById(id)
      .subscribe(val=>{
        this.portfolioStore.selectMovie(val)
        if(!this.snackRef){
          this.snackRef = this.snackBar.openFromComponent(MovieAboutComponent, {panelClass: ["snack-bar"]})
        }
      });

  };





  ngOnInit() {
  }

}

