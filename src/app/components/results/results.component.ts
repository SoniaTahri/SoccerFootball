import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  matches:any;
  constructor(private matchService:MatchService) { }

  ngOnInit(){
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        console.log(data.matches);
        this.matches= data.matches;
      }
    )
  }

}
