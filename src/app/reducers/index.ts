
import * as fromRecipes from './recipes.reducer'
import * as fromActors from './actors.reducer'
import * as fromMovies from './movies.reducer'
import * as fromSelectedMovie from './selectedMovies.reducer'
import {compose} from "@ngrx/core/compose";
import {combineReducers} from "@ngrx/store";


export interface State {
  recipes: fromRecipes.State,
  actors: fromActors.State,
  movies: fromMovies.State,
  selectedMovie: fromSelectedMovie.State
}

const reducers = {
  recipes: fromRecipes.recipeReducer,
  actors: fromActors.actorReducer,
  movies: fromMovies.moviesReducer,
  selectedMovie: fromSelectedMovie.selectedMoviesReducer
};


export default compose(combineReducers)({
  recipes: reducers.recipes,
  actors: reducers.actors,
  movies: reducers.movies,
  selectedMovie: reducers.selectedMovie

});


export const getRecipeState = (state: State) => state.recipes;
export const getActorsState = (state: State) => state.actors;
export const getMoviesState = (state: State) => state.movies;
export const getSelectedMoviesState = (state: State) => state.selectedMovie;
