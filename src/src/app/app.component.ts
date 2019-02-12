import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './service/getUserData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData;
constructor(private _userService:UserService){
  
}

getData(){
  // console.log("iside get data");
  this._userService.getData() 
  .subscribe((data)=>{
    this.userData = data
    console.log("inside" + this.userData)
  }) 

  console.log("out side " + this.userData)
}

}
