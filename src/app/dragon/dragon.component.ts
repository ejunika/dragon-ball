import { Component, OnInit, Input } from '@angular/core';
import { Dragon } from '../dragon';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {

  @Input('dragon')
  dragon: Dragon;

  constructor() { }

  ngOnInit() {

  }

}
