import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromAction from '../actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { MyTasksService } from '../../services/my-tasks-data.service';
import { MyTask } from '../../models/my-tasks';

@Injectable()
export class NameEffects {
    @Effect() name$: Observable<Action> = this.actions$.pipe(
        ofType(fromAction.UpdateTaskStatusActionTypes.UpdateTaskStatus),
        map((action: fromAction.UpdateTaskStatus) => action.payload),
        exhaustMap((payload: MyTask) => {
            return this.data.updateMyTaskStatus(payload).pipe(
                map((response: MyTask) => new fromAction.UpdateTaskStatusSuccess(response)),
                catchError((err: any) => of(new fromAction.UpdateTaskStatusFailed(err))
                )
            );
        })
    );

    constructor(
        private actions$: Actions, private data: MyTasksService
    ) { }
}
