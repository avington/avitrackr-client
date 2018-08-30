import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './container/home-page/home-page.component';
import { SharedLayoutsModule } from '../shared-layouts/shared-layouts.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { NotFoundPageComponent } from './container/not-found-page/not-found-page.component';

@NgModule({
  imports: [CommonModule, SharedLayoutsModule, SharedComponentsModule],
  declarations: [HomePageComponent, NotFoundPageComponent]
})
export class FeatureHomeModule {}
