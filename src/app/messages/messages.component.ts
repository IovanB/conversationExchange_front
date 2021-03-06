import { Component, OnInit } from '@angular/core';
import { Messages } from '../_models/messages';
import { Pagination } from '../_models/pagination';
import { MessagesService } from '../_services/messages.service';

@Component({
  selector: 'app-messages ',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Messages[] = [];
  pagination: Pagination;
  container = 'Unread';
  pageNumber = 1;
  pageSize = 5;
  loading = false;

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(){
    this.loading = true;
    this.messageService.getMessages(this.pageNumber, this.pageSize, this.container)
    .subscribe(response => {
      this.messages = response.result;
      this.pagination = response.pagination;
      this.loading = false;
    })
  }
  pageChanged(event:any){
    this.pageNumber = event.page;
    this.loadMessages();
  }

}
