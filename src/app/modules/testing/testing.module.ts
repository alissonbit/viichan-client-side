import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTesterComponent } from './api-tester/api-tester.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ApiTesterComponent
  }
]

@NgModule({
  declarations: [
    ApiTesterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestingModule { }
