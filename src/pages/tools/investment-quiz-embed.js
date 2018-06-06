import React, { Component } from 'react';
import { select } from 'd3-selection'
import 'rc-slider/assets/index.css';
import styled from "styled-components";
import Link from 'gatsby-link';
import SlidingQuestion from '../../components/Controls/SlidingQuestion';


const BigButton = styled(Link)`
  display: block;
  background-color: orange;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 15px 20px;
  border-radius: 3px;
  margin-top: 15px;
  max-width: 230px;

  @media (max-width: 768px) {
    margin: 15px auto;
  }
`;

class App extends React.Component {

    constructor(props){
      super(props)
  
      this.state = {
          containerX: 0
      }
    }

    componentDidMount() {
    }
    componentWillUnmount() {    
    }
  
    onClick(xLocation)
    {    
        this.setState({
            containerX: xLocation
        });
      
        var containerDiv = select('#container');

        containerDiv
            .transition()
            .style("left", function() { return xLocation +  "px"; })
            .duration(500)
            .delay(0);

    }
  
    render(){
      
      return(
        <div>
            <div style={{display: 'block', backgroundColor: 'beige', margin: '20px auto', width: '500px', overflow: 'hidden'}}>
                <div id="container" style={{position: 'relative', display: 'block'}}>
                    <SlidingQuestion Text1="This is line 1" Text2="This is line 1" Width="500px" Next="true" Location={this.state.containerX} onClick={this.onClick.bind(this)} />
                    <SlidingQuestion Text1="This is line 2" Text2="This is line 2" Width="500px" Back="true" Next="true" Location={this.state.containerX} onClick={this.onClick.bind(this)} />
                    <SlidingQuestion Text1="This is line 3" Text2="This is line 3" Width="500px" Back="true" Next="true" Location={this.state.containerX} onClick={this.onClick.bind(this)} />
                    <SlidingQuestion Text1="This is line 4" Text2="This is line 4" Width="500px" Back="true" Location={this.state.containerX} onClick={this.onClick.bind(this)} />
                </div>
            </div>
        </div>
      );
    }
}

export default ({ data, scales, margins, svgDimensions }) => (
    <div>
        <App/>
    </div>
     
  );