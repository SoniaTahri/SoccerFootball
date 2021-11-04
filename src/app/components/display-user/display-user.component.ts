import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actualPrimitives } from 'mongoose';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  id:any;
  myUser:any;
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      (data)=>{
        console.log('User',data.FindedUser);        
        this.myUser=data.FindedUser;
      }
    )
  }

}
