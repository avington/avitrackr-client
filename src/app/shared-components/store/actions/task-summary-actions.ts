import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum TaskSummaryActionTypes {
  Load = '[TaskSummary] Load',
  LoadSuccess = '[TaskSummary] LoadSuccess',
  LoadFail = '[TaskSummary] LoadFAil'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Load implements Action {
  readonly type = TaskSummaryActionTypes.Load;

  constructor(public payload?: any) {}
}

export class LoadSuccess implements Action {
  readonly type = TaskSummaryActionTypes.LoadSuccess;

  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = TaskSummaryActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TaskSummaryActions = Load | LoadSuccess | LoadFail;
