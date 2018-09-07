import { Action } from '@ngrx/store';
import { MyTaskQuery } from '../../models/my-task-query';
import { MyTask } from '../../models/my-tasks';
import { SummaryResonse } from '../../../core/models/summary-response-model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MyTasksActionTypes {
  Load = '[MyTasks] Load',
  LoadSuccess = '[MyTasks] LoadSuccess',
  LoadFailed = '[MyTasks] LoadFailed'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Load implements Action {
  readonly type = MyTasksActionTypes.Load;

  constructor(public payload: MyTaskQuery) {}
}

export class LoadSuccess implements Action {
  readonly type = MyTasksActionTypes.LoadSuccess;

  constructor(public payload: SummaryResonse<MyTask[]>) {}
}

export class LoadFailed implements Action {
  readonly type = MyTasksActionTypes.LoadFailed;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MyTasksActions = Load | LoadSuccess | LoadFailed;
