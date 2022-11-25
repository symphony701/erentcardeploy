import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../app/login/login.component";
import {DashboardComponent} from "../app/common/dashboard/dashboard.component";
import {RegisterComponent} from "../app/register/register.component";

const routes: Routes = [
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Register',component:RegisterComponent
  },
  {
    path: 'DashboardOwner',
    component: DashboardComponent,
    loadChildren: () => import(`../app/owner/owner.module`).then(m => m.OwnerModule),
  },
  {
    path: 'DashboardClient',
    component: DashboardComponent,
    loadChildren: () => import(`../app/client/client.module`).then(m => m.ClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
