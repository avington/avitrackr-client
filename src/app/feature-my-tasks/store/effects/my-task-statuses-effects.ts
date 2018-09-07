import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { MyTaskStatusesService } from '../../services/my-task-status.service';
import { MyTaskStatus } from '../../models/my-tasks';

@Injectable()
export class MyTaskStatusesEffects {
  @Effect()
  myTaskStatuses$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.MyTaskStatusesActionTypes.Load),
    exhaustMap(() => {
      return this.myTaskStatusesData.get().pipe(
        map((response: MyTaskStatus[]) => new fromActions.MyTaskStatusesSuccess(response)),
        catchError((error: any) => of(new fromActions.MyTaskStatusesFail(error)))
      );
    })
  );

  constructor(private actions$: Actions, private myTaskStatusesData: MyTaskStatusesService) {}
}
