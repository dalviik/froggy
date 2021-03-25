import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../models';

@Component({
  selector: 'fg-frog',
  templateUrl: './frog.component.html',
  styleUrls: ['./frog.component.scss']
})
export class FrogComponent implements OnInit {

  @Input()
  color: Color;

  constructor() { }

  ngOnInit(): void {
  }

  hello() {}

}
