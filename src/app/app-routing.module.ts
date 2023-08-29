import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ViewRequestsComponent } from './view-request-page/view-requests/view-requests.component';
import { AssetRequestFormComponent } from './asset-request-form-page/asset-request-form/asset-request-form.component';
import { ConfirmRequestComponent } from './confirm-request-page/confirm-request/confirm-request.component';
import { ApproveRequestComponent } from './approve-request-page/approve-request/approve-request.component';
import { AssetCodeCreationComponent } from './asset-code-creation-page/asset-code-creation/asset-code-creation.component';
import { AssetProcurementComponent } from './asset-procurement-page/asset-procurement/asset-procurement.component';
import { AssetDeliveryComponent } from './asset-delivery-page/asset-delivery/asset-delivery.component';
import { AssetDeliveryConfirmationComponent } from './asset-delivery-confirmation-page/asset-delivery-confirmation/asset-delivery-confirmation.component';
import { DeviceAllocationComponent } from './device-allocation-page/device-allocation/device-allocation.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "requests", component: ViewRequestsComponent},
  {path: "form", component: AssetRequestFormComponent},
  {path: "confirmRequest", component: ConfirmRequestComponent},
  {path: "approveRequest", component: ApproveRequestComponent},
  {path: "assetCodeGeneration", component: AssetCodeCreationComponent},
  {path: "assetProcurement", component: AssetProcurementComponent},
  {path: "assetDelivery", component: AssetDeliveryComponent},
  {path: "assetDeliveryConfirmation", component: AssetDeliveryConfirmationComponent},
  {path: "deviceAllocation", component: DeviceAllocationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
