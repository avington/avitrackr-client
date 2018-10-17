import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MyTasksService } from '../../services/my-tasks-data.service';
import { MyTaskQuery } from '../../models/my-task-query';
import { SummaryResonse } from '../../../core/models/summary-response-model';
import { MyTask } from '../../models/my-tasks';

@Injectable()
export class MyTaskListEffects {
  @Effect()
  myTaskList$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.MyTasksActionTypes.Load),
    map((action: fromActions.Load) => action.payload),
    exhaustMap((payload: MyTaskQuery) => {
      return this.data.getMyTasks(payload).pipe(
        map((response: SummaryResonse<MyTask[]>) => new fromActions.LoadSuccess(response)),
        catchError(err => of(new fromActions.LoadFailed(err)))
      );
    })
  );

  constructor(private actions$: Actions, private data: MyTasksService) { }
}
