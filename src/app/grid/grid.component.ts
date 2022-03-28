import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  @Input()
  blocksPerRow: number;

  @Input()
  surroundingBtns: Array<number>;

  constructor() {
    this.blocksPerRow = 5;
    this.surroundingBtns = [];
  }

  ngOnInit(): void {
    // this.createRow(this.blocksPerRow);
  }

  buttonHandler(button: number, adjacentBtns: Array<number>): Array<number> {
    for (let btn of adjacentBtns) {
      console.log(btn);
    }
    this.changeButtons(button, adjacentBtns);
    return (this.surroundingBtns = adjacentBtns);
  }

  changeButtons(btnId: number, buttons: Array<number>): void {
    for (let btn of buttons) {
      if (buttons.find((b) => b == btnId)) {
        console.log('changeButtons() : ' + btnId);
      }
    }
  }
}
