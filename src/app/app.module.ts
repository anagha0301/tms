import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MustMatchDirective } from './helpers/mustmatchdirective';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { TokenInterceptorService} from './token-interceptor.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { SubmitsuccessComponent } from './submitsuccess/submitsuccess.component';
import { CalenderComponent } from './calender/calender.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApprovalformComponent } from './approvalform/approvalform.component';
import { AllocationListComponent } from './allocation-list/allocation-list.component'
import {DataTablesModule} from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    MustMatchDirective,
    EnrollmentComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminHeaderComponent,
    
    SubmitsuccessComponent,
         CalenderComponent,
         ProfileComponent,
         ApplicationListComponent,
         ApprovalformComponent,
         AllocationListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
