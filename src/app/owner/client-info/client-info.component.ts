import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../../services/client-service";
import {ActivatedRoute} from "@angular/router";
import {RatingClientService} from "../../../services/ratingClient-service";

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  client!:any
  clientId:number
  rating:number=0
  names:string=""
  lastNames:string=""
  image:string=""
  contactNumber:number=0
  ratings:any[]=[]
  constructor(private clientService:ClientService,private activatedRoute:ActivatedRoute,
              private ratingClient:RatingClientService) {
    this.clientId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.clientService.getById(this.clientId).subscribe(response=>{
      console.log(response)
      this.rating=response.rating
      this.names=response.names
      this.lastNames=response.lastNames
      this.image=response.image
      this.contactNumber=response.contactNumber
    })
    this.ratingClient.getByClient(this.clientId).subscribe(response=>{
      this.ratings=response.content
    })
  }

}
