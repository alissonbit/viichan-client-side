import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationComponent } from '../chan/foundation/foundation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: FoundationComponent,
    redirectTo: 'login',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: LoginComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
