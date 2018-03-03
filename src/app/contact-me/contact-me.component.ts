import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; //January is 0!
  yyyy = this.today.getFullYear();

  date = this.mm +'/'+ this.dd + '/' + this.yyyy


  messages: any;

  userMsg: any;
  userName: any;
  userEmail:any;
  userPhoneNum:any;
  newMsg: any;


  constructor(private dataService: DataService) {
    this.dataService.getMessages()
      .subscribe(data => this.messages = data);
  }

  onSubmit(){
    this.newMsg = { 
      name: this.userName,
      email:this.userEmail, 
      phoneNumber: this.userPhoneNum, 
      date: this.date, 
      message: this.userMsg 
    }

    console.log(this.newMsg)
    this.dataService.sendMessages(this.newMsg)
      .subscribe(message => this.messages.push(message))
    }



  ngOnInit() {
  }

}
