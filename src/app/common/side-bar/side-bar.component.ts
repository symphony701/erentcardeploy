import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
interface optionMenu{
  name:string,
  icon:string,
  router:string
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  ind:number
  options:optionMenu[]
  constructor(private router:Router) {
    this.ind=Number(localStorage.getItem('typeUser'));
    if(this.ind==1){
      this.options=[
        {name:"My Profile",icon:'bx-user',router:'/DashboardOwner/Profile'},
        {name:"Rents",icon:'bx-trophy',router:'/DashboardOwner/My-Rents'},
        {name:"Reservations",icon:'bx-comment-dots',router:'/DashboardOwner/My-Reservations'},
        {name:"Plans",icon:'bx-cart',router:'/DashboardOwner/Plans'}]
    }
    else this.options=[
      {name:"Home",icon:'bx bx-home',router:'/DashboardClient/Home'},
      {name:"My Profile",icon:'bx bx-user',router:'/DashboardClient/Profile'},
      {name:"Reservations",icon:'bx-comment-dots',router:'/DashboardClient/My-Reservations'},
      {name:"Rents",icon:'bx-trophy',router:'/DashboardClient/My-Rents'},]
  }
  logOut(){
    localStorage.setItem('userId','0');
    localStorage.setItem('typeUser','0');
    localStorage.removeItem('userId');
    localStorage.removeItem('typeUser');
    localStorage.setItem('reservationId','0');
    localStorage.removeItem('reservationId');
  }

  ngOnInit(): void {
  }

}
