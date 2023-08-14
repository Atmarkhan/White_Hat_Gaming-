import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  
  gameList: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getGameList().subscribe( (Response:any ) => {
      this.gameList = Response
    })
  }

}
