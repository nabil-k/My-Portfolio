import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { baseUrl } from '../httpBaseUrls/httpBaseUrl'
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: Http) { }

  login(credentials:any){
    return this.http.post(baseUrl + "/routes/admin/login",credentials)
  }

  checkToken(token:any){
    return this.http.post(baseUrl + "/routes/newToken",token)
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authorization');
    console.log(token)
    // Check whether the token is expired and return
    // true or false
    console.log("tokenExpirationStatus",this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token);
  }


}
