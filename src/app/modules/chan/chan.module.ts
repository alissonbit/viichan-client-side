import { NgModule } from '@angular/core';
import { ChanRoutingModule } from './chan-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    InterfaceComponent,
    BoardComponent,
    ThreadComponent,
    LandingComponent
  ],
  imports: [
    ChanRoutingModule
  ]
})
export class ChanModule { }
