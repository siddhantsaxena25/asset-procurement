import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApprovalRequestData } from '../models/approval-request-data.model';

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