import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AssetRequestFormComponent } from './asset-request-form/asset-request-form.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { ConfirmRequestComponent } from './confirm-request/confirm-request.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetRequestFormComponent,
    HomePageComponent,
    ViewRequestsComponent,
    ConfirmRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
