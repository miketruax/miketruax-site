import * as fromRecipes from '../reducers/recipes.reducer'
import * as fromRoot from '../reducers'
import { createSelector } from '@ngrx/store';

export const getRecipes = createSelector(fromRoot.getRecipesState, fromRecipes.getRecipes);