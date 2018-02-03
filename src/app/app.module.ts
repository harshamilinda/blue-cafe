import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CafeDashboardComponent } from './cafe-dashboard/cafe-dashboard.component';
import { TestComponent } from './cafe-main/test.component';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CafeOrderComponent } from './cafe-order/cafe-order.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { CafeOrderNotificationComponent } from './cafe-order-notification/cafe-order-notification.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { CafeApiService } from './services/cafe-api.service';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    CafeDashboardComponent,
    TestComponent,
    CafeOrderComponent,
    CafeOrderNotificationComponent
    
  ],
  imports: [
    BrowserModule, MatButtonModule, MatCheckboxModule, MatTabsModule, BrowserAnimationsModule, 
    MatIconModule, MatToolbarModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatListModule, 
    MatFormFieldModule, MatInputModule, MatSelectModule, HttpModule
  ],
  providers: [CafeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
