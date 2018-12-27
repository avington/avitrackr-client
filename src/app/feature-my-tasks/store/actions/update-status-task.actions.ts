import { Action } from '@ngrx/store';
import { MyTask } from '../../models/my-tasks';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UpdateTaskStatusActionTypes {
    UpdateTaskStatus = '[UpdateTaskStatus] UpdateTaskStatus',
    UpdateTaskStatusSuccess = '[UpdateTaskStatus] UpdateTaskStatusSuccess',
    UpdateTaskStatusFailed = '[UpdateTaskStatus] UpdateTaskStatusFailed',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class UpdateTaskStatus implements Action {
    readonly type = UpdateTaskStatusActionTypes.UpdateTaskStatus;

    constructor(public payload: MyTask) { }
}

export class UpdateTaskStatusSuccess implements Action {
    readonly type = UpdateTaskStatusActionTypes.UpdateTaskStatusSuccess;

    constructor(public payload: MyTask) { }
}

export class UpdateTaskStatusFailed implements Action {
    readonly type = UpdateTaskStatusActionTypes.UpdateTaskStatusFailed;

    constructor(public payload: MyTask) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UpdateTaskStatusActions
    = UpdateTaskStatus
    | UpdateTaskStatusSuccess
    | UpdateTaskStatusFailed;
