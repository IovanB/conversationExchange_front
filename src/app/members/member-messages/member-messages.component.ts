import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Messages } from 'src/app/_models/messages';
import { MessagesService } from 'src/app/_services/messages.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
 @ViewChild('messageForm') messageForm: NgForm;
  @Input()  messages: Messages[];
@Input() username: string;
messageContent: string;

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
   
  }

  sendMessages(){
    this.messageService.sendMessage(this.username, this.messageContent).subscribe(message => {
      this.messages.push(message);
      this.messageForm.reset();
    })
  }
}
