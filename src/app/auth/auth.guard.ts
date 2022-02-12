import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {SharedService} from "../shared/shared.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private router: Router,
      private sharedService: SharedService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    const userOnline = this.sharedService.checkIfTheUserIsAuthenticate()
    if(userOnline){
      return true
    }else{
      this.router.navigate([''])
      return false
    }
  }

}
