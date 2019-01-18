import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private _http : HttpService) { }

  ngOnInit() {
  }

  getAllGames(){
    let obs = this._http.allGames()
    obs.subscribe((data) => {
    })
  }

}
