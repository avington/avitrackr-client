import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromRootStore from '../../../store';
import * as fromStore from '../../store';
import {getEntityFromProfileState, getLoadingFromProfileState} from '../../store/selectors/profile-selectors';
import {Observable} from 'rxjs';
import {UserProfile} from '../../../core/models/user-profile.model';

@Component({
  selector: 'avi-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  url: string;

  profile$: Observable<UserProfile>;
  isLoading$: Observable<boolean>;

  constructor(private rootStore: Store<fromRootStore.State>, private store: Store<fromStore.FeatureProfileState>) {
  }

  ngOnInit() {

    this.store.dispatch(new fromStore.LoadProfile());

    this.profile$ = this.store.pipe(
      select(getEntityFromProfileState)
    );

    this.isLoading$ = this.store.pipe(
      select(getLoadingFromProfileState)
    );

    this.rootStore.pipe(
      select(fromRootStore.getRouterState)
    ).subscribe(r => {
      this.url = r.state.url;
    });

  }

}
