import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import { PortfolioStoreFacade } from '../../store';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class WhoWasItService {
  constructor(private http: HttpClient, private store: PortfolioStoreFacade) {
  }
    //API call to OMDB to retrieve actor information on movies entered
    compareMovies(title: string, year: number, page: number = 1){
    let params: HttpParams = new HttpParams()
        .set('t', title.toString())
        .set('y', year.toString())
        .set ('page', '1')
        .set('apikey', '25c98aaf')
        .set('r', 'JSON');
    
    this.http.get('http://www.omdbapi.com/', {params}).pipe(
        map(res =>{
            let actors = (res['Actors'] && res['Actors'] !== "N/A") ? res['Actors'].split(', ') : [];
            let movies = {title: title, valid: actors.length > 0}
            return {actors: actors, movies: movies};
        }), 
        catchError(err=> of({actors: [], movies: {title: null, valid: false}}))
    ).subscribe(payload => {
              this.store.addActors(payload)
              this.store.combineActors();
            });
      }
    }


