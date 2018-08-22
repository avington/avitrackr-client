import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromAction from '../actions/task-summary-actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { SummaryDataService } from '../../services/summary-data.service';

@Injectable()
export class TaskSummaryEffects {
  @Effect()
  taskSummary$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.TaskSummaryActionTypes.Load),
    exhaustMap(() => {
        return this.taskSummaryData.getTasksSumamry().pipe(
            map((response: any) => new fromAction.LoadSuccess(response)),
            catchError((error: any) => of(new fromAction.Load(error)))
        );
    })
  );

  constructor(private actions$: Actions, private taskSummaryData: SummaryDataService) {}
}
