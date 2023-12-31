import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovalRequestData } from 'src/app/shared-data/models/approval-request-data.model';

@Component({
  selector: 'app-asset-procurement',
  templateUrl: './asset-procurement.component.html',
  styleUrls: ['./asset-procurement.component.css']
})
export class AssetProcurementComponent implements OnInit{  
  procuredAsset: ApprovalRequestData = new ApprovalRequestData();

  constructor(private route: ActivatedRoute, private router: Router) {}

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

  navigateToDelivery(path: string) {    
    this.router.navigate([path], {
      queryParams: { data: JSON.stringify(this.procuredAsset) }
    });
  }

  goBack(path: string) {    
    this.router.navigate([path]);
  }
}
