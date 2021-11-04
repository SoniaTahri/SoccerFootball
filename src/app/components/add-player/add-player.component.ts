import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  title:string;
  id:any;
  addPlayerForm:FormGroup;
  player:any={};
  constructor(private fb:FormBuilder, private playerService:PlayerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.addPlayerForm= this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      poste:['',[Validators.required,Validators.minLength(4)]],
      age:['',[Validators.required]],
      number:['',[Validators.required]],
    });

    if (this.id) {
      //edit
      this.title= 'edit';
      this.playerService.getPlayerById(this.id).subscribe(
        (data)=>{
          console.log(data.FindedPlayer);
          this.player= data.FindedPlayer;
        }
      )
    }else{
      //add
      this.title = 'add';
    }
  }
  

  addPlayer(p:any){
    alert('btn clicked');
    console.log(this.addPlayerForm.value)

    if (this.id) {
      //edit
      this.playerService.editPlayer(this.player).subscribe(
        (data)=>{
          console.log(data.message);
          
        }
      )
    }
    else{
      //add
      this.playerService.addPlayer(p).subscribe(
        (data)=>{
          console.log('data add player',data.message);
          
        }
      )
    }
 
  }

  getPdf(){
    this.playerService.getPdf().subscribe(
      (data)=>{
        console.log(data.message);
      }
    )
  }

}
