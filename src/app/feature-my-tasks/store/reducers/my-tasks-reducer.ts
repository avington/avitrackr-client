import * as fromMyTasksAction from '../actions/my-tasks-actions';
import { MyTask } from '../../models/my-tasks';
import { PagingInfo } from '../../../core/models/paging-model';

export interface MyTaskListState {
  list: MyTask[];
  pagingInfo: PagingInfo;
  loading: boolean;
  loaded: boolean;
  error?: any;
}

const initialState: MyTaskListState = {
  list: null,
  pagingInfo: null,
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromMyTasksAction.MyTasksActions): MyTaskListState {
  switch (action.type) {
    case fromMyTasksAction.MyTasksActionTypes.Load: {
      return { ...state, loading: true };
    }

    case fromMyTasksAction.MyTasksActionTypes.LoadSuccess: {
      const list = action.payload.summary;
      const pagingInfo = action.payload.pagingInfo;

      return { ...state, loading: false, loaded: true, pagingInfo, list };
    }

    case fromMyTasksAction.MyTasksActionTypes.LoadFailed: {
      return { ...state, loading: false, loaded: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
}

const getMyTaskList = (state: MyTaskListState) => state.list;
const getMyTaskListPagingInfo = (state: MyTaskListState) => state.pagingInfo;
const getMyTaskListLoaded = (state: MyTaskListState) => state.loaded;
const getMyTaskListLoading = (state: MyTaskListState) => state.loading;
