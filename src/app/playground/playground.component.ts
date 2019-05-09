import { Component, OnInit, HostListener } from '@angular/core';
import { Dragon } from '../dragon';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  dragon: Dragon;

  constructor() { }

  ngOnInit() {
    this.dragon = new Dragon();
    this.dragon.start();
    debugger;
  }

  @HostListener('document:keydown', ['$event'])
  move(e: KeyboardEvent): void {
    switch (e.keyCode) {
      case 37:
        this.dragon.turn('LEFT');
        break;
      case 38:
      this.dragon.turn('UP');
        break;
      case 39:
      this.dragon.turn('RIGHT');
        break;
      case 40:
      this.dragon.turn('DOWN');
        break;
    }
  }

}
