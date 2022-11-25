import { Component, OnInit } from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {CreateCarComponent} from "../create-car/create-car.component";
import {OwnerService} from "../../../services/owner-service";
import {Owner} from "../../common/model/owner";
import {Car} from "../../common/model/car";
import {CarService} from "../../../services/car-service";

@Component({
  selector: 'app-profile-owner',
  templateUrl: './profile-owner.component.html',
  styleUrls: ['./profile-owner.component.css']
})
export class ProfileOwnerComponent implements OnInit {
  id:number
  owner:Owner | null=null
  names:string=""
  lastNames:string=""
  contactNumber:number=0
  rating:number=0
  plan:string=""
  image:string=""
  cars:Car[]=[]
  map:Map<string,string> =new Map()
  planCorrect:boolean=true
  constructor(private dialogService:NbDialogService,private ownerService:OwnerService,
              private carService:CarService) {
    this.id=Number(localStorage.getItem('userId'))
    this.map.set("Toyota","https://i.pinimg.com/736x/f0/6f/14/f06f1433e1f387bdb73d9e54cdeaa362.jpg")
    this.map.set("Fiat","https://i.pinimg.com/originals/62/cc/84/62cc84f54c958fadb3e8f8da63978971.png")
    this.map.set("Nissan","https://1000marcas.net/wp-content/uploads/2020/01/logo-Nissan-1.png")
    this.map.set("Kia","https://graffica.info/wp-content/uploads/2019/12/new-kia-logo-trademark-1024x576.jpg")
    this.map.set("Hyundai","https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-3.png")
  }
  open(){
    if(this.plan=="Free" && this.cars.length<2){
      this.dialogService.open(CreateCarComponent).onClose.subscribe(a=>{
        this.carService.getByOwner(this.id).subscribe(response=>{
          console.log(response)
          this.cars=response.content
        })
      })
      return
    }
    if(this.plan=="Medium" && this.cars.length<6){
      this.dialogService.open(CreateCarComponent).onClose.subscribe(a=>{
        this.carService.getByOwner(this.id).subscribe(response=>{
          console.log(response)
          this.cars=response.content
        })
      })
      return
    }
    if(this.plan=="Pro" && this.cars.length<8){
      this.dialogService.open(CreateCarComponent).onClose.subscribe(a=>{
        this.carService.getByOwner(this.id).subscribe(response=>{
          console.log(response)
          this.cars=response.content
        })
      })
      return
    }
    console.log("bb")
    this.planCorrect=false
  }
  returnBrand(brand:string):string{
    return this.map.get(brand) as string;
  }
  ngOnInit(): void {
    this.ownerService.getById(this.id).subscribe(response=>{
      this.owner=response
      this.names=this.owner.names
      this.lastNames=this.owner.lastNames
      this.contactNumber=this.owner.contactNumber
      this.rating=this.owner.rating
      this.image=this.owner.image
      this.plan=this.owner.plan.name
    })
    this.carService.getByOwner(this.id).subscribe(response=>{
      console.log(response)
      this.cars=response.content
    })
  }
  ngAfterViewInit():void{

  }
}
