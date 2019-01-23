
import { MyTask } from '../../models/my-tasks';
import * as fromActions from '../actions/update-status-task.actions';

export interface UpdateTaskStatusState {
    entity: MyTask;
    loading: boolean;
    loaded: boolean;
    error?: any;
}

const initialState: UpdateTaskStatusState = {
    entity: null,
    loading: false,
    loaded: false
};

export function updateTaskStatusReducer(state = initialState, action: fromActions.UpdateTaskStatusActions): UpdateTaskStatusState {
    switch (action.type) {
        case fromActions.UpdateTaskStatusActionTypes.UpdateTaskStatus: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.UpdateTaskStatusActionTypes.UpdateTaskStatusSuccess: {
            return {
                ...state,
                loading: false,
                loaded: true,
                entity: action.payload
            };
        }

        case fromActions.UpdateTaskStatusActionTypes.UpdateTaskStatusFailed: {
            return {
                ...state,
                loading: false,
                loaded: false,
                entity: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

const getEntityStatusUpdated = (state: UpdateTaskStatusState) => state.entity;
const getEntityStatusUpdatedLoaded = (state: UpdateTaskStatusState) => state.loaded;
const getEntityStatusUpdatedLoading = (state: UpdateTaskStatusState) => state.loading;
const getEntityStatusUpdatedError = (state: UpdateTaskStatusState) => state.error;
