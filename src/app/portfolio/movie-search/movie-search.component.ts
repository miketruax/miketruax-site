import { Component, OnInit } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/Rx';
import * as $ from 'jquery';
import {horizontalSlideAnimation} from "../../animations/horizontal-slide.animation";

@Component({
  selector: 'movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movieSearch: string = '';
  yearSearch: number = null;
  movieList:Object[] = [];
  activeMovie: Object = {};
  moreInfo: boolean = false;
  loading: boolean = false;
  totalMovies: number = null;
  currentPage: number = 1;
  buttons: number[] = [];
  totalPages: number[] = [];
  error: Object = {msg: '', err: false};


  constructor(private http: Http) {

  };
  closeMore(e){
    this.moreInfo = false;
  }
  searchSubmit() {
    this.loading = true;
    this.pullMovies(1); //pulls movies passing 1 for just the first page
    this.moreInfo = false;
    this.buttons = [];
    this.totalPages = [];
    this.totalMovies = null;
    this.error = {msg: '', err: false};
    // $('#pagination-div').html(''); //clears old pagination
  };

  populateError(errMsg) { //creates error li element
    this.error = {msg: errMsg, err: true};
  };


  pullMovies(idx) {
    this.currentPage = idx;
    console.log(this.currentPage, idx);
    this.movieList =[];
    let params: URLSearchParams =  new URLSearchParams();
    params.set('s', this.movieSearch);
    params.set('apikey', '25c98aaf');
    if(this.yearSearch) {
      params.set('y', this.yearSearch.toString());
    }
    params.set('type', 'movie');
    params.set('r', 'JSON');
    params.set('page', this.currentPage.toString());

    //calls for JSON data
    this.http.get('http://www.omdbapi.com/', {search: params})
      .map(res => JSON.parse(res['_body']))
      .map(data=>{
        //if successful and movies are found
        if (data['Response'] === "True") {
          this.movieList = data['Search'];
          this.totalMovies = data['totalResults'];

          //adds pagination to the bottom of the page
          this.createPagination();
        }
        else if (data['Error'] === "Movie not found!") { //sets error if no movie found
          let errMsg = ' No movies found that match: ' + this.movieSearch;
          if (this.yearSearch) {
            errMsg += ' (' + this.yearSearch + ')';
          }
          this.populateError(errMsg); //sets error to #movies
        }
        //in case of other error with JSONP call
        else {
          let errMsg = `An unknown error has occurred. Ensure your search contains
                        at least two characters and please try again shortly.`;
          this.populateError(errMsg);
        }
        this.loading = false;
      })
      .subscribe();
  }

  //title is clicked hides search results and shows more info
  showMore(id) {
    this.moreInfo = true;
    this.loading = true;
    let params: URLSearchParams =  new URLSearchParams();
    params.set('i', id);
    params.set('apikey', '25c98aaf');
    params.set('plot', 'full');
    params.set('r', 'json');
    //calls direct imdb id search
      this.http.get('http://www.omdbapi.com/?', {search: params})
        .map(res => JSON.parse(res['_body']))
        //if response is valid JSON movie info, show contanier and populate info
        .map(data =>{
        if (data.Response === "True") {
          //populates the data
          this.activeMovie = data;
          this.loading = false;
        }
        //in case an error occurs retreiving the information
        else {
          let error = 'Could not find information. Please try again later.';
          error += ' We apologize for any inconvenience.';
          this.populateError(error);
        }
      }).subscribe();
  };


  //this is the function that creates the pagination buttons on the bottom
  // 10 per page then rounds up so 84->9pages 24->3 pages etx
  createPagination() {
    let numButtons = Math.ceil(this.totalMovies / 10);
    this.totalPages = Array.from(Array(numButtons),(x,i)=>i+1);
    //Adds buttons for previous 5(up to page 1) and next 5 (up to last button)
    this.buttons = [];
      for (let i = (this.currentPage - 5); i <= (this.currentPage + 5); i++) {
        if (i > 0 && i <= numButtons) {
          this.buttons.push(i);
        }
      }
    }

  //makes new call and jumps to appropriate page
  pageClick(){
    this.pullMovies(parseInt($('select[name="pagejump"]').val()));

  }





  ngOnInit() {
  }

}

