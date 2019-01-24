import * as fromActiveRecipes from '../reducers/active-recipe.reducer'
import * as fromRoot from '../reducers'
import { createSelector } from '@ngrx/store';

export const getActiveRecipe = createSelector(fromRoot.getActiveRecipeState, fromActiveRecipes.getActiveRecipe);