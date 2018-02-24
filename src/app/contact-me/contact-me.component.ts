import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  messages: any;

  userMsg:any;
  userName: any;
  date:any;
  // newMsg = {name: this.userMsg, date:this.date, message: this.userMsg }
  newMsg:any = {name: "this.userMsg", date:"this.date", message: "this.userMsg" }


  constructor(private dataService: DataService) {
      this.dataService.getMessages()
        .subscribe(data => this.messages = data);
      
        this.dataService.sendMessages(this.newMsg)
          .subscribe(message => this.messages.push(message))
        
  }

  ngOnInit() {
  }

}
