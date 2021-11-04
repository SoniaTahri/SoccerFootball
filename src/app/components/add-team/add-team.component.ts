import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addTeamForm:FormGroup;
  constructor( private fb : FormBuilder) { }

  ngOnInit(){
    this.addTeamForm= this.fb.group({
      teamName:['',[Validators.required,Validators.minLength(4)]],
      stadium:['',[Validators.required,Validators.minLength(4)]],
      foundation:['',[Validators.required]],
      owner:['',[Validators.required,Validators.minLength(4)]],
    });
  }

  addTeam(){
  }

}
