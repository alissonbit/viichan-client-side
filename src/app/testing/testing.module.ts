import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTesterComponent } from './api-tester/api-tester.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ApiTesterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ApiTesterComponent}])
  ],
  exports: [ RouterModule ]
})
export class TestingModule { }
