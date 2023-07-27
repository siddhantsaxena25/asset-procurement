import { Component, OnInit } from '@angular/core';
import { ApprovalFormDataService } from '../service/approval-form-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.css']
})

export class ConfirmRequestComponent implements OnInit {

  constructor(private approvalFormData: ApprovalFormDataService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  formData = this.approvalFormData.formData

  submit() {
    this.formData.id = this.generateId(this.formData.companyName, this.formData.approvedMachine)

    this.httpClient.post(
      'https://asset-procurement-default-rtdb.asia-southeast1.firebasedatabase.app/assetApprovals.json',
      this.formData
    ).subscribe(response => console.log(response))
  }

  
  generateId(companyName: string, approvedMachine: string): string {
    let restId = 0
    let id = companyName+"-"+approvedMachine+"-"+restId.toString()
    restId+=1
    return id
  }

  clickButton(path: string) {
    this.router.navigate([path]);
  }

}