import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import * as d3 from "d3";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private _http : HttpService) { }

  ngOnInit() {
    this.start()
  }

  getAllGames(){
    let obs = this._http.allGames()
    obs.subscribe((data) => {
    })
  }

  start(){
    d3.select('body')
      .append('p')
      .text('Hello world!')
  }

}
