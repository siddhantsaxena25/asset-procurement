import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApprovalRequestDataService } from '../../shared-data/services/approval-request-data-service/approval-request-data.service';
import { ApprovalRequestData } from '../../shared-data/models/approval-request-data.model';

@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.css']
})

export class ConfirmRequestComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, 
              private approvalRequestDataService: ApprovalRequestDataService) { }
  
  modalTitle?: string;
  modalMessage?: string;
  approvalRequestDataToConfirm: ApprovalRequestData = new ApprovalRequestData();

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const dataString = params['data'];
      if (dataString) {
        this.approvalRequestDataToConfirm = JSON.parse(dataString);
      } else {
        console.log("DATA INVALID")
      }
    });
  }

  submit() {
    this.approvalRequestDataToConfirm.requestDate = new Date().toLocaleDateString()    

    this.approvalRequestDataToConfirm.id = this.generateId(this.approvalRequestDataToConfirm.companyName!, this.approvalRequestDataToConfirm.approvedMachine!, 
                                                            this.approvalRequestDataToConfirm.assetCode!)

    this.approvalRequestDataService.create(this.approvalRequestDataToConfirm).then(() => {
      console.log("new data entered", this.approvalRequestDataToConfirm)
    })

    this.modalTitle = 'Request is submitted';
    this.modalMessage = `Request is sent for approval with ID: ${ this.approvalRequestDataToConfirm.id }`;

    const modalElement = document.getElementById('submitModal');
    if (modalElement) {
      modalElement.classList.add('show');
    }
  }

  dismissModal(): void {
    const modalElement = document.getElementById('submitModal');
    if (modalElement) {
      modalElement.classList.remove('show');
    }
  }

  
  generateId(companyName: string, approvedMachine: string, assetCode: number): string {
    let id = companyName+"-"+approvedMachine+"-"+assetCode.toString()
    return id
  }

  clickButton(path: string) {
    this.router.navigate([path]);
  }

}