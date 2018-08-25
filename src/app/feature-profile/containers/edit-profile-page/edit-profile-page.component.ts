import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRootStore from '../../../store';
import * as fromStore from '../../store';

import {
  getEntityFromProfileState,
  getLoadedFromProfileState,
  getLoadingFromProfileState
} from '../../store/selectors/profile-selectors';
import { filter, tap } from 'rxjs/operators';
import { UserProfile } from '../../../core/models/user-profile.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'avi-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {
  @Input()
  url: string;

  profile$: Observable<UserProfile>;
  isLoading$: Observable<boolean>;

  constructor(private rootStore: Store<fromRootStore.State>, private store: Store<fromStore.FeatureProfileState>) {}

  ngOnInit() {
    // only load profile if it has not been loaded
    this.store.pipe(select(getLoadedFromProfileState)).subscribe(loaded => {
      if (!loaded) {
        this.store.dispatch(new fromStore.LoadProfile());
      }
    });

    this.profile$ = this.store.pipe(select(getEntityFromProfileState));
    this.isLoading$ = this.store.pipe(select(getLoadingFromProfileState));

    this.rootStore.pipe(select(fromRootStore.getRouterState)).subscribe(r => {
      this.url = r.state.url;
    });
  }

  onUpdateProfile($event) {
    console.log('user profile updated', $event);
    this.store.dispatch(new fromStore.UpdateProfile($event));
  }
}
