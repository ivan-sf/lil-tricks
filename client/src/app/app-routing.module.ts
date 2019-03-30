import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrickListComponent } from './components/trick-list/trick-list.component'
import { TrickFormComponent } from './components/trick-form/trick-form.component'
import { AboutComponent } from './components/about/about.component'

const routes: Routes = [
  {
    path: '',
    redirectTo:'/tricks',
    pathMatch:'full'
  },
  {
    path:'tricks',
    component: TrickListComponent 
  },
  {
    path:'tricks/add',
    component: TrickFormComponent
  },
  {
    path:'tricks/edit/:id',
    component: TrickFormComponent
  },
  {
    path:'tricks/about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
