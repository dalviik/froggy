import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fg-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  @Input()
  value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
