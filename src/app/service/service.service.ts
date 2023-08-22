import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getGameList() {
    return this.http.get('http://stage.whgstage.com/front-end-test/games.php');
  }
  jackPot () {
    return this.http.get('http://stage.whgstage.com/front-end-test/jackpots.php');
  }
}
