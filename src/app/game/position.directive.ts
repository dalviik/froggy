import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Color } from './models';

@Directive({
  selector: '[fgPosition]'
})
export class PositionDirective implements AfterViewInit {

  @Input()
  color: Color;

  @Input('fgPosition')
  type: string;

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this._elementRef.nativeElement.style.height = '20%';
    this._elementRef.nativeElement.style.width = '20%';
  }

  getPosition() {
    return {
      type: this.type,
      color: this.color,
      top: this._elementRef.nativeElement.offsetTop,
      left: this._elementRef.nativeElement.offsetLeft,
    }
  }
}
