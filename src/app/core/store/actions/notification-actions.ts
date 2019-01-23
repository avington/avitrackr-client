import { Action } from '@ngrx/store';
import { AppNotification } from '../../models/notification.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum NotificationActionTypes {
    Show = '[Notification] Show',
    Hide = '[Notification] Hide'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Show implements Action {
    readonly type = NotificationActionTypes.Show;

    constructor(public payload?: AppNotification) { }
}

export class Hide implements Action {
    readonly type = NotificationActionTypes.Hide;

    constructor(public payload?: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type NotificationActions
                        = Show
                        | Hide;
