import * as fromActions from '../actions/profile-actions';
import { UserProfile } from '../../../core/models/user-profile.model';

export interface ProfileState {
  entity: UserProfile;
  loaded: boolean;
  loading: boolean;
  error?: any;
}

const initialState: ProfileState = {
  entity: null,
  loaded: false,
  loading: false,
  error: null
};

export function reducer(state = initialState, action: fromActions.Actions): ProfileState {
  switch (action.type) {
    case fromActions.ActionTypes.Load: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      };
    }

    case fromActions.ActionTypes.LoadSuccess: {
      return {
        ...state,
        entity: action.payload,
        loading: false,
        loaded: true,
        error: null
      };
    }

    case fromActions.ActionTypes.LoadFail: {
      return {
        ...state,
        entity: null,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getProfileEntity = (state: ProfileState) => state.entity;
export const getProfileLoading = (state: ProfileState) => state.loading;
export const getProfileLoaded = (state: ProfileState) => state.loaded;
export const getProfileError = (state: ProfileState) => state.error;
