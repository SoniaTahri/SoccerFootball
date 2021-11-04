import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.css']
})
export class StadeComponent implements OnInit {

  @Input() childStadium;
  constructor() { }

  ngOnInit(): void {
  }

}
