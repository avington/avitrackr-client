import { Action } from '@ngrx/store';
import { MyTaskStatus } from '../../models/my-tasks';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MyTaskStatusesActionTypes {
  Load = '[MyTaskStatuses] Load',
  Success = '[MyTaskStatuses] Success',
  Fail = '[MyTaskStatuses] Fail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class MyTaskStatusesLoad implements Action {
  readonly type = MyTaskStatusesActionTypes.Load;

  constructor(public payload?: any) {}
}

export class MyTaskStatusesSuccess implements Action {
  readonly type = MyTaskStatusesActionTypes.Success;

  constructor(public payload: MyTaskStatus[]) {}
}

export class MyTaskStatusesFail implements Action {
  readonly type = MyTaskStatusesActionTypes.Fail;

  constructor(public payload: MyTaskStatus[]) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MyTaskStatusesActions = MyTaskStatusesLoad | MyTaskStatusesSuccess | MyTaskStatusesFail;
