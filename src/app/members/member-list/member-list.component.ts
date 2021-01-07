import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members:Member[];
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 5;
  
  constructor(private memberService : MemberService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers(this.pageNumber, this.pageSize).subscribe( response => {
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  pageChanged(event: any){
    if (this.pagination.currentPage !== event.page){
      
    this.pageNumber = event.page;
    this.loadMembers();
  }
  }
}
