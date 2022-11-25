import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OwnerService} from "../../../services/owner-service";
import {RatingOwnerService} from "../../../services/ratingOwner-service";

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {
  client!:any
  ownerId:number
  rating:number=0
  names:string=""
  lastNames:string=""
  image:string=""
  contactNumber:number=0
  ratings:any[]=[]
  constructor(private activatedRoute:ActivatedRoute,private ownerService:OwnerService,
              private ratingOwnerService:RatingOwnerService) {
    this.ownerId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.ownerService.getById(this.ownerId).subscribe(response=>{
      console.log(response)
      this.rating=response.rating
      this.names=response.names
      this.lastNames=response.lastNames
      this.image=response.image
      this.contactNumber=response.contactNumber
    })
    this.ratingOwnerService.getByOwner(this.ownerId).subscribe(response=>{
      this.ratings=response.content
    })
  }

}
