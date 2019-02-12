import { UserService } from './../service/getUserData.service';
import { Component, OnInit } from '@angular/core';
import  {Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile;
  addUser=false
  constructor(private _userService: UserService, private router:Router) { }

  ngOnInit() {
    this._userService.getuserProfile().subscribe((user)=>{
      this.userProfile= user;
      this._userService.setUsers = this.userProfile
    })
  }

  getUserProfile(ind){
    this.router.navigate(["userdetails",ind])
  }

  addusers(){
    this.addUser = true
  }

  submitData(f){
     this._userService.signUp(f.value).subscribe((data)=>{
       console.log(data);
     })
  }

  deleteUser(id){
   this._userService.deleteUser(id).subscribe(test=>{
     console.log(test)
   });
  }
}
