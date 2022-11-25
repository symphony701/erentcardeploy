import { Component, OnInit } from '@angular/core';
import {RentService} from "../../../services/rent-service";
import {NbDialogService} from "@nebular/theme";
import {RatingClientComponent} from "../rating-client/rating-client.component";

@Component({
  selector: 'app-rents-owner',
  templateUrl: './rents-owner.component.html',
  styleUrls: ['./rents-owner.component.css']
})
export class RentsOwnerComponent implements OnInit {
  id:number
  rents:any
  constructor(private rentService:RentService,private dialogService:NbDialogService) {
    this.id=Number(localStorage.getItem('userId'))
  }
  openRatingClient(clientId:any,rentId:any){
    this.finalizedRent(rentId)
    let closeOnBackdropClick:boolean=false
    this.dialogService.open(RatingClientComponent,{closeOnBackdropClick,context:{client:clientId,rent:rentId}},).onClose.subscribe(response=>{
      this.rentService.getRentsByOwner(this.id).subscribe(response=>{
        this.rents=response.content
      })
    })
  }
  finalizedRent(rentId:number){
    this.rentService.endRent(rentId).subscribe(response=>{
      console.log(response)
    })
  }
  ngOnInit(): void {
    this.rentService.getRentsByOwner(this.id).subscribe(response=>{
      console.log(response)
      this.rents=response.content
    })
  }

}
