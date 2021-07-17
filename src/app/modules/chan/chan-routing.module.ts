import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationComponent } from './foundation/foundation.component';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';

const routes: Routes = [
  {
    path: '',
    component: FoundationComponent,
    children: [
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
export class ChanRoutingModule { }
