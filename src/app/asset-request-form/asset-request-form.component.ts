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

  approvedMachine: string | undefined;
  companyName: string | undefined;
  location: string | undefined;
  subLocation: string | undefined;

  assetOwnerFirstName: string | undefined;
  assetOwnerMiddleName: string | undefined;
  assetOwnerLastName: string | undefined;
  assetOwnerEmail: string | undefined;
  edpNumber: string | undefined;
  assetOwnerDesignation: string | undefined;
  costCenter: string | undefined;
  department: string | undefined;

  organizationName: string | undefined;
  flatBuilding: string | undefined;
  streetName: string | undefined;
  city: string | undefined;
  pincode: string | undefined;
  state: string | undefined;

  gst: string | undefined;

  contactPersonFirstName: string | undefined;
  contactPersonMiddleName: string | undefined;
  contactPersonLastName: string | undefined;
  contactPersonPhoneNumber: string | undefined;

  deviceName: string | undefined;
  assetCode: string | undefined;
  serviceTag: string | undefined;
  issuedDate: string | undefined;

  submit(form: NgForm) {
    console.log("Form Submitted",form);
    console.log(this.contactPersonPhoneNumber, this.issuedDate);
  }
}
