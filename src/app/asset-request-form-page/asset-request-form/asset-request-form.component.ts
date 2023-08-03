import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApprovalRequestData } from '../../shared-data/models/approval-request-data.model';

@Component({
  selector: 'app-asset-request-form',
  templateUrl: './asset-request-form.component.html',
  styleUrls: ['./asset-request-form.component.css']
})

export class AssetRequestFormComponent implements OnInit {

  @Input()
  approvalRequestData: ApprovalRequestData = new ApprovalRequestData()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  getTimeRemaining(expiryDate: string): void {
    const expiryDateObj = new Date(expiryDate);
    const currentDate = new Date();
    const timeDiff = expiryDateObj.getTime() - currentDate.getTime();
  
    if (timeDiff <= 0) {
      this.approvalRequestData.expiryStatus = 'This device is expired';
      return;
    }
  
    const yearsRemaining = expiryDateObj.getFullYear() - currentDate.getFullYear();
    const monthsRemaining = expiryDateObj.getMonth() - currentDate.getMonth();
    const daysRemaining = expiryDateObj.getDate() - currentDate.getDate();
  
    let result = 'Time remaining until expiry date:';
  
    if (yearsRemaining > 0) {
      result += ` ${yearsRemaining} ${yearsRemaining === 1 ? 'year' : 'years'}`;
    }
  
    if (monthsRemaining > 0) {
      result += ` ${monthsRemaining} ${monthsRemaining === 1 ? 'month' : 'months'}`;
    }
  
    if (daysRemaining > 0) {
      result += ` ${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'}`;
    }
  
    this.approvalRequestData.expiryStatus = result.trim();
  }
  
  

  calculateExpiryDate() {
    if (this.approvalRequestData.issuedDate) {
      const issuedDateObj = new Date(this.approvalRequestData.issuedDate);
      const expiryDateYear = issuedDateObj.getFullYear() + 4;
      const expiryDateMonth = issuedDateObj.getMonth() + 1;
      const formattedExpiryDate = `${expiryDateYear}-${this.padZero(expiryDateMonth)}`;

      this.approvalRequestData.expiryDate = formattedExpiryDate;
      this.getTimeRemaining(this.approvalRequestData.expiryDate);
    }
  }

  private padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
  
  submit(path: string) {    
    this.router.navigate([path], {
      queryParams: {data: JSON.stringify(this.approvalRequestData)}
    })
    console.log(this.approvalRequestData)
  }

  resetAssetForm(form: NgForm) {
    form.resetForm()
  }

  clickButton(path: string) {
    this.router.navigate([path]);
  } 
  
}