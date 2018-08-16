import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngrx/store';
import * as fromCoreStore from './core/store';

@Component({
  selector: 'avi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'avitrackr-client';

  constructor(private auth: AuthService, private store: Store<fromCoreStore.CoreState>) {}

  ngOnInit(): void {
    const isLoggedIn = this.auth.isLoggedIn();
    if (isLoggedIn) {
      this.store.dispatch(new fromCoreStore.Login());
    } else {
      this.store.dispatch(new fromCoreStore.Logout());
    }
  }
}
