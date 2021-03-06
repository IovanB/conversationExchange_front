import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Messages } from '../_models/messages';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMessages(pageNumber, pageSize, container){
    let params = getPaginationHeaders(pageNumber,pageSize);
    params = params.append('Container', container);
    return getPaginatedResult<Messages[]>(this.baseUrl + 'messages', params, this.http);
  }

  getMessageThread(username: string){
    return this.http.get<Messages[]>(this.baseUrl + 'messages/thread/' + username);
  }

  sendMessage(username: string, content:string){
    return this.http.post<Messages>(this.baseUrl + 'messages', {recipientUsername:username, content});
  }

  deleteMessage(id:number){
    return this.http.delete(this.baseUrl + 'messages/'+ id);
  }
}
