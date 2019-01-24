import  * as CategoryActions  from '../actions/category.actions';

export type CategoryState = number

const initialState: CategoryState = 0;

export function categoryReducer(state: CategoryState = initialState, action: CategoryActions.CategoryActions): CategoryState{

  switch (action.type) {

    case CategoryActions.SELECT_CATEGORY:
      return action.payload as number;

    default:
      return state;
  }
}

export const getCategory = (state: CategoryState) => state;
