import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions/notification-actions';
import { map, debounce, switchMap, throttleTime } from 'rxjs/operators';
import { AppNotification } from '../../models/notification.model';

@Injectable()
export class NotificationEffects {
    @Effect() name$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.NotificationActionTypes.Show),
        map((action: fromActions.Show) => action.payload.duration || 100),
        switchMap((result: number) => {
            return of(new fromActions.Hide())
                .pipe(throttleTime(result));
        })
    );

    constructor(
        private actions$: Actions
    ) { }
}
