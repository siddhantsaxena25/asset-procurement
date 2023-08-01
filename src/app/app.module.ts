import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AssetRequestFormComponent } from './asset-request-form/asset-request-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { ConfirmRequestComponent } from './confirm-request/confirm-request.component';
import { environment } from 'src/environments/environment';
import { SubmitModalComponent } from './submit-modal/submit-modal.component';
import { ApprovalRequestListComponent } from './approval-request-list/approval-request-list.component';
import { ApproveRequestComponent } from './approve-request/approve-request.component';
import { ApproveRequestListComponent } from './approve-request-list/approve-request-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetRequestFormComponent,
    HomePageComponent,
    ViewRequestsComponent,
    ConfirmRequestComponent,
    SubmitModalComponent,
    ApprovalRequestListComponent,
    ApproveRequestComponent,
    ApproveRequestListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AssetRequestFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
