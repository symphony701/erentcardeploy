import { Component, OnInit } from '@angular/core';
import {RentService} from "../../../services/rent-service";

@Component({
  selector: 'app-rents-client',
  templateUrl: './rents-client.component.html',
  styleUrls: ['./rents-client.component.css']
})
export class RentsClientComponent implements OnInit {
  id:number
  rents:any
  constructor(private rentService:RentService) {
    this.id=Number(localStorage.getItem('userId'))
  }
  setRentStatus(rent:any,i:number){
    rent.status=i
  }
  ngOnInit(): void {
    this.rentService.getRentsByClient(this.id).subscribe(response=>{
      console.log("aaa")
      console.log(response)
      this.rents=response.content
    })
  }

}
