import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './container/home-page/home-page.component';
import {SharedLayoutsModule} from '../shared-layouts/shared-layouts.module';

@NgModule({
  imports: [
    CommonModule,
    SharedLayoutsModule
  ],
  declarations: [HomePageComponent]
})
export class FeatureHomeModule { }
