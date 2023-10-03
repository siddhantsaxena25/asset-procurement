import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprovalRequestData } from 'src/app/shared-data/models/approval-request-data.model';
import { EmailService } from 'src/app/shared-data/services/email-service/email.service';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-asset-delivery-confirmation',
  templateUrl: './asset-delivery-confirmation.component.html',
  styleUrls: ['./asset-delivery-confirmation.component.css']
})
export class AssetDeliveryConfirmationComponent implements OnInit {
  assetToDeliver: ApprovalRequestData = new ApprovalRequestData();

  constructor(private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase,
    private firestore: AngularFirestore, private emailService: EmailService) {}

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

  async sendConfirmationEmail() {
    const emailData = {
      to: ['sdsxna@gmail.com'],
      message: {
        subject: 'My Email Subject',
        text: `${this.assetToDeliver.assetCode}`,
        html: '<h1>My email HTML</h1>'
      }
    };

    await this.emailService.sendConfirmationEmail(emailData);
  }
}
