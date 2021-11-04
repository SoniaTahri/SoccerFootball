import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiumURL:string = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  getAllStadiums(){
    return this.httpClient.get<{stadium:any,message:string}>(`${this.stadiumURL}/stadiums`); 
  }

  getStadiumById(id:any){
    return this.httpClient.get<{FindedStadium:any}>(`${this.stadiumURL}/stadium/${id}`);
  }

  addStadium(stadium:any){
    console.log(stadium);
    return this.httpClient.post<{message:string}>(`${this.stadiumURL}/addStadium`,stadium);
  }

  editStadium(stadium:any){
    return this.httpClient.put<{message:string}>(`${this.stadiumURL}/editStadium/${stadium._id}`,stadium);
  }
  deleteStadium(id:any){
    return this.httpClient.delete<{message:string}>(`${this.stadiumURL}/deleteStadium/${id}`);
  }

}