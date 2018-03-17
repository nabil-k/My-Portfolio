import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { baseUrl } from '../httpBaseUrls/httpBaseUrl'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(credentials:any){
    return this.http.post(baseUrl + "/routes/admin/login",credentials)
  }

  checkToken(token:any){
    return this.http.post(baseUrl + "/routes/newToken",token)
  }

}
