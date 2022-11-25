import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OwnerService} from "../../services/owner-service";
import {ClientService} from "../../services/client-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  names:string=""
  lastNames:string=""
  image:string=""
  email:string=""
  password:string=""
  contactNumber:number=0
  typeUser:string="1"
  idAux:number=0
  constructor(private router:Router,private ownerService:OwnerService,private clientService:ClientService) {

  }
  register(){
    let data={
      names:this.names,
      lastNames:this.lastNames,
      email:this.email,
      password:this.password,
      contactNumber:this.contactNumber,
      dni:12345678,
      image:this.image,
      rating:0
    }
    if(this.typeUser=="1"){
      this.ownerService.register(data).subscribe(response=>{
        console.log(response)
        this.idAux=response.id
        localStorage.setItem('typeUser', this.typeUser);
        localStorage.setItem('userId', this.idAux.toString());
        this.router.navigate([`/DashboardOwner/Profile`])
      })
    }
    else{
      this.clientService.register(data).subscribe(response=>{
        console.log(response)
        this.idAux=response.id
        localStorage.setItem('typeUser', this.typeUser);
        localStorage.setItem('userId', this.idAux.toString());
        this.router.navigate([`/DashboardClient/Home`])
      })
    }
    console.log(data)
  }
  toLogin(){
    this.router.navigate([`/Login`])
  }
  ngOnInit(): void {
  }

}
