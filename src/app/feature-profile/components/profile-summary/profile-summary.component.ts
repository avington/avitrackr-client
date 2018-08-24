import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserProfile } from '../../../core/models/user-profile.model';

@Component({
  selector: 'avi-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSummaryComponent implements OnInit {
  @Input()
  profile: UserProfile;

  constructor() {}

  ngOnInit() {}
}
