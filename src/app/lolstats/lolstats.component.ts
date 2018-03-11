import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service'

@Component({
  selector: 'app-lolstats',
  templateUrl: './lolstats.component.html',
  styleUrls: ['./lolstats.component.css']
})
export class LolstatsComponent implements OnInit {

  mastery:any;
  summoner:any
  matches:any
  matchesList:any;

  constructor(private dataService: DataService) { 
    this.dataService.getMasteryStats().subscribe(data => this.mastery = data);
    this.dataService.getSummonerData().subscribe(data => this.summoner = data);
    this.dataService.getSummonerMatches().subscribe((data) => {
      this.matches = data
      console.log(this.matches)
      console.log(this.matches.matches)
      this.matchesList = this.matches.matches
    });
    //this.matches = Array.of(this.matches); 
  }

  

  ngOnInit() {
  }

}
