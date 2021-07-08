import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then((m) => m.TestingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
