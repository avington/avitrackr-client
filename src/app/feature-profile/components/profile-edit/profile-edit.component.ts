import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '../../../core/models/user-profile.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { get } from 'lodash';

@Component({
  selector: 'avi-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditComponent implements OnInit {
  @Input()
  profile: UserProfile;

  @Output()
  updateProfile = new EventEmitter<UserProfile>();

  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      firstName: [get(this, 'profile.firstName', '')],
      lastName: [get(this, 'profile.lastName', '')]
    });
  }

  onSubmit() {
    const profile = {
      ...this.profile,
      ...this.editProfileForm.value
    };
    this.updateProfile.emit(profile);
  }
}
