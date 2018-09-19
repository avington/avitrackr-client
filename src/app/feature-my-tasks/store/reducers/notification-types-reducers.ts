import * as fromAction from '../actions/notification-type-actions';
import { NotificationType } from '../../models/my-tasks';

export interface NotificationTypeState {
  list: NotificationType[];
  loading: boolean;
  loaded: boolean;
  error?: any;
}

const initialState: NotificationTypeState = {
  list: null,
  loading: false,
  loaded: false
};

export function notificationTypeReducer(
  state = initialState,
  action: fromAction.NotificationTypeActions
): NotificationTypeState {
  switch (action.type) {
    case fromAction.NotificationTypeActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAction.NotificationTypeActionTypes.LoadSuccess: {
      return {
        ...state,
        list: action.payload,
        loading: false,
        loaded: true
      };
    }

    case fromAction.NotificationTypeActionTypes.LoadFail: {
      return {
        ...state,
        list: null,
        loading: false,
        loaded: true,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getNotificationTypeList = (state: NotificationTypeState) => state.list;
export const getNotificationTypeListLoading = (state: NotificationTypeState) => state.loading;
export const getNotificationTypeListLoaded = (state: NotificationTypeState) => state.loaded;
export const getNotificationTypeListError = (state: NotificationTypeState) => state.error;
