import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  players:any;
  constructor(private playerService:PlayerService) { }

  ngOnInit(){
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        console.log(data.players);
        this.players= data.players;
      }
    )
  }

  update(e:any){
    this.players=e;
  }
}
