import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { ɵɵinject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
    const sellerService =  ɵɵinject(SellerService);

    // Check if the user is logged in using the AuthService
    
    // if (sellerService.isSellerLoggedIn) {
    //   return true; // If logged in, allow access to the route
    // } else {
    //   return false; // If not logged in, deny access to the route
    // }
    if (localStorage.getItem('seller')) {
      return true;
    }else{
    // return this.sellerService.isSellerLoggedIn;
    // return sellerService.isSellerLoggedIn;
    return false
    
    }
};







