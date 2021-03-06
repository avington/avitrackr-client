import * as RouterActions from '../actions/router-actions';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {Location} from '@angular/common';

@Injectable()
export class RouterEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ){}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActions.GO),
    map((action: RouterActions.GoAction) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
    .pipe(
      ofType(RouterActions.BACK),
      tap(() => this.location.back())
    );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
    .pipe(
      ofType(RouterActions.FORWARD),
      tap(() => this.location.forward())
    );


}
