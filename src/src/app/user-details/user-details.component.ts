import { ActivatedRoute } from '@angular/router';
import { UserService } from './../service/getUserData.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users;
  user;
  index
  constructor(private userSerivce:UserService, private active:ActivatedRoute) { 

  }

  ngOnInit() { 
    this.users = this.userSerivce.getUsers;
    
    this.active.params.subscribe((url)=>{
            this.index=url.userindex
      })

    // console.log(this.index)
   this.user = this.users[this.index]

}


    




}
