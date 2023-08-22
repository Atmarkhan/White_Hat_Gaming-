import { Component, ViewChildren } from '@angular/core';
import { GameListComponent } from './game-list/game-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'white Hat';
  gameFilter : string = 'new'

  
}

