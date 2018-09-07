import * as fromActions from '../actions';
import { MyTaskStatus } from '../../models/my-tasks';

export interface MyTaskStatusesState {
  list: MyTaskStatus[];
  loading: boolean;
  loaded: boolean;
  error?: any;
}

const initialState: MyTaskStatusesState = {
  list: null,
  loaded: false,
  loading: false
};

export function myTaskStatusReducer(
  state = initialState,
  action: fromActions.MyTaskStatusesActions
): MyTaskStatusesState {
  switch (action.type) {
    case fromActions.MyTaskStatusesActionTypes.Load: {
      return { ...state, loading: true };
    }

    case fromActions.MyTaskStatusesActionTypes.Success: {
      return { ...state, list: action.payload, loading: false, loaded: true };
    }

    case fromActions.MyTaskStatusesActionTypes.Success: {
      return { ...state, list: null, loading: false, loaded: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
}

export const getMyTaskStatusList = (state: MyTaskStatusesState) => state.list;
export const getMyTaskStatusListLoading = (state: MyTaskStatusesState) => state.loading;
export const getMyTaskStatusListLoaded = (state: MyTaskStatusesState) => state.loaded;
export const getMyTaskStatusListError = (state: MyTaskStatusesState) => state.error;
