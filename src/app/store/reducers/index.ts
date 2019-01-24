import * as fromRecipes from './recipes.reducer'
import * as fromActiveRecipe from './active-recipe.reducer';
import * as fromCategory from './category.reducer';
import {ActionReducerMap} from '@ngrx/store'

export interface RootState {
  recipes: fromRecipes.RecipeState,
  category: fromCategory.CategoryState,
  activeRecipe: fromActiveRecipe.ActiveRecipeState
}

export const reducers: ActionReducerMap<RootState> = {
  recipes: fromRecipes.recipeReducer,
  category: fromCategory.categoryReducer,
  activeRecipe: fromActiveRecipe.activeRecipeReducer
};


export const getRecipesState = (state: RootState) => state.recipes;
export const getCategoryState = (state: RootState) => state.category;
export const getActiveRecipeState = (state: RootState) => state.activeRecipe;

