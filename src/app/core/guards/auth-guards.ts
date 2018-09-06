import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import * as fromRootStore from '../../store';
import { Store } from '@ngrx/store';
import { getIsLoggedInFromState } from '../store/selectors/auth-selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private rootStore: Store<fromRootStore.State>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.rootStore.select(getIsLoggedInFromState);
  }
}
