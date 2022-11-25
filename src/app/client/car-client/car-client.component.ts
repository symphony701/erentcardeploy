import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../../services/car-service";
import {Car} from "../../common/model/car";
import {Feature} from "../../common/model/feature";
import {NbCalendarRange, NbDateService} from "@nebular/theme";
import {queue} from "rxjs";
import {ReservationService} from "../../../services/reservation-service";
import {Brand} from "../../common/model/brand";
import {RatingCarService} from "../../../services/ratingCar-service";
import {RatingCar} from "../../common/model/ratingCar";
import {Owner} from "../../common/model/owner";

@Component({
  selector: 'app-car-client',
  templateUrl: './car-client.component.html',
  styleUrls: ['./car-client.component.css']
})
export class CarClientComponent implements OnInit {
  id:number=0
  clientId:number=0
  image:string=""
  description:string=""
  model:string=""
  plateNumber:string=""
  type:string=""
  mileage:number=0.0
  rating:number=0
  dayCost:number=0
  state:number=0
  brand:any
  owner!:Owner

  ratings:RatingCar[]=[]
  map:Map<string,string> =new Map()

  dateStart:string=""
  dateStartCreate:string=""
  dateFinish:string=""
  constructor(private activatedRoute:ActivatedRoute,private carService:CarService,
              protected dateService: NbDateService<Date>,private reservationService:ReservationService,
              private ratingCarService:RatingCarService,private router:Router) {
    this.clientId=Number(localStorage.getItem('userId'))
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.map.set("Toyota","https://i.pinimg.com/736x/f0/6f/14/f06f1433e1f387bdb73d9e54cdeaa362.jpg")
    this.map.set("Fiat","https://i.pinimg.com/originals/62/cc/84/62cc84f54c958fadb3e8f8da63978971.png")
    this.map.set("Nissan","https://1000marcas.net/wp-content/uploads/2020/01/logo-Nissan-1.png")
    this.map.set("Kia","https://graffica.info/wp-content/uploads/2019/12/new-kia-logo-trademark-1024x576.jpg")
    this.map.set("Hyundai","https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-3.png")

    var today = new Date();
    var dd = String(today.getDate()+1).padStart(2, '0');/*para lo del cero si el dia es menor que 10*/
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.dateStartCreate=`${yyyy}-${mm}-${dd}`
  }
  change($event: any): void {
    console.log(this.dateStart)
  }
  changeF($event: any): void {
    console.log(this.dateFinish)
  }
  clickReserve(){
    let data={
      reserveDate:this.dateStart,
      returnDate:this.dateFinish,
      status:0
    }
    this.reservationService.postReservation(this.dayCost,this.id,this.clientId,this.owner.id,data).subscribe(response=>{
      console.log(response)
      this.state=2;
    })

  }
  visitOwner(id:number){
    this.router.navigate([`/DashboardClient/Home/Car/Owner/${id}`])
  }
  buttonDisabled():boolean{
    if((this.dateStart=="" && this.dateFinish=="")||(this.dateStart!="" && this.dateFinish=="")){
      return true
    }
    return false
  }
  returnBrand(brand:string):string{
    return this.map.get(brand) as string;
  }
  ngOnInit(): void {
    this.carService.getById(this.id).subscribe(response=>{
      this.image=response.image
      this.model=response.model
      this.description=response.description
      this.plateNumber=response.plateNumber
      this.type=response.type
      this.mileage=response.mileage
      this.rating=response.rating
      this.dayCost=response.dayCost
      this.state=response.state
      this.brand=response.brand
      this.owner=response.ownerCarResource
      console.log(response)
    })
    this.ratingCarService.getByCar(this.id).subscribe(response=>{
      this.ratings=response.content
    })
  }

}
