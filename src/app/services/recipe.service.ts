import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as recipeActions from '../actions/recipes.actions';
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';
import 'rxjs/Rx';
import {Recipe} from "../stores/recipe.store";

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {
  }

  getRecipes(){
    return this.http.get<Recipe[]>('/api/recipe')
      .subscribe((data:Recipe[]) =>{
        this.store.dispatch({type: recipeActions.ADD_RECIPES, payload: data})})
}}
