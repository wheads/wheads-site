import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import * as d3Axis from 'd3-axis'
import { select } from 'd3-selection'

class XAxis extends Component {
    constructor(props){
        super(props)
        this.createXAxis = this.createXAxis.bind(this)

        this.years = [];
        this.currentYear = new Date().getFullYear();
        this.dataCount = 0;
        for(var i=10; i <= 50; i += 10)
        {
            this.years.push(this.currentYear + i)
        }

        this.xLabels = this.years;
        this.xTickCount = 50;
    }

    determineLabel(d, i)
    {
        var w = window.innerWidth;
        var mod = (w < 400) ? 5 : 3;
        if(i == 0)
        {
            return d;
        }
        else
        {
            if(this.dataCount > 8)
            {
                if (i % mod == 0)
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

    //getYearLabels(data)
    //{
    //    var years = [];
    //    var currentYear = new Date().getFullYear();
    //    this.xLabels = data;     
    //}

    componentDidMount() {
        this.createXAxis()
    }
    componentDidUpdate() {
        this.createXAxis()
    }

    createXAxis() {       
        this.xLabels = this.props.xLabels;
        this.dataCount = this.props.xLabels.length;

        // For Axis and Guides        
        const xScaleLabel = scaleBand()
            .padding(0.5)
            .domain(this.xLabels)
            .range([this.props.margins.left, this.props.width - this.props.margins.right])

        const axisXLabel = d3Axis[`axisBottom`]()
            .scale(xScaleLabel)
            .tickSize(-(this.props.height-this.props.margins.top))
            .tickFormat((d,i) => this.determineLabel(d, i))
            .tickPadding([5])
        
        select(this.axisElement).call(axisXLabel)
            .select('path').style('stroke','#cacaca').style('stroke-width','2px')
            .style('stroke-dasharray', '2,3')
        select(this.axisElement).call(axisXLabel)
            .selectAll('line').style('stroke','#cacaca').style('stroke-width','2px')
            .style('stroke-dasharray', '2,3')
        select(this.axisElement).call(axisXLabel)
            .selectAll('text').style("font", "calc(0.1vw + 1vh + .5vmin) tahoma")
   }
render() {
    
      const { width, height, margins, tickSize, xLabels } = this.props;

      return (
        <g className={`Axis Axis-X`}
        ref={(el) => { this.axisElement = el; }}
        transform={`translate(0, ${this.props.height - this.props.margins.bottom})`}
        />
      )
   }
}
export default XAxis