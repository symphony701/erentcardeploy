import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeClientComponent} from "./home-client/home-client.component";
import {CarClientComponent} from "./car-client/car-client.component";
import {ReservationsClientComponent} from "./reservations-client/reservations-client.component";
import {RentsClientComponent} from "./rents-client/rents-client.component";
import {OwnerInfoComponent} from "./owner-info/owner-info.component";
import {ProfileClientComponent} from "./profile-client/profile-client.component";



const routes: Routes = [
  /*{
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
  }*/
  {
    path:'Home',component:HomeClientComponent
  },
  {
    path:'My-Reservations',component:ReservationsClientComponent
  },
  {
    path:'Profile',component:ProfileClientComponent
  },
  {
    path:'Home/Car/:id',component:CarClientComponent
  },
  {
    path:'Home/Car/Owner/:id',component:OwnerInfoComponent
  },
  {
    path:'My-Rents',component:RentsClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
