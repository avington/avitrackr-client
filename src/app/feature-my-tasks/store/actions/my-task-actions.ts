import { Action } from '@ngrx/store';
import { MyTask } from '../../models/my-tasks';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MyTaskActionTypes {
  InsertTask = '[MyTask] InsertTask',
  InsertTaskSuccess = '[MyTask] InsertTaskSuccess',
  InsertTaskFailed = '[MyTask] InsertTaskFailed'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class InsertTask implements Action {
  readonly type = MyTaskActionTypes.InsertTask;

  constructor(public payload: MyTask) {}
}

export class InsertTaskSuccess implements Action {
  readonly type = MyTaskActionTypes.InsertTaskSuccess;

  constructor(public payload: MyTask) {}
}

export class InsertTaskFailed implements Action {
  readonly type = MyTaskActionTypes.InsertTaskFailed;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MyTaskActions = InsertTask | InsertTaskSuccess | InsertTaskFailed;
