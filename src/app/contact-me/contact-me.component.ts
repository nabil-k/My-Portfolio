import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  users: Array<any>;
  constructor(private _dataService: DataService) { 
      this._dataService.getUsers().subscribe(res => this.users = res);
  }

  ngOnInit() {
  }

}
