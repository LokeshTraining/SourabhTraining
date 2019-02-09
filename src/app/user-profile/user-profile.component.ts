import { UserService } from './../service/getUserData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getuserProfile().subscribe((user)=>{
      this.userProfile= user["results"]
    })
  }

}
