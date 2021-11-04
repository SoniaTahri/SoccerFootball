import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  
  id:any;
  myPlayer:any;
  constructor(private playerService:PlayerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
        
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        console.log(data.FindedPlayer);
        this.myPlayer= data.FindedPlayer;
      }
    )
  }

}
