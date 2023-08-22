import { Component, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  gameList: any[] = [];

  gameFilter: string = 'new';
  interval: any;

  constructor(private service: ServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      this.refreshGame(data.game);
    });
    // this.refreshGame()
    this.interval = setInterval(() => {
      this.get_jackpot();
    }, 3000);
  }

  refreshGame(gameFilter: string) {
    this.service.getGameList().subscribe((Response: any) => {
      const games = [];
      for (const game of Response) {
        if (
          game.categories.indexOf(gameFilter) !== -1 ||
          (gameFilter === 'others' &&
            (game.categories.indexOf('ball') !== -1 ||
              game.categories.indexOf('virtual') !== -1 ||
              game.categories.indexOf('fun') !== -1))
        ) {
          // || gameFilter === 'others'
          games.push(game);
        }
      }
      this.gameList = games;
    });
  }

  get_jackpot() {
    this.service.jackPot().subscribe((data: any) => {
      for (const row of data) {
        const stor = this.gameList.find((x) => x.id === row.game);
        if (stor) {
          stor.amount = row.amount;
          console.log(stor);
        }
      }
    });
  }
}
