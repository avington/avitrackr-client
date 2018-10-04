import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MyTasksService } from '../../services/my-tasks-data.service';

import * as fromActions from '../actions/my-task-actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { MyTask } from '../../models/my-tasks';

@Injectable()
export class MyTaskEffects {
  @Effect()
  myTask$: Observable<Action> = this.actions$.pipe(
      ofType(fromActions.MyTaskActionTypes.InsertTask),
      map((state: fromActions.InsertTask) => state.payload),
      exhaustMap((myTask: MyTask) => {
          return this.data.addMyTask(myTask).pipe(
              map((response: MyTask) => new fromActions.InsertTaskSuccess(myTask))
          );
      }),
      catchError(err => of(new fromActions.InsertTaskFailed(err)))
  );

  constructor(private actions$: Actions, private data: MyTasksService) {}
}