import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() childPlayer;
  @Output() newPlayer : EventEmitter<any> = new EventEmitter();
  constructor(private palyerService:PlayerService) { }

  ngOnInit(){
  }

  delete(id:any){
   this.palyerService.deletePlayer(id).subscribe(
     (data)=>{
       console.log(data.message);
      this.palyerService.getAllPlayers().subscribe(
        (data)=>{
          this.newPlayer.emit(data.message);
        }
      )
     }
   )    
  }
}
