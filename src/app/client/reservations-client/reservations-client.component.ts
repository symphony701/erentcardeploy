import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../../services/reservation-service";
import {Reservation} from "../../common/model/reservation";
import {NbDialogService} from "@nebular/theme";
import {PayClientComponent} from "../pay-client/pay-client.component";

@Component({
  selector: 'app-reservations-client',
  templateUrl: './reservations-client.component.html',
  styleUrls: ['./reservations-client.component.css']
})
export class ReservationsClientComponent implements OnInit {
  id:number
  reservations:any
  constructor(private reservationService:ReservationService,private dialogService:NbDialogService) {
    this.id=Number(localStorage.getItem('userId'))
  }
  /*clickCancelPay(reservationId:number){
    this.reservationService.cancelPay(reservationId).subscribe(response=>{
      console.log(response)
      this.reservationService.getReservationsByClient(this.id).subscribe(response2=>{
        this.reservations=response2.content
      })
    })
  }*/
  clickCancel(reservationId:number){
    this.reservationService.cancel(reservationId).subscribe(response=>{
      console.log(response)
      this.reservationService.getReservationsByClient(this.id).subscribe(response=>{
        this.reservations=response.content
      })
    })
  }
  open(reservationId:string){
    localStorage.setItem('reservationId', reservationId);
    this.dialogService.open(PayClientComponent,{context:reservationId}).onClose.subscribe(a=>{
      this.reservationService.getReservationsByClient(this.id).subscribe(response=>{
        this.reservations=response.content
      })
    })
  }
  ngOnInit(): void {
    this.reservationService.getReservationsByClient(this.id).subscribe(response=>{
      this.reservations=response.content
      console.log(response.content)
    })
  }

}
