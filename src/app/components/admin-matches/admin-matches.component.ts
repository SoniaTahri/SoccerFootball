import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {
  
  matches:any;
  constructor(private matchService:MatchService, private router:Router) { }

  ngOnInit(){
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        console.log(data.message);
        console.log(data.matches);
        this.matches = data.matches;
        
      }
    )
  }

  deleteMatch(id){
    this.matchService.deleteMatch(id).subscribe(
      (data)=>{
        console.log('Match',data.message);
        this.matchService.getAllMatches().subscribe(
          (data)=>{
            console.log(data.message);
            console.log(data.matches);
            this.matches = data.matches;
            
          }
        )
        
      }
    )
  }

  displayMatch(id:any){
    this.router.navigate([`display-match/${id}`]);
  }

  editMatch(id:any){
    this.router.navigate([`edit-match/${id}`]);
  }


}
