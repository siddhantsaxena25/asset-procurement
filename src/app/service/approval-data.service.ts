import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprovalDataService {

  constructor() { }

  getApprovalRequests() {
    return [
      {
         "approvedMachine": "Laptop",
         "assetCode": 2106635,
         "assetOwnerDesignation": "Assistant Manager",
         "assetOwnerEmail": "kuldeep.choudhary@godrejagrovet.com",
         "assetOwnerFirstName": "Kuldeep",
         "assetOwnerLastName": "Choudhary",
         "assetOwnerMiddleName": "",
         "city": "Sector 66",
         "companyName": "GAVL",
         "contactPersonFirstName": "Randeep",
         "contactPersonLastName": "Ghuman",
         "contactPersonMiddleName": "Singh",
         "contactPersonPhoneNumber": "998899989",
         "costCenter": "A100357",
         "department": "Sales",
         "deviceName": "Dell Latitude 3490",
         "edpNumber": "G100302",
         "flatBuilding": "B-507; 5th Floor; Bestech Business Tower",
         "gst": "03AAACG0617Q1ZQ",
         "id": "GAVL-Laptop-0",
         "issuedDate": "2018-06",
         "location": "CPB North",
         "organizationName": "Godrej Agrovet Ltd",
         "pincode": "160055",
         "serviceTag": "80ZJFP2",
         "state": "Punjab",
         "streetName": "Phase 9",
         "subLocation": "Mohali RO"
       },
       {
         "approvedMachine": "Printer",
         "assetCode": 310983,
         "assetOwnerDesignation": "Regional Manager",
         "assetOwnerEmail": "john.doe@godrejagrovet.com",
         "assetOwnerFirstName": "John",
         "assetOwnerLastName": "Doe",
         "assetOwnerMiddleName": "",
         "city": "Vellore",
         "companyName": "GAVL",
         "contactPersonFirstName": "John",
         "contactPersonLastName": "Roe",
         "contactPersonMiddleName": "",
         "contactPersonPhoneNumber": "1234567890",
         "costCenter": "A200324",
         "department": "Finance",
         "deviceName": "HP Laserjet",
         "edpNumber": "G110210",
         "flatBuilding": "Room 101, Building Name",
         "gst": "03BBBCG0817E1ZD",
         "id": "GAVL-Printer-0",
         "issuedDate": "2023-07",
         "location": "Katpadi",
         "organizationName": "Godrej Agrovet Ltd",
         "pincode": "632014",
         "serviceTag": "81RFGD7",
         "state": "Tamil Nadu",
         "streetName": "Test Street",
         "subLocation": "Vellore"
       }
     ]
  }
}
