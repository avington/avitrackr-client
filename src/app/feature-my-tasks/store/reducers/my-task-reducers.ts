import { MyTask } from '../../models/my-tasks';
import * as fromActions from '../actions';

export interface MyTaskState {
  entity: MyTask;
  loading: boolean;
  loaded: boolean;
  error?: any;
}

const initialState: MyTaskState = {
  entity: null,
  loading: false,
  loaded: false
};

export function myTaskReducer(state = initialState, action: fromActions.MyTaskActions): MyTaskState {
  switch (action.type) {
    case fromActions.MyTaskActionTypes.InsertTask: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.MyTaskActionTypes.InsertTaskSuccess:
    case fromActions.MyTaskActionTypes.SetCurrentTask: {
      return {
        ...state,
        entity: action.payload,
        loading: false,
        loaded: true
      };
    }

    case fromActions.MyTaskActionTypes.InsertTaskFailed: {
      return {
        ...state,
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

export const getMyTaskEntity = (state: MyTaskState) => state.entity;
export const getMyTaskEntityLoaded = (state: MyTaskState) => state.loaded;
export const getMyTaskEntityLoading = (state: MyTaskState) => state.loading;
export const getMyTaskEntityError = (state: MyTaskState) => state.error;
