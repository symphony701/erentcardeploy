import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {SharedModule} from "../common/common.module";
import { CommonModule } from '@angular/common';
/*import {DashboardComponent} from "../common/dashboard/dashboard.component";*/
import {OwnerRoutingModule} from "./owner-routing.module";
import {NebularComponentModule} from "../nebular-component";
import {FormsModule} from "@angular/forms";
import { ProfileOwnerComponent } from './profile-owner/profile-owner.component';
import { CreateCarComponent } from './create-car/create-car.component';
import {NbCheckboxModule, NbDialogModule} from "@nebular/theme";
import {NbCheckboxComponent} from "@nebular/theme";
import { ReservationsOwnerComponent } from './reservations-owner/reservations-owner.component';
import { RentsOwnerComponent } from './rents-owner/rents-owner.component';
import { PlansOwnerComponent } from './plans-owner/plans-owner.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { RatingClientComponent } from './rating-client/rating-client.component';

@NgModule({
  declarations: [
    /*DashboardComponent,*/
    ProfileOwnerComponent,
    CreateCarComponent,
    ReservationsOwnerComponent,
    RentsOwnerComponent,
    PlansOwnerComponent,
    ClientInfoComponent,
    RatingClientComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    NebularComponentModule,
    FormsModule,
    NbDialogModule.forChild(),
    NbCheckboxModule
  ]
})
export class OwnerModule { }
