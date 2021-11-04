import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-staduim',
  templateUrl: './add-staduim.component.html',
  styleUrls: ['./add-staduim.component.css']
})
export class AddStaduimComponent implements OnInit {
  title:string;
  id:any;
  addStaduimForm:FormGroup;
  stadium:any={};

  constructor(private fb:FormBuilder, private stadiumService:StadiumService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.addStaduimForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      capacity:['',[Validators.required]],
      country:['',[Validators.required,Validators.minLength(4)]],
    });
    if (this.id) {
      //edit
      this.title= 'edit';
      this.stadiumService.getStadiumById(this.id).subscribe(
        (data)=>{
          console.log(data.FindedStadium);
          this.stadium= data.FindedStadium;
        }
      )
    }else{
      //add
      this.title = 'add';
    }
  }
  
  addStadium(s:any){
    alert('btn clicked')
   
    if (this.id) {
      //edit
      this.stadiumService.editStadium(this.stadium).subscribe(
        (data)=>{
          console.log(data.message);
          
        }
      )
    }
    else{
      //add
      this.stadiumService.addStadium(s).subscribe(
        (data)=>{
          console.log('data add stadium',data.message);
          
        }
      )
    }


  }
}
