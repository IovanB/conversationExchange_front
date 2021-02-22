import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/_models/messages';
import { MessagesService } from 'src/app/_services/messages.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() username: string;
  messages: Messages[];


  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.loadMessages()
  }

  loadMessages(){
    this.messageService.getMessageThread(this.username).subscribe(messages => {
      this.messages = messages;
    })
  }
}
