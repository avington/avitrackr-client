import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryTaskListContainerComponent } from './container/summary-task-list-container/summary-task-list-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('sharedComponents', fromStore.sharedComponentReducers)],
  declarations: [SummaryTaskListContainerComponent],
  exports: [SummaryTaskListContainerComponent]
})
export class SharedComponentsModule {}
