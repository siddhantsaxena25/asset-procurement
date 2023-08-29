import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ApprovalRequestData } from 'src/app/shared-data/models/approval-request-data.model';
import { ApprovalRequestDataService } from 'src/app/shared-data/services/approval-request-data-service/approval-request-data.service';

@Component({
  selector: 'app-device-allocation',
  templateUrl: './device-allocation.component.html',
  styleUrls: ['./device-allocation.component.css']
})
export class DeviceAllocationComponent {
  deviceList?: ApprovalRequestData[]
  currentDevice?: ApprovalRequestData
  currentIndex = -1

  constructor(private approvalRequestDataService: ApprovalRequestDataService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveDevices();
  }

  refreshList(): void {
    this.currentDevice = undefined;
    this.currentIndex = -1
    this.retrieveDevices()
  }

  retrieveDevices(): void {
    this.approvalRequestDataService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.deviceList = data
    })
  }

  setActiveDevice(device: ApprovalRequestData, index: number): void {
    this.currentDevice = device;
    this.currentIndex = index;
  }
}
