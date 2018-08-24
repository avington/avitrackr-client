import { Action } from '@ngrx/store';
import { UserProfile } from '../../../core/models/user-profile.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ActionTypes {
  Load = '[Profile] Load',
  LoadSuccess = '[Profile] Load Success',
  LoadFail = '[Profile] Load Fail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadProfile implements Action {
  readonly type = ActionTypes.Load;

  constructor(public payload?: any) {}
}

export class LoadProfileSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: UserProfile) {}
}

export class LoadProfileFail implements Action {
  readonly type = ActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = LoadProfile | LoadProfileSuccess | LoadProfileFail;
