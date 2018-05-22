import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import * as recipeActions from '../actions/recipes.actions';
import {Store} from "@ngrx/store";
import * as fromRoot from '../reducers';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  constructor(private http: Http, private store: Store<fromRoot.State>) {
  }

  getRecipes(){
    this.http.get('/api/recipe')
      .map(res => res.json())
      .subscribe(payload =>{
        this.store.dispatch(new recipeActions.AddRecipes(payload))})


}}
