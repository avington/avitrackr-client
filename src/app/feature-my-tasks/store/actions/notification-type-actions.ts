import { Action } from '@ngrx/store';
import { NotificationType } from '../../models/my-tasks';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum NotificationTypeActionTypes {
  Load = '[NotificationType] Load',
  LoadSuccess = '[NotificationType] LoadSuccess',
  LoadFail = '[NotificationType] LoadFail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadNotificationTypes implements Action {
  readonly type = NotificationTypeActionTypes.Load;

  constructor(public payload?: any) {}
}

export class LoadNotificationTypesSuccess implements Action {
  readonly type = NotificationTypeActionTypes.LoadSuccess;

  constructor(public payload: NotificationType[]) {}
}

export class LoadNotificationTypesFail implements Action {
  readonly type = NotificationTypeActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type NotificationTypeActions = LoadNotificationTypes | LoadNotificationTypesSuccess | LoadNotificationTypesFail;
