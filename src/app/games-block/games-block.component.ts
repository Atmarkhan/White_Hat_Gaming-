import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-games-block',
  templateUrl: './games-block.component.html',
  styleUrls: ['./games-block.component.css']
})
export class GamesBlockComponent {

  @Input('gameData') gameData: any
}
