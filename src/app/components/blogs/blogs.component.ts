import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  stadiums:any;
  constructor(private stadiumService:StadiumService) { }

  ngOnInit(){
    this.stadiumService.getAllStadiums().subscribe(
      (data)=>{
        console.log(data.stadium);
        this.stadiums= data.stadium;
      }
    )
  }

}
