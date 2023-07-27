import { Component, OnInit } from '@angular/core';
import { ApprovalDataService } from '../service/approval-data.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  constructor(private approvalData: ApprovalDataService) { }

  ngOnInit(): void {
  }

  approvalRequests = this.approvalData.getApprovalRequests()

  getAssetsAsJson() {
    return JSON.stringify(this.approvalRequests);
  }

}
