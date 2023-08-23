import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovalRequestData } from 'src/app/shared-data/models/approval-request-data.model';

@Component({
  selector: 'app-asset-delivery',
  templateUrl: './asset-delivery.component.html',
  styleUrls: ['./asset-delivery.component.css']
})
export class AssetDeliveryComponent implements OnInit {  
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
