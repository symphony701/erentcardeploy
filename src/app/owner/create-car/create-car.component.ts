import {Component, OnInit, Optional} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {BrandService} from "../../../services/brand-service";
import {Brand} from "../../common/model/brand";
import {CarService} from "../../../services/car-service";
import {FeatureService} from "../../../services/feature-service";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  brands:Brand[]=[]
  id:number
  brandId:number=0
  plateNumber:string=""
  model:string=""
  dayCost:number=0.0
  mileage:number=0.0
  status:number=0
  type:string=""
  description:string=""
  image:string=""

  seats:boolean=true
  ac:boolean=true
  fuel:boolean=true
  gear:boolean=true

  numberSeat:string="5"
  fuelString:string="GLP"
  gearBox:string="Mechanic"
  constructor(@Optional() protected dialogRef:NbDialogRef<CreateCarComponent>,private brandService:BrandService,
              private carService:CarService,private featureService:FeatureService) {
    this.id=Number(localStorage.getItem('userId'))
  }
  close(){
    this.dialogRef.close()
  }
  postCar(){
    let data={
      model:this.model,
      plateNumber:this.plateNumber,
      dayCost:this.dayCost,
      mileage:this.mileage,
      image:this.image,
      type:this.type,
      description:this.description,
      state:0
    }
    console.log(data)
    this.carService.postCar(this.id,this.brandId,data).subscribe(response=>{
      console.log(response)
      /*if(this.seats){
        let data1={
          type:1,
          description: this.numberSeat+" seats"
        }
        this.featureService.postFeature(response.id,data1).subscribe(response1=>{console.log(response1)})
      }
      if(this.ac){
        let data2={
          type:3,
          description: "AC"
        }
        this.featureService.postFeature(response.id,data2).subscribe(response2=>{console.log(response2)})
      }
      if(this.fuel){
        let data3={
          type:4,
          description: this.fuelString
        }
        this.featureService.postFeature(response.id,data3).subscribe(response3=>{console.log(response3)})
      }
      if(this.gear){
        let data4={
          type:2,
          description: this.gearBox
        }
        this.featureService.postFeature(response.id,data4).subscribe(response4=>{console.log(response4)})
      }*/
      this.dialogRef.close()
    })
  }
  ngOnInit(): void {
    this.brandService.getAll().subscribe(response=>{
      console.log(response)
      this.brands=response
    })
  }

}
