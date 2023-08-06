import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ApprovalRequestData } from 'src/app/shared-data/models/approval-request-data.model';
import { ApprovalRequestDataService } from 'src/app/shared-data/services/approval-request-data-service/approval-request-data.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent {
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
