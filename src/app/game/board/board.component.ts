import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FroggyService } from 'src/app/froggy.service';
import { PositionDirective } from '../position.directive';
import { FrogComponent } from '../frog/frog.component';
import { Level } from '../models';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'fg-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  level: Level;

  levelValue: FormControl;
  editorValue: FormControl;

  currentLevel: number;
  winner: boolean;
  isDisabled: boolean;

  @ViewChildren(PositionDirective)
  elements: QueryList<PositionDirective>;

  constructor(private _froggyService: FroggyService) {
    this.level = _froggyService.currentLevel;
    this.currentLevel = 1;

    this.editorValue = new FormControl('justify-content: left;', { updateOn: 'blur' });

    this.editorValue.valueChanges.pipe(delay(100)).subscribe(this.onStyteChange);

    this.levelValue = new FormControl(this.currentLevel, { updateOn: 'change' });

    this.levelValue.valueChanges.subscribe(level => {
      this.currentLevel = level;
      this.winner = false;
      this.onLevelChange
    })
  }

  onStyteChange = () => {
    // Validate the positions.
    const elements = this.elements.map(e => e.getPosition());

    this.winner = this._froggyService.checkPositions(elements);

  }


  onLevelChange = (level: number) => {
    console.log(this.currentLevel)
    this.currentLevel = level;
    this.winner = false;
  }

  showValues() {
    console.log(this.elements.map(e => e.getPosition()));
  }

  ngOnInit(): void {
  }



}
