import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCoreStore from '../../../core/store';
import { getIsLoggedInFromState, getProfileNameFromState } from '../../../core/store/selectors/auth-selectors';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'avi-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  profileName$: Observable<string>;
  constructor(private rootStore: Store<fromCoreStore.CoreState>, private auth: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.rootStore.select(getIsLoggedInFromState);
    this.profileName$ = this.rootStore.select(getProfileNameFromState);
  }

  login() {
    console.log('login');
    this.auth.login();
  }

  logout() {
    console.log('logout');
    this.auth.logout();
  }
}
