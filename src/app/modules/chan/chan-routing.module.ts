import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'board',
        component: BoardComponent,
        children: [
          {
            path: 'thread',
            component: ThreadComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChanRoutingModule { }
