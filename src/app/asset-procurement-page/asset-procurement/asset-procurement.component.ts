import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApprovalRequestData } from 'src/app/shared-data/models/approval-request-data.model';

@Component({
  selector: 'app-asset-procurement',
  templateUrl: './asset-procurement.component.html',
  styleUrls: ['./asset-procurement.component.css']
})
export class AssetProcurementComponent implements OnInit{  
  procuredAsset: ApprovalRequestData = new ApprovalRequestData();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const dataString = params['data'];
      if (dataString) {
        this.procuredAsset = JSON.parse(dataString);
      } else {
        console.log("DATA INVALID")
      }
    });
  }
}
