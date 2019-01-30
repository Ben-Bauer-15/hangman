import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import * as d3 from "d3";


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  allGames;
  completionRates : Array<Object>
  wordLengths = []
  lengthsAndPercentages;
  percentages = []

  constructor(private _http : HttpService) { }

  ngOnInit() {

      this.getAllGames()
    }

    reset(){
      var barChart = d3.select(".barChartContainer").selectAll("*").remove()
      var pieChart = d3.select(".pieChartContainer").selectAll("*").remove()
      this.getAllGames()
    }
    
      
    getAllGames(){
      let obs = this._http.allGames()
      obs.subscribe((data : any) => {
        this.allGames = data.rawData
        
        this.completionRates = data.completionRates
        
        this.lengthsAndPercentages = data.averageLengths

        for (var i = 0; i < this.lengthsAndPercentages.length; i++){
          let obj : any = this.lengthsAndPercentages[i]

          this.percentages.push(obj.percentage)
        }
        for (var i = 0; i < this.completionRates.length; i++){
          var item : any = this.completionRates[i]
          var length = item.length
          
          this.wordLengths.push(length)
        }
        this.renderBarChart()
        this.renderPieChart()
        })
    }
    
    // 888b.    db    888b.    .d88b 8   8    db    888b. 88888 
    // 8wwwP   dPYb   8  .8    8P    8www8   dPYb   8  .8   8   
    // 8   b  dPwwYb  8wwK'    8b    8   8  dPwwYb  8wwK'   8   
    // 888P' dP    Yb 8  Yb    `Y88P 8   8 dP    Yb 8  Yb   8   

    renderBarChart(){

      var margin = {
        top : 30,
        right : 30,
        bottom : 40,
        left : 50
      }

      var animationDuration = 700
      var animationDelay = 70

      

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
      
      
      var canvas = d3.select('.barChartContainer').append('svg')
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
          .attr('height', '0')
          .attr('width', () => { return barWidth })
          .attr('fill', 'green')
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


      // 888b. 888 8888    .d88b 8   8    db    888b. 88888 
      // 8  .8  8  8www    8P    8www8   dPYb   8  .8   8   
      // 8wwP'  8  8       8b    8   8  dPwwYb  8wwK'   8   
      // 8     888 8888    `Y88P 8   8 dP    Yb 8  Yb   8   
    
    renderPieChart(){

      var r = 250

      var colorScale = d3.scaleLinear()
        .domain([d3.min(this.percentages), d3.max(this.percentages)])
        .range(['#63ffa4', '#007732'])

      var height = 500
      var width = 500


      var canvas = d3.select('.pieChartContainer').append('svg')
        .attr('width', width) 
        .attr('height', height)


      var hoverLabel = d3.select('.pieChartContainer').append('div')
        .style('position', 'absolute')
        .style('border-radius', '5px')
        .style('background', 'gray')
        .style('padding', '10px')
        .style('border', '1px solid black')
        .style('opacity', '0')
        

      var group = canvas.append('g')
        .attr('width', width)
        .attr('height', height)
        .attr('transform', 'translate(250, 250)')

      var arc = d3.arc()
        .innerRadius(r - 100)
        .outerRadius(r)
        .cornerRadius(5)
        .padAngle(0.01)

      var pie = d3.pie()
        .value(function(d) { 
          return d.percentage })
      
      var arcs = group.selectAll('.arc')
        .data(pie(this.lengthsAndPercentages))
        .enter()
          .append('g')
          .attr('class', 'arc')
        
      var paths = arcs.append('path')
        .attr('d', arc)
        .attr('fill', function(d) { return colorScale(d.data.percentage) })

        .on('mouseover', function(d){
        

          d3.selectAll('*').interrupt()

          d3.select(this)
            .transition()
              .attr('fill', 'lightblue')


          hoverLabel.transition()
            .style('opacity', '1')

          hoverLabel.html("Word length: " + d.data.length + " letters, " + d.data.percentage + "% of all games")
          
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px')
        
          
        })

        .on('mouseleave', function(){

          d3.selectAll('*').interrupt()

          d3.select(this)
            .attr('fill', function(d) { return colorScale(d.data.percentage) })

          hoverLabel.style('opacity', '0')

        })

      var text = arcs.append('text')
        .attr('transform', function(d) { return 'translate(' + arc.centroid(d) + ')' })
        .text(function(d) { 
          return d.data.length })


    }

}
