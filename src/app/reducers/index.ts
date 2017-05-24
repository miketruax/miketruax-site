
import * as fromRecipes from './recipes.reducer'
import {compose} from "@ngrx/core/compose";
import {combineReducers} from "@ngrx/store";


export interface State {
  recipes: fromRecipes.State
}

const reducers = {
  recipes: fromRecipes.recipeReducer
};


export default compose(combineReducers)({
  recipes: reducers.recipes
});


export const getRecipeState = (state: State) => state.recipes;
