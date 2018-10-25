import {
  Action
} from '@ngrx/store';
import {Recipe} from "../../models/recipe.model";

export const ADD_RECIPES = '[Recipes] Add Recipes';
export const CREATE_RECIPE = '[Recipe] Create Recipe';
export const UPDATE_RECIPE = '[Recipe] Update Recipe';
export const DELETE_RECIPE = '[Recipe] Delete Recipe';


export class AddRecipes implements Action {
  readonly type = ADD_RECIPES;
  constructor(public payload: Recipe[]){}
}

export class CreateRecipe implements Action {
  readonly type = CREATE_RECIPE;
  constructor(public payload: Recipe){}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: Recipe){}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number){}
}

export type RecipeActions = AddRecipes | CreateRecipe | UpdateRecipe | DeleteRecipe
