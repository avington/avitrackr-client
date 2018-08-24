import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions';
import { ProfileDataService } from '../../services/profile-data.service';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { UserProfile } from '../../../core/models/user-profile.model';

@Injectable()
export class ProfileEffects {
  @Effect()
  loadProfile$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ActionTypes.Load),
    exhaustMap(() => {
      return this.profileData.getProfile().pipe(
        map((data: UserProfile) => new fromActions.LoadProfileSuccess(data)),
        catchError(err => of(new fromActions.LoadProfileFail(err)))
      );
    })
  );

  constructor(private actions$: Actions, private profileData: ProfileDataService) {}
}
