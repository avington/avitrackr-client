import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCoreStore from '../../../core/store';
import { getIsLoggedInFromState } from '../../../core/store/selectors/auth-selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'avi-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private rootStore: Store<fromCoreStore.CoreState>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.rootStore.select(getIsLoggedInFromState);
  }

  login() {
    console.log('login');
  }
}
