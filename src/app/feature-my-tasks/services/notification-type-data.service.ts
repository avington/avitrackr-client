import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class NotificationTypeDataService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(`${environment.apiRoot}NotificationTypes`);
  }
}
