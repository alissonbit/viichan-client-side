import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanComponent } from './modules/error/ban/ban.component';
import { NotFoundComponent } from './modules/error/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/chan/chan.module').then(m => m.ChanModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'login',
    redirectTo: 'user'
  },
  {
    path: 'dashboard',
    redirectTo: 'user'
  },
  {
    path: 'ban',
    component: BanComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
