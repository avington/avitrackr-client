import * as fromAction from '../actions/task-summary-actions';

export interface TaskSummaryState {
  entities: any;
  loaded: boolean;
  loading: boolean;
  error?: any;
}

const initialState: TaskSummaryState = {
  entities: null,
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromAction.TaskSummaryActions): TaskSummaryState {
  switch (action.type) {
    case fromAction.TaskSummaryActionTypes.Load: {
      return { ...state, loading: true };
    }
    case fromAction.TaskSummaryActionTypes.LoadSuccess: {
      const entities = action.payload.entities;
      return { ...state, loading: true, entities };
    }

    case fromAction.TaskSummaryActionTypes.LoadFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
        entities: null
      };
    }

    default: {
      return state;
    }
  }
}

export const getTaskSummaryEntities = (state: TaskSummaryState) => state.entities;
export const getTaskSummaryLoading = (state: TaskSummaryState) => state.loading;
export const getTaskSummaryLoaded = (state: TaskSummaryState) => state.loaded;
export const getTaskSummaryError = (state: TaskSummaryState) => state.error;
