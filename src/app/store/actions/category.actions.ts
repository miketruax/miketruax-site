import {
    Action
  } from '@ngrx/store';
  
  export const SELECT_CATEGORY = '[Category] Select Category';
  
  
  export class SelectCategory implements Action {
    readonly type = SELECT_CATEGORY;
    constructor(public payload: number){}
  }

  
  export type CategoryActions = SelectCategory
  