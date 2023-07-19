import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asset-request-form',
  templateUrl: './asset-request-form.component.html',
  styleUrls: ['./asset-request-form.component.css']
})
export class AssetRequestFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
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
    }
  }

  resetAssetForm(form: NgForm) {
    form.resetForm()
  }
}
