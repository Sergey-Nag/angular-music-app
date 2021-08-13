import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
