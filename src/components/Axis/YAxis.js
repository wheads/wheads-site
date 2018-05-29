import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import * as d3Axis from 'd3-axis'
import { select } from 'd3-selection'

class YAxis extends Component {
    constructor(props){
        super(props)
        this.createYAxis = this.createYAxis.bind(this)

        this.years = [];
        this.currentYear = new Date().getFullYear();
        this.dataCount = 0;
        for(var i=10; i <= 50; i += 10)
        {
            this.years.push(this.currentYear + i)
        }

        this.yLabels = this.years;
        this.xTickCount = 50;
    }

    determineLabel(d, i)
    {
        if (d >= 1000000)
        {
            return (d / 1000000) + 'M';
        }
        else if(d >= 100000)
        {
            return (d / 1000) + 'K';
        }
        else
        {
            return Math.round(d).toLocaleString();
        }
        return 1;
        if(i == 0)
        {
            return d;
        }
        else
        {
            if(this.dataCount > 8)
            {
                if (i % 3 == 0)
                    return d;
                else
                    return '';
            }
            else
            {
                return d;
            }
        }
    }

    componentDidMount() {
        this.createYAxis()
    }
    componentDidUpdate() {
        this.createYAxis()
    }

    createYAxis() {       
        this.yLabels = this.props.yLabels;
        //this.dataCount = this.props.yLabels.length;

        // For Axis and Guides        
        //const yScaleLabel = scaleLinear()
        //    .domain([0, ])
        //    .range([this.props.margins.left, this.props.width - this.props.margins.right])

        const axisYLabel = d3Axis[`axisLeft`]()
            .scale(this.props.yScale)
            .tickSize(this.props.width - this.props.margins.left - this.props.margins.right)
            .tickFormat((d,i) => this.determineLabel(d, i))
            .tickPadding([5])
            //.ticks([5])
        
        select(this.axisElement).call(axisYLabel)
            .select('path').style('stroke','#cacaca').style('stroke-width','2px')
            .style('stroke-dasharray', '2,3')
        select(this.axisElement).call(axisYLabel)
            .selectAll('line').style('stroke','#cacaca').style('stroke-width','2px')
            .style('stroke-dasharray', '2,3')
        select(this.axisElement).call(axisYLabel)
            .selectAll('text').style("font", "14px tahoma")
   }
render() {
    
      const { yScale, width, height, margins, tickSize, yLabels } = this.props;

      return (
        <g className={`Axis Axis-Y`}
        ref={(el) => { this.axisElement = el; }}
        transform={`translate(${this.props.width - this.props.margins.right}, 0)`}
        />
      )
   }
}
export default YAxis