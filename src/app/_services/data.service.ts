import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { baseUrl } from '../httpBaseUrls/httpBaseUrl'
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getMessages() {
    return this.http.get(baseUrl +"/routes/messages")
      .map((result) =>{
        // console.log(result.json());
        return result.json();
      });
  }

  sendMessages(message:string){
    return this.http.post(baseUrl + "/routes/newMessages",message)
  }

  getBlogPosts(){
    return this.http.get(baseUrl + "/routes/blogPosts")
    .map((result) =>{
      return result.json();
    });
  }

  postComment(comment:string){
    return this.http.put(baseUrl+"/routes/postComment", comment)
    .map((result)=>{
      return result.json();
    })
  }

  getMasteryStats(){
    return this.http.get(baseUrl + '/riotApi/LoLMastery')
      .map((result)=>{
        return result.json()
      })
  }

  getSummonerData(){
    return this.http.get(baseUrl + '/riotApi/LoLSummonerInfo')
    .map((result)=>{
      return result.json()
    })
  }

  getSummonerMatches(){
    return this.http.get(baseUrl + '/riotApi/LoLSummonerMatches')
    .map((result)=>{
      return result.json()
    })
  }
}