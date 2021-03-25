import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { LevelIndicatorComponent } from './level-indicator/level-indicator.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [ButtonComponent, TitleComponent, LevelIndicatorComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [
      ButtonComponent,
      TitleComponent,
      LevelIndicatorComponent,
      AboutComponent
  ]
})
export class SharedModule { }
