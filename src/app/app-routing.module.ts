import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './feature-home/container/home-page/home-page.component';
import { NotFoundPageComponent } from './feature-home/container/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'profile',
    loadChildren: './feature-profile/feature-profile.module#FeatureProfileModule'
  },
  {
    path: 'my-tasks',
    loadChildren: './feature-my-tasks/feature-my-tasks.module#FeatureMyTasksModule'
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
