import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import 'C:/Users/sid25/Desktop/fullstack_dev/asset-procurement/src/assets/smtp.js';
declare let Email: any

@Component({
  selector: 'app-asset-request-form',
  templateUrl: './asset-request-form.component.html',
  styleUrls: ['./asset-request-form.component.css']
})
export class AssetRequestFormComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  formData = {
    id: "",
    approvedMachine: "",
    companyName: "",
    location: "",
    subLocation: "",

    assetOwnerFirstName: "",
    assetOwnerMiddleName: "",
    assetOwnerLastName: "",
    assetOwnerEmail: "",
    edpNumber: "",
    assetOwnerDesignation: "",
    costCenter: "",
    department: "",

    organizationName: "",
    flatBuilding: "",
    streetName: "",
    city: "",
    pincode: "",
    state: "",

    gst: "",

    contactPersonFirstName: "",
    contactPersonMiddleName: "",
    contactPersonLastName: "",
    contactPersonPhoneNumber: "",

    deviceName: "",
    assetCode: "",
    serviceTag: "",
    issuedDate: ""
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  

  submit(form: NgForm) {
    if (form.valid) {
      console.log("Form submitted:\n", this.formData)
      console.log("*****************")
      console.log(form)

      this.formData.id = this.formData.companyName + this.formData.deviceName

      this.httpClient.post(
        'https://asset-procurement-default-rtdb.asia-southeast1.firebasedatabase.app/assetApprovals.json',
        this.formData
      ).subscribe(response => console.log(response))
    }
  }

  resetAssetForm(form: NgForm) {
    form.resetForm()
  }

  sendEmail(form: NgForm) {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'sdsxna@gmail.com',
      Password : '5D2B811EF055DD441428F249FB64F3CDA873',
      To : 'sid2507@gmail.com',
      From : `sdsxna@gmail.com`,
      Subject : `Asset Approval Request from ${this.formData.assetOwnerFirstName} ${this.formData.assetOwnerMiddleName} ${this.formData.assetOwnerLastName}`,
      Body:
        `
        ${this.formData}
        `
    }).then(alert("Mail Sent"));
    console.log("Mail Sent")
  }

  clickButton(path: string) {
    this.router.navigate([path]);
} 
}