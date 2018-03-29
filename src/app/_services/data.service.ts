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

  getAllBlogPostsIds(){
    return this.http.get(baseUrl + "/routes/allBlogPostsIds")
    .map((result) =>{
      return result.json();
    });
  }

  getBlogPostById(blogId:any){
    return this.http.post(baseUrl + "/routes/getBlogPost",blogId)
    .map((result)=>{
      return result.json();
    })
  }

  postComment(comment:any){
    return this.http.post(baseUrl+"/routes/postComment", comment)
  }

  postReply(reply:any){
    return this.http.post(baseUrl+"/routes/postReply", reply)
  }

  getComments(blogId:any){
    return this.http.post(baseUrl + "/routes/getBlogComments",blogId)
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