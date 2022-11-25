import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OwnerService} from "../../services/owner-service";
import {ClientService} from "../../services/client-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  typeUser:string="1";
  email:string="";
  password:string="";
  idAux:number=0;
  error:boolean=false
  constructor(private router:Router,private ownerService:OwnerService,
              private clientService:ClientService) {

  }
  login(){
    var data={
      email:this.email,
      password:this.password
    }
    let d:any
    if(this.typeUser=="1"){
      d=this.ownerService.login(data).subscribe(response=>{
        this.idAux=response.id;
        if(this.idAux!=0){
          localStorage.setItem('typeUser', this.typeUser.toString());
          localStorage.setItem('userId', this.idAux.toString());
          this.router.navigate(["/DashboardOwner/Profile"])
        }

      },error=>{
        this.error=true
      })
    }
    if(this.typeUser=="2"){
      let d=this.clientService.login(data).subscribe(response=>{
        this.idAux=response.id;
        if(this.idAux!=0){
          localStorage.setItem('typeUser', this.typeUser.toString());
          localStorage.setItem('userId', this.idAux.toString());
          this.router.navigate(["/DashboardClient/Home"])
        }
      },error=>{
        this.error=true
      })

    }
  }
  toRegister(){
    this.router.navigate([`/Register`])
  }
  ngOnInit(): void {
  }

}
