import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
   
  title:string;
  id:any;
  match:any={};
  addMatchForm:FormGroup;
  constructor(private fb:FormBuilder,private matchService:MatchService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
   this.addMatchForm= this.fb.group({
    teamOne:['',[Validators.required,Validators.minLength(4)]],
    teamTwo:['',[Validators.required,Validators.minLength(4)]],
    scoreOne:['',[Validators.required]],
    scoreTwo:['',[Validators.required]],
   });

   
   if (this.id) {
    //edit
    this.title= 'edit';
    this.matchService.getMatchById(this.id).subscribe(
      (data)=>{
        console.log(data.FindedMatch);
        this.match= data.FindedMatch;
      }
    )
  }else{
    //add
    this.title = 'add';
  }
  }

   
  addMatch(m:any){
 
    if (this.id) {
      //edit
      this.matchService.editMatch(this.match).subscribe(
        (data)=>{
          console.log(data.message);
          
        }
      )
    }
    else{
      //add
      this.matchService.addMatch(m).subscribe(
        (data)=>{
          console.log('data add match',data.message);
          
        }
      )
    }

  }
 

}
