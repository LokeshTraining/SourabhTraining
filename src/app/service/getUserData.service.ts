import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()

export class UserService{
url = "https://jsonplaceholder.typicode.com/users";    
constructor(private _http:HttpClient){

}

getData(){
    // return obserables
    return this._http.get(this.url) 
}

getuserProfile(){
    return this._http.get('	https://randomuser.me/api/?results=20')
}

}