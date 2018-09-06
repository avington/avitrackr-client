import { PagingInfo } from './paging-model';

export interface SummaryResonse<T> {
  sumamry: T;
  pagingInfo: PagingInfo;
}
