import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  SetProfile = '[Auth] SetProfile'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload?: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor(public payload?: any) {}
}

export class SetProfile implements Action {
  readonly type = AuthActionTypes.SetProfile;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AuthActions = Login | Logout | SetProfile;
