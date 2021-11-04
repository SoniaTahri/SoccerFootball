import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchURL:string = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  getAllMatches(){
    return this.httpClient.get<{matches:any,message:string}>(`${this.matchURL}/matches`);
  }

  getMatchById(id:any){
    return this.httpClient.get<{FindedMatch:any}>(`${this.matchURL}/match/${id}`);
  }

  addMatch(match:any){
    console.log(match);
    return this.httpClient.post<{message:string}>(`${this.matchURL}/addMatch`,match);
  }

  editMatch(match:any){
    return this.httpClient.put<{message:string}>(`${this.matchURL}/editMatch/${match._id}`,match);
  }
  deleteMatch(id:any){
    return this.httpClient.delete<{message:any}>(`${this.matchURL}/deleteMatch/${id}`);
  }

}