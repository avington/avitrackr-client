import { Injectable } from '@angular/core';
import { UserManager, User, WebStorageStateStore, Log } from 'oidc-client';
import { environment } from '../../../environments/environment';

import * as fromCoreStore from '../store';
import { Store } from '@ngrx/store';
import { AuthContext } from '../models/auth-context.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userManager: UserManager;
  private _user: User;
  authContext: AuthContext;

  constructor(private store: Store<fromCoreStore.CoreState>, private httpContext: HttpClient) {
    const config = {
      authority: environment.auth.stsAuthority,
      client_id: environment.auth.clientId,
      redirect_uri: `${environment.clientRoot}assets/oidc-login-redirect.html`,
      scope: 'openid projects-api profile',
      response_type: 'id_token token',
      post_logout_redirect_uri: `${environment.clientRoot}?postLogout=true`,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      automaticSilentRenew: true,
      silent_redirect_uri: `${environment.clientRoot}assets/silent-redirect.html`
    };
    this._userManager = new UserManager(config);
    this._userManager.getUser().then(user => {
      if (user && !user.expired) {
        this._user = user;
      }
      const isLoggedIn = user && user.access_token && !user.expired;
      if (isLoggedIn) {
        this.store.dispatch(new fromCoreStore.Login());
        this.store.dispatch(new fromCoreStore.SetProfile(user.profile.name));
      } else {
        this.store.dispatch(new fromCoreStore.Logout());
      }
    });
    this._userManager.events.addUserLoaded(() => {
      this._userManager.getUser().then(user => {
        this._user = user;
        if (this._user && this._user.access_token && !this._user.expired) {
          this.store.dispatch(new fromCoreStore.Login());
          this.store.dispatch(new fromCoreStore.SetProfile(user.profile.name));
        } else {
          this.store.dispatch(new fromCoreStore.Logout());
        }
      });
    });
  }

  login(): Promise<any> {
    return this._userManager.signinRedirect();
  }

  logout(): Promise<any> {
    return this._userManager.signoutRedirect();
  }

  isLoggedIn(): boolean {
    return this._user && this._user.access_token && !this._user.expired;
  }

  getAccessToken(): string {
    return this._user ? this._user.access_token : '';
  }

  signoutRedirectCallback(): Promise<any> {
    return this._userManager.signoutRedirectCallback();
  }
  loadSecurityContext() {
    /*
    this.httpClient.get<AuthContext>(`${.apiRoot}Account/AuthContext`).subscribe(
      context => {
        this.authContext = context;
      },
      error => console.error(Utils.formatError(error))
    );*/
  }
}
