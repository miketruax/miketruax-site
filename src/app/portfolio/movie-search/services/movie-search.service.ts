import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import { PortfolioStoreFacade } from '../../store';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class MovieSearchService {
  constructor(private http: HttpClient, private portfolioStore: PortfolioStoreFacade) {}
      
  getMovies(params: HttpParams){
        return this.http.get('http://www.omdbapi.com/', {params})
  }

  searchMovies(title, page) {
    let params: HttpParams =  new HttpParams()
      .set('apikey', '25c98aaf')
      .set('r', 'JSON')
      .set('page', page ? page: '1')
      .set('s', title ? title : '')

    return this.getMovies(params)
    .pipe(
      map(
      data =>{
        let movies = data['Response'] === "True" ? data['Search'] : []
        let totalMovies = data['Response'] === "True" ? data['totalResults'] : null
        let msg = data['Error'] ? `No movies found that match ${title} for the current year selection` : ''
        return {movies: movies, totalMovies: totalMovies, msg: msg}
      }),
      catchError(err=> of({movies: [], totalMovies: null, msg: 'Something went wrong. Please try again Later. '}))
    )
  }

  //title is clicked hides search results and shows more info
  movieById(id) {
    this.portfolioStore.clearSelectedMovie();
    let params: HttpParams =  new HttpParams()
      .set('apikey', '25c98aaf')
      .set('r', 'JSON')
      .set('i', id)
      .set('plot', 'full');
    return this.getMovies(params).pipe(
      
      //if response is valid JSON movie info, show container and populate info

      map(data => data['Response'] === "True" ? data : 'Something went wrong. Please try again later.'),
      catchError(err=> of({errorMessage: 'Something went wrong. Please try again Later. '}))
      )
  };

    }


