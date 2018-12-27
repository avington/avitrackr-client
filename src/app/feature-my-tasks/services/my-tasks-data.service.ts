import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { PagingInfo } from '../../core/models/paging-model';
import { SummaryResonse } from '../../core/models/summary-response-model';
import { MyTask } from '../models/my-tasks';
import { environment } from '../../../environments/environment';
import { MyTaskQuery } from '../models/my-task-query';

@Injectable()
export class MyTasksService {
  constructor(private httpClient: HttpClient) {}

  getMyTasks(query: MyTaskQuery) {
    return this.httpClient.get<SummaryResonse<MyTask[]>>(
      `${environment.apiRoot}mytasks?skip=${query.skip}&take=${query.take}&openOnly=${query.openOnly}`
    );
  }

  addMyTask(myTask: MyTask) {
    return this.httpClient.post<MyTask>(`${environment.apiRoot}mytasks`, myTask);
  }

  updateMyTaskStatus<myTask>(myTask: MyTask) {
    return this.httpClient.patch(`${ environment.apiRoot }mytasks/${myTask.identifier}/UpdateStatus`, myTask);
  }

}
