import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserProfile } from '../../core/models/user-profile.model';

@Injectable()
export class ProfileDataService {
  constructor(private httpClient: HttpClient) {}

  getProfile() {
    return this.httpClient.get(`${environment.apiRoot}profile`);
  }

  updateProfile(profile: UserProfile) {
    return this.httpClient.put<UserProfile>(`${environment.apiRoot}profile`, profile);
  }
}
