import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ApprovalRequestData } from '../../shared-data/models/approval-request-data.model';
import { ApprovalRequestDataService } from '../../shared-data/services/approval-request-data-service/approval-request-data.service';

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
    console.log(this.approveRequestList)
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
    approvalRequest.approveStatus = 'Approved';
    approvalRequest.approvalDate = new Date().toLocaleDateString();
  }

  rejectRequest(approvalRequest: ApprovalRequestData) {
    approvalRequest.approveStatus = 'Rejected';
  }
}
