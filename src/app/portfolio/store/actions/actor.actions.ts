import {Action} from '@ngrx/store';

export const CLEAR_ACTORS = '[Actors] Clear Actors';
export const COMBINE_ACTORS = '[Actors] Combine Actors';
export const SET_ACTORS = '[Actors] Set Actors';
export const ADD_ACTORS = '[Actors] Add Actors';


  export class ClearActors implements Action {
    readonly type = CLEAR_ACTORS;
    constructor(public payload: number){}
  }

export class CombineActors implements Action {
  readonly type = COMBINE_ACTORS;
  constructor(){}
}
export class AddActors implements Action {
  readonly type = CLEAR_ACTORS;
  constructor(public payload: Object){
  }
}

export type ActorActions = ClearActors | CombineActors | AddActors
