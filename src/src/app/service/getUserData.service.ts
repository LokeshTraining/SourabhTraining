import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()

export class UserService{
url = "https://jsonplaceholder.typicode.com/users";
// https://randomuser.me/api/?results=20  
userDataValues  
constructor(private _http:HttpClient){

}

signUp(values){
  let httpParms = new HttpParams();
  httpParms = httpParms.set("user",values.user)
  httpParms =  httpParms.set("email",values.email)
  httpParms= httpParms.set("phoneno",values.phone)
  httpParms =   httpParms.set("aboutme",values.aboutme)
  return this._http.post("https://sourabhtraining.herokuapp.com/api/signup",httpParms)
}

deleteUser(id){
  let httpParms = new HttpParams();
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: {id:id},
  };
  httpParms = httpParms.set("id",id)

  return this._http.delete("http://localhost:3002/api/deleteuser",options);
}

getData(){
    // return obserables
    return this._http.get(this.url) 
}

getuserProfile(){
    return this._http.get('https://sourabhtraining.herokuapp.com/api/getalluser')
}
// 
set setUsers(userdata){
  this.userDataValues = userdata
  console.log(this.userDataValues)
}

get getUsers(){
  return this.userDataValues
}

}