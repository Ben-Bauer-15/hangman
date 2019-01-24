import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import * as d3 from "d3";
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  allGames : Object
  completionRates : Array<Object>
  wordLengths = []
  value : Number = 5
  options: Options = {
    floor: 3,
    ceil: 10
  };



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
      this.renderSVG()
      })
    }
    
    renderSVG(){

      var animationDuration = 700
      var animationDelay = 30

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
        .attr('transform', 'translate(40, 40)')
        .attr('width', width + margin.right + margin.left) 
        .attr('height', height + margin.top + margin.bottom)
      
      var xLabel = canvas.append('text')
        .text('Word Length')
        .attr('fill', 'white')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom + margin.top - 5)
      
      var yLabel = canvas.append('text')
        .text('Completion Rate (%)')
        .attr('fill', 'white')
        .attr('x', -1 * ((height / 2) - margin.bottom))
        .attr('y', margin.right - 12)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'end')

      
      var hoverLabel = d3.select('app-stats').append('div')
          .style('position', 'absolute')
          .style('border-radius', '5px')
          .style('background', 'gray')
          .style('padding', '10px')
          .style('border', '1px solid black')
          .style('opacity', '0')
          .html('hello world')


        

      var barChart = canvas.selectAll('rect')
        .data(this.completionRates)
        .enter()
          .append('rect')
          // .attr('height', function(d) { return vScale(d.completionRate) })
          .attr('height', '0')
          .attr('width', () => { return barWidth })
          .attr('fill', 'green')
          // .attr('y', function(d) { return height - vScale(d.completionRate) + margin.top })
          .attr('y', height + margin.top)
          .attr('x', function(d, i) { return hScale(i) + padding + margin.left })


        .on('mouseover', function(d) {

          d3.selectAll('*').interrupt()

          d3.select(this).transition()
            .attr('fill', 'lightgreen')
            
          hoverLabel.transition()
            .style('opacity', '1')

          hoverLabel.html(d.completionRate + " %")
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px')
          })

        .on('mouseleave', function(){

          d3.selectAll('*').interrupt()

          d3.select(this)
            .attr('fill', 'green')

          hoverLabel.transition()
            .style('opacity', '0')
          })

      barChart.transition()
          .attr('height', function(d){
            return vScale(d.completionRate)
          })

          .attr('y', function(d){
            return height - vScale(d.completionRate) + margin.top
          })

          .duration(animationDuration)
          .delay(function(d, i){
            return i * animationDelay
          })
          .ease(d3.easeElastic)
        



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
