import { Component, OnInit } from '@angular/core';
import { ApprovalRequestDataService } from '../services/approval-request-data.service';
import { ApprovalRequestData } from '../models/approval-request-data.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-approval-request-list',
  templateUrl: './approval-request-list.component.html',
  styleUrls: ['./approval-request-list.component.css']
})
export class ApprovalRequestListComponent implements OnInit{
  
  approvalRequestList?: ApprovalRequestData[]
  currentApprovalRequest?: ApprovalRequestData
  currentIndex = -1
  
  constructor(private approvalRequestDataService: ApprovalRequestDataService) {}
  
  ngOnInit(): void {
    this.retrieveRequests();
  }

  refreshList(): void {
    this.currentApprovalRequest = undefined;
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
      this.approvalRequestList = data
    })
  }

  setActiveApprovalRequest(approvalRequestData: ApprovalRequestData, index: number): void {
    this.currentApprovalRequest = approvalRequestData;
    this.currentIndex = index;
  }

  removeAllApprovalRequests(): void {
    this.approvalRequestDataService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  } 

}
