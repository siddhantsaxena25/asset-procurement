import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprovalFormDataService {

  constructor() { }

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

  generateId(companyName: string, approvedMachine: string): string {
    let restId = 0
    let id = companyName+"-"+approvedMachine+"-"+restId.toString()
    return id
  }
}
