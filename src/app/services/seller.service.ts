import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignUp, login } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  // reloadSeller() {
  //     throw new Error('Method not implemented.');
  // }
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter(false)

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data,
      { observe: 'response' }).subscribe((result) => {
        // this.isSellerLoggedIn.next(true);
        console.warn(result)
        if (result) {
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
          
        }
      })
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
    }
  }

userLogin(data:login){
console.warn(data)
this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
{observe:'response'}).subscribe((result:any)=>{
  console.warn(result)
  if(result && result.body && result.body.length)
  {
    console.warn("user logged in ")
    localStorage.setItem('seller', JSON.stringify(result.body))
    this.router.navigate(['seller-home'])
  }else{
    console.warn("login filed")
    this.isLoginError.emit(true)
  }
})
  }
  
}
