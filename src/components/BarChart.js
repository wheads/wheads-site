import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import * as d3Axis from 'd3-axis'
import { select } from 'd3-selection'
import { easeElastic } from 'd3-ease'
import XAxis from './Axis/XAxis'
import YAxis from './Axis/YAxis'

class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)

      this.xLabels = [0, 10, 20, 30, 40, 50, 60, 70, 80];
      this.xTickCount = 50;

      this.visible = 0;
   }

   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }

    margins = { top: 50, right: 20, bottom: 40, left: 60 }
    
    createBarChart() {        

        function showInfo(d, i)   
        {
        var currentYear = new Date().getFullYear() + i;
        var value = Math.round(d,0);

        tooltip.html(currentYear + ':   ' + value.toLocaleString())
            .style('font', '1rem tahoma')
            .style('left', (event.pageX - 80) + 'px')
            .style('top', (event.pageY - 90) + 'px')
        }
        
        var animateDuration = 1000;
        var animateDelay = 10;
        const node = this.node
        const dataMax = max(this.props.data.schedule.map(d => d.money)) + (max(this.props.data.schedule.map(d => d.money)) * 0.30)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.height])

        const xScale = scaleBand()
            .padding(0.1)
            .domain(this.props.data.schedule.map(d => d.money))            
            .range([0, this.props.width-this.margins.right-this.margins.left])

        select(node)
            .selectAll('rect')
            .data(this.props.data.schedule.map(d => d.money))
            .enter()
            .append('rect')
            .transition()
            .ease((d, i) => easeElastic(d, i))
            .duration(animateDuration)
            .delay(function(d, i){
                return i * animateDelay
            })
   
        select(node)
            .selectAll('rect')
            .data(this.props.data.schedule.map(d => d.money))
            .exit()
            .remove()
   
        var tooltip = select('body')
            .append('div')
            .attr('id','tooltip')
            .style('position','absolute')
            .style('background','#0a0a0a')
            .style('color','#f4f4f4')
            .style('border','1px #333 solid')
            .style('border-radius', '5px')
            .style('text-align','center')
            .style('font-weight','bold')
            .style('padding','20px 20px 20px 20px')
            .style('opacity','0')

        select(node)
            .selectAll('rect')
            .data(this.props.data.schedule.map(d => d.money))
            .style('fill', '#9bcb52')
            .style('cursor','pointer')
            .attr('x', (d,i) => xScale(d))
            .attr('width', xScale.bandwidth())
            .transition()
            .attr('height', d => yScale(d))
            .attr('y', d => (this.props.height - this.margins.bottom) - yScale(d))
            .ease((d, i) => easeElastic(d, i))
            .duration(animateDuration)
            .delay(function(d, i){
                return i * animateDelay
            })

        select(node)
            .selectAll('rect')
            .data(this.props.data.schedule.map(d => d.money))
            .on('mouseover', function(d, i){

                tooltip.transition()
                   .style('opacity', 1)
                
                showInfo(d, i);

                select(this).style('fill', '#0073b9')
                this.visible = 1;
            })
            .on('mousemove', function(d, i){                
                var elem1 = document.getElementById("tooltip");
                var style = window.getComputedStyle(elem1, null);
                if(this.visible == 1)
                {   
                    showInfo(d, i);
                }
            })
            .on('mouseout', function(d){
                tooltip.transition()
                    .style('opacity', 0)
                
                select(this).style('fill', '#9bcb52')
                this.visible = 0;
            })

   }
render() {       

    const { barsize, width, height } = this.props;
    var dataMax = max(this.props.data.schedule.map(d => d.money)) + (max(this.props.data.schedule.map(d => d.money)) * 0.20)
    const hScale = scaleLinear()
      .domain([0, dataMax])
      .range([this.props.height - this.margins.bottom, 0])

      return <svg id="test" width={this.props.width} height={this.props.height} >  
        
        <XAxis width={this.props.width} height={this.props.height} tickSize={5} xLabels={this.props.data.schedule.map(d => d.year)} margins={this.margins} />
        <YAxis yScale={hScale} width={this.props.width} height={this.props.height} tickSize={5} 
        xLabels={this.props.data.schedule.map(d => d.money)} margins={this.margins} />
        <g ref={node => this.node = node} transform={`translate(${this.margins.left}, 0)`} />
        }
      </svg>
   }
}
export default BarChart