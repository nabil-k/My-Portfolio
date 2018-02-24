import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  messages: any;

  constructor(private dataService: DataService) {
      this.dataService.getMessages()
        .subscribe(data => this.messages = data);
  }

  ngOnInit() {
  }

}
