import {Component, Input, OnInit, Optional} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {RatingClientService} from "../../../services/ratingClient-service";

@Component({
  selector: 'app-rating-client',
  templateUrl: './rating-client.component.html',
  styleUrls: ['./rating-client.component.css']
})
export class RatingClientComponent implements OnInit {
  ratingClient:number=0
  commentClient:string=""
  ownerId:number
  @Input()client:any
  @Input()rent:any
  constructor(@Optional() protected dialogRef:NbDialogRef<RatingClientComponent>,
              private ratingClientService:RatingClientService) {
    this.ownerId=Number(localStorage.getItem('userId'))
  }
  returnStarsClient(i:number){
    if(i<this.ratingClient){
      return 'bx bxs-star'
    }
    return 'bx bx-star'
  }
  selectStarsClient(i:number){
    this.ratingClient=i+1;
  }
  close(){
    this.dialogRef.close()
  }
  send(){
    let ratingClientAux={
      stars:this.ratingClient,
      comment:this.commentClient
    }
    this.ratingClientService.postRatingClient(this.client,this.ownerId,ratingClientAux).subscribe(response=>{
      console.log(response)
      this.close()
    })
  }
  ngOnInit(): void {
  }

}
