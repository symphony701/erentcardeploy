import { Component, OnInit,Input } from '@angular/core';
import {Car} from "../../common/model/car";
import {ActivatedRoute, Router} from "@angular/router";
import {Favorite} from "../../common/model/favorite";
import {CarNotRent} from "../../common/model/carNotRent";
import {FavoriteService} from "../../../services/favorite-service";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() car!:CarNotRent
  map:Map<string,string> =new Map()
  id:number
  constructor(private router:Router,private favoriteService:FavoriteService,
              private activatedRoute:ActivatedRoute) {
    this.map.set("Toyota","https://i.pinimg.com/736x/f0/6f/14/f06f1433e1f387bdb73d9e54cdeaa362.jpg")
    this.map.set("Fiat","https://i.pinimg.com/originals/62/cc/84/62cc84f54c958fadb3e8f8da63978971.png")
    this.map.set("Nissan","https://1000marcas.net/wp-content/uploads/2020/01/logo-Nissan-1.png")
    this.map.set("Kia","https://graffica.info/wp-content/uploads/2019/12/new-kia-logo-trademark-1024x576.jpg")
    this.map.set("Hyundai","https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-3.png")
    this.id=Number(localStorage.getItem('userId'))
  }

  returnBrand(brand:string):string{
    return this.map.get(brand) as string;
  }
  clickFavorite(car:CarNotRent){
    if(car.favorite==true){
      this.favoriteService.delete(car.favoriteId).subscribe(response=>{
        console.log(response)
      })
    }else{
      this.favoriteService.create(this.id,car.carResource.id).subscribe(response=>{
        console.log(response)
        car.favoriteId=response.id
      })
    }
    car.favorite=!car.favorite
  }

  toCar(id:number){
    this.router.navigate([`/DashboardClient/Home/Car/${id}`])
  }

  ngOnInit(): void {
  }
}
