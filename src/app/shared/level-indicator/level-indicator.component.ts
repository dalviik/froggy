import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fg-level-indicator',
  templateUrl: './level-indicator.component.html',
  styleUrls: ['./level-indicator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LevelIndicatorComponent),
      multi: true
    }
  ]
})
export class LevelIndicatorComponent implements OnInit, OnChanges, ControlValueAccessor {

  levels: any[];



  @Input()
  maxLevel: number;

  @Input()
  level: number;

  @Input()
  currentLevel: number;

  value: number = 0;

  onChange: any;

  onTouched: any;

  disabled: boolean;

  modalLevels: boolean = false;

  @Output()
  levelChange = new EventEmitter<number>();

  constructor() {
    this.levels = [];
    this.currentLevel = 1;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.levels = Array(changes.maxLevel || 0).fill(undefined);
  }

  ngOnInit(): void {

  }

  previousLevel(): void {
    if (this.currentLevel > 1) {

      this.currentLevel--;
      this.onChange(this.currentLevel);
    }

  }
  nextLevel(): void {
    if (this.currentLevel < this.maxLevel - 1) {
      this.currentLevel++;
      this.onChange(this.currentLevel);
    }

  }

  pickLevel(level: number){
    this.currentLevel = level;
    this.modalLevels =false;
    this.onChange(this.currentLevel);
  }

  showAllLevels(): void {
    console.log('Showing modal');
    this.levels = new Array(this.maxLevel);
    this.modalLevels = true;
  }
}
