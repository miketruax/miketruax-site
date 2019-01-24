import {
    Action
  } from '@ngrx/store';
  import {Recipe} from "../../models/recipe.model";
  
  export const SELECT_ACTIVE_RECIPE = '[Recipe] Select Active Recipe';
  
  
  export class SelectActiveRecipe implements Action {
    readonly type = SELECT_ACTIVE_RECIPE;
    constructor(public payload: Recipe){}
  }

  
  export type ActiveRecipeActions = SelectActiveRecipe
  