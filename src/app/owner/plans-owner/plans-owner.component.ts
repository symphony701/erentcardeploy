import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../../../services/owner-service";

@Component({
  selector: 'app-plans-owner',
  templateUrl: './plans-owner.component.html',
  styleUrls: ['./plans-owner.component.css']
})
export class PlansOwnerComponent implements OnInit {
  id:number
  plan:string=""
  constructor(private ownerService:OwnerService) {
    this.id=Number(localStorage.getItem('userId'))
  }
  updatePlan(planId:number){
    this.ownerService.updatePlan(this.id,planId).subscribe(response=>{
      console.log(response)
      this.plan=response.plan.name
    })
  }
  ngOnInit(): void {
    this.ownerService.getById(this.id).subscribe(response=>{
      this.plan=response.plan.name
      console.log(this.plan)
    })
  }

}
