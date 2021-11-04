import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL:string = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  getAllPlayers(){
    return this.httpClient.get<{players:any,message:string}>(`${this.playerURL}/players`);
  }

  getPlayerById(id:any){
    return this.httpClient.get<{FindedPlayer:any}>(`${this.playerURL}/player/${id}`);
  }
  
  addPlayer(player:any){
    console.log(player);
    return this.httpClient.post<{message:string}>(`${this.playerURL}/addPlayer`,player);
  }

  editPlayer(player:any){
    return this.httpClient.put<{message:string}>(`${this.playerURL}/editPlayer/${player._id}`,player);
  }
  deletePlayer(id:any){
    return this.httpClient.delete<{message:string}>(`${this.playerURL}/deletePlayer/${id}`);
  }

  getPdf(){
    return this.httpClient.get<{ message: string }>(`${this.playerURL}/players/generateFile/pdf`); 
  } 

  

}