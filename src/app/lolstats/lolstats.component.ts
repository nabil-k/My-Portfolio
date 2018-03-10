import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-lolstats',
  templateUrl: './lolstats.component.html',
  styleUrls: ['./lolstats.component.css']
})
export class LolstatsComponent implements OnInit {

  mastery:any;

  constructor(private dataService: DataService) { 
    this.dataService.getMasteryStats().subscribe(data => this.mastery = data);
  }

  ngOnInit() {
  }

}
