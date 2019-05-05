import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PosterService {
  constructor(private http: HttpClient) {}
  
  getPoster(imageUrl: string): Observable<Blob | boolean> {
    return this.http.get(imageUrl, { responseType: 'blob' }).pipe(
        catchError(err => {
            return of(false)})
    );
  }
}


