import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { textSpanIntersectsWith } from 'typescript';

@Component({
  selector: 'fg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  text: string;

  @Output('click')
  onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  _onClick() {
    this.onClick.emit();
  }

}
