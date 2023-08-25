import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovalRequestData } from 'src/app/shared-data/models/approval-request-data.model';

@Component({
  selector: 'app-asset-delivery-confirmation',
  templateUrl: './asset-delivery-confirmation.component.html',
  styleUrls: ['./asset-delivery-confirmation.component.css']
})
export class AssetDeliveryConfirmationComponent implements OnInit {
  assetToDeliver: ApprovalRequestData = new ApprovalRequestData();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const dataString = params['data'];
      if (dataString) {
        this.assetToDeliver = JSON.parse(dataString);
      } else {
        console.log("DATA INVALID")
      }
    });
  }

  goBack(path: string) {    
    this.router.navigate([path]);
  }
}
