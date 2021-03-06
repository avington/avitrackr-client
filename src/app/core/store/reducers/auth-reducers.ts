import * as fromAction from '../actions/auth-actions';

export interface AuthState {
  isLoggedIn: boolean;
  profileEmail?: string;
}

const initialState: AuthState = {
  isLoggedIn: false
};

export function reducer(state = initialState, action: fromAction.AuthActions): AuthState {
  switch (action.type) {
    case fromAction.AuthActionTypes.Login: {
      return {
        ...state,
        isLoggedIn: true
      };
    }

    case fromAction.AuthActionTypes.Logout: {
      return {
        ...state,
        isLoggedIn: false,
        profileEmail: null
      };
    }

    case fromAction.AuthActionTypes.SetProfile: {
      return {
        ...state,
        profileEmail: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getIsLoggedIn = (state: AuthState) => state.isLoggedIn;
