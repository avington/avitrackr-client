import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'avi-profile-side-nav',
  templateUrl: './profile-side-nav.component.html',
  styleUrls: ['./profile-side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
