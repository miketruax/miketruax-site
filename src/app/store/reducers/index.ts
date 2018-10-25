import * as fromRecipes from './recipes.reducer'
import {ActionReducerMap} from '@ngrx/store'

export interface RootState {
  recipes: fromRecipes.RecipeState
}

export const reducers: ActionReducerMap<RootState> = {
  recipes: fromRecipes.recipeReducer,
};


export const getRecipesState = (state: RootState) => state.recipes;

