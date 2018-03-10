import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getMessages() {
    return this.http.get("/routes/messages")
      .map((result) =>{
        // console.log(result.json());
        return result.json();
      });
  }

  sendMessages(message:string){
    return this.http.post("/routes/newMessages",message)
  }

  getMasteryStats(){
    return this.http.get('/routes/LoLMastery')
      .map((result)=>{
        return result.json()
      })
  }

}