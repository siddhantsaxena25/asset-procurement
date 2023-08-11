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
  assetList?: ApprovalRequestData[]
  currentAsset?: ApprovalRequestData
  currentIndex = -1
  modalTitle?: string;
  modalMessage?: string;
  
  constructor(private approvalRequestDataService: ApprovalRequestDataService) {}

  date = '8/8/2023'
  
  ngOnInit(): void {
    this.retrieveAssets();
  }

  refreshList(): void {
    this.currentAsset = undefined;
    this.currentIndex = -1
    this.retrieveAssets()
  }

  retrieveAssets(): void {
    this.approvalRequestDataService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes
        // .filter(c => c.payload.val()?.approveStatus === "Approved")
        .map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.assetList = data
    })
  }

  setActiveAsset(asset: ApprovalRequestData, index: number): void {
    this.currentAsset = asset;
    this.currentIndex = index;
  }

  removeAllAssets(): void {
    this.approvalRequestDataService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

  generateCode() {

    const min = 100000;
    const max = 999999;
    this.modalTitle = 'Generated Asset Code';
    this.modalMessage = String(Math.floor(Math.random() * (max - min + 1)) + min);

    const modalElement = document.getElementById('codeGenerationModal');
    if (modalElement) {
      modalElement.classList.add('show');
    }
  }

  dismissModal(): void {
    const modalElement = document.getElementById('codeGenerationModal');
    if (modalElement) {
      modalElement.classList.remove('show');
    }
  }

  
}
