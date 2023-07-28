import { Component, OnInit } from '@angular/core';
import { ApprovalRequestDataService } from '../services/approval-request-data.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  constructor(private approvalData: ApprovalRequestDataService) { }

  ngOnInit(): void {
  }

  // approvalRequests = this.approvalData.getApprovalRequests()

  // getAssetsAsJson() {
  //   return JSON.stringify(this.approvalRequests);
  // }

}
