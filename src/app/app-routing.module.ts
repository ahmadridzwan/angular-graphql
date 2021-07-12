import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LaunchListComponent,
  },
  {
    path: ':id',
    component: LaunchDetailsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
