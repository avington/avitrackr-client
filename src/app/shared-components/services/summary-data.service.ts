import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SummaryDataService {
  constructor(private httpClient: HttpClient) {}

  getTasksSumamry() {
    return this.httpClient.get(`${environment.apiRoot}profile`);
  }
}
