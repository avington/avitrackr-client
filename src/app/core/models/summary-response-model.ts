import { PagingInfo } from './paging-model';

export interface SummaryResonse<T> {
  summary: T;
  pagingInfo: PagingInfo;
}
