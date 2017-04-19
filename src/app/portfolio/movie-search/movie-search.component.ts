import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import * as $ from 'jquery';

@Component({
  selector: 'movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['../../../assets/styles/app.style.scss', './movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  currentMovie: String = '';
  currentYear: number = null;
  movieList:Object[] = [];
  constructor(private http: Http) {

  };





  searchSubmit() {
    this.pullMovies(1); //pulls movies passing 1 for just the first page
    this.hideMoreInfo();

    $('#pagination-div').html(''); //clears old pagination

  };

  pullMovies(page) {
    $('#movies').html('<div class="centered">LOADING...<br><img src="../work-examples/movie-search/css/bar.gif"></div>');
    this.movieList =[];
    let queryData = {
      s: this.currentMovie,
      y: this.currentYear,
      type: "movie", //this is a movie search afer all, not TV search
      r: 'JSON', page: page
    }; //info to be passed to API

    this.http.get('http://www.omdbapi.com/', queryData) //calls for JSON data
      .map(res => res.json)
      .map(data=>{
        if (data['Response'] === "True") { //if successful and movies are found
          this.populateMovies(data); //populates the movies
          this.createPagination(data['totalResults'], page);//adds pagination to the bottom of the page
        }
        else if (data['Error'] === "Movie not found!") { //sets error if no movie found
          let noMovies = ' No movies found that match: ' + this.currentMovie;
          if (this.currentYear) {
            noMovies += ' (' + this.currentYear + ')';
          }
          this.populateError(noMovies, $('#movies')); //sets error to #movies
        }
        else { //in case of other error with JSONP call
          var otherError = 'An unknown error occured.<br> Ensure your search contains';
          otherError += ' at least two characters and please try again shortly.';
          this.populateError(otherError, $('#movies'));
        }
      })
  }


  populateError(errMsg, insertInto) { //creates error li element
    let li = '<li class="no-movies"><i class="material-icons icon-help">help_outline</i>';
    li += errMsg + '</li>';
    $(insertInto).html(li); //adds li to the #movies element
  };

  populateMovies(movieList) {
    let total = '<div class="pagination">' + movieList.totalResults + ' movies found</div>';
    $('#movies').append(total);
    this.movieList = movieList.Search;
    //cycles through each movie updating information to the li item
  };

  showMore(id) { //title is clicked hides search results and shows more info
    $('#movies').hide();
    $('#pagination-div').hide();
    $('#expandedInfo').show('slow');
    this.collectMoreInfo(id); //recalls OMDBapi to get specifics on movie clicked
  };

  collectMoreInfo(id) { //passes id of item clicked
    $('#expandedInfo').html('<div class="centered">LOADING...<br><img src="./css/bar.gif"></div>');
    let queryData = {i: id, plot: 'full', r: 'json'}; //sets search param for more info
    $.getJSON('http://www.omdbapi.com/', queryData, function (data) { //calls direct imdb id search
      if (data.Response == "True") { //if response is valid JSON movie info, show contanier and populate info
        this.populateMoreInfo(data); //populates the data
      }
      else { //in case an error occurs retreiving the information
        let error = 'Could not find information. Please try again later.';
        error += ' We apologize for any inconvenience.';
        this.populateError(error, $('#expandedInfo')); //populates error to expandedInfo id
      }
    }).fail(function () {
      this.populateError('Could not reach the database. Please try again later', $('#expandedInfo'));
    });
  };

  populateMoreInfo(movie) { //builds more info one block at a time
    let moreHTML = '<div class="top-grey">';
    moreHTML += '<button class="back">  &#10094; Search results</button><br>'; //back button
    moreHTML += '<span class="more-title">' + movie.Title + ' (' + movie.Year + ')</span><br>'; //title and year
    moreHTML += '<span class="more-title more-rating">IMDB Rating: ' + movie.imdbRating + '</span></div>'; //imdb rating
    moreHTML += this.getPoster(movie.Poster, 'more-poster') + '<div class ="more-synopsis">'; //poster
    moreHTML += '<h3>Plot Synopsis:</h3><p class="synopsis">' + movie.Plot + '</p>'; //plot
    moreHTML += '<a class="imdb-button" href="http://www.imdb.com/title/' + movie.imdbID; // link to imdb button
    moreHTML += '" target="_blank">View on IMDB</a></div>'; //closing it all out
    $('#expandedInfo').html(moreHTML); //adding it to container div
  };


  createPagination(responseNumber, page) {   //this is the function that creates the pagination buttons on the bottom
    var numButtons = Math.ceil(responseNumber / 10); // 10 per page then rounds up so 84->9pages 24->3 pages etx
    page = parseInt(page); //occasionally page decided it was meant to be a string, causing issues
    $('#pagination-div').html(''); //clears old pagination
    if (numButtons !== 1) { //if only one button no need to add paginate links
      var html = '<div class="pagination">' + numButtons + ' total pages</div>';
      html += '<div class="pagination"><ol id="buttons">'; //sets-up starting tags
      //the number passed is how many pages there should be and therefore how many links there should be
      for (var i = (page - 5); i <= (page + 5); i++) {
        if (i > 0 && i <= numButtons) {
          html += '<li><a class="pag-button" href="#" id="' + i + '">' + i + '</a></li>'; //builds each button one at a time
        }
      }
      html += '</ol></div>'; //closes tags
      $('#pagination-div').html(html); //adds pagination to the appropriate div
      addJumpTo(numButtons, page);
      $('#' + page).addClass('active'); // if more than one, the page passed in becomes active button
      $('select[name="pagejump"]').val(page);
      createFirstLast(page, numButtons);
    }
  };

  createFirstLast(current, max) {
    if (current !== 1) { //if not on the last page, adds jump to last page
      var first = '<li><a class="first jumper" href="#">&#8606;first</a></li>';
      $('#buttons').prepend(first);
      $('.first').on('click', function () {
        pullMovies(1);
      });
    }

    if (current !== max) { //if not on the last page, adds jump to last page
      var last = '<li><a class="last" href="#">last &#8608;</a></li>';
      $('#buttons').append(last);
      $('.last').on('click', function () {
        pullMovies(max);
      });
    }
  };

  addJumpTo(numOptions, currentOption) {
    var select = '<div class="select">Jump to page: <select name="pagejump">';
    for (var i = 1; i <= parseInt(numOptions); i++) {
      select += '<option value="' + i + '">' + i + '</option>';
    }
    select += '</select><a id="jump-to" href="#">Go!</a></div>';
    $('#pagination-div').append(select);
    $('#jump-to').on('click', function () {
      pullMovies($('select[name="pagejump"]').val());
    });
  };


  hideMoreInfo(){ //when back button is clicked or new search on more info page
    $('#movies').show(); //shows #movies results
    $('#expandedInfo').hide('slow'); //hides expandedInfo
    $('#pagination-div').show(); //shows pagination div again
  };

  $('body').on('click', '.movie_more', showMore); //any movie title clicked goes to more info
  $('body').on('click', '.back', hideMoreInfo);

  $('body').on('click', '.pag-button', function () {
    pullMovies($(this).attr('id')); //pulls movies on the page that the pagination was clicked
  });




  ngOnInit() {
  }

}

