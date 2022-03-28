import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
})
export class BlockComponent implements OnInit {
  isLit: boolean;
  litStatus: string = 'isDim';

  @Input()
  btnId: number;

  @Input()
  changeButton: boolean = false;

  @Output()
  adjacentBtns = new EventEmitter<number[]>();

  constructor() {
    this.btnId = 0;
    this.isLit = false;
  }

  ngOnInit(): void {}

  blockToggle(): void {
    let btnIds: Array<number> = [];

    this.colorChange();
    if (this.tileAbove(this.btnId) !== 0) {
      btnIds.push(this.tileAbove(this.btnId));
    }
    if (this.tileBelow(this.btnId) !== 0) {
      btnIds.push(this.tileBelow(this.btnId));
    }
    if (this.tileLeft(this.btnId) !== 0) {
      btnIds.push(this.tileLeft(this.btnId));
    }
    if (this.tileRight(this.btnId) !== 0) {
      btnIds.push(this.tileRight(this.btnId));
    }

    this.adjacentBtns.emit(btnIds);

    // console.log(btnIds);
  }

  private colorChange(): void {
    this.isLit = !this.isLit;
    if (this.isLit) {
      this.litStatus = 'isLit';
    } else {
      this.litStatus = 'isDim';
    }
  }

  private tileAbove(btnId: number): number {
    let btnAbove: number;
    btnAbove = btnId - 10;

    if (10 < btnAbove && btnAbove < 50) {
      return btnAbove;
    }
    return 0;
  }

  private tileBelow(btnId: number): number {
    let btnBelow: number;
    btnBelow = this.btnId + 10;

    if (10 < btnBelow && btnBelow < 50) {
      return btnBelow;
    }
    return 0;
  }

  private tileRight(btnId: number): number {
    let btnRight: number;
    let btnRow = Math.floor(btnId / 10);
    let maxLimit = btnRow * 10 + 5;

    btnRight = btnId + 1;
    if (btnRight < maxLimit) {
      return btnRight;
    }
    return 0;
  }

  private tileLeft(btnId: number): number {
    let btnLeft: number;
    let btnRow = Math.floor(btnId / 10);
    let maxLimit = btnRow * 10;

    btnLeft = btnId - 1;

    if (btnLeft > maxLimit) {
      return btnLeft;
    }
    return 0;
  }
}
