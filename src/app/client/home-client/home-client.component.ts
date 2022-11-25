import { Component, OnInit } from '@angular/core';
import {CarService} from "../../../services/car-service";
import {Car} from "../../common/model/car";
import {Router} from "@angular/router";
import {FavoriteService} from "../../../services/favorite-service";
import {Favorite} from "../../common/model/favorite";
import {CarNotRent} from "../../common/model/carNotRent";

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  top:boolean=true
  cars:CarNotRent[]=[]
  id:number
  searchBox:string=""

  constructor(private carService:CarService,private router:Router) {
    this.id=Number(localStorage.getItem('userId'))
  }

  changeFilter(){
    this.top=!this.top;
  }

  toCar(id:number){
    this.router.navigate([`/DashboardClient/Home/Car/${id}`])
  }

  ngOnInit(): void {
    this.carService.getNotRents(this.id).subscribe(response=>{
      this.cars=response.content
      console.log(this.cars)
    })
    /*this.favoriteService.getByClient(this.id).subscribe(response=>{
      this.favorites=response.content
      console.log(this.favorites)

    })*/
  }

}
