import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {SharedModule} from "../common/common.module";
import { CommonModule } from '@angular/common';
/*import {DashboardComponent} from "../common/dashboard/dashboard.component";*/
import {NebularComponentModule} from "../nebular-component";
import {FormsModule} from "@angular/forms";
import {NbCheckboxModule, NbDialogModule,NbDatepickerModule} from "@nebular/theme";
import {ClientRoutingModule} from "./client-routing.module";
import { HomeClientComponent } from './home-client/home-client.component';
import { CarClientComponent } from './car-client/car-client.component';
import { ReservationsClientComponent } from './reservations-client/reservations-client.component';
import { PayClientComponent } from './pay-client/pay-client.component';
import { RentsClientComponent } from './rents-client/rents-client.component';
import { CarCardComponent } from './car-card/car-card.component';
import { RatingCarOwnerComponent } from './rating-car-owner/rating-car-owner.component';
import { ModelFilterPipe } from './pipes/model-filter.pipe';
import { OwnerInfoComponent } from './owner-info/owner-info.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';

@NgModule({
  declarations:[
    /*DashboardComponent,*/
    HomeClientComponent,
    CarClientComponent,
    ReservationsClientComponent,
    PayClientComponent,
    RentsClientComponent,
    CarCardComponent,
    RatingCarOwnerComponent,
    ModelFilterPipe,
    OwnerInfoComponent,
    ProfileClientComponent
  ],
  imports:[
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    NebularComponentModule,
    FormsModule,
    NbDialogModule.forChild(),
    NbCheckboxModule,
    NbDatepickerModule.forRoot(),
  ]
})
export class ClientModule{}
