import { Injectable } from '@angular/core';
import { SignUp } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  userSignUp(user:SignUp){
this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe((result)=>{
  console.warn(result);
  
})
  }
}
