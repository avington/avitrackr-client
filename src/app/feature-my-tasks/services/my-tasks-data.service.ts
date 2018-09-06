import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PagingInfo } from '../../core/models/paging-model';
import { SummaryResonse } from '../../core/models/summary-response-model';
import { MyTask } from '../models/my-tasks.interface';
import { environment } from '../../../environments/environment';
import { MyTaskQuery } from '../models/my-task-query.interface';

@Injectable()
export class MyTasksService {
  constructor(private httpClient: HttpClient) {}

  getMyTasks(query: MyTaskQuery) {
      return this.httpClient.get<SummaryResonse<MyTask[]>>(
          `${environment.apiRoot}mytasks?skip=${query.skip}&take=${query.take}&openOnly=${query.openOnly}`
        );
  }
}
