import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-admin-stadiums',
  templateUrl: './admin-stadiums.component.html',
  styleUrls: ['./admin-stadiums.component.css']
})
export class AdminStadiumsComponent implements OnInit {

  stadiums:any;
  constructor(private stadiumService:StadiumService, private router:Router) { }

  ngOnInit(){
    this.stadiumService.getAllStadiums().subscribe(
      (data)=>{
        console.log(data.message);
        console.log(data.stadium);
        this.stadiums = data.stadium;
        
      }
    )
  }

  deleteStadium(id:any){
    this.stadiumService.deleteStadium(id).subscribe(
      (data)=>{
        console.log('STADIUM',data.message);
        
        this.stadiumService.getAllStadiums().subscribe(
          (data)=>{
            console.log(data.message);
            console.log(data.stadium);
            this.stadiums = data.stadium;
            
          }
        )
      }
    )
  }

  editStadium(id:any){
    this.router.navigate([`edit-stadium/${id}`])

  }
}
