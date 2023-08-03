import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ViewRequestsComponent } from './view-request-page/view-requests/view-requests.component';
import { AssetRequestFormComponent } from './asset-request-form-page/asset-request-form/asset-request-form.component';
import { ConfirmRequestComponent } from './confirm-request-page/confirm-request/confirm-request.component';
import { ApproveRequestComponent } from './approve-request-page/approve-request/approve-request.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "requests", component: ViewRequestsComponent},
  {path: "form", component: AssetRequestFormComponent},
  {path: "confirmRequest", component: ConfirmRequestComponent},
  {path: "approveRequest", component: ApproveRequestComponent}
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
