import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Recipe } from '../models/recipe.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RootStoreFacade } from '../store';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient, private store: RootStoreFacade) {
  }

  getRecipes(){
    return this.http.get<Recipe[]>('/api/recipe')
    .pipe(
      catchError(err=>of([])
      ))
      .subscribe(recipes => this.store.addRecipes(recipes)
      )
  }

}
