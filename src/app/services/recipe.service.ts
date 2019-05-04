import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Recipe } from '../models/recipe.model';
import { catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { RootStoreFacade } from '../store';

@Injectable(
  {providedIn: 'root'}
)
export class RecipeService {
  constructor(private http: HttpClient, private store: RootStoreFacade) {
  }

  getRecipes(){
    return this.http.get<Recipe[]>('/api/recipe')
    .pipe(
      catchError(err=>of([])
      ))
      .subscribe((recipes : Recipe[]) => {
        this.store.addRecipes(recipes)
        this.store.selectActiveRecipe(recipes[0])
        this.store.selectCategory(recipes[0].category_ID)
      }
      )
  }

}
