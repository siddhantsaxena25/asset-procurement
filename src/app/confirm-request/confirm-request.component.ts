import { Component, OnInit } from '@angular/core';
import { ApprovalFormDataService } from '../service/approval-form-data.service';

@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.css']
})
export class ConfirmRequestComponent implements OnInit {

  constructor(private approvalFormData: ApprovalFormDataService) { }

  ngOnInit(): void {
  }

  formData = this.approvalFormData.formData
}
