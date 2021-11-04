import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {

  players:any;
  constructor( private playerService:PlayerService, private router: Router) { }

  ngOnInit(){
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        console.log(data.message);
        console.log(data.players);
        this.players = data.players;
      }
    )
  }

  deletePlayer(id:any){
    this.playerService.deletePlayer(id).subscribe(
      (data)=>{
        console.log('Player',data.message);
        
        this.playerService.getAllPlayers().subscribe(
          (data)=>{
            console.log(data.message);
            console.log(data.players);
            this.players = data.players;
          }
        )
      }
    )
  }

  displayPlayer(id:any){
    this.router.navigate([`display-player/${id}`])
  }

  editPlayer(id:any){
    this.router.navigate([`edit-player/${id}`])
  }
}
