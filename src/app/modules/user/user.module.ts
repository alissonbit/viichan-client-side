import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackgroundComponent } from './background/background.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    BackgroundComponent
  ],
  imports: [
    UserRoutingModule
  ]
})
export class UserModule { }
