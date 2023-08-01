import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ApprovalRequestData } from '../models/approval-request-data.model';
import { ApprovalRequestDataService } from '../services/approval-request-data.service';

@Component({
  selector: 'app-approve-request-list',
  templateUrl: './approve-request-list.component.html',
  styleUrls: ['./approve-request-list.component.css']
})
export class ApproveRequestListComponent {
  approveRequestList?: ApprovalRequestData[]
  currentRequestToApprove?: ApprovalRequestData
  currentIndex = -1
  
  constructor(private approvalRequestDataService: ApprovalRequestDataService) {}
  
  ngOnInit(): void {
    this.retrieveRequests();
  }

  refreshList(): void {
    this.currentRequestToApprove = undefined;
    this.currentIndex = -1
    this.retrieveRequests()
  }

  retrieveRequests(): void {
    this.approvalRequestDataService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.approveRequestList = data
    })
  }

  setActiveRequestToApprove(approvalRequestData: ApprovalRequestData, index: number): void {
    this.currentRequestToApprove = approvalRequestData;
    this.currentIndex = index;
  }

  removeAllRequestsToApprove(): void {
    this.approvalRequestDataService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

  approveRequest(approvalRequest: ApprovalRequestData) {
    // Perform the approval action (e.g., send a request to the backend)
    approvalRequest.approveStatus = 'Approved';
  }

  rejectRequest(approvalRequest: ApprovalRequestData) {
    // Perform the rejection action (e.g., send a request to the backend)
    approvalRequest.approveStatus = 'Rejected';
  }
}
