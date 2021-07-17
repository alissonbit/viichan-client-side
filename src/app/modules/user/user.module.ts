import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FoundationComponent } from './foundation/foundation.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    FoundationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
