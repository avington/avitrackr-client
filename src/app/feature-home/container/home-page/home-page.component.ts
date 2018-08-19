import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCoreStore from '../../../core/store';
import {getIsLoggedInFromState} from '../../../core/store/selectors/auth-selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'avi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  constructor(private rootStore: Store<fromCoreStore.CoreState>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.rootStore.select(getIsLoggedInFromState);
  }
}
