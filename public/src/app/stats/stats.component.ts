import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import * as d3 from "d3";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  allGames : Object
  completionRates : Array<Object>
  wordLengths = []


  constructor(private _http : HttpService) { }

  ngOnInit() {
    this.getAllGames()
  }

  getAllGames(){
    let obs = this._http.allGames()
    obs.subscribe((data : any) => {
      this.allGames = data.rawData
      this.completionRates = data.completionRates
      for (var i = 0; i < this.completionRates.length; i++){
        var item : any = this.completionRates[i]
        var length = item.length

        this.wordLengths.push(length)
      }
      console.log('possible lengths are ', this.wordLengths)
      console.log(this.completionRates)
      this.renderSVG()
      })
    }
    
    renderSVG(){

      var margin = {
        top : 30,
        right : 30,
        bottom : 40,
        left : 50
      }

      var height = 500 - margin.top - margin.bottom
      var width = 500 - margin.right - margin.left

      var padding = 5


      var barWidth = (( 1 / this.completionRates.length ) * width) - padding
  
      var vScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, height])

      var hScale = d3.scaleLinear()
        .domain([0, this.completionRates.length])
        .range([0, width])
      
      var hAxisScale = d3.scaleLinear()
        .domain([this.wordLengths[0], this.wordLengths[this.wordLengths.length - 1]])
        .range([0, width - (padding * this.wordLengths.length) - (barWidth / 2) + (padding * 2)])

      var vAxisScale = d3.scaleLinear()
        .domain([100, 0])
        .range([0, height])
      
      
      var canvas = d3.select('app-stats').append('svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .attr('style', 'background-color:black')


      var chart = canvas.selectAll('rect')
        .data(this.completionRates)
        .enter()
          .append('rect')
          .attr('height', function(d) { return vScale(d.completionRate) })
          .attr('width', () => { return barWidth })
          .attr('fill', 'green')
          .attr('y', function(d) { return height - vScale(d.completionRate) + margin.top })
          .attr('x', function(d, i) { return hScale(i) + padding + margin.left })
        
      
      var xAxis = d3.axisBottom()
        .scale(hAxisScale)
        .ticks(this.wordLengths.length)
        
      var yAxis = d3.axisLeft()
        .scale(vAxisScale)
        .ticks(10)

      var hGuide = canvas.append('g')
        .call(xAxis)
        .attr('transform', "translate(" + ((barWidth / 2) + padding + margin.left) +", " + (height + margin.top + 2) + ")")

      var vGuide = canvas.append('g')
        .call(yAxis)
        .attr('transform', 'translate('+ margin.left +', '+ margin.top +')')


      }

}
