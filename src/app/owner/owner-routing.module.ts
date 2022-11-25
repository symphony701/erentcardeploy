import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileOwnerComponent} from "./profile-owner/profile-owner.component";
import {ReservationsOwnerComponent} from "./reservations-owner/reservations-owner.component";
import {RentsOwnerComponent} from "./rents-owner/rents-owner.component";
import {PlansOwnerComponent} from "./plans-owner/plans-owner.component";
import {ClientInfoComponent} from "./client-info/client-info.component";


const routes: Routes = [
  {
    path:'Profile',component:ProfileOwnerComponent
  },
  {
    path:'My-Reservations',component:ReservationsOwnerComponent
  },
  {
    path:'My-Rents',component:RentsOwnerComponent
  },
  {
    path:'Plans',component:PlansOwnerComponent
  },
  {
    path:'My-Reservations/client/:id',component:ClientInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
