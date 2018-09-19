import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAction from '../actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { NotificationTypeDataService } from '../../services/notification-type-data.service';
import { NotificationType } from '../../models/my-tasks';

@Injectable()
export class NotificationTypeEffects {
  @Effect()
  notificationTypeList$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.NotificationTypeActionTypes.Load),
    exhaustMap(() => {
      return this.data.get().pipe(
        map((response: NotificationType[]) => new fromAction.LoadNotificationTypesSuccess(response)),
        catchError((err: any) => of(new fromAction.LoadNotificationTypesFail(err)))
      );
    })
  );

  constructor(private actions$: Actions, private data: NotificationTypeDataService) {}
}
