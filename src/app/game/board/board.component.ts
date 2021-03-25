import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FroggyService } from 'src/app/froggy.service';
import { PositionDirective } from '../position.directive';
import { FrogComponent } from '../frog/frog.component';
import { Level } from '../models';

@Component({
  selector: 'fg-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit {

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

    this.editorValue = new FormControl('justify-content: space-center;', { updateOn: 'blur' });
    this.editorValue.valueChanges.subscribe(this.onStyteChange);

    this.levelValue = new FormControl(this.currentLevel, { updateOn: 'change' });

    this.levelValue.valueChanges.subscribe(level => {
      this.currentLevel = level;
      this.onLevelChange
    })
  }

  onStyteChange = () => {
    // Validate the positions.
    const elements = this.elements.map(e => e.getPosition());
    // this.winner = this._froggyService.(elements);

    if (this.winner) {
      console.log('Gano')
    } else {
      console.log('no gano')
    }

    console.log('Winner:', this.winner)

    // console.log(this.elements.first.getPosition());
  }

  ngAfterViewInit(): void {
  }
  /* onLevelChange() = (level:number) {
    console.log(this.currentLevel)
  }
 */

  onLevelChange = (level: number) => {
    console.log(this.currentLevel)
    this.currentLevel = level;
  }

  showValues() {
    console.log(this.elements.map(e => e.getPosition()));
  }

  ngOnInit(): void {
  }



}
