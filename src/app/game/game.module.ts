import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrogComponent } from './frog/frog.component';
import { LilyPadComponent } from './lily-pad/lily-pad.component';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { BoardComponent } from './board/board.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { FroggyService } from '../froggy.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PositionDirective } from './position.directive';


@NgModule({
  declarations: [FrogComponent, LilyPadComponent, EditorComponent, BoardComponent, InstructionsComponent, PositionDirective],
  providers: [FroggyService],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [BoardComponent]
})
export class GameModule { }
