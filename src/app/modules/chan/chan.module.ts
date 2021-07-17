import { NgModule } from '@angular/core';
import { ChanRoutingModule } from './chan-routing.module';
import { FoundationComponent } from './foundation/foundation.component';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';



@NgModule({
  declarations: [
    FoundationComponent,
    BoardComponent,
    ThreadComponent
  ],
  imports: [
    ChanRoutingModule
  ]
})
export class ChanModule { }
