import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-games-block',
  templateUrl: './games-block.component.html',
  styleUrls: ['./games-block.component.css']
})
export class GamesBlockComponent implements OnInit{


  @Input('gameData') gameData: any;

  ribbon: string = '';

  ngOnInit(): void {
    for(const category of this.gameData.categories) {
      if(category === 'new' || category === 'top') {
        this.ribbon = category;
      }
    }
  }
}
