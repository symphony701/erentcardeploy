import {Component, Input, OnInit, Optional} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {ReservationService} from "../../../services/reservation-service";
import {RentService} from "../../../services/rent-service";

@Component({
  selector: 'app-pay-client',
  templateUrl: './pay-client.component.html',
  styleUrls: ['./pay-client.component.css']
})
export class PayClientComponent implements OnInit {
  reservationId:number=0
  date:Date=new Date()
  dateString:string=""
  constructor(@Optional() protected dialogRef:NbDialogRef<PayClientComponent>,
             private rentService:RentService) {

  }
  close(){
    this.dialogRef.close()
  }
  clickPay(){
    this.rentService.postRent(this.reservationId).subscribe(response=>{
      console.log(response)
      this.close()
    })
    /*this.reservationService.payReservation(this.reservationId,4).subscribe(response=>{
      console.log(response)
      console.log(response)
      let month=this.date.getMonth()+1
      let aux
      if(month<10){
        aux="0"+month
      }else{
        aux=month
      }
      this.dateString=this.date.getFullYear()+"-"+aux+"-"+this.date.getDate()
      let data={
        payDate:this.dateString
      }
      this.rentService.postRent(this.reservationId,data).subscribe(response2=>{
        console.log(response2)
        this.dialogRef.close()
      })
    })*/
  }
  ngOnInit(): void {
    this.reservationId=Number(localStorage.getItem('reservationId'))
    console.log(this.reservationId)
  }

}
