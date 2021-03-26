import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import levels, { Level } from './game/models';
import { PositionDirective } from './game/position.directive';


export interface GameStatus {
  winner: boolean;
}

const initialGameStatus: GameStatus = {
  winner: false
}
@Injectable({
  providedIn: 'root'
})
export class FroggyService {

  levels: Level[];
  private _gameSubject = new BehaviorSubject<GameStatus>(initialGameStatus);

  constructor() {

    this.levels = levels;

  }

  get status(): Observable<GameStatus> {
    return this._gameSubject.asObservable();
  }


  get currentLevel(): Level {
    return this.levels[0];
  }


  public checkPositions(array): boolean {
    let winner: boolean = null;
    if (this._checkResult(array)) {
      winner = true;
      this._next(winner);
      this._gameSubject.complete();
      return true
    }
    return false;
  }

  private _checkResult(array): boolean {
    console.log('checking result')
    let win = false;
    console.log('ARRAY: ', array);

    const arrayFrogs = array.splice(0, (array.length / 2));
    const arrayLilypads: [] = array.splice(0, array.length);
    console.log('Frogs: ', arrayFrogs);
    console.log('Lilypads: ', arrayLilypads);

    let i = 0;
    let check = 0;

    arrayFrogs.forEach(frog => {
      console.log(i);
      const lilyPad: any = arrayLilypads[i];
      if (frog.color == lilyPad.color && frog.left == lilyPad.left && frog.top == lilyPad.top) {
        check = check + 1;
      }
      i = i + 1;
    });
    console.log('Check: ', check);
    if (check === arrayFrogs.length) {
      win = true;
    } else {
      win = false;
    }
    return win;
  }

  private _next(winner): void {
    this._gameSubject.next({
      winner: winner
    })
  }
}
