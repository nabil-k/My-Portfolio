import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    console.log(this.auth.isAuthenticated())
    if (!this.auth.isAuthenticated()) {
      alert("Please Log in First")
      this.router.navigate(['admin/login']);
      return false;
    }else{
      console.log("user is authenticated")
      return true;
    }
  }
}