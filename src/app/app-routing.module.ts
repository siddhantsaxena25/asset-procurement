import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { AssetRequestFormComponent } from './asset-request-form/asset-request-form.component';
import { ConfirmRequestComponent } from './confirm-request/confirm-request.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "requests", component: ViewRequestsComponent},
  {path: "form", component: AssetRequestFormComponent},
  {path: "confirmRequest", component: ConfirmRequestComponent}
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
