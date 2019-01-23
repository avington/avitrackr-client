import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as fromAction from '../actions';
import * as fromCoreAction from '../../../core/store/actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { MyTask } from '../../models/my-tasks';
import { MyTasksService } from '../../services/my-tasks-data.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class UpdateTaskStatusEffects {
    @Effect() updateStatus$: Observable<Action> = this.actions$.pipe(
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

    @Effect() updateStatusSuccess$: Observable<Action> = this.actions$.pipe(
        ofType(fromAction.UpdateTaskStatusActionTypes.UpdateTaskStatusSuccess),
        map((action: fromAction.UpdateTaskStatusSuccess) => action.payload),
        tap(() => this.toastr.success('Task Status', 'Task Status Updated')),
        exhaustMap(() => of(new fromCoreAction.Show()))
    );

    constructor(
        private actions$: Actions,
        private data: MyTasksService,
        private toastr: ToastrService
    ) { }
}
