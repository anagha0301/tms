import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SubmitsuccessComponent } from './submitsuccess/submitsuccess.component';
import { CalenderComponent } from './calender/calender.component';
import { ProfileComponent } from './profile/profile.component';
import {AdminGuard} from './admin.guard';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApprovalformComponent } from './approvalform/approvalform.component';
import { AllocationListComponent } from './allocation-list/allocation-list.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{ path: 'admin',
  component:AdminloginComponent
},
{
  path:'enrollment',
canActivate:[AuthGuard],
component:EnrollmentComponent
},
{path:'admindashboard',
canActivate:[AdminGuard],
component:AdmindashboardComponent},
{path:'applicationlist',canActivate:[AdminGuard],component:ApplicationListComponent},
{path:'approvalform',canActivate:[AdminGuard],component:ApprovalformComponent},
{path:'approvedlist',canActivate:[AdminGuard],component:AllocationListComponent},
{path:'submitsuccess',component:SubmitsuccessComponent},
{path:'calender',
canActivate:[AuthGuard],
component:CalenderComponent},
{path:'profile',
canActivate:[AuthGuard],
component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
