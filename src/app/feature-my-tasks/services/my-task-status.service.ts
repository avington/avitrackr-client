import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MyTaskStatus } from '../models/my-tasks';

@Injectable()
export class MyTaskStatusesService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<MyTaskStatus>(`${environment.apiRoot}MyTaskStatuses`);
  }
}
