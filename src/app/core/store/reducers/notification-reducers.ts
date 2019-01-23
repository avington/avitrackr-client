import * as fromActions from '../actions/notification-actions';

export interface NotificationState {
    text: string;
    type: string;
    show: boolean;
    duration?: number;
};

const initialState: NotificationState = {
    text: '',
    type: 'default',
    show: false
};

export function notificationReducer(state = initialState, action: fromActions.NotificationActions): NotificationState {
    switch (action.type) {
        case fromActions.NotificationActionTypes.Show: {
            return {
                ...state,
                text: action.payload.text,
                type: action.payload.type || 'default',
                show: true,
                duration: action.payload.duration || 100
            };
        }

        case fromActions.NotificationActionTypes.Hide: {
            return { ...initialState };
        }

        default: {
            return state;
        }
    }
}
