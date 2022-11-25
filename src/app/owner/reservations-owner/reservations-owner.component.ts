import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../common/model/reservation";
import {ReservationService} from "../../../services/reservation-service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservations-owner',
  templateUrl: './reservations-owner.component.html',
  styleUrls: ['./reservations-owner.component.css']
})
export class ReservationsOwnerComponent implements OnInit {
  id:number
  reservations:any
  constructor(private reservationService:ReservationService,private router:Router) {
    this.id=Number(localStorage.getItem('userId'))
  }
  decline(reservationId:number,reservation:any){
    this.reservationService.decline(reservationId).subscribe(response=>{
      console.log(response)
      /*this.reservationService.getReservationsByOwner(this.id).subscribe(response2=>{
        this.reservations=response2.content
      })*/
      reservation.status=2
    })
  }
  accept(reservationId:number,reservation:any){
    this.reservationService.accept(reservationId).subscribe(response=>{
      console.log(response)
      /*this.reservationService.getReservationsByOwner(this.id).subscribe(response2=>{
        this.reservations=response2.content
      })*/
      reservation.status=1
    })
  }
  toClient(id:number){
    this.router.navigate([`/DashboardOwner/My-Reservations/client/${id}`])
  }
  ngOnInit(): void {
    this.reservationService.getReservationsByOwner(this.id).subscribe(response=>{
      this.reservations=response.content
      console.log(this.reservations)
    })
  }

}
