import { Component, OnInit } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/Rx';
import * as $ from 'jquery';

@Component({
  selector: 'movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['../../../assets/styles/app.style.scss', './movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movieSearch: string = '';
  yearSearch: number = null;
  movieList:Object[] = [];
  activeMovie: Object = {};
  moreInfo: boolean = false;
  moreInfoLoaded: boolean = false;
  totalMovies: number = null;
  currentPage: number = 1;
  buttons: number[] = [];
  totalPages: number[] = [];
  error: Object = {msg: '', err: false};


  constructor(private http: Http) {

  };

  searchSubmit() {
    this.currentPage = 1;
    this.pullMovies(); //pulls movies passing 1 for just the first page
    this.moreInfo = false;
    this.moreInfoLoaded = false;
    this.buttons = [];
    this.totalPages = [];
    this.totalMovies = null;
    this.error = {msg: '', err: false};
    $('#pagination-div').html(''); //clears old pagination
  };

  populateError(errMsg) { //creates error li element
    this.error = {msg: errMsg, err: true};
  };


  pullMovies() {
    // $('#movies').html('<div class="centered">LOADING...<br><img src="../work-examples/movie-search/css/bar.gif"></div>');
    this.movieList =[];
    let params: URLSearchParams =  new URLSearchParams();
    params.set('s', this.movieSearch);
    if(this.yearSearch) {
      params.set('y', this.yearSearch.toString());
    }
    params.set('type', 'movie');
    params.set('r', 'JSON');
    params.set('page', this.currentPage.toString());

    this.http.get('http://www.omdbapi.com/', {search: params}) //calls for JSON data
      .map(res => JSON.parse(res['_body']))
      .map(data=>{

        if (data['Response'] === "True") { //if successful and movies are found
          this.movieList = data['Search'];
          this.totalMovies = data['totalResults'];
          this.createPagination();//adds pagination to the bottom of the page
        }
        else if (data['Error'] === "Movie not found!") { //sets error if no movie found
          let errMsg = ' No movies found that match: ' + this.movieSearch;
          if (this.yearSearch) {
            errMsg += ' (' + this.yearSearch + ')';
          }
          this.populateError(errMsg); //sets error to #movies
        }
        else { //in case of other error with JSONP call
          let errMsg = 'An unknown error occured. Ensure your search contains ';
          errMsg += 'at least two characters and please try again shortly.';
          this.populateError(errMsg);
        }
      })
      .subscribe();
  }

  showMore(id) { //title is clicked hides search results and shows more info
    this.moreInfo = true;
    let params: URLSearchParams =  new URLSearchParams();
    params.set('i', id);
    params.set('plot', 'full');
    params.set('r', 'json');
      this.http.get('http://www.omdbapi.com/?', {search: params}) //calls direct imdb id search
        .map(res => JSON.parse(res['_body']))
        .map(data =>{
        if (data.Response === "True") { //if response is valid JSON movie info, show contanier and populate info
          this.activeMovie = data; //populates the data
          this.moreInfoLoaded = true;
        }
        else { //in case an error occurs retreiving the information
          let error = 'Could not find information. Please try again later.';
          error += ' We apologize for any inconvenience.';
          this.populateError(error);
        }
        console.log(this.moreInfo, this.moreInfoLoaded);
      }).subscribe();
  };



  createPagination() {   //this is the function that creates the pagination buttons on the bottom
    let numButtons = Math.ceil(this.totalMovies / 10); // 10 per page then rounds up so 84->9pages 24->3 pages etx
    this.totalPages = Array.from(Array(numButtons),(x,i)=>i+1);
    this.buttons = [];
      for (let i = (this.currentPage - 5); i <= (this.currentPage + 5); i++) {
        if (i > 0 && i <= numButtons) {
          this.buttons.push(i);
        }
      }
    }

  pageClick(){
    this.currentPage = parseInt($('select[name="pagejump"]').val());
    this.pullMovies()
  }





  ngOnInit() {
  }

}

