import { Component, OnInit } from '@angular/core';
import {Owner} from "../../common/model/owner";
import {Car} from "../../common/model/car";
import {Client} from "../../common/model/client";
import {ClientService} from "../../../services/client-service";
import {FavoriteService} from "../../../services/favorite-service";

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {
  id:number
  client:Client | null=null
  names:string=""
  lastNames:string=""
  contactNumber:number=0
  rating:number=0
  image:string=""
  cars:any[]=[]
  map:Map<string,string> =new Map()
  constructor(private clientService:ClientService,private favoritesService:FavoriteService) {
    this.id=Number(localStorage.getItem('userId'))
    this.map.set("Toyota","https://i.pinimg.com/736x/f0/6f/14/f06f1433e1f387bdb73d9e54cdeaa362.jpg")
    this.map.set("Fiat","https://i.pinimg.com/originals/62/cc/84/62cc84f54c958fadb3e8f8da63978971.png")
    this.map.set("Nissan","https://1000marcas.net/wp-content/uploads/2020/01/logo-Nissan-1.png")
    this.map.set("Kia","https://graffica.info/wp-content/uploads/2019/12/new-kia-logo-trademark-1024x576.jpg")
    this.map.set("Hyundai","https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-3.png")
  }
  returnBrand(brand:string):string{
    return this.map.get(brand) as string;
  }
  ngOnInit(): void {
    this.clientService.getById(this.id).subscribe(response=>{
      this.client=response
      this.names=this.client.names
      this.lastNames=this.client.lastNames
      this.contactNumber=this.client.contactNumber
      this.rating=this.client.rating
      this.image=this.client.image
    })
    this.favoritesService.getByClient(this.id).subscribe(response=>{
      console.log(response)
      this.cars=response.content
    })
  }

}
