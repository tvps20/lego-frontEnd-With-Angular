import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuardService } from './guard/login.guard';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
        {
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
