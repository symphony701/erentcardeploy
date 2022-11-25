import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RatingCarService} from "../../../services/ratingCar-service";
import {RatingOwnerService} from "../../../services/ratingOwner-service";
import {RentService} from "../../../services/rent-service";

@Component({
  selector: 'app-rating-car-owner',
  templateUrl: './rating-car-owner.component.html',
  styleUrls: ['./rating-car-owner.component.css']
})
export class RatingCarOwnerComponent implements OnInit {
  ratingCar:number=0
  ratingOwner:number=0
  id:number
  @Input()rent!:any
  @Output()setStatus:EventEmitter<number>=new EventEmitter<number>()
  commentCar:string=""
  commentOwner:string=""
  constructor(private ratingCarService:RatingCarService,private ratingOwnerService:RatingOwnerService,
              private rentService:RentService) {
    this.id=Number(localStorage.getItem('userId'))
  }
  returnStarsCar(i:number){
    if(i<this.ratingCar){
      return 'bx bxs-star'
    }
    return 'bx bx-star'
  }
  selectStarsCar(i:number){
    this.ratingCar=i+1;
  }
  returnStarsOwner(i:number){
    if(i<this.ratingOwner){
      return 'bx bxs-star'
    }
    return 'bx bx-star'
  }
  selectStarsOwner(i:number){
    this.ratingOwner=i+1;
  }
  clickSend(){
    let ratingCarAux={
      stars:this.ratingCar,
      comment:this.commentCar
    }
    let ratingOwnerAux={
      stars:this.ratingOwner,
      comment:this.commentOwner
    }
    this.ratingCarService.postRatingCar(this.rent.reservation.carRentResource.id,this.id,ratingCarAux).subscribe(response=>{
      console.log(response)
    })
    this.ratingOwnerService.postRatingOwner(this.rent.reservation.ownerId,this.id,ratingOwnerAux).subscribe(response=>{
      console.log(response)
    })
    this.rentService.setState(this.rent.id).subscribe(response=>{
      console.log(response)
    })
    this.setStatus.emit(2)
  }
  ngOnInit(): void {
  }

}
